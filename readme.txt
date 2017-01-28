1. install mongodb: http://docs.mongodb.org/manual/installation/
	Install the MongoDB driver for NodeJS (run in console from app root):
	npm install mongoose
2. install ExpressJS:
	npm install -g express
	npm install -g express-generator
3. populate db with data (run in console from app root):
	a) open db and drop collections:
		- mongo barberDb
		- db.barbers.drop()
		- db.services.drop()
		- db.users.drop()
		- exit
	b) import new data:
		- mongoimport --db barberDb --collection services < services.json
		- mongoimport --db barberDb --collection barbers < masters-list.json
		- mongoimport --db barberDb --collection users < admin-list.json

Run the app:

1. start the server (run in console from app root):
	npm start
2. open in browser: http://localhost:3001

	
