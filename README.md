## User Management System Based on API

- User Management System developed on API Based.

***Required Functionalities***
- Develop a screen to display existing users and delete a current user by using email id.
- Develop a screen to add new user.

## APIs for above requirements
- Fetch All Registered users 

  API: "http://3.6.93.159:7883/machstatz/get_all_users"
  
  Use this API to fetch all the registered user.

- Add New User
 
  API: "http://3.6.93.159:7883/machstatz/add_new_user"
  
  Use this to create new User
  
   - Payload required for adding user:
   
      {
      
      email: "test@gmail.com"
      
      fist_name: "test"
      
      last_name: "user"
      
      pwd: "1234"
      
      username: "test user"
      
      }
      
   - Method: post
   
   - Success Response:
   
      {
      
      message: "Created the new user successfully."
      
      status: "Success"
      
      }
      
   - Failure Response:
   
      {

      message: "User with provided email or username is already exist."

      status: "Error"

      }
    
    *Email and Username should be unique to other existing users.
    

- Delete Existing User

  API: "http://3.6.93.159:7883/machstatz/delete_existing_user"
  
  Use this API to delete the existing user
  
  
   - Query Params required for deleting user:
   
      {
      
      email: "test@gmail.com"
      
      }
   - Method: delete
   
   - Success Response:
   
      {
      
      message: "User deleted successfully."
      
      status: "Deleted"
      
      }
      
   - Failure Response:
   
      {
      
      message: "Unable to delete the user or user may not exist."
      
      status: "Error"
      
      }


### How to run the project on Local:
- Clone the project - master branch.
- Open the Command prompt(cmd) and set the directory to the cloned project. Run the command: 
  ``` npm install ```
  The above command will download all the node modules required for the project to run.
- Now from the cloned directory run: 
  ``` npm start ```
  The above command will run the software on a localhost.
- Use the provided localhost link in any browser.
- NOTE: gh-pages branch is included to deploy it on gh-pages

## Video Demo of the Project-Assignmemnt

> Demo Video


> [![Watch the video](https://img.youtube.com/vi/b4o7LtrRspU/maxresdefault.jpg)](https://youtu.be/b4o7LtrRspU)
