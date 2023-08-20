# Ecommerce-API Documentation

## Overview

The Ecommerce-API is an Application Programming Interface (API) currently in development to support e-commerce operations on an online store platform. It offers functionalities to manage products, shopping carts, orders, and customers, enabling developers to create custom applications and integrations for a seamless online shopping experience.

## Available Endpoints

The API offers the following main endpoints:

### 1. `/products`

- `GET /products`: Returns the list of products available in the catalog.
- `GET /products/{id}`: Returns the details of a specific product based on the ID.
- `POST /products`: Adds a new product to the catalog. -> IN DEVELOPMENT
- `PUT /products/{id}`: Updates the information of an existing product. -> IN DEVELOPMENT
- `DELETE /products/{id}`: Removes a product from the catalog.

### 2. `/cart`

- `POST /cart/add`: Adds a product to a customer's cart. -> IN DEVELOPMENT
- `POST /cart/remove`: Removes a product from a customer's cart. -> IN DEVELOPMENT
- `GET /cart/{customer_id}`: Returns the current content of a specific customer's cart. -> IN DEVELOPMENT

### 3. `/orders`

- `POST /orders/create`: Creates a new order based on the products in a customer's cart. -> IN DEVELOPMENT
- `GET /orders/{id}`: Returns the details of a specific order based on the ID. -> IN DEVELOPMENT

### 4. `/customers`

- `GET /customers/{id}`: Returns detailed information about a customer based on the ID.
- `POST /customers/register`: Registers a new customer.
- `PUT /customers/{id}`: Updates the profile information of a customer.
- `DELETE /customers/{id}`: Removes a customer's profile.

## Response Format

The API returns data in JSON format for all requests. Responses include standard fields like `status` to indicate the status of the request and `data` to contain the relevant response data or errors if they occur.

## Development Status

The Ecommerce-API is currently under active development. New features, improvements, and fixes are being regularly implemented. The documentation will be updated as new versions are released.

*This documentation is valid for version 1.0 of the Ecommerce-API and is subject to changes as the API evolves.*
