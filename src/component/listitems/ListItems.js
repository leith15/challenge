import React from "react";

const ListItems = ({ listItems, handleDelete }) => {
  const showItems = (tab) => {
    console.log(tab);
    return tab.map((el, i) => (
      <ul>
        {console.log(el)}
        <li>{el}</li>
        <button onClick={() => handleDelete(i)}>Delete</button>
      </ul>
    ));
  };

  return (
    <div>
      <h2>list items</h2>
      {showItems(listItems)}
    </div>
  );
};

export default ListItems;
