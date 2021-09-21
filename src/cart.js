import React, { Component } from "react";
import "./style/cart.css";
import chevUp from "./media/icons/svg/up-chevron.svg";
import chevDown from "./media/icons/svg/down-chevron.svg";

function CartItem(props) {
  let { pic, title, desc, price, quantity } = props.item;
  return (
    <div className="item">
      <div className="pic">
        <img src={pic} alt="" />
      </div>
      <div className="info">
        <h3 className="tittle">{title}</h3>
        <p className="desc">{desc}</p>
        <p className="price">{"$" + parseInt(price) * parseInt(quantity)}</p>
      </div>
      <div className="changeQuant">
        <img
          onClick={() => props.changeQuant(props.index, true)}
          className="chevron"
          src={chevUp}
          alt=""
        />
        <p>{quantity}</p>
        <img
          onClick={() => props.changeQuant(props.index, false)}
          className="chevron"
          src={chevDown}
          alt=""
        />
      </div>
    </div>
  );
}

export default class Cart extends Component {
  render() {
    return (
      <div className={this.props.show + " cartContainer"}>
        <div className="cart">
          {this.props.cart.length === 0 && (
            <div onClick={this.props.handleShow} className="noItems">
              <p>No items in Cart.</p>
              <p> Keep on shopping!</p>
            </div>
          )}
          {this.props.cart.map((item, index) => {
            return (
              <CartItem
                index={index}
                key={index}
                item={item}
                changeQuant={this.props.changeQuant}
              />
            );
          })}
          <button className="xButton" onClick={() => this.props.handleShow()}>
            X
          </button>
        </div>
      </div>
    );
  }
}
