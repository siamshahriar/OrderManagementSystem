# Angular E-commerce Frontend

This is the frontend of a simple e-commerce app built using **Angular 19**, **Firebase**, **Tailwind CSS**, and **TypeScript**.

## 🔧 Technologies Used

- **Angular 19**
- **TypeScript**
- **Tailwind CSS**
- **Firebase Authentication**
- **Vercel** for deployment

## 🔐 Authentication

User authentication (Signup, Login, Logout) is implemented using **Firebase Authentication**.

- Unauthenticated users are redirected to the Login page.
- Authenticated users are redirected to the Product List page.

## 📄 Pages Overview

1. **Login** – Firebase-based login.
2. **Signup** – Register a new user via Firebase.
3. **Product List** – Fetch and display products from a mock API.
4. **Orders** – Manage the user's orders.

## 🛍 Product List Page

- Fetches product data (name, price, image, etc.) from a mock API.
- Each product has an "Order" button.
- On clicking "Order", the product is added to the backend with quantity tracking.

## 📦 Orders Page

- Displays a list of all ordered products via a GET request to the backend.
- Users can:
  - Increase or decrease the product quantity.
  - Delete any product from the order.
- The total price is calculated and displayed dynamically.

## 🔐 Route Protection

- Routes are protected based on user authentication status.
- Non-authenticated users cannot access Product List or Orders pages.

## 🚀 Deployment

The frontend is deployed on **Vercel**.

> 🔗 https://order-management-system-orpin.vercel.app
> Demo Login: Email: test@test.com Password: 12345678
> Or Sign Up option available !
