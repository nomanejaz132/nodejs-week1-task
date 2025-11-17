const express = require('express');
const app = express();
const PORT = 5000;

const product = {
  id: 1,
  name: 'Wireless Headphones',
  imageUrl:
    'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  price: 79.99,
  description: 'Comfortable, long battery life, noise cancelling.',
  features: ['Bluetooth 5.3', '30h battery', 'Active noise cancellation'],
};

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// User route
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Noman' },
  ]);
});

// Product route
app.get('/product', (req, res) => {
  res.type('html').send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Product Page</title>
        <style>
          :root {
            font-family: system-ui, Arial, sans-serif;
          }
          body {
            margin: 0;
            padding: 32px;
            background: #f6f8fb;
            display: flex;
            justify-content: center;
          }
          .card {
            background: #fff;
            width: min(850px, 95%);
            border-radius: 14px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
            overflow: hidden;
          }
          .image-wrapper {
            width: 100%;
            height: 320px;
            overflow: hidden;
          }
          .image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .content {
            padding: 24px;
          }
          h1 {
            margin: 0;
            font-size: 26px;
          }
          .price {
            margin-top: 8px;
            color: #0b6e4f;
            font-size: 22px;
            font-weight: bold;
          }
          .desc {
            margin-top: 12px;
            color: #444;
            line-height: 1.6;
          }
          ul {
            margin-top: 14px;
            padding-left: 20px;
            color: #333;
          }
          li {
            margin-bottom: 4px;
          }
          .actions {
            margin-top: 20px;
            display: flex;
            gap: 12px;
          }
          button {
            padding: 12px 16px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            font-weight: 600;
          }
          .btn-primary {
            background: #2563eb;
            color: white;
          }
          .btn-secondary {
            background: transparent;
            border: 1px solid #ccd1dd;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="image-wrapper">
            <img src="${product.imageUrl}" 
            alt="${product.name}" />
          </div>
          <div class="content">
            <h1>${product.name}</h1>
            <div class="price">$${product.price}</div>
            <div class="desc">
              ${product.description}
            </div>
            <ul>
              <li>${product.features[0]}</li>
              <li>${product.features[1]}</li>
              <li>${product.features[2]}</li>
            </ul>
  
            <div class="actions">
              <button class="btn-primary">Add to Cart</button>
              <button class="btn-secondary">Save</button>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
