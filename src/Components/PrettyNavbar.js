import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav  from 'react-bootstrap/Nav'

import $ from 'jquery'


class PrettyNavbar extends React.Component{
    constructor(props){
        super(props)
        this.switched=this.switched.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    switched(){
        console.log('Something')
        $('#field').toggleClass('dark')        
    }
    handleClick(e){
        let link=e.target
        let type=$(link).attr('data-type');
        this.props.onNavClicked(type)
    }
    render(){
        return(
            <Navbar  variant='dark' bg='dark' className='navtop'>
                <Navbar.Brand href='#'>
                    <div className='cutlogo'>
                        <img
                        src={require('../FirstLogo.png')}
                        alt=''
                        />  
                    </div>                                        
                </Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link onClick={this.handleClick} data-type='page1'>Pretty Components</Nav.Link>
                    <Nav.Link onClick={this.handleClick} data-type='page2'>Pretty Sorting Algorithms</Nav.Link>
                </Nav>
                <Nav className='ml-auto'>
                <Form >
                    <Form.Switch
                        inline
                        custom
                        id='themeSwitcher'
                        label='On/Off dark theme'
                        onChange={this.switched}
                        />
                    </Form>
                </Nav>                    
            </Navbar>            
        )
    }
}

export default PrettyNavbar