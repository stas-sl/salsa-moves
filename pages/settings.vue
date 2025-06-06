<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-card-title>Settings</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="uid"
          label="User ID"
          outlined
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveUid">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const uid = ref('')

onMounted(() => {
  uid.value = localStorage.getItem('uid') || ''
})

function saveUid() {
  localStorage.setItem('uid', uid.value)
}
</script>

<style scoped>
</style>