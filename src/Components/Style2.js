import React from 'react'

import '../scss/style2.scss'

class ButtonStyle2 extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(e){
        if(this.props.onButtonClick!==undefined)
            this.props.onButtonClick(e)
        else
            console.log('No handlers detected for Slime Button. Pass your handler from the parent component through the props.')
    }
    render(){
        return(
            <div className='buttonStyle2' onClick={this.handleClick}>
                <div className='fl1'></div>
                <div className='fl2'></div>
                <span>
                    Send
                </span>
            </div>
        )
    }
}

export default ButtonStyle2;