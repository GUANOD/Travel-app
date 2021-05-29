import { Component } from 'react';
import './style/App.css';
import Square from './square'
import Cart from './cart'
import ireland from './media/ireland.jpeg'
import italy from './media/italy.jpeg'
import poland from './media/poland.jpeg'
import vienna from './media/vienna.jpeg'
import paris from './media/paris.jpg'
import Banner from './Banner'
import Sidebar from './sidebar'
import cart from './media/icons/shopping-cart.svg'

function CartIcon (props){
  return(
      <div className="cartIcon">
          <img src={cart} onClick={props.handleShow} alt=""/>
          {props.length > 0 && <p>{props.length}</p> }
      </div>
  )
}

class App extends Component{

  initialState={
    destinations:[ {
      pic: paris,
      title:"Best Of Paris In 7 Days Tour",
      desc:"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      price:"1995"
    },
      {
      pic: ireland,
      title:"Best Of Ireland In 14 Days Tour",
      desc:"Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      price:"3895"
      },{
        pic: italy,
      title:"Best Of Rome In 7 Days Tour",
      desc:"Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
      price:"2095"
      },{
        pic: vienna,
      title:"Best Of Salzburg & Vienna In 8 Days Tour",
      desc:"Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
      price:"2695"
      },{
        pic: poland,
      title:"Best Of Poland In 10 Days Tour",
      desc:"Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
      price:"2595"
      }
    ],
    left:true,
    cart:{
      items:[],
      number: 0
    },
    showCart:false
  };

  state=this.initialState;

  handleDelete =(index)=>{
    let arr = this.state.destinations.slice();
    arr.splice(index,1);
    this.setState({destinations: arr});
    if (arr.length===0){
      this.setState({left: false})
    }
  }

  handleRefresh = () =>{
    this.setState(this.initialState);
  }

  handleSidebar = () =>{
    this.setState({sidebar: !this.state.sidebar})
  }

  handleCart =(index) =>{
    let cartCopy= this.state.cart;
    let arr = this.state.cart.items.slice();
    let obj = this.state.destinations[index];
    let found = arr.findIndex(elm => elm.desc === obj.desc);
    
    if(found === -1){
      obj.quantity = 1;
      arr.push(obj);
    }
    else{
      arr[found].quantity++;
    }

    cartCopy.items = arr;

    let count = 0;
    for(let i=0; i < arr.length; i++){
      count += arr[i].quantity;
    }

    cartCopy.itemNumbers = count;

    this.setState({cart: cartCopy});
  }

  handleShow = () =>{
    this.setState({showCart:!this.state.showCart});
  }

  changeQuant = (index, bool) =>{
    let cart = this.state.cart;
    if(bool === true){
      cart.items[index].quantity++;
      cart.itemNumbers++;
    }
    else{
      cart.items[index].quantity--;
      cart.itemNumbers--;

      if (cart.items[index].quantity === 0){
        cart.items.splice(index, 1);
      }
    }     
    this.setState({cart:cart});
  }

  render(){

    return (
      <main>
      <CartIcon handleShow={this.handleShow} length={this.state.cart.itemNumbers}/>
      <Cart changeQuant={this.changeQuant} handleShow={this.handleShow} cart={this.state.cart.items} show={this.state.showCart} />
      <Banner 
        left={this.state.left}
        handleRefresh={this.handleRefresh}
        />
      <Sidebar />
      {this.state.destinations.map((dest,index) =>{
        return(
          <Square
            key={index} 
            dest={dest}
            handleDelete={this.handleDelete}
            index={index}
            handleCart={this.handleCart}
          />
        )
      })}
      </main>
    );
  }
}

export default App;
