<template>
  <div>
    <div class="flex-between">
      <mbx-input type="text" class="control-halt" name="name" id="name" placeholder="Name (required)" required></mbx-input>
      <mbx-input type="email" class="control-halt" name="email" id="email" placeholder="Email (required)" required></mbx-input>
    </div>
    <mbx-input type="text" name="subject" id="subject" placeholder="Subject (required)" required></mbx-input>
    <mbx-text-area name="message" id="message" placeholder="Message (required)" required></mbx-text-area>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
