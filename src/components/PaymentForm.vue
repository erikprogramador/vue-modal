<template>
  <div>
    <mbx-input type="email" name="email" id="email" placeholder="Email" required></mbx-input>
    <div class="flex-between">
      <mbx-input type="text" class="control-halt" name="card" id="card" placeholder="4242 4242 4242 4242" required></mbx-input>
      <div class="flex-between w-halt">
        <mbx-input type="text" class="control-halt" name="expiration" id="expiration" placeholder="MM/YY" required></mbx-input>
        <mbx-input type="text" class="control-halt" name="ccv" id="ccv" placeholder="CCV" required></mbx-input>
      </div>
    </div>

    <div class="mt-1">
      <p class="flex-between muted"><strong>Order total:</strong> $ 30,00</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
