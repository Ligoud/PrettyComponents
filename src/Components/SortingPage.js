import React from 'react'

import '../scss/sorting.scss'

class SortingPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let arr=[]
        let customClass=this.props.barsType? this.props.barsType: 'musicBar'
        //Генерируем бары. Отличие только в стилях применяемых.
        for(let i=1;i<=100;i++){
            arr.push(<div className={customClass+' flex-grow-1'} key={'k'+i} id={'el'+i}></div>)
        }
        //
        return(
            <div>
                <div className='sortingField d-flex'>
                    {arr}
                </div>
            </div>
        )
    }
}

export default SortingPage