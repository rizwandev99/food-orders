import React, { useState } from "react";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Table3 from "./components/Table3";

const orders_obj = {
  table1: [{ id: 1, price: 100, dish: "egg" }],
  table2: [{ id: 2, price: 200, dish: "Biryani" }],
  table3: [{ id: 3, price: 300, dish: "Fried Rice" }],
};
const App = () => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");
  const [orders, setOrders] = useState(orders_obj);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOrder = {
      id: orderId,
      price: price,
      dish: dish,
    };
    if (event.target.table.value === "table1") {
      setOrders((prevState) => {
        return { ...prevState, table1: [...prevState.table1, newOrder] };
      });
    } else if (event.target.table.value === "table2") {
      setOrders((prevState) => {
        return { ...prevState, table2: [...prevState.table2, newOrder] };
      });
    } else if (event.target.table.value === "table3") {
      setOrders((prevState) => {
        return { ...prevState, table3: [...prevState.table3, newOrder] };
      });
    }
    setOrderId("");
    setPrice("");
    setDish("");
    setTable("");
  };

  const deleteItem = (tablekey, index) => {
    setOrders((prevState) => {
      const updatedTable = [...prevState[tablekey]];
      updatedTable.splice(index, 1);
      return { ...prevState, [tablekey]: updatedTable };
    });
    console.log("DELETED -", tablekey, index);
  };
  return (
    <React.Fragment>
      <h1>Order your Food : </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="orderId">Uniquie order id : </label>
        <input
          type="number"
          id="orderId"
          name="orderId"
          value={orderId}
          onChange={(e) => {
            setOrderId(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="price"> Price : </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="dish"> Dish : </label>
        <input
          type="text"
          id="dish"
          name="dish"
          value={dish}
          onChange={(e) => {
            setDish(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="table"> Choose a table : </label>
        <select
          id="table"
          name="table"
          value={table}
          onChange={(e) => {
            setTable(e.target.value);
          }}
        >
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        <br />
        <br />
        <button type="submit"> Add to Bill</button>
      </form>
      <div>
        <h1>Orders : </h1>
        <Table1
          od={orders.table1}
          deleteItem={(index) => {
            deleteItem("table1", index);
          }}
        />
        <Table2
          od={orders.table2}
          deleteItem={(index) => {
            deleteItem("table2", index);
          }}
        />
        <Table3
          od={orders.table3}
          deleteItem={(index) => {
            deleteItem("table3", index);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
