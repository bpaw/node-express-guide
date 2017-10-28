# node-express-guide

## Make sure you've downloaded Node version 8.7

We need 8.7 because it's the only version that is compatible with Heroku CLI, which we will be using to host our API.

After cloning this repo, you should have all the files necessary to start a Node project.

1. run 'npm install' to download the necessary dependencies.

2. run 'npm start' to run the server code. You can see verify that it's working if you go to http://localhost:3000/

3. open server.js and add an app.get('/[route_name]', ... ) call. You can name it whatever you want.

4. use the curl command to verify your route works. 
* make sure that you ran npm start
* in another window, run 'curl -X GET http://localhost:3000/[whatever you put for route_name]'

You should get back whatever JavaScript object you passed into res.json()

5. cd into the routes directory and open users.js
* add a new endpoint here as well, the process should be very similar to the previous example
* in another window, run 'curl -X GET http://localhost:3000/users/[whatever you put for route_name]'
