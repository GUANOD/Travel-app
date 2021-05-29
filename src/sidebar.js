import React, { Component } from 'react'
import './style/sidebar.css'
import fb from './media/icons/svg/001-facebook.svg'
import twitter from './media/icons/svg/002-twitter.svg'
import whatp from './media/icons/svg/003-whatsapp.svg'
import ig from './media/icons/svg/011-instagram.svg'

export default class Sidebar extends Component {

    initialState ={
        show:false,
        bar:"unchanged"
    }
    state=this.initialState;

    toggle = () =>{
        if(this.state.show){this.setState({toggle:"untoggled", show:!this.state.show, bar:"unchanged"})}
        else{this.setState({toggle:"toggled", show:!this.state.show, bar:"changed"})}
    }

    render() {
        return (
            <aside>  
                <div className={this.state.bar + " toggle"} onClick={this.toggle} >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                {/* <button className="toggle" onClick={this.toggle}>X</button> */}
                <div className={(this.state.toggle) ? this.state.toggle + " content" : "content"} >
                    <div className="links">
                        <h1>Random Travel inc.</h1>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Travels</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="social">
                        <a href="#"><img src={fb} alt=""></img></a>
                        <a href="#"><img src={ig} alt=""></img></a>
                        <a href="#"><img src={twitter} alt=""></img></a>
                        <a href="#"><img src={whatp} alt=""></img></a>
                    </div>
                </div>
            </aside>
        )
    }
}
