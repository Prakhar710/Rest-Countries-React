import React, { Component } from "react";

import{Link} from "react-router-dom"

export class Header extends Component {

  state={
    dark:null,
  }

  componentDidMount(){
    this.themeSetting()
  }

  themeSetting=()=>{
    let data = sessionStorage.getItem('dark');
    if(!data){
      sessionStorage.setItem('dark', false);
    }else{
      let theme = sessionStorage.getItem('dark');
      if(theme===true){
    //  const dark= import "./dark_modes.css"
     this.setState({dark:null})  
    }else{
        this.setState({dark:null})
      }
      console.log(this.state.dark)
    }
  }

  render() {
    return (
      <header className="d-flex">
        <Link to={`/`}>
        <h3>Where in the world?</h3>
        </Link>

        <div onClick={this.themeSetting}>
        <i className="far fa-moon"></i>
        <span>Dark Mode</span>
        </div>
      </header>
    );
  }
}

export default Header;
