# Crypto Portal

# Project description:

- This was the final project during my time as a software engineering bootcamp student Flatiron. The requirements were to create a fullstack app using the following technologies: Ruby on Rails, JavaScript, React, CSS, HTML. It was a solo project, so I decided on the idea because of my enthusiasm for cryptocurrency, and a desire to gain more experience building React frontends

# features:

- View price, marketcap data, and charts for the top cryptocurrencies
- Users can signup and create an account. After logging into his or her account, a user can access the forum
- Forum: users can create new forums for cryptocurrencies which don't yet have a forum
- Users can create posts, delete posts, create comments and delete comments

# Technologies used:

- Frontend is built with React, JavaScript, CSS and HTML
- React libraries used: React Router, Styled Components, Rechartjs
- Backend is built using Ruby on Rails, and Postgres as a database
- Active Record is used to manage the database
- 3rd party API calls are made to CoinGecko

# Challenges faced:

- Setting up dynamic React Router routes to allow for navigation around the Forum, and CoinData components
- Making an API call to CoinGecko, then dynamically passing in that data to RechartJS and rendering charts correctly
- Managing React state correctly so that everything renders correctly
- The biggest challenge by far was deciding on which features I wanted to include in the project

# How to install and run the project

- Fork and clone this repo
- To setup the backend, run the following commands:
  $ bundle install
  $ rails db:create && db:migrate
  $ rails db:seed

To startup the Rails server:
$ rails s

- To setup the frontend, run the following commands:
  $ npm i && npm start --prefix client

# How to use the project

- Go to the signup page and create an account
- Currently there's no way to change your password from the UI, so save your password if you decide to deploy this project on your own
- Once logged in, browse the forums, and look through price and marketcap data for various cryptocurrencies
- Feel free to make adjustments to the CoinGecko API call in the App component. Currently 250 coins are displayed, but this number can be less, if you prefer

# Lisence

Copyright © 2022 personnamedmike

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
