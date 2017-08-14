<template>
  <div class="modal" :class="{ 'modal-visible': visible }" @click="close">
    <div class="modal-container" @click.stop>
      <header class="modal-header">
        <h4 class="modal-title" v-if="title" v-text="title"></h4>
        <button class="close" @click.prevent="close">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
        </button>
      </header>
      <main class="modal-body">
        <slot></slot>
      </main>
      <footer class="modal-footer">
        <slot class="modal-footer" name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['visible', 'title'],
    mounted() {
      document.addEventListener('keydown', (event) => {
        if (this.visible && event.keyCode === 27) {
          this.close();
        }
      });
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 200ms ease-in-out;
  }

  .modal-visible {
    opacity: 1;
    pointer-events: auto;
  }

  .modal-visible .modal-container {
    transform: translateY(0);
  }

  .modal-container {
    background: #FFF;
    width: 98%;
    max-width: 500px;
    border-radius: 2px;
    color: #333030;
    transform: translateY(-100%);
    transition: transform 200ms ease-in-out;
  }

  .modal-header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .modal-title {
    font-size: 1.1rem;
    flex: 1;
  }

  .close {
    border: none;
    outline: none;
    border: none;
    background: transparent;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.3rem;
  }

  .close svg path {
    fill: #d6d6d6;
  }

  .modal-body {
    padding: 1rem;
  }

  .modal-footer {
    padding: 1rem;
  }
</style>
