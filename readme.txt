1. install mongodb: http://docs.mongodb.org/manual/installation/
	Install the MongoDB driver for NodeJS (run in console from app root):
	npm install mongoose
2. install npm packages (run in console from app root):
	npm install
3. create db adminDb in mongo db (use robomongo or cmd)
4. populate db with data (run in console from app root):
	node ./node_modules/mongodb-migrate -runmm -dbn dbSettings up	
	this script run migrations
Run the app:

1. start the server (run in console from app root):
	npm start
2. open in browser: http://localhost:3003

	
