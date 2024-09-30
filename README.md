# Twilight Project

Welcome to the **Twilight Project**! This project is designed to provide a comprehensive solution utilizing the Twilight Cyber API, featuring a modern UI built with Next.js, Redux Toolkit, and custom hooks.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the Twilight Project, follow these instructions:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd test-project
   ```

2. Install the dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

The project is organized into the following main directories:

- **`/src/app`**: Contains all the main pages of the application, structured based on Next.js conventions.

- **`/src/common`**: Houses all general components related to the project, which can be reused across various parts of the application.

- **`/src/currentPages`**: Includes all pages and their subcomponents related to specific functionalities within the app.

- **`/src/hooks`**: Contains custom hooks that provide reusable logic throughout the application.

- **`/src/redux`**: This directory contains the Redux state management files:
    - **`/domain`**: This subdirectory includes:
        - **Thunks**: For asynchronous operations.
        - **Mock Data**: Sample data for testing purposes or to simulate API responses.
        - **Types**: TypeScript types related to this module.
        - **Slice**: General state management with actions and reducers.

- **`/src/theme`**: Contains the theme configuration, including styles and design tokens used throughout the application.

## Features

- Integration with the Twilight Cyber API.
- Custom hooks for enhanced state management.
- Modular Redux structure for scalable state management.
- Reusable components for consistent UI design.

## Technologies

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Redux Toolkit**: For efficient and predictable state management.
- **TypeScript**: For type safety and better developer experience.
- **CSS Modules / MUI**: For styling the application.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.