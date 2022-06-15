import { Component, ReactNode } from 'react';

interface ProductProps{
    name:string,
    price:number,
    img:string
}

interface ProductState{
    name:string,
    price:number,
    img:string
}

class Product extends Component<ProductProps, ProductState>{
    constructor(props: ProductProps){
        super(props);
        this.state = {
            name: props.name,
            price: props.price,
            img: props.img
        }
    }
    render() : ReactNode{
        return(<div>
            <p>{this.state.name}</p>
            <p>{this.state.price}</p>
            <img alt={this.state.name} src={this.state.img}/>
        </div>);
    }
}

export default Product;