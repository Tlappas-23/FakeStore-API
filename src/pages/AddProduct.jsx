import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { createProduct } from '../api/fakeStoreApi'

function AddProduct() {
  const [form, setForm] = useState({})
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createProduct(form)
    setSuccess(true)
  }

  return (
    <div className="form-page">
      <h2>Add Product</h2>

      {success && (
        <Alert variant="success">
          Product created successfully (mock API)
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Title"
          required
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <Form.Control
          className="mt-2"
          placeholder="Price"
          type="number"
          required
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <Form.Control
          className="mt-2"
          placeholder="Description"
          required
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <Form.Control
          className="mt-2"
          placeholder="Category"
          required
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        <Button className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddProduct

