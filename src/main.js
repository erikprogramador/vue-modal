import Vue from 'vue';
import App from './App';
import Modal from './components/Modal.vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import TextArea from './components/TextArea.vue';
import './app.css';

Vue.config.productionTip = false;

Vue.component('mbx-modal', Modal);
Vue.component('mbx-button', Button);
Vue.component('mbx-input', Input);
Vue.component('mbx-text-area', TextArea);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
