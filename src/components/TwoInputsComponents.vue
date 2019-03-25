<template>
    <div>
        <div class="mb-3" >
          <b-input-group class="mt-3">
        <b-form-input id="1" v-focus:is-focused="!isDevidedByTwo" />
        <b-input-group-append>
          <b-button @click="changeFocus(1)" variant="outline-secondary">Set Focus to This Element</b-button>
        </b-input-group-append>
      </b-input-group>   
        </div>

        <div class="mt-3">
            <b-input-group class="mt-3">
        <b-form-input id="1" v-focus:is-focused="isDevidedByTwo" />
        <b-input-group-append>
          <b-button @click="changeFocus(2)" variant="outline-secondary">Set Focus to This Element</b-button>
        </b-input-group-append>
      </b-input-group>
        </div>
        
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            shouldFocus:true,
            //kada dodjemo na str ocekujemo da je prvi el u fokusu
            focusedElement:1
        }
    },
    computed:{
        isDevidedByTwo(){

                return this.focusedElement%2==0;
        }

    },
    methods:{
        changeFocus(elementInFocus){
            this.focusedElement=0;
            this.focusedElement=elementInFocus;
        }
    }

}
</script>

<style>

</style>
