import React from "react";

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    console.log("Selected table: ", event.target.elements.table.value);
  };
  return (
    <React.Fragment>
      <h1>Hello world!!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="orderId">Uniquie order id : </label>
        <input type="number" id="orderId" name="orderId" />
        <label htmlFor="price"> Price : </label>
        <input type="number" id="price" name="price" />
        <label htmlFor="dish"> Dish : </label>
        <input type="text" id="dish" name="dish" />
        <label htmlFor="table"> Choose a table : </label>
        <select id="table" name="table">
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <button type="submit"> Add to Bill</button>
      </form>
    </React.Fragment>
  );
};

export default App;
