import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
    id: 'pokemon',
    state: () => ({
        pokemonDetail: {} // Objek state harus dikelilingi oleh tanda kurung kurawal.
    }),
    actions: {
        async getPokemonDetail(name) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const result = await response.json()

            this.pokemonDetail = result
        }
    }
})