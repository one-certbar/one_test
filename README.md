# NodeJS,Mongoose,Express Project in MVC Architecture


**supported version of nodejs-15.13.0**,
**supported version of mongoose-4.0**

- This is a Web application, developed using MVC pattern with Node.js, ExpressJS, and Mongoose ODM. 
- Basic boilerplate for web applications, built on Express.js using the Model–View–Controller architectural pattern.
- MongoDB database is used for data storage, with object modeling provided by Mongoose.

# Initial
- Configure a basic server in app.js.
- Organize the routes with Express Router.
- Use the mainRoutes in app as middleware.
- Set a final use after the routes, to display a 404 message for the unhandled requests.
1. Install needed Node.js modules:
    ```$ npm install```
2. execute server:
    ```$ npm start```
3. When the app will run successfully,
       - One user with User role,
	   # Default User credentials
	   **email** : Gonzalo0@yahoo.com
	   **password** : XjQ6XSZgmcaTOeD


## How to run with Docker ? :
- if you have docker file you can execute following command

- build the image
	```$ docker build --pull --rm -f "Dockerfile" -t <imageName>:latest "." ```
	
- execute the command
	```$ docker run -p 3000:3000 <imageName> ```


# Default folder structure:

	--project_folder
		--config
		--controllers
		--jobs
		--logs
		--middleware
		--models
		--postman
		--public
		--routes
		--services
		--utils
		--views
		--app.js
		--.env
		--.gitignore
		--.eslintrc.js
# app.js
- entry point of application.
# config
- passport strategy for all platforms.
- based on Auth Model - authentication files has been generated.
- Auth constant File that has authentication configuration constants
- Used .env file and configure the db connection string to use in the project.
# controllers
- includes controller files per model
- Controllers are separated per Platform

     	  -controller
     	        -admin
     	          -modelController.js
     	        -device
     	          -modelController.js
     	        -desktop
     	          -modelController.js
     	        -client
     	          -modelController.js
     
# jobs
- Cron jobs related Files and configuration
# logs
- Log file
# middleware
- User authentication Middleware based on Roles and permission for Routes' access
- Custom Policy files
# models
- Mongoose Models , as per user defined schema 
# postman
- Postman collection File for Platform based APIs that are generated.
- Import this JSON in Postman to test the APIs.
# public 
- You can add static files like like images, pdf etc.
# routes
- based on platform,separate folder is generated,within those folders model wise route files are that has model crud APIs' routes.
- index.js file, main file which includes all platform routes.
- added index files in app.js to access the routes of the application.
# services
     	-jobs
       		-cron job services
     	-auth.js
       		-Logic for JWT Tokenization for user to login into Application using username and password along with otp if required.
# utils
	     -validation
     		   -joi validations files.
     		   -files are separated by models.
     	 -common.js
       		   -converted object to enum function.
     	 -dbService.js
       		 -common Database functionalities
     	  	 -getAllDocuments(find all documents)
     	  	 -updateDocuments(update single documents in db)
     	  	 -deleteDocuments(delete single documents in db)
     	  	 -createDocuments(create single documents in db)
     	  	 -getDocumentByQuery(find single document)
			 -getSingleDocumentById(find by id)
     	  	 -softDelete
     	  	 -findExistData
     	  	 -bulkInsert(insert multiple documents in db)
     	  	 -bulkUpdate(update multiple documents in db)
     	  	 -countDocument
			 -Aggregation
     	 -messages.js
  		     -static messages that are sent with response - contains status and Data
	      -responseCode.js
  		     -codes for responses
	      -validateRequest.js
  		     -validate schema based on joi validation
# views
- add ejs files