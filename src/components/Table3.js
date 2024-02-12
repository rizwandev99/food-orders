const Table3 = (props) => {
  //   console.log("Table 1", props.od);
  return (
    <>
      <h2>Table 3:</h2>
      <ul>
        {props.od.map((items, index) => {
          return (
            <li key={index}>
              {items.id} -- {items.price} -- {items.dish}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Table3;
