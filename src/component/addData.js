import  React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from "react-router-dom"

export const AddData= () => {
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [quantity,setQuantity] = useState("")
    const [category,setCategory] = useState("")
    const [date,setDate] = useState("")
    const { id } = useParams();
    const navigate = useNavigate()

  const addData = async(e) =>{
    e.preventDefault()
    try {
        const responsed = await axios.post(`https://majestic-chaja-697966.netlify.app/.netlify/functions/api/item`,{
        name,
        description,
        quantity,
        price,
        date,
        category
    })
    navigate('/')
    console.log(responsed.data);
    } catch (error) {
        console.log(error.message)
    }
    
  }

  return (
    <div className="container mt-5">
      <h1>Add Data</h1>
      <form onSubmit={addData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description" name="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="number" className="form-control" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity:</label>
          <input type="number" className="form-control" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <input type="text" className="form-control" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        {/* Add other fields as needed */}
        <button type="submit" className="btn btn-primary">Update Item</button>
      </form>
    </div>
  );
};