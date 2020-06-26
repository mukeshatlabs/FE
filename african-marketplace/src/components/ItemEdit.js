import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import ItemList from "./ItemList";
import { ItemContexts } from '../contexts/ItemContexts';

const ItemEdit = ({ editItem }) =>{
  const [editing, setEditing] = useState(true);
  const [itemToEdit, setItemToEdit] = useState(editItem);

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/products/my/${itemToEdit.id}`, itemToEdit)
    .then(res => {
      console.log(res.data)
    })
    .catch(error => console.log(error));
    setEditing(false);
  };

  return (
    <div className="item-list">

    {editing && (
    <form onSubmit={saveEdit}>
    <legend>Edit Item:</legend>
    <div className="form-group">
      <label>Product Name:</label>
      <input
        className="form-control" 
        onChange={e =>
          {
          setItemToEdit({ ...itemToEdit, product_name: e.target.value });
          }
        }
        value={itemToEdit.product_name}
      />
    </div>
    <div className="form-group">
    <label>Description:</label>
    <input
      className="form-control" 
      onChange={e =>
        setItemToEdit({ ...itemToEdit, description: e.target.value })
      }
      value={itemToEdit.description}
    />
    </div>
    <div className="form-group">
    <label>Price:</label>
    <input
      className="form-control" 
      onChange={e =>
        setItemToEdit({ ...itemToEdit, price: e.target.value })
      }
      value={itemToEdit.price}
    />
    </div>
    <div className="form-group">
      <label>Location:    </label>
      <select
          className="form-control" 
          onChange={e =>
            setItemToEdit({ ...itemToEdit, location: e.target.value })
          }
          value={itemToEdit.location}
      >
        <option value="">--Please choose a location--</option>
        <option value="Bungoma">Bungoma</option>
        <option value="Eldoret">Eldoret</option>
        <option value="Garisa">Garisa</option>
        <option value="Isiolo">Isiolo</option>
        <option value="Nairobi">Nairobi</option>
      </select>
    </div>

  <div className="form-group">
    <label>Category:    </label>
    <select
        className="form-control" 
        onChange={e =>
          setItemToEdit({ ...itemToEdit, category: e.target.value })
        }
        value={itemToEdit.category}
    >
      <option value="">--Please choose a Category--</option>
      <option value="Clothing & Apparel">Clothing & Apparel</option>
      <option value="Authentic Artwork">Authentic Artwork</option>
      <option value="Accessories">Accessories</option>
      <option value="Food Items">Food Items</option>
      <option value="Others">Others</option>
    </select>
    </div>

    <div className="button-row">
      <button type="submit" >Save</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </div>
  </form>
  )}
  {!editing && (
    <ItemList />
  )}
  </div>
  );

};

export default ItemEdit;

