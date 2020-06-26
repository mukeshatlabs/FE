import React, { useState, useEffect } from "react";
import ItemListDisplay from "./ItemListDisplay";
import axiosWithAuth from "../utils/axiosWithAuth";

const ItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/products/my")
      .then(res => setItemList(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
      <div>
        <ItemListDisplay itemList={itemList} updateItemList={setItemList} />
      </div>
  );

};

export default ItemList;
