import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import ItemList from "./ItemList";

const initialItemToAdd = {
  product_name: "",
  description: "",
  price: "",
  location:""
};

const ItemAdd = (props) =>{
  const [itemToAdd, setItemToAdd] = useState(initialItemToAdd);
  const [adding, setAdding] = useState(true);
  const [categoryID, setcategoryID] = useState("");

  useEffect(() => {
    if (props.categoryID){
      setcategoryID(props.categoryID);
    }
  }, []);

  const saveAdd = e => {
    e.preventDefault();
    axiosWithAuth()
    .post(`/products/cat/${categoryID}`, itemToAdd)
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
    setItemToAdd(initialItemToAdd);
    setAdding(false);
  };

  return (
  <div className="item-list">
  {adding && (
  <form onSubmit={saveAdd}>
    <legend>Add Item</legend>
    <div className="form-group">
      <label>Product Name:</label>
      <input
        className="form-control" 
        onChange={e =>
          setItemToAdd({ ...itemToAdd, product_name: e.target.value })
        }
        value={itemToAdd.product_name}
      />
    </div>
    <div className="form-group">
      <label>Description:</label>
      <input
        className="form-control" 
        onChange={e =>
          setItemToAdd({ ...itemToAdd, description: e.target.value })
        }
        value={itemToAdd.description}
      />
    </div>
    <div className="form-group">
      <label>Price:</label>
      <input
        className="form-control" 
        onChange={e =>
          setItemToAdd({ ...itemToAdd, price: e.target.value })
        }
        value={itemToAdd.price}
      />
    </div>
    <div className="form-group">
      <label>Location:    </label>
      <select
          className="form-control" 
          onChange={e =>
            setItemToAdd({ ...itemToAdd, location: e.target.value })
          }
          value={itemToAdd.location}
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
          setcategoryID(e.target.value)
        }
        value={categoryID}
    >
      <option value="">--Please choose a Category--</option>
      <option value="1">Clothing & Apparel</option>
      <option value="2">Authentic Artwork</option>
      <option value="3">Accessories</option>
      <option value="4">Food Items</option>
      <option value="5">Others</option>
    </select>
    </div>

    <div className="button-row">
      <button type="submit" >Save</button>
      <button onClick={() => {setItemToAdd(initialItemToAdd); setAdding(false)}}>Cancel</button>
    </div>
  </form>
  )}
  {!adding && (
    <ItemList />
  )}
  </div>
  );
};

export default ItemAdd;

