import { Component } from "react";
import dashboardContext from "../../context/dashboardContext";

// Form component to collect business name and location, and fetch SEO data
class BusinessForm extends Component {
  state = {
    name: "",
    location: "",
    nameError: false,
    locationError: false,
    isLoading: false,
  };

  // Handle name input change and validation
  handleName = (event) => {
    const value = event.target.value;
    this.setState({
      name: value,
      nameError: value.trim() === "",
    });
  };

  // Handle location input change and validation
  handleLocation = (event) => {
    const value = event.target.value;
    this.setState({
      location: value,
      locationError: value.trim() === "",
    });
  };

  // Validation of name on blur
  onBlurName = (event) => {
    this.setState({ nameError: event.target.value.trim() === "" });
  };

  // Validation of location on blur
  onBlurLocation = (event) => {
    this.setState({ locationError: event.target.value.trim() === "" });
  };

  // Submitting the form, call backend API, and update global context
  onSubmitForm = async (event) => {
    event.preventDefault();
    const { name, location } = this.state;

    if (name.trim() && location.trim()) {
      this.setState({ isLoading: true });
      const response = await fetch("http://localhost:5000/business-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location }),
      });

      const data = await response.json();
      // Update context with received data
      this.context.setBusinessData({ ...data, name, location });
      // Resetting form state
      this.setState({
        name: "",
        location: "",
        nameError: false,
        locationError: false,
        isLoading: false,
      });
    } else {
      this.setState({
        nameError: name.trim() === "",
        locationError: location.trim() === "",
      });
    }
  };

  render() {
    const { name, location, nameError, locationError, isLoading } = this.state;

    return (
      <>
        <form
          className="bg-gradient-to-r from-[#7BF2E9] to-[#6EE2F5] shadow-md rounded-xl p-10 flex flex-col gap-4"
          onSubmit={this.onSubmitForm}
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Business Name"
              value={name}
              onChange={this.handleName}
              onBlur={this.onBlurName}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {nameError && (
              <p className="text-lg text-red-600 -mt-1">
                *Business name is required.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={this.handleLocation}
              onBlur={this.onBlurLocation}
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {locationError && (
              <p className="text-lg text-red-600 -mt-1">
                *Business location is required.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition self-center"
            disabled={isLoading}
          >
            Submit
          </button>
        </form>
        {isLoading && (
          <div className="mt-4 flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </>
    );
  }
}

// Link context to class component

BusinessForm.contextType = dashboardContext;
export default BusinessForm;
