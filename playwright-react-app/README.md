# Playwright Test React App

This is a simple React application created with Vite and styled with Material UI, designed to be used for learning and testing with Playwright.

## Features

- **Login Page:** A basic login form with username and password fields.
  - **Credentials:**
    - Username: `testuser`
    - Password: `testpass`
- **Dashboard Page:** A simple page displayed after successful login, with a logout button.
- **Material UI:** The application uses Material UI components for a modern and responsive user interface.

## Getting Started

Follow these steps to set up and run the application locally.

### Prerequisites

- Node.js (which includes npm) installed on your system.

### Installation

1. **Navigate to the project directory:**
   Open your terminal or command prompt and navigate to the `playwright-react-app` directory:
   ```bash
   cd playwright-react-app
   ```

2. **Install dependencies:**
   Install the necessary Node.js packages:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will typically be accessible at `http://localhost:5173` (or another available port if 5173 is in use).

## For Playwright Testing

This application provides a straightforward scenario for practicing Playwright tests:

- **Login Flow:** Automate entering credentials and clicking the login button.
- **Navigation:** Verify redirection to the dashboard after login.
- **Element Interaction:** Interact with text fields, buttons, and verify text content.
- **Logout Flow:** Automate clicking the logout button and verifying redirection back to the login page.

Feel free to modify the application to add more features and complexity for advanced Playwright testing scenarios.
