# NoSQL-basic-social-net

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data.

This application takes the power of MongoDB, and of mongoose and integrates these technologies into what is the basis of a social network.

The application will allow users to create, delete and modify the essential components that are commonly used in social media sites.

This application will allow users to:
-   Create, modify and delete Users
-   Create, modify and delete Thoughts associated to users
-   Create and delete reactions in response to the thoughts.
-   Create associations (friendships) between users.

This application is soleley designed for back-end, and may be tested by using Insomnia or Postman.

## Links
A walkthrough video demonstrating the functionality of the application:

The URL of the GitHub repository: https://github.com/rtrevill/NoSQL-basic-social-net


## User Story

AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data  

### Criteria

GIVEN a social network API  
WHEN I enter the command to invoke the application  
THEN my server is started and the Mongoose models are synced to the MongoDB database  
WHEN I open API GET routes in Insomnia for users and thoughts  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia  
THEN I am able to successfully create, update, and delete users and thoughts in my database  
WHEN I test API POST and DELETE routes in Insomnia  
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list  

## Routes for testing 

`/api/users`          
- GET all users
- POST 
    - Create individual user
    - Details in body (JSON)
        - username (unique)
        - email (unique)

`/api/users/:userId` 
- GET individual users
    - This will also expand any thoughts, and associated friends
- DELETE individual user (and associated thoughts)
- PUT 
    - Update individual user
    - Details in body(JSON)
        - username (unique)
        - email (unique)

`/api/users/:userId/friends/:friendId`
- POST, Create friendship
- DELETE friendship

`/api/thoughts`  
- GET all thoughts
- POST
    - Create single thought
    - Details in body (JSON)
        - thoughtText
        - username

`/api/thoughts/:thoughtId`  
- GET single thought 
    - This will also expand any reactions
- DELETE the nominated thought, with associated reactions

`/api/thoughts/:thoughtId/reactions`  
- POST
    - Create a reaction to the nominated thought
    - Details in body (JSON)
        - reactionBody
        - username
- DELETE the nominated reaction

### Licensing

This application has no licence, and may be cloned freely.  
Please do not fork.

### Author

Created by Richard T as an Assessment (18) for a Web development class.
Please check out my repository for other projects at:  
https://github.com/rtrevill