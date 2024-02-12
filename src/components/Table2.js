const Table2 = (props) => {
  const deleteHandler = (index) => {
    props.deleteItem(index);
  };
  return (
    <>
      <h2>Table 2:</h2>
      <ul>
        {props.od.map((items, index) => {
          return (
            <li key={index}>
              {items.id} -- {items.price} -- {items.dish}
              <button
                type="button"
                onClick={() => {
                  deleteHandler(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Table2;
