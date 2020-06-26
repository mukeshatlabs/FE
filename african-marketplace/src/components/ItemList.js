import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import ItemAdd from "./ItemAdd";
import ItemEdit from "./ItemEdit";
import { ItemContexts } from '../contexts/ItemContexts';

const initialItemToEdit = {
  product_name: "",
  description: "",
  price: "",
  location:"",
  category:""
};
const ItemList = () =>{
  const [itemList, setItemList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialItemToEdit);

  useEffect(() => {
    axiosWithAuth()
      .get("/products/my")
      .then(res => setItemList(res.data))
      .catch(error => console.log(error));
  }, [itemList]);

  const editItem = item => {
    setEditing(true);
    setAdding(false);
    setItemToEdit(item);
  };

  const addItem = () => {
    setAdding(true);
    setEditing(false);
  };

  const deleteItem = item => {
    axiosWithAuth()
    .delete(`/products/my/${item.id}`)
    .then(res => {
      axiosWithAuth()
      .get("/products/my")
      .then(res => setItemList(res.data))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  };

  return (
    <div >
      {!adding && !editing && (
      <div className="product-list">
      {itemList.map(item => (
        <div className="product" key={itemList.id}>
          <h3>{item.product_name}</h3>
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Cateogry: {item.category}</p>
          <p>Location: {item.location}</p>
          <div className="button-row">
            <button onClick={() => editItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item)}>Delete</button>
          </div>
        </div>
      ))}
      </div>
     )} 
     
    {!adding && !editing && (
    <div className="button-row">
        <button onClick={() => addItem()}>add an item</button>
    </div>
    )}

  {adding && (
    <ItemAdd  />
  )}

  {editing && (
    <ItemContexts.Provider value={ setItemList }>
      <ItemEdit editItem={itemToEdit} />
      {/* <ItemEdit /> */}
    </ItemContexts.Provider>
  )}
  </div>
  );
};

export default ItemList;


