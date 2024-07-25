# Booking Form

This ReactJS-based web application that allows users to book a laser tag session by filling out a user-friendly form. The application supports form validation, submission and displays the submitted data in a modal.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Live Demo](#live-demo)
4. [Installation and Setup](#installation-and-setup)
5. [Project Structure](#project-tructure)

## Features
- **User-Friendly Form:** Input fields for First name, Last name, Email address, Number of people in the booking, Desired date and time for the session and Additional comments.
- **Validation:** Ensures that all required fields are filled out correctly before submission.
- **Submission:** Data is submitted and displayed in a modal for confirmation.

## Technologies Used
- **ReactJS:** [ReactJS](https://react.dev) for building the user interface.
- **SCSS:** [Sass](https://sass-lang.com) for styling the application.
- **react-datepicker:** [react-datepicker](https://reactdatepicker.com/) for selecting the booking date.
- **Vite:** [Vite](https://vitejs.dev) for fast development.

## Live Demo
[View the live demo](https://booking-form.mantra-dev.com)

## Installation and Setup

### Prerequisites
Ensure you have **Node.js** (version 20.6.1) and **npm** (version 9.8.1).

### Steps to Run Locally
1. **Clone the Repository**
    ```sh
    git clone https://github.com/petra-lukic/booking-form.git
    cd booking-form
    ```
2. **Install Dependencies**
    ```sh
    npm install
    ```
3. **Run the Application**
    ```sh
    npm run dev
    ```
    
4. **Open in Browser**
   Navigate to [http://localhost:5173](http://localhost:5173) in your web browser to see the application in action.

## Project Structure
- **public/**: Contains static files.
- **src/**: Contains the main application source code.
  - **App.jsx**: Main application component.
  - **main.jsx**: Entry point for the React application.
  - **Modal.jsx**: Component for displaying the modal with booking details.
  - **Styles/**: SCSS files for styling the application.
    - **App.scss**: Styles for the main application.
    - **Modal.scss**: Styles for the modal component.
    - **Calendar.scss**: Customizes the default styles of **react-datepicker** to align with the design of the application.
    - **Variables.scss**: Contains color variables used throughout the application for consistent theming and styling.
- **index.html**: The main HTML file that serves as the entry point for the application.

## Usage
After starting the application, use the form to input booking details. Upon submission, a modal will display the entered information.
