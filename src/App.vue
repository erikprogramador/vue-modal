<template>
  <div id="app">
    <mbx-button class="m-1 btn-shadow btn-primary btn-lg" @click.native.prevent="contactModal = true">Contact</mbx-button>
    <mbx-button class="m-1 btn-shadow btn-primary btn-lg" @click.native.prevent="paymentModal = true">Payments</mbx-button>

    <mbx-modal title="Contact Us" :visible="contactModal" @close="contactModal = false">
      <contact-form></contact-form>
      <div class="flex-end" slot="footer">
        <mbx-button class="mr-1">Cancel</mbx-button>
        <mbx-button class="btn-primary">Send</mbx-button>
      </div>
    </mbx-modal>

    <mbx-modal title="Pay Us" :visible="paymentModal" @close="paymentModal = false">
      <payment-form></payment-form>
      <div class="flex-end" slot="footer">
        <mbx-button class="mr-1">Cancel</mbx-button>
        <mbx-button class="btn-primary">Pay</mbx-button>
      </div>
    </mbx-modal>
  </div>
</template>

<script>
  import ContactForm from './components/ContactForm.vue';
  import PaymentForm from './components/PaymentForm.vue';
  export default {
    components: { ContactForm, PaymentForm },
    data() {
      return {
        contactModal: false,
        paymentModal: false
      };
    }
  }
</script>

<style scoped>
</style>
