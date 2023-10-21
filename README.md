# QuizMania - Quiz Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)


## Introduction

QuizMania is a web-based quiz application that allows users to take quizzes, view their results, and challenge themselves with a variety of questions. It provides a user-friendly interface and stores quiz results for review.

## Features

- Take a quiz with a series of questions.
- Receive 10 points for each correct answer.
- Review and change answers before the quiz finishes.
- Display the quiz result at the end.

## Demo

For a live demo of QuizMania, you can visit [QuizMania Demo](https://netlify.com).

## Screenshots

![Screenshot 1](https://drive.com/500x300)
![Screenshot 2](https://drive.com/500x300)
![Screenshot 3](https://drive.com/500x300)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB installed and running.

### Installation

1. Clone the repository:

```shell
git clone https://github.com/Coder-pranto/QuizMania.git
cd quizmania
```

2. Install the backend and frontend dependencies:

```shell
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Create a `.env` file in the `server` directory and add the following:

```shell
MONGODB_URI=your-mongodb-uri
PORT=5000
```

4. Start the backend server and the frontend development server:

```shell
# Start the backend server
cd server
npm start

# Start the frontend server
cd ../client
npm start
```

## Usage

1. Visit `http://localhost:5173/` in your web browser.
2. Sign in with a username to start the quiz.
3. Answer the quiz questions.
4. Review your answers and see the quiz result at the end.

## Technologies

- React
- Node.js
- Express
- MongoDB
- Redux Toolkit
- Axios
- React Router
- Vite (for the development server)

## Contributing

Contributions are welcome. Please submit a pull request if you have any improvements or feature additions.

