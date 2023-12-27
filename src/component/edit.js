import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const getDataFromID = async () => {
    try {
      const response = await axios.get(`https://majestic-chaja-697966.netlify.app/.netlify/functions/api/item/${id}`);
      setName(response.data.name);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setQuantity(response.data.quantity);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDataFromID();
  }, []);

  const editData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://majestic-chaja-697966.netlify.app/.netlify/functions/api/item/${id}`, {
        name,
        description,
        quantity,
        price,
        date,
        category,
      });
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mt-5" style={containerStyle}>
      <h1 className="text-center" style={headingStyle}>
        Edit Item
      </h1>
      <div>
      <Form onSubmit={editData}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label style={labelStyle}>Name:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label style={labelStyle}>Description:</Form.Label>
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} style={inputStyle} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label style={labelStyle}>Price:</Form.Label>
          <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} style={inputStyle} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label style={labelStyle}>Quantity:</Form.Label>
          <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} style={inputStyle} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label style={labelStyle}>Category:</Form.Label>
          <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle} required />
        </Form.Group>
        <Button variant="primary" type="submit" style={buttonStyle}>
          Update Item
        </Button>
      </Form>
      </div>
    </div>
  );
};

// Internal CSS styles
const containerStyle = {
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  color: '#007bff',
};

const labelStyle = {
  color: '#343a40',
};

const inputStyle = {
  borderColor: '#ced4da',
};

const buttonStyle = {
  width: '100%',
  backgroundColor: '#007bff',
  borderColor: '#007bff',
  color: '#fff',
};

export default EditData;
