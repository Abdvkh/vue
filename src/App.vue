<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>
  <Modal
      v-if="showModal"
     :header="header"
     :text="text"
     theme="sale"
      @close="toggleModal"
  />

  <button @click="toggleModal">Show modal</button>
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
      header: "Sign up for the giveaway!",
      text: "Grab your ninja swag for half price!",
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
