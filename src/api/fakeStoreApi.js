import axios from 'axios'

// FakeStore API base URL
const BASE_URL = 'https://fakestoreapi.com/products'

// Fetch all products
export const getAllProducts = () => axios.get(BASE_URL)

// Fetch single product
export const getProductById = (id) =>
  axios.get(`${BASE_URL}/${id}`)

// Create product (mock)
export const createProduct = (product) =>
  axios.post(BASE_URL, product)

// Update product (mock)
export const updateProduct = (id, product) =>
  axios.put(`${BASE_URL}/${id}`, product)

// Delete product (mock)
export const deleteProduct = (id) =>
  axios.delete(`${BASE_URL}/${id}`)
