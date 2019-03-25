<template>
  <div id="app" class="container">
    <!-- <h1>Nas prvi input sa focus direktivom</h1> -->
    <!-- <single-input-component>    </single-input-component> -->
    <!-- <TwoInputsComponents v-if="isValid"/> -->
    <MyButtons/>
  <button @click="validateFilds">Click on me </button>
  </div>
</template>

<script>
// import SingleInputComponent   from './components/SingleInputComponent'
import TwoInputsComponents from './components/TwoInputsComponents'
import MyButtons from './components/MyButtons'
export default {
  name: 'app',
  data(){
    return {
      isValid:true
    }
  },
  components: {
    // SingleInputComponent,
    TwoInputsComponents,
    MyButtons
  },
  methods:{
    validateFilds(){
      this.isValid=false;
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
