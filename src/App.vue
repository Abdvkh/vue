<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>
  <Modal
      v-if="showModal"
      theme="sale"
      @close="toggleModal"
  >
    <template v-slot:links>
      <a href="#">Sign Up Now</a>
      <br>
      <a href="#">More info</a>
    </template>
    <h1>Ninja Giveaway!</h1>
    <p>Grab your ninja swag for half price!</p>
  </Modal>

  <button @click.alt="toggleModal">Show modal(alt)</button>
</template>

<script>
import Modal from './components/Modal';

export default {
  name: 'App',
  components: {
    Modal
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
    }
  },
  data(){
    return {
      title: "My First Vue App:)",
      showModal: false
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
