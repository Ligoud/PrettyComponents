import React from 'react'

//Custom components
import ButtonStyle1 from './Style1'
import ButtonStyle2 from './Style2'
//

class PrettyComponents extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>                
                    <figure>
                    <div className="card">
                                    
                        <ButtonStyle1></ButtonStyle1>
                    </div>
                    <figcaption>
                        <svg >
                        <polygon points='0,0 200,0 170,40 30,40'   fill='transparent'></polygon>                  
                        </svg>
                        <span>Frame Button</span>
                    </figcaption>
                    </figure>
                    
                    <figure>
                    <div className="card">
                        <ButtonStyle2/>
                    </div>
                    <figcaption>
                        <svg >
                        <polygon points='0,0 200,0 170,40 30,40'   fill='transparent'/>
                        </svg>
                        <span>Slime Button</span>                
                    </figcaption>
                    </figure>
                    <figure>
                    <div className="card">               
                    </div>
                    <figcaption>
                        <svg >
                        <polygon points='0,0 200,0 170,40 30,40'   fill='transparent'/>
                        </svg>
                        <span>Definition 3</span>                
                    </figcaption>
                    </figure>
            </div>
        )
    }
}

export default PrettyComponents