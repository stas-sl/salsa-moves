<script setup>
import { ref, h, Fragment } from "vue"
import { VChip } from "vuetify/components"

const filesToDisplay = ref([])
const videoCount = ref(20)
const isDialogOpen = ref(false)
const dialogActivator = ref(null)
const dialogMove = ref('')
const config = useRuntimeConfig()

const { uid, moves, movesState, movesCounts,
  userSettings, updateMoveState } = useStore()

function reloadVideos() {
  filesToDisplay.value = [...moves.value].sort(() => 0.5 - Math.random()).slice(0, videoCount.value)
}

function reloadAll() {
  filesToDisplay.value = moves.value
}

function splitByMoves(s) {
  const r = /(?<=\b)s\d{3}[a-z]?(?=\b)/g;

  let lastIndex = 0;
  const parts = [];
  let match;

  while ((match = r.exec(s)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        text: s.slice(lastIndex, match.index),
        isMatch: false,
      });
    }

    parts.push({
      text: match[0],
      isMatch: true,
    });

    lastIndex = r.lastIndex;
  }

  if (lastIndex < s.length) {
    parts.push({
      text: s.slice(lastIndex),
      isMatch: false,
    });
  }

  return parts;
}

function renderMoveRefs(s) {
  return h(Fragment, null, splitByMoves(s).map((x) => {
    if (x.isMatch) {
      return h(VChip, {
        size: 'default', variant: 'flat', link: true, class: 'mx-1 mb-1', density: 'compact',
        onClick: (e) => {
          dialogActivator.value = e.target
          isDialogOpen.value = true
          dialogMove.value = x.text
        }
      },
        () => x.text)
    } else {
      return x.text == ',' ? "" : x.text;
    }
  }))
}

reloadAll()

</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>

        <v-row>
          <v-col class="v-col-auto mx-auto pb-0">
            <h1>Salsa moves</h1>
            <p class="text-center">
              Total: {{ movesCounts.total }}<br>
              New: {{ movesCounts.new }}<br>
              Learning: {{ movesCounts.learning }}<br>
              Review: {{ movesCounts.review }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-auto mx-auto">
            <v-card variant="outlined">
              <v-card-title>
                Practice
              </v-card-title>
              <v-card-item>
                <div class="pb-3">
                  <label>State</label>
                  <v-chip-group variant="flat" multiple mandatory column v-model="userSettings.practiceOptions.states"
                    @update:modelValue="updateMoveState([{ key: `settings`, value: userSettings }])">
                    <!-- @update:modelValue="updateMoveState([{ key: `settings`, value: _merge(userSettings, { practiceOptions: { states: $event } }) }]); console.log(userSettings)"> -->
                    <v-chip color="primary" value="new" density="compact" filter>
                      new({{ movesCounts.new }})
                    </v-chip>
                    <v-chip color="deep-purple-lighten-1" value="learning" density="compact" filter>
                      learning({{ movesCounts.learning }})
                    </v-chip>
                    <v-chip color="success" value="review" density="compact" filter>
                      review({{ movesCounts.review }})
                    </v-chip>
                  </v-chip-group>
                </div>
                <div class="pb-3">
                  <label>Method</label>
                  <v-radio-group inline v-model="userSettings.practiceOptions.method"
                    @update:modelValue="updateMoveState([{ key: `settings`, value: userSettings }])" color="white"
                    :hide-details="true" density="comfortable">
                    <v-radio label="Thompson Sampling" value="thompson"></v-radio>
                    <v-radio label="Random" value="random"></v-radio>
                  </v-radio-group>
                </div>
                <div class="pb-3">
                  <div v-if="userSettings.practiceOptions.method === 'thompson'">
                    <label>Thompson Sampling Temperature</label>
                    <div class="d-flex">
                      <v-slider v-model="userSettings.practiceOptions.thompsonTemperature"
                        @end="updateMoveState([{ key: `settings`, value: userSettings }])" min="0" max="1"
                        step="0.01"></v-slider><span style="width: 35pt;" class="text-center">{{
                          userSettings.practiceOptions.thompsonTemperature.toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              </v-card-item>
              <v-card-actions class="justify-center">
                <v-btn to="/practice" color="primary" variant="flat">Go</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-2 v-col-12 v-col-sm-6 v-col-md-4 v-col-lg-3 v-col-xl-2" v-for="file in filesToDisplay"
            :key="file.sha">
            <v-card variant="flat" class="pa-0 ma-0">
              <v-card-title class="text-h5 text-center" :id="file.move">
                {{ file.move }}
              </v-card-title>
              <my-lazy class="video-card">
                <!-- <video :src="`${config.public.mediaUrl}${file.name}`" loop controls autoplay playsinline/> -->
                <video-player :src="`${config.public.mediaUrl}${file.name}`" loop controls autoplay="muted" responsive
                  :playbackRate="1" :enableSmoothSeeking="true" fill playsinline
                  @ready="$event.target.player.userActive(false);" />
              </my-lazy>
              <v-card-text v-if="file.description">
                <my-lazy>
                  <p v-if="file.description?.text" v-html="file.description?.text"></p>
                  <p v-if="file.description?.related">
                    <span class="text-subtitle-1">Related:</span>
                    <span class="ml-1">
                      <component :is="renderMoveRefs(file.description?.related)" />
                    </span>
                  </p>
                </my-lazy>
              </v-card-text>

              <v-card-actions>
                <my-lazy>
                  <div>
                    <v-menu location="right center" transition="slide-x-transition" :offset="6">
                      <template v-slot:activator="{ props }">
                        <v-chip v-bind="props"
                          :color="{ new: 'primary', undefined: 'primary', learning: 'deep-purple-lighten-1', review: 'success' }[movesState[`move-${file.move}`]?.state]"
                          variant="flat" density="compact">
                          {{ movesState[`move-${file.move}`]?.state || "new" }}
                        </v-chip>
                      </template>

                      <v-card>
                        <v-chip-group variant="flat"
                          @update:modelValue="updateMoveState([{ key: `move-${file.move}`, value: { state: $event } }])">
                          <v-chip class="bg-primary" value="new" density="compact">
                            new
                          </v-chip>
                          <v-chip class="bg-deep-purple-lighten-1" value="learning" density="compact">
                            learning
                          </v-chip>
                          <v-chip class="bg-success" value="review" density="compact">
                            review
                          </v-chip>
                        </v-chip-group>
                      </v-card>
                    </v-menu>
                  </div>
                </my-lazy>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="isDialogOpen" :activator="dialogActivator" height="100%">
        <v-card variant="flat" class="pa-0 ma-0 fill-height d-flex flex-column w-100">
          <v-card-title class="text-h5 text-center">
            {{ dialogMove }}
          </v-card-title>
          <v-card-item class="pa-0 flex-grow-1 video-card-item">
            <!-- <div style="width: 100%; height: 100%;"> -->
            <video-player :src="`${config.public.mediaUrl}${dialogMove}.mp4`" loop controls autoplay="muted" responsive
              :playbackRate="1" :enableSmoothSeeking="true" fill playsinline
              @ready="$event.target.player.userActive(false)" />
            <!-- </div> -->
          </v-card-item>
          <v-card-actions class="justify-center">
            <v-btn color="primary" variant="flat" @click="isDialogOpen = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<style scoped>
.video-card {
  aspect-ratio: 1;
}
</style>
