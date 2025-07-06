import { Component } from "react";
import dashboardContext from "./context/dashboardContext";
import BusinessDashboard from "./components/BusinessDashboard";

import "./index.css";

// Root App component with shared state using Context API
class App extends Component {
  state = { businessData: null };

  // Method to update businessData in state
  setBusinessData = (data) => {
    this.setState({ businessData: data });
  };

  // Provides businessData and setter via context to the entire app
  render() {
    const { businessData } = this.state;
    return (
      <dashboardContext.Provider
        value={{ businessData, setBusinessData: this.setBusinessData }}
      >
        <BusinessDashboard />
      </dashboardContext.Provider>
    );
  }
}

export default App;
