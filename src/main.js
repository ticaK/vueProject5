import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {GradientGenerator} from './helpers/GradientGenerator'
import focus from './directives/focus.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(focus);
Vue.use(GradientGenerator);

Vue.prototype.$alertMessage=function(message){
alert(message);
}

new Vue({
  render: h => h(App),
}).$mount('#app')
