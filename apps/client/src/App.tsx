import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Expense Tracker</h1>
        </header>
        <main>
          <ExpenseTracker />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
