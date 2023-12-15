# Instructions to run the application loacally

1. To create a user follow the format: <br/>
   API (POST): http://localhost:5000/api/users/create-user <br/>  
   Data format:

```
   {
     "user":{
        "userId": 1,
        "username": "john_doe",
        "password": "mypassword",
        "fullName": {
        "firstName": "John",
        "lastName": "Doe"
        },
       "age": 35,
       "email": "john.doe@example.com",
       "isActive": true,
       "hobbies": ["reading", "traveling"],
       "address": {
       "street": "123 Main Street",
       "city": "Exampleville",
       "country": "Exampleland"
       },
       "orders": [
       {
        "orderId": 101,
        "product": "Laptop",
        "quantity": 2,
        "price": 1200
       }
      ],
     "isDeleted": false
   }
}
```

2. Retrieve a list of all users <br/>
   API (GET): http://localhost:5000/api/users

3. Retrieve a specific user by ID <br/>
   API (GET): http://localhost:5000/api/users/1

4. To update user information <br/>
   API (PUT): http://localhost:5000/api/users/1 <br/>
   Data format:

```
 {
   "user":{
      "userId": 1,
      "username": "johnny_depp",
      "password": "mypassword",
      "fullName": {
      "firstName": "Johnny",
      "lastName": "Depp"
      },
      "age": 35,
      "email": "johnny.depp@example.com",
      "isActive": true,
      "hobbies": ["reading", "traveling"],
      "address": {
      "street": "123 Main Street",
      "city": "Exampleville",
      "country": "Exampleland"
      },
      "orders": [
      {
        "orderId": 101,
        "product": "Laptop",
        "quantity": 2,
        "price": 1200
      }
      ],
      "isDeleted": false
   }
}
```

5. Delete a user <br/>
   API (DELETE): http://localhost:5000/api/users/1

- Note : If you delete a user it won't appear in the users list
  After deleting the user you have to add another user to check further section

## Bonus section:

1. Add New Product in Order <br/>
   API (PUT): http://localhost:5000/api/users/1/order <br/>
   Data format:

```
{
   "order":  {
     "orderId": 101,
     "product": "Ac",
     "quantity": 2,
     "price": 1000
   }
}
```

2. Retrieve all orders for a specific user <br/>
   API (GET): http://localhost:5000/api/users/1/orders

3. Calculate Total Price of Orders for a Specific User <br/>
   API (GET): http://localhost:5000/api/users/2/orders/total-price
