import React, { Component } from 'react'
import './style/square.css'


export default class Square extends Component {

    render() {
        let {pic, title, desc, price} = this.props.dest;
        return (
            <div className="square">
                <img src={pic} alt=""/>
                <footer>
                    <div className="tourInfo">
                        <h4>{title}</h4>
                        <h4 className="price">{"$" + price}</h4>
                    </div>
                    <p>{desc}</p>
                    <div className="buttons">
                        <button 
                            onClick={()=> this.props.handleDelete(this.props.index)} 
                            className="dltButton"
                        >Not interested</button>
                        <button 
                            onClick={()=> this.props.handleCart(this.props.index)} 
                            className="cartButton"
                        >Add to cart</button>
                    </div>
                </footer>
            </div>
        )
    }
}
