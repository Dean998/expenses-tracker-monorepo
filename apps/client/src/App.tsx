import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloClient";
import ExpenseTracker from "./components/ExpenseTracker";
const font: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  textAlign: "center",
  margin: "20px 0",
};

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1 style={font}>Expense Tracker</h1>
        </header>
        <main>
          <ExpenseTracker />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
