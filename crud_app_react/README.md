Youtube:
https://www.youtube.com/watch?v=re3OIOr9dJI


create two folders 
client and server
cd client
npx create-react-app .
npm start
remove app.test.js, index.css, logo.svg, serviceWorker.js, setupTests.js
Only things needed are App.js, App.css, index.js

cd server
npm init => now package.json is created
create index.js file
npm install express
npm install body-parser
npm install mysql
npm install nodemon
modify package.json > scripts to 
"start": "node index.js"
"devStart":"nodemon index.js"

npm run devStart