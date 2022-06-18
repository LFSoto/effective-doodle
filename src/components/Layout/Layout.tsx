type LayoutProps = {
  [rest: string]: any;
};

const styles = {
    layout:{
        backgroundColor: '#fff',
        color:'#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection:'column' as 'column',
    },
    container:{
        width:'1200px'
    }
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div style={styles.layout}>
      <div style={styles.container}{...props}></div>
    </div>
  );
};

export default Layout;
