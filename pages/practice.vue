<script setup>
import { useMagicKeys, whenever, onKeyStroke } from '@vueuse/core'
import { randomBeta, randomInt } from 'd3-random';

const { uid, moves, movesState, movesCounts,
  userSettings, updateMoveState } = useStore()

const config = useRuntimeConfig()
const currentMove = ref(null)
const answerVisible = ref(false)
const selectRandomMove = () => {
  answerVisible.value = false
  player?.value?.$el?.player?.pause()
  const candidateMoves = moves.value.filter(x =>
    userSettings.value.practiceOptions.states.includes(movesState.value[`move-${x.move}`]?.state || 'new'))
  if (userSettings.value.practiceOptions.method === 'random') {
    currentMove.value = candidateMoves[randomInt(candidateMoves.length)()]
  } else if (userSettings.value.practiceOptions.method === 'thompson') {
    let minP = 1, minMove;
    for (const m of candidateMoves) {
      let a = movesState.value[`move-${m.move}`].alpha
      let b = movesState.value[`move-${m.move}`].beta
      const t = userSettings.value.practiceOptions.thompsonTemperature
      a = (1 - t) + t * a
      b = (1 - t) + t * b
      const p = randomBeta(a, b)()
      if (p < minP) {
        minP = p
        minMove = m
      }
    }
    currentMove.value = minMove
  }
}

const decay = 0.95
const processAnswer = async (result) => {
  const key = `move-${currentMove.value?.move}`
  const prev = movesState.value[key]
  await updateMoveState([
    {
      key: key, value: {
        lastSeen: new Date().toISOString(),
        seenCount: prev.seenCount + 1,
        hardCount: prev.hardCount + (result === 'hard' ? 1 : 0),
        goodCount: prev.goodCount + (result === 'good' ? 1 : 0),
        alpha: decay * prev.alpha + (result === 'good' ? 1 : 0),
        beta: decay * prev.beta + (result === 'hard' ? 1 : 0),
      }
    }
  ])
  selectRandomMove()
}

let isSeeking = false;

const { space } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.code === 'Space' && e.type === 'keydown')
      e.preventDefault()
  },
})

const { comma, period, keyP, digit1, digit2, digit3 } = useMagicKeys()

function waitForSeeked() {
  return new Promise((resolve) => {
    player.value.$el.player.one('seeked', () => {
      resolve();
    });
  });
}

whenever(space, () => {
  if (answerVisible.value) {
    processAnswer('good')
  } else {
    answerVisible.value = true
    player?.value?.$el?.player?.play()
  }
})

whenever(keyP, () => {
  if (answerVisible.value) {
    const p = player.value.$el.player
    if (p.paused())
      p.play()
    else
      p.pause()
  }
})

whenever(digit1, () => {
  if (answerVisible.value) {
    processAnswer('hard')
  }
})
whenever(digit2, () => {
  if (answerVisible.value) {
    processAnswer('good')
  }
})

onKeyStroke(',', async () => {
  if (answerVisible.value && !isSeeking) {
    isSeeking = true
    const p = player.value.$el.player
    p.pause()
    p.currentTime(p.currentTime() - 1 / 30)
    await waitForSeeked();
    isSeeking = false
  }
})

onKeyStroke('.', async () => {
  if (answerVisible.value && !isSeeking) {
    isSeeking = true
    const p = player.value.$el.player
    p.pause()
    p.currentTime(p.currentTime() + 1 / 30)
    await waitForSeeked();
    isSeeking = false
  }
})

onBeforeMount(() => {
  selectRandomMove()
})

const player = useTemplateRef('player')

</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <NuxtLink to="/"><v-icon color="white" icon="mdi-arrow-left"></v-icon></NuxtLink>
      <v-app-bar-title>Practice</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0 fill-height">
        <v-card class="fill-height d-flex flex-column w-100">
          <v-card-title class="pa-0 text-h2 text-center">{{ currentMove?.move }}
          </v-card-title>
          <v-card-item class="pa-0 flex-grow-1 video-card-item">
            <video-player :src="`${config.public.mediaUrl}${currentMove?.name}`" :playbackRate="1"
              :enableSmoothSeeking="true" playsinline fill loop muted preload="auto" responsive ref="player"
              @loadedmetadata="$event.target.player.userActive(false); $event.target.player.controls(true);"
              v-show="answerVisible" />
          </v-card-item>
          <v-card-actions class="justify-center pa-0">
            <span v-if="answerVisible">
              <v-icon color="white" icon="mdi-eye" size="small" class="mr-1"></v-icon>{{
                movesState[`move-${currentMove?.move}`]?.seenCount }}
              <v-icon color="white" icon="mdi-thumb-up" size="small" class="mr-1 ml-2"></v-icon>{{
                movesState[`move-${currentMove?.move}`]?.goodCount }}
              <v-icon color="white" icon="mdi-thumb-down" size="small" class="mr-1 ml-2"></v-icon>{{
                movesState[`move-${currentMove?.move}`]?.hardCount }}
              <span class="mr-1 ml-2 text-h6">μ</span>{{
                (movesState[`move-${currentMove?.move}`]?.alpha / (movesState[`move-${currentMove?.move}`]?.alpha +
                  movesState[`move-${currentMove?.move}`]?.beta)).toFixed(2) }}
            </span>
            <v-btn @click="answerVisible = true; player?.$el?.player?.play()" color="primary" class="my-2"
              v-if="!answerVisible" variant="flat">Show
              answer<span v-if="$device.isDesktop">&nbsp;(space)</span></v-btn>
            <v-menu location="top center" transition="slide-y-transition" :offset="2" v-if="answerVisible">
              <template v-slot:activator="{ props }">
                <v-chip v-bind="props"
                  :color="{ new: 'primary', undefined: 'primary', learning: 'deep-purple-lighten-1', review: 'success' }[movesState[`move-${currentMove?.move}`]?.state]"
                  variant="flat" density="compact">
                  {{ movesState[`move-${currentMove?.move}`]?.state || "new" }}
                </v-chip>
              </template>

              <v-card style="background-color: rgba(var(--v-theme-surface), 0.8)">
                <v-chip-group variant="flat" direction="vertical"
                  @update:modelValue="updateMoveState([{ key: `move-${currentMove?.move}`, value: { state: $event } }])">
                  <v-chip class="bg-primary mx-2" value="new" density="compact">
                    new (1)
                  </v-chip>
                  <v-chip class="bg-deep-purple-lighten-1 mx-2" value="learning" density="compact">
                    learning (2)
                  </v-chip>
                  <v-chip class="bg-success mx-2" value="review" density="compact">
                    review (3)
                  </v-chip>
                </v-chip-group>
              </v-card>

            </v-menu>

            <v-btn @click="processAnswer('hard')" color="error" class="my-2" prepend-icon="mdi-thumb-down"
              v-if="answerVisible" variant="flat">Hard<span v-if="$device.isDesktop">&nbsp;(1)</span></v-btn>
            <v-btn @click="processAnswer('good')" color="success" class="my-2" prepend-icon="mdi-thumb-up"
              v-if="answerVisible" variant="flat">Good<span v-if="$device.isDesktop">&nbsp;(2)</span></v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>