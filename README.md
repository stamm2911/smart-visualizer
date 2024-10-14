# Pharus – Front-end Take-home Assignment

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

```md
This project is part of the Pharus front-end take-home assignment.
The task involves building a chat interface and a data visualization chart using React.js,
Material-UI, Context API, Axios, and Apache ECharts. This README will guide you through
the installation process and provide an overview of the project structure and functionality.
```

## Table of Contents

- [Installation](#installation)
- [Assignment Overview](#assignment-overview)
- [Task 1: Chat Interface](#task-1-chat-interface)
- [Task 2: Double Vertical Bar Chart](#task-2-double-vertical-bar-chart)
- [Additional Tasks](#additional-tasks)
- [License](#license)
- [Contribute](#contribute)
- [Questions](#questions)

## Installation

### Prerequisites

- Node.js >= 14.x
- Yarn >= 1.22.x
- mui/material: 5.16.7
- axios: ^1.7.7
- echarts: ^5.5.1
- echarts-for-react: ^3.0.2
- react: ^18.3.1
- TypeScript: ^5.5.3

### Steps to Install and Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/pharus-frontend-assignment.git
   cd pharus-frontend-assignment
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   yarn dev
   ```

4. **Access the app:**
   Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

5. **Build for production:**
   If you want to build the project for production, run the following command:

   ```bash
   yarn build
   ```

6. **Preview the production build:**
   To preview the production build locally:
   ```bash
   yarn serve
   ```

---

## Assignment Overview

This take-home assignment consists of two main tasks: building a chat interface and a double vertical bar chart for data visualization, using the following stack:

- **React.js**
- **MUI (Material-UI)**
- **Context API**
- **Hooks**
- **Axios**
- **Apache ECharts**

### Design:

Please follow the design provided in the [Figma](https://www.figma.com/design/YVjXH0HdWwnBlXv9mPw9zr/Pharus---Front-End-take-home-assignment?node-id=0-1&node-type=canvas&t=jLJMey0jOisCweC9-0) and ensure the UI is responsive. The smallest screen size should be a landscape iPad.

## Task 1: Chat Interface

### Location:

The chat interface should be located on the right side of the view.

### Functionalities:

- When a message is sent, the chat should auto-populate a response using a random text generator API.
- The chat interface can be collapsed by clicking the “X” button in the top right corner.
- The chat should be hidden initially and revealed by clicking a purple button in the bottom right corner.
- Chat history should be saved in the session, and should include:
  - Message
  - User who sent the message
  - Timestamp

### Design Details:

- The buttons on top of the chat interface are decorative, except the “X” button which collapses the chat.

## Task 2: Double Vertical Bar Chart

### Data Source:

The data should be fetched from an API.

### Functionalities:

- Create a double vertical bar chart to display the fetched data.
- When hovering over a bar:
  - Display the data in a tooltip (use default EChart tooltip).
  - Reduce the transparency of other bars to 80%, highlighting the hovered bar.
- Display a large number above the chart, representing the total revenue from all periods combined.

## Additional Tasks

- **Context Management:**  
  Implement two separate contexts:

  - `Chart.context`
  - `Chat.context`

- **State Management:**  
  Use React Hooks for managing states effectively across the application.

We’re excited to see your work!

---

## License

© Licensed under the Apache License 2.0

---

## Contribute

Please refer to the contribution guidelines for this project before submitting any changes:

1. Fork the repository on GitHub.
2. Clone the project locally.
3. Create a new branch for your feature or bug fix.
4. Commit your changes to your branch.
5. Push your work to your fork.
6. Submit a Pull Request (PR) for review.

---

## Questions

For any questions, feel free to reach out:

- GitHub: [stamm2911](https://github.com/stamm2911)
- Email: edstamm29@gmail.com
