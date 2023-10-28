<script setup>
import { useCounterStore } from '../stores/counter';
import { usePokemonStore } from '../stores/pokemon';

const counter = useCounterStore();
const pokemon = usePokemonStore();

/**
 * * Methods
 */
const increment = () => {
  counter.$patch((state) => {
    state.count++;
  });
}

const decrement = () => {
  counter.$patch((state) => {
    state.count--;
  });
}

const incrementActionBy = (val) => {
  counter.incrementBy(val);
}

const reset = () => {
  counter.$reset();
  pokemon.$reset();
}

const fetchPokemon = (name) => {
  pokemon.getPokemonDetail(name);
}
</script>

<template>
  <h2>This Footer</h2>

  <div>
    <button @click="increment" class="button">Increment +</button>
    <button @click="decrement" class="button">Decrement -</button>
    <button @click="incrementActionBy(5)" class="button">Increment By 5</button>
  </div>
  <br>
  <button @click="reset" class="button">Reset State</button>
  <br><br>
  <button @click="fetchPokemon('ditto')" class="button">Fetch Pokemon Data</button>

</template>