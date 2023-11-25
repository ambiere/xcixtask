## Introduction

Welcome to the **xcixtask** Todo API, a modern and efficient RESTful to-do API built with the Fastify framework. This API is designed to provide a seamless and user-friendly experience for managing your to-do tasks. With a focus on performance and ease of use, the xcixtask Todo API empowers you to effortlessly create, update, retrieve, and delete your to-do items, all while ensuring secure authentication and authorization. The **xcixtask** API is a versatile and efficient ToDo API developed using the Fastify framework. It provides a robust platform for managing tasks, enabling users to organize, create, update, retrieve, and delete tasks effortlessly. Designed with simplicity and performance in mind, this API offers a seamless experience for developers looking to integrate task management functionality into their applications.

**Features**: Task Management, User Authentication, Fast and Lightweight, Flexible Endpoints, Scalable and Customizable <br>
**Technologies**: Fastify, @fastify/jwt, MongoDB, Swagger/OpenAPI <br>
**Usage**: Personal Task Management Applications, Team Collaboration Platforms, Project Management Tools, Workflow Automation Systems

[![Test](https://github.com/zhid0399123/xcixtask/actions/workflows/ci.yml/badge.svg)](https://github.com/zhid0399123/xcixtask/actions/workflows/ci.yml) &nbsp;
[![Deployment](https://github.com/zhid0399123/xcixtask/actions/workflows/fly.yml/badge.svg)](https://github.com/zhid0399123/xcixtask/actions/workflows/fly.yml) &nbsp;
[![js-standard-style](https://img.shields.io/badge/style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

<br>

## 1.0 Development

If you would like to run the API locally on your machine, follow the installation procedures below. Once set up, developers can explore the API endpoints, authenticate users, and start integrating task management functionalities seamlessly into their applications but before getting started, ensure you have the following prerequisites:

1 **Node.js**: Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/en/download/current). <br>
2 **pnpm (Perfomant Node Package Manager)**: Fast, disk space efficient package manager. Install pnpm globally by running `npm install -g pnpm` in your terminal/command prompt and verify pnpm by running `pnpm -v`. or refer to pnpm's installation guide from [pnpm.io](https://pnpm.io/installation). <br>
3 **GitHub Account**: Create or log in to your GitHub account to access the xcixtask API repository. <br>
4 **Docker**: If you prefer running the API within a Docker container, install Docker Desktop or Docker Engine according to your operating system from [docker](docker.com/get-started).

### 1.1 Installation

Open your terminal or command prompt and run the following commands

```bash
git clone https://github.com/zhid0399123/xcixtask.git
cd xcixtask
pnpm install
```

> Note
> Before starting the API remember to set up configuration. Refer to [.env.example](#.env.example) file to set up the necessary configurations.

### 1.2 Running the API

Once the dependencies are installed and the configuration is set up, use the following command to start the API server:

```bash
pnpm start
#or
pnpm run dev
```

The API should now be running locally. You can access the API endpoints via `http://0.0.0.0:your-port`.

## 2.0 Deployed API

The xcixtask API is deployed and accessible via HTTPS requests. To interact with the deployed API, use the following base URL to access the deployed API:

```bash
https://xcixtask.fly.dev

```

The deployed API requires authentication. Ensure you have necessary credential (access token) to include in your requests. To obtain valid token, you first have to register by making a POST request to `https://xcixtask.fly.dev/v1/auth/register` with username and password as the request payload.

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"username":"<username>", "password":"<password>"}' \
https://xcixtask.fly.dev/v1/auth/register
```

After successfully registration, you must authenticate to acquire the access token.

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"username":"<username>", "password":"<password>"}' \
https://xcixtask.fly.dev/v1/auth/authenticate
```

> Explore Endpoints:
> Refer to the API Documentation for detailed information on available endpoints, request parameters, and response formats.

## 3.0 Example Request

Here's an example using cURL to create a new task on the deployed API:

```bash
curl -X POST -H "Content-Type: application/json" \
-H "Authorization: Bearer <access token>" \
-d '{"title": "Task Title"}' \
https://https://xcixtask.fly.dev/v1/todos
```

## 4.0 Contributing

We welcome contributions and suggestions to enhance the functionality and robustness of the xcixtask API. Please refer to the [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 5.0 License

The xcixtask API is released under the MIT license. Refer to the [LICENSE](LICENSE) file for more details.
