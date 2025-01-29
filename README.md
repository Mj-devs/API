# Node.js Public API

## Description
This is a simple **Node.js API** that returns a JSON response containing:
- A registered email address.
- The current datetime in ISO 8601 format (UTC).
- A GitHub repository URL.

This API is built with **Express.js** and includes proper **CORS handling**, and **HTTP status codes**.

---

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm (comes with Node.js)

### Installation & Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Mj-devs/Backend-dev.git
   cd Backend-dev
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the API locally:
   ```bash
   node index.js
   ```
4. The API will start on **http://localhost:8080** by default.

---

## API Documentation
### **Base URL**
When deployed, the API will be accessible at:
```
[https://api-ten-delta-27.vercel.app/]
```

### **Endpoint**
#### **GET /**
Returns a JSON response with the required information.

#### **Response Format**
```json
{
  "status": 200,
  "email": "developersholotan@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Mj-devs/Backend-dev"
}
```


## Deployment
This API can be deployed on platforms like **Vercel, Railway, or AWS**. To deploy on **Railway**, follow these steps:
1. Link the GitHub repository to Railway.
2. Set the **PORT** environment variable if needed.
3. Deploy and get a publicly accessible URL.

---

## Related Resources
For more Node.js developers, visit: [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---

## Author
Mojoyinoluwa Sholotan/Denvz

