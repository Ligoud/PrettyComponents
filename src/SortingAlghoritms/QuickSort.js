import Sort from './Sort.js'

//Не сделано
class QuickSort extends Sort{
    constructor(size){
        super(size)
        this.size=size
        this.sortExec=this.sortExec.bind(this)
        this.halfArrRecursion=this.halfArrRecursion.bind(this)
    }

    sortInsideSection(start,end,mid){

    }
    halfArrRecursion(start=0,end=this.size){
        let mid=Math.floor((end-start)/2)
        let s1=start,e1=mid
        let s2=mid+1,e2=end
        
        let i=0
    //        this.animateSwap(i,) // Нужна отдельная функция для свапа квиксорта
    }

    sortExec(){
        
        this.halfArrRecursion()
    }
}

export default QuickSort