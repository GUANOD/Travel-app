(this.webpackJsonptravel=this.webpackJsonptravel||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(7),r=s.n(n),c=(s(12),s(2)),l=s(3),o=s(5),h=s(4),d=(s(13),s(14),s(0)),u=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.dest,s=t.pic,a=t.title,i=t.desc,n=t.price;return Object(d.jsxs)("div",{className:"square",children:[Object(d.jsx)("img",{src:s,alt:""}),Object(d.jsxs)("footer",{children:[Object(d.jsxs)("div",{className:"tourInfo",children:[Object(d.jsx)("h4",{children:a}),Object(d.jsx)("h4",{className:"price",children:"$"+n})]}),Object(d.jsx)("p",{children:i}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){return e.props.handleDelete(e.props.index)},className:"dltButton",children:"Not interested"}),Object(d.jsx)("button",{onClick:function(){return e.props.handleCart(e.props.index)},className:"cartButton",children:"Add to cart"})]})]})]})}}]),s}(a.Component),j=(s(16),s.p+"static/media/up-chevron.59d3881e.svg"),b=s.p+"static/media/down-chevron.f03a3cfe.svg";function f(e){var t=e.item,s=t.pic,a=t.title,i=t.desc,n=t.price,r=t.quantity;return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"pic",children:Object(d.jsx)("img",{src:s,alt:""})}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h3",{className:"tittle",children:a}),Object(d.jsx)("p",{className:"desc",children:i}),Object(d.jsx)("p",{className:"price",children:"$"+parseInt(n)*parseInt(r)})]}),Object(d.jsxs)("div",{className:"changeQuant",children:[Object(d.jsx)("img",{onClick:function(){return e.changeQuant(e.index,!0)},className:"chevron",src:j,alt:""}),Object(d.jsx)("p",{children:r}),Object(d.jsx)("img",{onClick:function(){return e.changeQuant(e.index,!1)},className:"chevron",src:b,alt:""})]})]})}var p=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:this.props.show+" cartContainer",children:Object(d.jsxs)("div",{className:"cart",children:[0===this.props.cart.length&&Object(d.jsxs)("div",{onClick:this.props.handleShow,className:"noItems",children:[Object(d.jsx)("p",{children:"No items in Cart."}),Object(d.jsx)("p",{children:" Keep on shopping!"})]}),this.props.cart.map((function(t,s){return Object(d.jsx)(f,{index:s,item:t,changeQuant:e.props.changeQuant},s)})),Object(d.jsx)("button",{className:"xButton",onClick:function(){return e.props.handleShow()},children:"X"})]})})}}]),s}(a.Component),m=s.p+"static/media/ireland.fff4fe81.jpeg",g=s.p+"static/media/italy.d21a7b99.jpeg",O=s.p+"static/media/poland.04567f34.jpeg",x=s.p+"static/media/vienna.16f56b18.jpeg",v=s.p+"static/media/paris.07e7893c.jpg",y=(s(17),function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return this.props.left?Object(d.jsx)("div",{className:"banner",children:Object(d.jsx)("h1",{children:"Our Tours"})}):Object(d.jsxs)("div",{className:"banner",children:[Object(d.jsx)("h1",{children:"No Tours Left"}),Object(d.jsx)("button",{onClick:this.props.handleRefresh,children:"Refresh"})]})}}]),s}(a.Component)),w=(s(18),s.p+"static/media/001-facebook.a2be3059.svg"),k=s.p+"static/media/002-twitter.33b6f17c.svg",N=s.p+"static/media/003-whatsapp.be8b84bc.svg",S=s.p+"static/media/011-instagram.482d4132.svg",C=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).initialState={show:!1,bar:"unchanged"},e.state=e.initialState,e.toggle=function(){e.state.show?e.setState({toggle:"untoggled",show:!e.state.show,bar:"unchanged"}):e.setState({toggle:"toggled",show:!e.state.show,bar:"changed"})},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("aside",{children:[Object(d.jsxs)("div",{className:this.state.bar+" toggle",onClick:this.toggle,children:[Object(d.jsx)("div",{className:"bar1"}),Object(d.jsx)("div",{className:"bar2"}),Object(d.jsx)("div",{className:"bar3"})]}),Object(d.jsxs)("div",{className:this.state.toggle?this.state.toggle+" content":"content",children:[Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)("h1",{children:"Random Travel inc."}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Products"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Travels"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Blog"})})]})]}),Object(d.jsxs)("div",{className:"social",children:[Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:w,alt:""})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:S,alt:""})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:k,alt:""})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:N,alt:""})})]})]})]})}}]),s}(a.Component),B=s.p+"static/media/shopping-cart.55e58c70.svg";function I(e){return Object(d.jsxs)("div",{className:"cartIcon",children:[Object(d.jsx)("img",{src:B,onClick:e.handleShow,alt:""}),e.length>0&&Object(d.jsx)("p",{children:e.length})]})}var D=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).initialState={destinations:[{pic:v,title:"Best Of Paris In 7 Days Tour",desc:"Paris is synonymous with the finest things that culture can offer \u2014 in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate caf\xe9s, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",price:"1995"},{pic:m,title:"Best Of Ireland In 14 Days Tour",desc:"Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways \u2014 including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",price:"3895"},{pic:g,title:"Best Of Rome In 7 Days Tour",desc:"Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",price:"2095"},{pic:x,title:"Best Of Salzburg & Vienna In 8 Days Tour",desc:"Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gem\xfctlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna \u2014 with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",price:"2695"},{pic:O,title:"Best Of Poland In 10 Days Tour",desc:"Starting in the colorful port city of Gda\u0144sk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toru\u0144, Poland's contemporary capital of Warsaw, the spiritual Jasna G\xf3ra Monastery, and charming Krak\xf3w \u2014 Poland's finest city. In this land of surprises \u2014 so trendy and hip, yet steeped in history \u2014 there's so much to discover. Join us for the Best of Poland in 10 Days!",price:"2595"}],left:!0,cart:{items:[],number:0},showCart:!1},e.state=e.initialState,e.handleDelete=function(t){var s=e.state.destinations.slice();s.splice(t,1),e.setState({destinations:s}),0===s.length&&e.setState({left:!1})},e.handleRefresh=function(){e.setState(e.initialState)},e.handleSidebar=function(){e.setState({sidebar:!e.state.sidebar})},e.handleCart=function(t){var s=e.state.cart,a=e.state.cart.items.slice(),i=e.state.destinations[t],n=a.findIndex((function(e){return e.desc===i.desc}));-1===n?(i.quantity=1,a.push(i)):a[n].quantity++,s.items=a;for(var r=0,c=0;c<a.length;c++)r+=a[c].quantity;s.itemNumbers=r,e.setState({cart:s})},e.handleShow=function(){e.setState({showCart:!e.state.showCart})},e.changeQuant=function(t,s){var a=e.state.cart;!0===s?(a.items[t].quantity++,a.itemNumbers++):(a.items[t].quantity--,a.itemNumbers--,0===a.items[t].quantity&&a.items.splice(t,1)),e.setState({cart:a})},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("main",{children:[Object(d.jsx)(I,{handleShow:this.handleShow,length:this.state.cart.itemNumbers}),Object(d.jsx)(p,{changeQuant:this.changeQuant,handleShow:this.handleShow,cart:this.state.cart.items,show:this.state.showCart}),Object(d.jsx)(y,{left:this.state.left,handleRefresh:this.handleRefresh}),Object(d.jsx)(C,{}),this.state.destinations.map((function(t,s){return Object(d.jsx)(u,{dest:t,handleDelete:e.handleDelete,index:s,handleCart:e.handleCart},s)}))]})}}]),s}(a.Component);r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.0c8bf13e.chunk.js.map