<script setup>
import { computed, toRefs, watch } from 'vue';
import { useCounterStore } from '../stores/counter';
import { usePokemonStore } from '../stores/pokemon';

const counterStore = useCounterStore();
const pokemon = toRefs(usePokemonStore());

const counter = computed(() => counterStore.count);
const countMultiply = computed(() => counterStore.getMultiply);
const getDividedBy = computed(() => counterStore.getDividedBy(2));

const pokemonDetail = computed(() => pokemon.pokemonDetail);

watch(pokemonDetail, () => {
  console.log(pokemonDetail.value);
})
</script>

<template>
  <h2>This Header</h2>
  <h4>State: {{ counter }}</h4>
  <h4>Getter: {{ countMultiply }}</h4>
  <h4>Getter Passing Params: {{ getDividedBy }}</h4>
  <br>
  <pre>Pokemon: {{ pokemonDetail }}</pre>
</template>