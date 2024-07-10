# Bhojanalaya Restaurant App

Bhojanalaya is a modern, responsive restaurant application built with React.js. It allows users to browse the menu, search for food items, add items to the cart, and manage their order.

## Features

- **Menu Display**: Browse through a comprehensive list of food items categorized by types.
- **Search Functionality**: Search for food items from the menu and food list.
- **Cart Management**: Add and remove items from the cart with a real-time update of item count.
- **Responsive Design**: Optimized for various screen sizes, providing a seamless experience on both desktop and mobile devices.

## How It Works

### Menu Display
The application fetches a list of food items from a context provider and displays them in a structured format. Each food item includes details such as name, image, price, description, and category.

### Search Functionality
Users can search for specific food items using the search bar. The search feature filters through the food list and menu list, displaying matching results dynamically.

### Cart Management
Users can add food items to their cart by clicking the green "+" button and remove items by clicking the red "-" button. The item count is displayed between the buttons, updating in real-time as items are added or removed.

### Responsive Design
The app is designed to be fully responsive, ensuring a great user experience on both desktop and mobile devices. The layout adjusts based on screen size, providing optimal usability.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Context API**: For state management across the application.
- **React Router DOM**: For handling routing within the application.
- **Hooks**: For managing component state and lifecycle.
