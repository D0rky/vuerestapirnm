<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import useCharacters from '@/composables/useCharacters'

const route = useRoute()
const { fetchCharacter, currentCharacter } = useCharacters()

onMounted(async () => {
  await fetchCharacter(route.params.id)
})

onUnmounted(() => {
  currentCharacter.value = null
})
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700 py-8 text-white"
  >
    <div v-if="currentCharacter" class="flex flex-col items-center gap-6">
      <!-- Character's Image -->
      <img
        :src="currentCharacter.image"
        :alt="currentCharacter.name"
        class="h-40 w-40 rounded-full shadow-lg"
      />

      <div class="text-center">
        <!-- Character's Name, ID, and Species -->
        <h1 class="text-4xl font-bold">{{ currentCharacter.name }}</h1>
        <p class="text-white-600 text-xl">ID: {{ currentCharacter.id }}</p>
        <p class="text-white-600 text-xl">
          Species: {{ currentCharacter.species }}
        </p>
      </div>

      <!-- Character's Status and Gender -->
      <div class="rounded-lg bg-white p-4 shadow-lg">
        <p class="text-lg text-gray-600">
          Status: {{ currentCharacter.status }}
        </p>
        <p class="text-lg text-gray-600">
          Gender: {{ currentCharacter.gender }}
        </p>
      </div>

      <!-- Character's Origin and Last Known Location -->
      <div class="rounded-lg bg-white p-4 shadow-lg">
        <p class="text-lg text-gray-600">
          Origin: {{ currentCharacter.origin.name }}
        </p>
        <p class="text-lg text-gray-600">
          Last Known Location: {{ currentCharacter.location.name }}
        </p>
      </div>

      <!-- Character's Episodes -->
      <div class="rounded-lg bg-white p-4 shadow-lg">
        <p class="text-lg text-gray-600">Episodes:</p>
        <ul class="list-disc pl-4">
          <li v-for="episodeUrl in currentCharacter.episode" :key="episodeUrl">
            <a :href="episodeUrl" target="_blank" class="text-blue-600">{{
              episodeUrl
            }}</a>
          </li>
        </ul>
      </div>

      <!-- Character's Details and Created Time -->
      <div class="mt-4 text-center">
        <p class="text-lg">
          Character Details:
          <a
            :href="currentCharacter.url"
            target="_blank"
            class="text-blue-600"
            >{{ currentCharacter.url }}</a
          >
        </p>
        <p class="text-lg text-gray-600">
          Created: {{ currentCharacter.created }}
        </p>
      </div>
    </div>
  </main>
</template>
