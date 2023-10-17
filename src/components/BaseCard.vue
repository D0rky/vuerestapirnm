<!-- eslint-disable prettier/prettier -->
<script setup>
const props = defineProps({
  character: {
    type: Object,
    default: () => ({
      _id: -1,
      name: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
      status: 'Unknown',
      species: 'Unknown',
    }),
  },
})
</script>

<template>
  <RouterLink
    :to="`/character/${props.character._id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img
      class="w-full rounded-t-lg object-cover"
      :src="props.character.image"
    />
    <div class="p-4">
      <h2 class="text-1xl font-semibold text-gray-800">
        {{ props.character.name }}
      </h2>
      <p class="text-sm text-gray-600">Status: {{ props.character.status }}</p>
      <p class="text-sm text-gray-600">
        Species: {{ props.character.species }}
      </p>
    </div>
  </RouterLink>
</template>
