# Welcome to Boss Books

Boss Books is a placed for readers to browse and search books, save books to a personal collection, and record their notes on individual books. This single page web application was created using Rails as an API on the backend, and React and Redux to handle all client-side functionality (rendering and updating in the DOM, handling form submissions, making fetch requests to communicate with the Rails API on the backend, etc). Thunk middleware is used to handle asynchronous fetch and dispatch requests. The CSS styling uses the Bootstrap library. *Note:* This app does not have user authentication or sessions management; in order to simulate the user experience of an app with user sessions, a class variable in the User model in the Rails API is used to fetch the current user as needed.

This app was developed as a portfolio project for Flatiron School's Online Software Engineering Program.

## Installation
* Clone this repo
* `cd` into the backend directory
* Run `bundle install`
* Run `rails db:migrate` and `rails db:seed`
* Start backend server with `rails s`
* `cd` into the frontend directory
* Run `npm install`
* Start frontend server with `npm start`

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/LeonorPDX/react-books-app

## License
The project is available as open source under the terms of the MIT License.