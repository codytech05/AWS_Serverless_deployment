# 🖥️ Serverless Web Application on AWS

This project demonstrates a **fully serverless web application** built using key AWS services. The application allows users to **insert data** and **view data**, with all backend logic handled by AWS Lambda and data stored in DynamoDB. The frontend is hosted on S3 and delivered securely via CloudFront.

---

## 🚀 Features

- ✅ Insert user data via a simple HTML form
- ✅ View stored user data in a table format
- ✅ Serverless backend powered by AWS Lambda
- ✅ RESTful API using Amazon API Gateway
- ✅ Persistent storage using Amazon DynamoDB
- ✅ Static website hosting with Amazon S3
- ✅ Secure and fast delivery with CloudFront and SSL via ACM
- ✅ IAM Roles used for secure access and execution permissions

---

## 🛠️ Architecture Diagram

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/5e84aba7-656f-4554-ba55-73f278380351" />


---

## ⚙️ Technologies & Services Used

- **Amazon S3** – Hosts the static frontend (HTML, CSS, JS)
- **Amazon CloudFront** – CDN to serve the frontend globally with HTTPS via ACM
- **Amazon API Gateway** – Exposes the RESTful endpoints for frontend to interact with
- **AWS Lambda** – Backend logic (Node.js or Python) to handle GET and POST requests
- **Amazon DynamoDB** – NoSQL database to store and retrieve user data
- **IAM Roles** – Secure permission management for Lambda functions and other services
- **AWS Certificate Manager (ACM)** – Provides SSL certificate for CloudFront HTTPS

---

## 🧩 Lambda Function Overview

### 1. `InsertDataFunction` (POST)
- Triggered via `POST /data` endpoint
- Takes user input from frontend and stores it in DynamoDB

### 2. `GetDataFunction` (GET)
- Triggered via `GET /data` endpoint
- Fetches all records from DynamoDB and returns to frontend

---

## 📂 Project Structure

📁 serverless-web-app/
├── 📁 frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── 📁 lambda/
│ ├── getDataFunction.js
│ └── insertDataFunction.js
├── README.md

---

## 🌐 How to Deploy

### 🔹 Frontend (S3 + CloudFront)
1. Upload the contents of `/frontend` to your S3 bucket.
2. Enable **Static Website Hosting** in S3.
3. Create a CloudFront distribution pointing to the S3 bucket.
4. Use **AWS Certificate Manager (ACM)** to attach an SSL certificate for HTTPS.

### 🔹 Backend (Lambda + API Gateway + DynamoDB)
1. Create two Lambda functions:
   - One for POST (Insert Data)
   - One for GET (Retrieve Data)
2. Create a DynamoDB table (e.g., `UserDataTable`) with primary key as `id`.
3. Set up an **IAM Role** with appropriate permissions (Lambda to DynamoDB).
4. Create a REST API in **API Gateway**:
   - `POST /data` → InsertDataFunction
   - `GET /data` → GetDataFunction
5. Enable **CORS** in API Gateway for both endpoints.

---

📸 Screenshots 
<img width="1903" height="1070" alt="updated" src="https://github.com/user-attachments/assets/3f3aebcd-7d94-4a88-ac6d-8a2788eb86cf" />
<img width="1887" height="933" alt="s3_bucket" src="https://github.com/user-attachments/assets/1a4aef23-9902-4834-bdea-f362ea57bd12" />
<img width="1882" height="935" alt="Lambda_func" src="https://github.com/user-attachments/assets/be5418fa-0574-4931-b4bc-dd228c754ddb" />
<img width="1887" height="936" alt="DynamoDB_Table" src="https://github.com/user-attachments/assets/90fc9d33-020d-4545-87eb-b821ae78d07b" />
<img width="1872" height="928" alt="Cloud_front" src="https://github.com/user-attachments/assets/c065f7e9-19f2-4bb3-845b-f945b9a8f94e" />
<img width="1875" height="927" alt="API_gateway" src="https://github.com/user-attachments/assets/1db47df1-9147-4e04-abab-fa7c47232080" />







