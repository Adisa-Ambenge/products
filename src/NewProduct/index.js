import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const NewProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const params = useParams();

  const handleFormSubmit = (e) => {
    e.preventDefault();


    params.push(`/products?name=${name}&price=${price}&discount=${discountPercentage}`);
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input
          type="number"
          placeholder="Discount Percentage"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductForm;
