exports.install=function(Vue) {
    Vue.directive('focus',{
        inserted(el,binding,vnode){
            //vnode se rijetko koristi
            console.log(vnode);
            if(!binding.value){
                return ;
            }
            console.log(binding);
            console.log("Komp se inicijalizovala");
            el.focus()
        },
        update(el,binding) {
            //update poziva se svaki put kada je parametar koji joj je proslijedjen update-ovan
            if(!binding.value){
                return ;
            }
            el.focus();
            
        },
        unbind(el, binding){            
            console.log(el);
        }
    });
};
