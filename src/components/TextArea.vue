<template>
  <textarea></textarea>
</template>

<script>
  export default {}
</script>

<style scoped>
  textarea {
    outline: none;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    border-radius: 3px;
    padding: .5rem;
    font-size: 1rem;
    width: 100%;
    margin: .5rem 0;
    min-height: 150px;
    resize: none;
    color: #333030;
  }

  textarea.control-halt {
    width: 48%;
  }
</style>

