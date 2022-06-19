import Logo from '../Logo/Logo';

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

const NavBar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <Logo/>
      <p>Cart</p>
    </nav>
  );
};

export default NavBar;
