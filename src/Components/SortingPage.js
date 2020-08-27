import React from 'react'

import '../scss/sorting.scss'

//Sorting Classes
import Sort from '../SortingAlghoritms/Sort'
import BubbleSort from '../SortingAlghoritms/BubbleSort'
import QuickSort from '../SortingAlghoritms/QuickSort'
//
class SortingPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            size:100,
            
        }
    }
    componentDidMount(){

    }
    render(){

        let arr=[]
        let customClass=this.props.barsType? this.props.barsType: 'musicBar'
        //Генерируем бары. Отличие только в стилях применяемых.
        
        let sort
        
        
        switch(customClass){
            case 'bubble':
                sort=new BubbleSort(this.state.size)
                break;
            case 'quick':
                sort=new QuickSort(this.state.size)
                break;
            default:
                sort=new Sort(this.state.size)
                break;
        }

        let sizeArr=sort.getArray()

        if(customClass==='musicBar'){
            for(let i=0;i<this.state.size;i++){            
                arr.push(<div className={customClass+' bar flex-grow-1'} key={'k'+i} id={'el'+i}></div>)
            }
        }else{
            for(let i=0;i<this.state.size;i++){            
                arr.push(<div className={customClass+' bar flex-grow-1'} key={'k'+i} id={'el'+i} style={{height:sizeArr[i]+'%'}}></div>)
            }
        }
        //
        return(
            <div>
                <div className='sortingField d-flex' onClick={sort.sortExec}>
                    {arr}
                </div>
            </div>
        )
    }
}

export default SortingPage