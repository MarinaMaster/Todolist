import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
/*const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          ></input>
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i
              className="fa-solid fa-trash"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}
      </ul>
      <div>{todos.length} tasks</div>
    </div>
  );
};
*/

const Home = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    
    <div className="App">
      <h1>todos</h1>

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button className="two" onClick={() => deleteItem(item.id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>

      

      <div className="quantity">{items.length} item left</div>
      <button className ="add-button" onClick={() => addItem()}>Add</button>
    </div>  
  );
};
export default Home;
