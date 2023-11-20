# xcixtask

Modern and efficient RESTful to-do API built using the Fastify framework —provides a seamless and user-friendly experience for managing your to-do tasks

[![Test](https://github.com/zhid0399123/xcixtask/actions/workflows/ci.yml/badge.svg)](https://github.com/zhid0399123/xcixtask/actions/workflows/ci.yml) &nbsp;
[![Deployment](https://github.com/zhid0399123/xcixtask/actions/workflows/fly.yml/badge.svg)](https://github.com/zhid0399123/xcixtask/actions/workflows/fly.yml) &nbsp;
[![js-standard-style](https://img.shields.io/badge/style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

<br>

## Introduction

Welcome to the **xcixtask** Todo API, a modern and efficient RESTful to-do API built with the Fastify framework. This API is designed to provide a seamless and user-friendly experience for managing your to-do tasks. With a focus on performance and ease of use, the xcixtask Todo API empowers you to effortlessly create, update, retrieve, and delete your to-do items, all while ensuring secure authentication and authorization. The **xcixtask** API is a versatile and efficient ToDo API developed using the Fastify framework. It provides a robust platform for managing tasks, enabling users to organize, create, update, retrieve, and delete tasks effortlessly. Designed with simplicity and performance in mind, this API offers a seamless experience for developers looking to integrate task management functionality into their applications.

### Key Features

**Task Management**: Create, retrieve, update, and delete tasks with ease. <br>
**User Authentication**: Secure endpoints with authentication mechanisms for user-specific task management. <br>
**Fast and Lightweight**: Built on the Fastify framework, ensuring high performance and minimal overhead. <br>
**Flexible Endpoints**: Supports various endpoints to handle task operations efficiently. <br>
**Scalable and Customizable**: Easily adaptable to different project requirements and scalable for future enhancements. <br>

### Technologies

**Framework**: Fastify - Known for its speed and low overhead, ensuring rapid API responses. <br>
**Database**: MongoDB - Source-available cross-platform document-oriented database program. <br>
**Authentication**: @fastify/jwt - JWT utils for Fastify, internally it uses fast-jwt. <br>
**API Documentation**: Swagger/OpenAPI

### Usage Scenarios

The xcixtask API serves as a fundamental tool for applications requiring task management capabilities. It can be utilized in various scenarios, including but not limited to:

**Personal Task Management Applications** <br>
**Team Collaboration Platforms** <br>
**Project Management Tools** <br>
**Workflow Automation Systems** <br>

<br>

## Table of Contents

- [Getting Started](#1-getting-started)
-

## 1. Getting Started

To begin using the **xcixtask** API, follow the installation procedures below. Once set up, developers can explore the API endpoints, authenticate users, and start integrating task management functionalities seamlessly into their applications.
<br>

### 1.1 Prerequisites

Before getting started, ensure you have the following prerequisites:

1.1.1 **Node.js**: Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/en/download/current). <br>
1.1.2 **pnpm (Perfomant Node Package Manager)**: Fast, disk space efficient package manager. Install pnpm globally by running **`npm install -g pnpm`** in your terminal/command prompt and verify pnpm by running **`pnpm -v`**. or refer to pnpm's installation guide from [pnpm.io](https://pnpm.io/installation).
1.1.3 **GitHub Account**: Create or log in to your GitHub account to access the xcixtask API repository. <br>
1.1.4 **Docker**: If you prefer running the API within a Docker container, install Docker Desktop or Docker Engine according to your operating system from [docker](docker.com/get-started).
<br>

### 1.2 Installation

Follow these steps to get the **xcixtask** API up and running on your local machine:

1.2.1 **Clone the Repository** <br>
Open your terminal or command prompt and use the following command to clone the **xcixtask** API repository:

```bash
git clone https://github.com/zhid0399123/xcixtask.git
```

1.2.2 **Navigate to the Directory**<br>
Move into the cloned directory using:

```bash
cd xcixtask
```

1.2.3 **Install Dependencies**<br>
Install the required dependencies using pnpm:

```bash
pnpm install
```

1.2.4 **Set Up Configuration**<br>
Refer to [.env.example](#.env.example) file to set up the necessary configurations. <br>
<br>

### 1.3 Running the API

Once the dependencies are installed and the configuration is set up, follow these steps to run the `xcixtask` API:

1.3.1 **Start the Server**<br>
Use the following command to start the API server:

```bash
pnpm start
```

1.3.2 **Access API Endpoints**<br>
The API should now be running locally. You can access the API endpoints via **`http://0.0.0.0:your-port`**.
