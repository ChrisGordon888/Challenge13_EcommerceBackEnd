# E-Commerce Backend Application
This project is a backend solution for an e-commerce website. It ustilizes the power of Express.js API and Sequelize to interact with a MySQL db. This allows a company to stay competitive in the rapidly evolving e-commerce space.

# Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation 
To install the necessary dependencies, run the following command:
npm install

## Usage 
Add MySQL username, MySQL password, and database name to an env file. This will allow you to connect to your database using Sequelize.

Run the schema and seed commands to create your database and seed it with data.

Start the server and sync Sequelize models to your MySQL database by invoking the following command:
npm start

Use POSTMAN to open API GET routes for categories, products, or tags. The data for each route will be displayed in a formatted JSON.

Test API POST, PUT, and DELETE routes in POSTMAN to successfully create, update, and delete data in your database.

## Contributing
Contributions are what make an open-source community incredible. Any contributions you make are greatly appreciated.
1) Create your Feature Branch (git checkout -b "amazingFeature")
2) Add and Commit your Changes (git add . and git commit -m "Added some AmazingFeatures")
3) Push to the feature Branch (git push origin amazingFeature)
4) Open a Pull Request

## License 
Distributed under the MIT License.