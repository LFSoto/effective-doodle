type BubbleAlerProps = {
  value: number;
};

const styles = {
  bubbleAlert: {
    backgroundColor: '#E9725A',
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 10px',
    width: '20px',
    fontSize: '0.9rem',
  },
};

const BubbleAlert: React.FC<BubbleAlerProps> = (props) => {
  const getNumber: any = (amount: number) => {
    if (!amount) {
      return '';
    }
    return amount > 9 ? '9+' : amount;
  };

  const { value } = props;

  return <span style={styles.bubbleAlert}>{getNumber(value)}</span>;
};

export default BubbleAlert;
