import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Диван',
          img: '111.jpg',
          desc: 'Лучший диван',
          category: 'divan',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стул',
          img: '2222.jpg',
          desc: 'Лучший стул',
          category: 'stul',
          price: '39.99'
        },
        {
          id: 3,
          title: 'Стол',
          img: '333.png',
          desc: 'Лучший стол',
          category: 'stol',
          price: '79.99'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
  return (
   <div className="wrapper">
    <Header orders={this.state.orders} />
    <Items items={this.state.items} onAdd={this.addToOrder} />
    <Footer />
   </div>
  );
}
addToOrder(item) {
  let array
  this.state.orders.forEach(el => {
    if(el.id === item.id)
     array = true
  })
  if(!array)
   this.setState({orders: [...this.state.orders, item]})
}
}

export default App;
