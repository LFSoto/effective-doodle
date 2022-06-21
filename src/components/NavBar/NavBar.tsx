import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';

type NavBarProps = {
  cart: Array<any>
}

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative' as 'relative',
    padding: '0 50px' ,
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
  },
};

const NavBar: React.FC<NavBarProps> = (navBarProps) => {
  const {cart} = navBarProps;  

  return (
    <nav style={styles.navbar}>
      <Logo/>
      <Cart cart={cart}/>
    </nav>
  );
};

export default NavBar;
