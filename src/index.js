import React from 'react'
import ReactDOM from 'react-dom'


import './scss/index.scss'


//Pages
import PrettyComponents from './Components/PrettyComponents'
import PrettyNavbar from './Components/PrettyNavbar'
import PrettySortingAlgs from './Components/PrettySortingAlgs'

//

class Field extends React.Component {
    constructor(props){
      super(props)
      this.navclicked=this.navclicked.bind(this)
      this.state={
        navPage:'page1',
      }
    }
    navclicked(type){
      this.setState({navPage:type})

    }
    componentDidMount(){
      console.log('Page loaded')
    }
    //

    render() {        
      let body
      if(this.state.navPage==='page1'){
        body=<PrettyComponents/> 
      }else if(this.state.navPage==='page2'){
        body=<PrettySortingAlgs key={new Date()}/>  //Чтобы постоянно работала кнопка
      }  

      return (
        <div>
          <PrettyNavbar onNavClicked={this.navclicked}/>
          <div id='field' className='hideScrollBar'>
            {body}           
          </div>          
        </div>        
      );
    }
  }
  // <PrettyComponents/> 
  // ========================================
  
  ReactDOM.render(
    <Field/>,
    document.getElementById('root')
  );
  