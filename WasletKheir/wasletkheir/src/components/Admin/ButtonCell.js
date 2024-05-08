function ButtonCell({ value, onClick }) {
    return (
      <button onClick={onClick}>
        {value}
      </button>
    );
  }
  
  export default ButtonCell;