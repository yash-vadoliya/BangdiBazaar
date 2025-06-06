# BangdiBazaar
﻿# BangdiBazaar

# BangdiBazaar

BangdiBazaar is a Node.js and Express.js-based API designed to manage and serve information about traditional Indian bangles, known as "bangdi." This API allows users to retrieve bangdi names and images, facilitating integration with e-commerce platforms, cultural catalogs, or educational resources.

## 🌟 Features

- **RESTful API**: Provides endpoints to access bangdi details.
- **Image Handling**: Supports image uploads and retrievals.
- **Modular Architecture**: Clean separation of concerns for scalability.
- **MongoDB Integration**: Stores bangdi data efficiently.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ``
   git clone https://github.com/yash-vadoliya/BangdiBazaar.git
   cd BangdiBazaar

2. Install dependencies


npm install

3. Create .env file

Create a .env file in the root directory with the following content:

PORT = your port
DB_HOST = your host
DB_USER = your user
DB_PASS = your password
DB_NAME = your database name
<!-- Replace the Mongo URI with your actual database connection string if hosted remotely. -->

Run the app


npm start
Server will be running on http://localhost:5000.

🧾 API Endpoints
GET /api/bangdis
Returns a list of all bangdi items.

GET /api/bangdis/:id
Returns a single bangdi item by ID.

POST /api/bangdis
Adds a new bangdi item.

FormData Body:

name - string (required)

image - file (required)

DELETE /api/bangdis/:id
Deletes a bangdi item by ID.

📁 Project Structure

BangdiBazaar/
├── public/
│   └── images/          # Uploaded images
├── routes/
│   └── bangdi.js        # Route logic
├── models/
│   └── Bangdi.js        # Mongoose schema
├── .env                 # Environment variables
├── server.js            # App entry point
├── package.json         # Node config
└── README.md            # Project docs


🧰 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Utilities: Multer (image upload), Dotenv

📸 Sample Response
json

{
  "id": "66512be2fa5a3cabc8e22157",
  "name": "Golden Bangdi",
  "image": "http://localhost:5000/images/golden-bangdi.jpg"
}

🛡️ License
This project is licensed under the MIT License.

🙋‍♂️ Author
Yash Vadoliya
📧 vadoliyayash1409@gmail.com
🔗 GitHub

⭐️ Support
If you find this project helpful, consider giving it a ⭐️ on GitHub!


---

Let me know if your project has authentication, advanced filtering, or other features — I’ll customize this further for you.

