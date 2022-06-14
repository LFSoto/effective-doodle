import { Component, ReactNode } from 'react';

interface Props{
    name:string,
    price:number,
    img:string
}
class Product extends Component<Props>{
    name:any;
    price:any;
    img:any;
    constructor(props: Props){
        super(props);
        this.name = props.name;
        this.price = props.price;
        this.img = props.img
    }
    render() : ReactNode{
        return(<div>
            <p>{this.name}</p>
            <p>{this.price}</p>
            <img alt={this.name} src={this.img}/>
        </div>);
    }
}

export default Product;