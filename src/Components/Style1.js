
import React from 'react'

import '../scss/style1.scss'

class ButtonStyle1 extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(e){
        if(this.props.onButtonClick!==undefined)
            this.props.onButtonClick(e)
        else
            console.log('No handlers detected for Frame Button. Pass your handler from the parent component through the props.')
    }
    render(){
        const fill=this.props.fill;
        const stroke=this.props.stroke;
        const text=this.props.text;

        return(
            <div className='buttonStyle1' onClick={this.handleClick}>
                <div>
                    <svg className='svg_style1'>
                        <rect className='rect_style1'  
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            fill={fill?fill:'transparent'} 
                            stroke={stroke?stroke:'rgba(153, 25, 153, 0.952)'}>                             
                        </rect>
                    </svg>
                    <span className='span_style1'>{text?text:'Send'}</span>
                </div>                
            </div>
        )
    }
}

export default ButtonStyle1