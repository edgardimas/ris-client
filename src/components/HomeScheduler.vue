<template>
  <div class="scheduler">
    <label for="ice-cream-choice">Choose a flavor:</label>
    <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

    <datalist id="ice-cream-flavors">
      <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
    </datalist>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iceCream: '',
      options: ['Chocolate', 'Coconut', 'Mint', 'Strawberry', 'Vanilla']
    }
  }
}
</script>

<style scoped></style>
