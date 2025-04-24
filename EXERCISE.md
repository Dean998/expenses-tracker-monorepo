# Expense Tracker Application

## Architecture Overview

This project is an **Expense Tracker** application built using the following technologies:

- **TurboRepo** for monorepo management
- **NestJS** for the backend API
- **Prisma** for ORM and database management
- **React** for the frontend
- **Chakra UI** for building a modern, responsive UI

### Project Structure

The project is organized into a monorepo using **TurboRepo**, allowing both the frontend and backend to coexist within the same repository. This helps to streamline development, especially for projects that include multiple services.

- **Backend**: The backend is built using **NestJS**, which is a powerful Node.js framework that leverages TypeScript and provides robust tools for building scalable, maintainable APIs.
- **Database**: **Prisma** is used as the ORM to interact with the database. It simplifies database queries, ensures type safety, and provides an easy-to-use query language.
- **Frontend**: The frontend is developed using **React** and styled with **Chakra UI**. Chakra UI is a simple, modular, and accessible component library that provides a consistent UI across the application.

### Backend - NestJS + Prisma + GraphQL

The backend consists of a **GraphQL API** built with **NestJS**, which allows the frontend to interact with the backend in a flexible and efficient way. The API is structured to handle the following tasks:

1. **Expense Management**:
   - You can **create**, **edit**, and **delete** expenses.
   - Each expense has a set of fields, such as `title`, `amount`, `category`, `date`, etc.
   - Prisma is used to interact with the database and manage the expenses efficiently.
2. **GraphQL**:

   - The backend exposes a **GraphQL endpoint** to allow clients (the frontend) to query and mutate the data.
   - This enables flexible querying, allowing the frontend to request exactly what it needs and nothing more.

3. **Database**:

   - Prisma handles the data models and migrations for the database.
   - The database stores information about the expenses, and Prisma ensures type safety while interacting with it.

4. **Missing Feature** (Total Expenses Field):
   - A feature that could be added is a **total field** that automatically calculates the sum of all expenses. This could be implemented by adding a `total` query or mutation in the GraphQL API. This would allow the frontend to request the total amount of expenses and display it to the user.

### Frontend - React + Chakra UI

The frontend is built using **React** for the user interface and **Chakra UI** for components. The frontend interacts with the GraphQL API to fetch and mutate data.

- **Expense Tracker**:

  - Users can view their expenses, add new ones, edit existing ones, or delete them.
  - The **React** components are modular and reusable, built using Chakra UI's components such as `Button`, `FormControl`, `Input`, and `Table`.
  - The user interface is responsive and adapts well to different screen sizes, thanks to Chakra UI's responsive design utilities.

- **GraphQL Queries**:
  - The frontend uses **Apollo Client** to interact with the GraphQL API.
  - Apollo Client makes it easy to send queries and mutations, managing data fetching and state updates efficiently.

### Technologies Used

1. **TurboRepo**:
   - TurboRepo is used to manage multiple packages within a single monorepo. This ensures that both frontend and backend dependencies are well-organized and shared efficiently between packages.
2. **NestJS**:
   - A framework for building efficient and scalable Node.js applications.
   - It provides an easy setup for GraphQL and REST APIs, dependency injection, and modular architecture.
3. **Prisma**:

   - A next-generation ORM that simplifies database management and interactions.
   - Prisma helps with type-safe queries, migrations, and schema management.

4. **React**:

   - A JavaScript library for building user interfaces. It provides a declarative way to design UI components that respond to changes in state or props.

5. **Chakra UI**:

   - A simple, modular, and accessible component library that provides a consistent and customizable UI. Chakra UI is used for building the user interface with a focus on usability and accessibility.

6. **GraphQL**:
   - A query language for APIs that enables flexible, efficient data fetching. The backend exposes a GraphQL endpoint, allowing the frontend to query the data it needs dynamically.

### Feature Ideas and Future Enhancements

- **Total Expense Calculation**:
  - Add a `total` field to the GraphQL API that calculates the sum of all expenses stored in the database. This could be queried from the frontend to show the user a running total of their expenses.
- **Filtering and Sorting**:

  - Enhance the UI to allow users to filter expenses by category, date range, or amount. Sorting by these fields would also be helpful.

- **Authentication**:

  - Implement user authentication to allow users to have their own set of expenses, ensuring privacy and data security.

- **Charts and Data Visualization**:
  - Add visualizations like bar or pie charts to give users insights into their spending habits.

---

## Conclusion

This **Expense Tracker** app provides a clean and modern architecture using **NestJS** for the backend, **Prisma** for ORM, **React** for the frontend, and **Chakra UI** for the user interface. The app allows users to manage their expenses easily, with the ability to add, edit, and delete expenses. Future enhancements can include features like total expense calculation, filtering, and data visualization.

This architecture is designed to be scalable, maintainable, and easy to extend with new features in the future.
