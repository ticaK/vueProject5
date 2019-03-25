<template>
    <div>
        <button :style="{'background-color':buttonColor}" @click="generateButton"  > Generate Color</button>
        <button  @click="drugaFunkcija(10)"> Generate 2</button>
        <div v-if="colorsArray">
<div v-for="color in colorsArray">
<div :style="{'background-color':color}"> Ovo je boja {{color}} </div>

    </div>



            </div>
        

    </div>
</template>

<script>
import {GradientGenerator} from '../helpers/GradientGenerator'

    export default {
        name:"MyButtons",
        data(){
            return {
                buttonColor:"",
                colorsArray:[]
            }
        },
        methods:{
            generateButton(){
                console.log(GradientGenerator.generateColorHex())
                this.buttonColor=GradientGenerator.generateColorHex()
            },
            drugaFunkcija(n){
                this.$alertMessage(n);  
                let arr=[];
                this.colorsArray=GradientGenerator.drugaFunkcija(10);

            }
        }
    }
</script>

<style>

</style>
