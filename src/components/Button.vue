<template>
  <button><slot></slot></button>
</template>

<script>
  export default {}
</script>

<style scoped>
  button {
    border: none;
    outline: none;
    background: #FFF;
    padding: .5rem 1.2rem;
    border-radius: 2px;
    color: rgba(0, 0, 0, .7);
    font-size: 1rem;
    font-weight: 100;
    cursor: pointer;
    user-select: none;
    border: 1px solid rgba(0, 0, 0, .3);
  }

  button.btn-lg {
    font-size: 1.2rem;
    padding: .7rem 1.5rem;
  }

  button.btn-primary {
    background: #30A9DE;
    color: #FFF;
    border: 1px solid #30A9DE;
  }

  button.btn-shadow {
    box-shadow: 0 2px 8px rgba(0,0,0,.5);
  }

  button.btn-primary:hover {
    background: #41B8EF;
    border: 1px solid #41B8EF;
  }
</style>

