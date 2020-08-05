import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar'
//import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Nav } from 'react-bootstrap'

import './scss/index.scss'

import $ from 'jquery'

//Custom components
import ButtonStyle1 from './Components/Style1'
import ButtonStyle2 from './Components/Style2'
//

class Field extends React.Component {

    switched(){
      console.log('Something')
      $('#field').toggleClass('dark')
      
    }
    componentDidMount(){
      console.log('Page loaded')
    }
    //

    render() {    
      return (
        <div>
          <Navbar  variant='dark' bg='dark' className='navtop'>
            <Navbar.Brand href='#'>
              <div className='cutlogo'>
                <img
                  src='./FirstLogo.png'
                  alt=''
                />  
              </div>                                        
            </Navbar.Brand>
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
          
          <div id='field' className='hideScrollBar'>
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
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Field/>,
    document.getElementById('root')
  );
  