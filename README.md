# Fruit Store POS Application


## User Stories Implemented

### Customer Stories
1. **View Available Fruits**
   - As a customer, I can see a list of fruits that are available to buy, complete with stock and pricing information, so that I can decide which fruits I want to buy.

2. **Track Shortlisted Fruits**
   - As a customer, I can keep track of the fruits and quantity that I have shortlisted, including the total amount I need to pay, so that I can adjust my purchasing decisions as I shop.

3. **Submit Order**
   - As a customer, I can submit my order of the fruits I selected, so that I can complete my purchase when I am done shopping. Assume that payment is done separately from this POS application.

### Owner Stories
1. **View Submitted Orders**
   - As an owner, I can see the orders that my customers have submitted, so that I can fulfill their orders.

## Features
1. **Homepage**
   - Displays a list of available fruits with their prices and stock levels.
   - Allows customers to add fruits to their cart.

2. **Cart**
   - Shows the fruits and quantities that the customer has added to their cart.
   - Displays the total amount for the items in the cart.
   - Allows customers to place an order.

3. **Order Confirmation**
   - Confirms the order details after the customer places an order.
   - Displays the order ID, fruits, quantities, and total amount.

4. **Dashboard (Owner)**
   - Displays a list of all orders submitted by customers.
   - Shows details of each order including the customer name, fruits ordered, quantities, and total amount.

## Technologies Used

- **Frontend**
  - React.js
  - React Router
  - Axios (for API requests)

- **Backend**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for data modeling)