# Data Visualization Project

This repository contains a data visualization project with the frontend built using Next.js and the backend developed with Adonis.js. The project aims to provide a comprehensive guide on setting up, running, and contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Frontend](#frontend)
  - [Backend](#backend)

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (version >= 12)
- npm (version >= 6)
- MySql (or any other database supported by Adonis.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/data-visualization-project.git

   ```

   For backend

2. ```bash
   cd qumuloapi
    npm install
   ```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Running the Application

To run adonis js

```js
adonis serve --dev
```

The backend server will start running on http://localhost:3333.

Steps to setup Frontend

1. Navigate to the frontend directory:

```bash
cd frontend
npm install
```

2. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be accessible at http://localhost:3000.

Screenshot
![alt text](<screenshots/Screen Shot 2024-04-10 at 6.21.43 PM.png>)
![alt text](<screenshots/Screen Shot 2024-04-10 at 6.21.51 PM.png>)
