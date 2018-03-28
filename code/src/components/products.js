import React from "react"

class Products extends React.Component{
  render () {

    return <div className="box">
    <h2>{this.props.name}</h2>
      <img src={this.props.image}/>
      <li>{this.props.size}</li>
      <li>{this.props.type}</li>
      <li>{this.props.numberInPack} ST</li>
      <li>{this.props.substance}</li>

      <div className="buttonPrice">
        <p>{this.props.price} KR</p>
        <button>KÖP</button>
        </div>

     <p>Leveranstid: {this.props.deliveryTime}</p>
</div>
  }
}

export default Products
