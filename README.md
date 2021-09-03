## User Management System Based on API

- User Management System developed on API Based.

***Required Functionalities***
- Develop a screen to display existing users and delete a current user by using email id.
- Develop a screen to add new user.

## APIs for above requirements
- Fetch All Registered users 

  API: "http://15.207.229.231:8000/machstatz/get_all_users"
  
  Use this API to fetch all the registered user.

- Add New User
 
  API: "http://15.207.229.231:8000/machstatz/add_new_user"
  
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

  API: "http://15.207.229.231:8000/machstatz/delete_existing_user"
  
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


### How to run the project:
- Clone the project.
- Open the Command prompt(cmd) and set the directory to the cloned project. Run the command: 
  ``` npm install ```
  The above command will download all the node modules required for the project to run.
- Now from the cloned directory run: 
  ``` npm start ```
  The above command will run the software on a localhost.
- Use the provided localhost link in any browser.

## Scrrenshots of the Project

> Fetched Data 

![Enter Game]()

> Add New User: Success

![Painter]()

> Delete Current User: Success

![Guesser]()

> Add New User - Failure

![Correct Guess]()

> Delete Current USer: Failure

![New Painter]()
