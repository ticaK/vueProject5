//ovdje pravimo plugin


class GradientGenerator {
    generateColorHex() {
        return '#' + ('000000' + Math.random().toString(16).slice(2, 8)).slice(-6);
      }

    drugaFunkcija(n){
        let arr=[];
        for(let i=0; i<n;i++){
            arr.push(this.generateColorHex());
        }  
        return arr;
    }

    

}

let gradientGenerator=new GradientGenerator();

export {gradientGenerator as GradientGenerator}