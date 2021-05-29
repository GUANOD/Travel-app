import React, { Component } from 'react'
import './style/banner.css'

export default class Banner extends Component {
    render() {
        if (this.props.left){
            return (
                <div className="banner">
                    <h1>Our Tours</h1>
                </div>
            )
        }
        else{
            return (
                <div className="banner">
                    <h1>No Tours Left</h1>
                    <button onClick={this.props.handleRefresh}>Refresh</button>
                </div>
            )
        }
        
    }
}
