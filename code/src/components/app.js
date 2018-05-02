import React from "react"
import Products from "./products.js"
// const productsJson = require("./../products.json")

 class App extends React.Component {

     constructor(props) {
       super(props)
       this.state = {
         productsJson: []
       }
     }

   componentDidMount() {
     fetch("http://localhost:8080/products").then(response => {
       return response.json()
     }).then((json) => {
       this.setState({
         productsJson: json
       })
       console.log(this.state.productsJson);
     })
   }

   render() {
     return (
       <div>
         <header><h1>T E C H N I N G O - A P O T E K E T</h1>
         <h4>-apotekt som är öppet dygnet runt!</h4>
         </header>

      <div className="main-container">

        {this.state.productsJson.map((item) => {
          return <Products
           image={item.image}
            key={item.id}
            name={item.name}
            size={item.size}
            price={item.price}
            type={item.type}
            numberInPack={item.numberInPack}
            deliveryTime={item.deliveryTime}
            substance={item.substance}/>
        })}
      </div>
       </div>
     )
   }
 }

 export default App
