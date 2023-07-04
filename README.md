# CRUD-API-NodeJS
### Installation and initiation
* Please clone/download the repo,
* Go to the *dev* branch,
* Do "npm i"

### Run the server to enable sending requests to it
Please make sure to run the app *either* in dev mode *or* in prod mode at once because they both will want to use the same port
* To run in dev mode, type in the command line "npm run start:dev"
* To build and run in prod mode, type in the command line "npm run start:prod"

### Check the requests 
I suggest that all the requests be checked in *Postman* as it's the easiest way.
1. GET (all users) example
*example request* : http://127.0.0.1:8080/api/users


*request and response screenshot* : https://prnt.sc/8dcRyYFeV9tv
***
2. GET (one user) example
* Please note that uuid in the example has to be substituted with the one that you generated


*example request* : http://127.0.0.1:8080/api/users/46ee8572-7403-4368-a23f-936f4034926f


*request and response screenshot* : https://prnt.sc/NvIeGjAX-0WK
***
3. POST (create one user) example
* Please make sure to fill in the body with a valid JSON containing name, hobbies and age parameters


*example request* : http://127.0.0.1:8080/api/users


*request and response screenshot* : https://prnt.sc/ZOBmSlT85bF4
***
4. PUT (update one user) example
* Please make sure to fill in the body with a valid JSON containing name, hobbies and age parameters
* Please note that uuid in the example has to be substituted with the one that you generated


*example request* : http://127.0.0.1:8080/api/users/d9cd8b8b-5278-4e43-bffd-629774588995


*request and response screenshot* : https://prnt.sc/uwDBtfuheII0
***
5. DELETE (delete one user) example
* Please note that uuid in the example has to be substituted with the one that you generated


*example request* : http://127.0.0.1:8080/api/d9cd8b8b-5278-4e43-bffd-629774588995


*request and response screenshot* : https://prnt.sc/k8Dmd97b8pb3



***
6. Incorrect requests (path/parameters) will lead to the corresponding error, e.g.:
* https://prnt.sc/Bu_jVhNwGBvT
* https://prnt.sc/-3ZBubtB5oY1
* https://prnt.sc/7ATdedziYGU-
* https://prnt.sc/_fW6nzzoVrvj
