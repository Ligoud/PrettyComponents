import $ from 'jquery'

class Sort{
    constructor(size){
        this.sizeArr=[]
        //
        this.animateSwap=this.animateSwap.bind(this)
        //
        for(let i=0;i<size;i++){
            
            //size - 100
            //var - x
            let percents=((i+1)*100)/size
            this.sizeArr.push(percents)
        }
        this.sizeArr=this.shuffle(this.sizeArr)
        //console.log(this.sizeArr)
    }
    shuffle(arr) {
        let array=[...arr]
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    getArray(){
        return this.sizeArr
    }

    animateSwap(i,j,color,_break){
        //if(i != undefined && j!=undefined && color!=undefined){
        let id1 = '#el' + j
        let bar1 = $(id1)
        let h1 = bar1.css('height')
        if(h1===undefined)
            return
        h1=+h1.slice(0, -2)
        
        //j loop

        let id2 = '#el' + (j+1)
        let bar2 = $(id2)
        let h2 = bar2.css('height')
        if(h2===undefined)
            return
        h2=+h2.slice(0, -2)
        //
        if (color) {
            bar2.css('backgroundColor', 'red')
            bar1.css('backgroundColor', 'red')
            
        } else {
            //console.log(h1,h2,h2<h1)

            if(h2<h1){  //Сам свап
                bar2.css('height',h1)
                bar1.css('height',h2)
                _break=false
            }
            bar2.css('backgroundColor', 'transparent')
            bar1.css('backgroundColor', 'transparent')
        }
   // }
        return _break
    }
}



export default Sort