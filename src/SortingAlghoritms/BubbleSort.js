import Sort from './Sort.js'

class BubbleSort extends Sort {
    constructor(size) {
        super(size)
        this.size=size
        this.sortExec = this.sortExec.bind(this)
        this.sortRecursion = this.sortRecursion.bind(this)
        console.log(this)
    }
    //Добавил эту чтобы
    sortRecursion(i, j, color,_break) {
        //console.log(i, j, color)
        /* #region  coloring */
        
        //
        _break=this.animateSwap(i,j,color,_break)
        
        
        color = !color
        if (color) {
            j++
            //console.log(this.size-i-1)
            if (j === this.size-i-1) {   //до n-1

                if(_break)
                    return
                else
                    _break=true
                i++
                j = 0
            }                        
        }
        
        if (i < this.size-1) {
            setTimeout(this.sortRecursion, 0, i, j, color,_break)
        }
    }
    

    sortExec() {
        console.log('sort executing')

        let _break=true // Если не было свапов - все отсортировано уже
        let i = 0, j = 0
        this.sortRecursion(i, j, true,_break)
    }
}

export default BubbleSort