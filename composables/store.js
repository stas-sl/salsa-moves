import files from '~/static/files.json'
import descriptions from '~/static/descriptions.json'

export const useStore = () => {
  const moves = useState('moves')
  const movesState = useState('movesState')
  const config = useRuntimeConfig()
  const uid = useState('uid', () => {
    if (!localStorage.getItem("uid")) {
      if (crypto?.randomUUID) {
        localStorage.setItem("uid", crypto.randomUUID());
      }
    }
    return localStorage.getItem("uid");
  })
  const movesCounts = computed(() => {
    return {
      total: moves.value.length,
      new: moves.value.filter(x => movesState.value[`move-${x.move}`]?.state == 'new' || movesState.value[`move-${x.move}`]?.state === undefined).length,
      learning: moves.value.filter(x => movesState.value[`move-${x.move}`]?.state == 'learning').length,
      review: moves.value.filter(x => movesState.value[`move-${x.move}`]?.state == 'review').length
    }
  })
  const userSettings = computed(
    () => movesState.value.settings
  )

  const loadMoves = async () => {
    moves.value = files.map((f) => ({
      ...f,
      move: f.name.replace(/\.[^/.]+$/, ''),
      description: descriptions[f.name.replace(/\.[^/.]+$/, '')]
    }))
  }

  const loadMovesState = async () => {
    let { data } = await $fetch(`${config.public.storeUrl}load?uid=${uid.value}`)
    movesState.value = _fromPairs(data.map(({ key, value }) => [key, JSON.parse(value)]))
    if (!movesState.value?.settings?.practiceOptions) {
      _set(movesState.value, 'settings.practiceOptions',
        {
          'states': ['learning', 'review'],
          'method': 'thompson',
          'thompsonTemperature': 0.9
        })
    }
    const defaults = {
      'state': 'new',
      'seenCount': 0,
      'goodCount': 0,
      'hardCount': 0,
      'alpha': 1, // good
      'beta': 10  // hard
    }
    for (const m of moves.value) {
      const key = `move-${m.move}`
      movesState.value[key] = _defaults((movesState.value[key] || {}), defaults)
    }
  }

  const updateMoveState = async (moves) => {
    moves = moves.map((x) => ({ uid: uid.value, key: x.key, value: _merge(movesState.value[x.key] || {}, x.value) }))
    const res = await $fetch(`${config.public.storeUrl}save`,
      { method: 'POST', body: moves })
    for (const m of moves) {
      movesState.value[m.key] = m.value
    }
    return res
  }

  return {
    uid, moves, movesState, movesCounts, userSettings,
    loadMoves, loadMovesState, updateMoveState
  }
}