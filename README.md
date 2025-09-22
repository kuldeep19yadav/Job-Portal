**Job Portal Application**
A modern, secure, and feature-rich job portal application built with Node.js, Express.js, and MongoDB. This application allows users to search for jobs, apply for positions, and manage their job applications, while employers can post job listings and manage applications.

🚀 Features
> User Authentication & Authorization - Secure JWT-based authentication system

> Job Management - Create, read, update, and delete job listings

> Application Tracking - Track job application status (pending, interview, rejected)

> RESTful API - Well-structured API endpoints with proper HTTP status codes

> API Documentation - Comprehensive Swagger/OpenAPI documentation

> Security - Multiple security layers including helmet, CORS, XSS protection, and data sanitization

> Error Handling - Centralized error handling middleware

🛠️ Tech Stack
- Backend Framework: Express.js 5.1.0

- Database: MongoDB with Mongoose ODM

- Authentication: JSON Web Tokens (JWT)

- API Documentation: Swagger UI with OpenAPI 3.0

- Security: Helmet, CORS, express-xss-sanitizer, express-mongo-sanitize

- Password Hashing: bcryptjs

- Logging: Morgan

- Environment Variables: dotenv

- Data Validation: Validator

📁 Folder Structure

job-portal/
├── 📁 config/                → Database & configuration
│   └── db.js                 # MongoDB connection configuration
├── 📁 controllers/           → Business logic
│   ├── authController.js     # Authentication logic
│   ├── jobsController.js     # Jobs CRUD operations
│   └── userController.js     # User management
├── 📁 middleware/            → Custom middleware
│   ├── authMiddleware.js     # JWT verification
│   ├── errorMiddleware.js    # Global error handling
│   └── sanitizeMiddleware.js # Custom data sanitization
├── 📁 models/                → MongoDB schemas
│   ├── User.js              # User schema/model
│   └── Job.js               # Job schema/model
├── 📁 routes/               → API endpoints
│   ├── authRoutes.js        # Authentication endpoints
│   ├── jobsRoute.js         # Job-related endpoints
│   ├── testRoutes.js        # Testing endpoints
│   └── userRoutes.js        # User management endpoints
├── 📁 utils/               → Helper functions
│   ├── validation.js        # Input validation functions
│   └── helpers.js           # Utility functions
├── 📄 .gitignore           # Git ignore rules
├── 📄 package.json         # Project dependencies and scripts
├── 📄 package-lock.json    # Exact dependency versions
├── 📄 server.js           # Main application entry point
└── 📄 jobs-data.json      # Sample jobs data

📦 Installation
1. Clone the repository

bash
 git clone <repository-url>
 cd job-portal
 
2. Install dependencies

bash
 npm install
 
3. Set up environment variables
Create a .env file in the root directory and add the following variables:

text
 PORT=8080
 DEV_MODE=development
 MONGO_URL=your_mongodb_connection_string
 JWT_SECRET=your_jwt_secret_key
 JWT_EXPIRE=7d
 
4. Start the development server

bash
 npm run server

🗄️ Database Schema
The application uses MongoDB with the following main collections:

> Users (for authentication and user profiles)

> Jobs (for job listings)

> Applications (for tracking job applications)

📚 API Documentation
Once the server is running, access the API documentation at:

text
 http://localhost:8080/api-doc
 
The Swagger UI provides interactive documentation for all available endpoints, including:

- Authentication routes (/api/v1/auth)

- User management routes (/api/v1/user)

- Job management routes (/api/v1/job)

- Test routes (/api/v1/test)

🔐 Security Features
> Helmet.js - Sets various HTTP headers for security

> CORS - Cross-Origin Resource Sharing enabled

> XSS Protection - Prevents cross-site scripting attacks

> Data Sanitization - Prevents NoSQL injection and other attacks

> Rate Limiting - Protection against brute-force attacks

> JWT Authentication - Secure token-based authentication

🚦 Available Scripts
** npm start - Start the production server

** npm run server - Start the development server with nodemon

** The application runs on port 8080 by default (configurable via environment variables)

📝 Job Data Structure
Jobs in the system have the following structure:

json
{
  "createdAt": "timestamp",
  "createdBy": "user_id",
  "workLocation": "string",
  "workType": "full-time/part-time/internship/contract",
  "status": "pending/interview/rejected",
  "position": "string",
  "company": "string"
}
