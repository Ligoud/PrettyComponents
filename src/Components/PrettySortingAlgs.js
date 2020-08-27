import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../scss/alg.scss'

import $ from 'jquery'

//Components
import SortingPage from  './SortingPage'
//

class PrettySortingAlgs extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
        this.state={
            page:'default'
        }
    }
    handleClick(e){
        let el=e.target
        let attr=$(el).attr('data-card')
        do{
            el=$(el).parent()
            attr=$(el).attr('data-card')
        }while(attr===undefined)
        
        console.log(attr)
        this.setState({page:attr})
    }
    render(){
        let Cards=<Container fluid className='algField'>
                    <Row className='algRow justify-content-around'>
                        <Col xs={3} className='cardWrapper' onClick={this.handleClick} data-card='musicBar'><div className='algCard'><span><h5>MusicBars -like hover effect.</h5><br/> SASS only w/o JS.<br/> (NOT A SORTING ALGHORITM)</span> </div></Col>
                        <Col xs={3} className='cardWrapper' onClick={this.handleClick} data-card='bubble'><div className='algCard'><span>Bubble Sort</span> </div></Col>
                        <Col xs={3} className='cardWrapper' onClick={this.handleClick} data-card='quick'><div className='algCard'><span>TEXT</span> </div></Col>
                        <Col xs={3} className='cardWrapper' onClick={this.handleClick} data-card='default'><div className='algCard'><span>TEXT</span> </div></Col>
                    </Row>
                </Container> ;
        let disp
        if(this.state.page==='default')
            disp=Cards
        else
            disp=<SortingPage barsType={this.state.page}/>  
        return(
            <div>
                {disp}                            
            </div>
        )
    }
}

export default PrettySortingAlgs
