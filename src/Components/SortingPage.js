import React from 'react'

import '../scss/sorting.scss'

//Sorting Classes
import Sort from '../SortingAlghoritms/Sort'
import BubbleSort from '../SortingAlghoritms/BubbleSort'
//
class SortingPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            size:100,
            bubble: new BubbleSort(100),
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
                sort=this.state.bubble
                break;
            default:
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