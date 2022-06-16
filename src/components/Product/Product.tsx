interface ProductProps {
  name: string;
  price: number;
  img: string;
}

const Product = ({ name, price, img }: ProductProps): JSX.Element => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <img alt={name} src={img} />
    </div>
  );
};

export default Product;
