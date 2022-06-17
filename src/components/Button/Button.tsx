type Props = {
  [rest: string]: any;
};

const styles = {
    button:{
        backgroundColor: '#0A283E',
        color:'#fff',
        padding: '15px 20px',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer',
    }
}
const Button: React.FC<Props> = (props) => {
  return <button style={styles.button} {...props}></button>;
};

export default Button;
