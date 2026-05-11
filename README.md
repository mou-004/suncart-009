# SunCart — Summer Essentials Store

A modern and responsive eCommerce web application where users can explore and purchase summer products like sunglasses, outfits, skincare, and beach accessories.

## Project Overview

SunCart provides a smooth and user-friendly shopping experience focused on summer essentials. Users can browse products, view detailed information, and place orders after authentication. The project emphasizes clean UI design, responsiveness, and secure user authentication.

##  Key Features

### Product Browsing
- Display products from a static JSON dataset  
- Product cards include image, name, rating, and price  
- “View Details” button for each product  

### Authentication System
- Email & password login and registration  
- Google login integration  
- Protected routes (Product Details page)  
- Redirect to intended page after login  

### Product Details (Protected)
- Full product details view  
- Accessible only for logged-in users  

### My Profile (Bonus Feature)
- View user information (name, email, photo)  
- Update profile (name & image)  

### UI & UX
- Fully responsive (Mobile, Tablet, Desktop)  
- Clean and modern summer-themed design  
- Toast notifications for feedback  

### Extra Sections
- Hero banner
- Popular Products section  
- Summer Care Tips  
- Top Brands showcase  

## Technologies Used

- Next.js (App Router)  
- Tailwind CSS  
- DaisyUI  
- BetterAuth  
- Animate.css  
- React Icons  
- React Toastify  

## Project Structure

### Components
Reusable UI elements such as Navbar, Footer, Product Card, etc.

### Pages
- Home  
- Products  
- Product Details (Protected)  
- Login  
- Register  
- My Profile  
- Update Profile  

### Data
- Static JSON file for product data  

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/suncart.git

# Navigate to project directory
cd suncart

# Install dependencies
npm install

# Run development server
npm run dev

## Environment Variables


```env
NEXT_PUBLIC_BASE_URL=your_base_url
BETTER_AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
```
Live Link: https://sun-cart-sooty.vercel.app/