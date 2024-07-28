# Fruit Store POS Application


## User Stories Implemented

### Customer Stories
1. **Browse Fruits**
   - As a customer, I can view a list of available fruits, complete with stock and pricing information, so that I can make informed decisions about which fruits to purchase.

2. **Manage Cart**
   - As a customer, I can keep track of the fruits and quantities I have added to my cart, including the total cost, so that I can adjust my selections as I shop.

3. **Place Order**
   - As a customer, I can submit my order for the fruits in my cart, so that I can complete my purchase. Payment is handled separately from this POS application.

4. **View Order History**
   - As a customer, I can log in and view my order history, so that I can keep track of my past purchases.

5. **Re-order Previous Orders**
   - As a customer, I can re-order a previous order, so that I can quickly repurchase the same items.

### Owner Stories
1. **Monitor Orders**
   - As an owner, I can view the orders submitted by customers, so that I can fulfill them efficiently.

2. **Track Sales**
   - As an owner, I can see the total sales for each day and for each fruit, so that I can assess the performance of my store.

3. **Manage Inventory**
   - As an owner, I can add new fruits and update stock levels, so that I can ensure my online store reflects the current inventory.


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