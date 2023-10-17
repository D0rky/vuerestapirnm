/* eslint-disable prettier/prettier */
import { ref } from 'vue'
import useApi from '@/composables/useApi'

const characters = ref([])
const currentCharacter = ref(null)
const firstLoad = ref(true)

const api = useApi()
const page = ref(1)

const useCharacters = () => {
  const fetchCharacters = async () => {
    const { data } = await api.instance.get('/character', {
      params: {
        page: page.value,
      },
    })

    characters.value.push(
      ...data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
        }
      }),
    )

    page.value++
  }

  const fetchCharacter = async (id) => {
    const { data } = await api.instance.get(`/character/${id}`)
    currentCharacter.value = data
    console.log(data)
  }

  return {
    characters,
    fetchCharacters,
    fetchCharacter,
    currentCharacter,
    firstLoad,
  }
}

export default useCharacters
