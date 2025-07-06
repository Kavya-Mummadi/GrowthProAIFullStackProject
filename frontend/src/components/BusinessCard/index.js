import { Component } from "react";
import dashboardContext from "../../context/dashboardContext";

// BusinessCard component displays business details and allows regenerating the SEO headline
class BusinessCard extends Component {
  state = { isLoading: false };

  // Fetches a new SEO headline and updates context state
  regenerateHeadline = async () => {
    this.setState({ isLoading: true });
    const { businessData, setBusinessData } = this.context;
    const response = await fetch(
      `https://growthproaifullstackproject.onrender.com/regenerate-headline?name=${businessData.name}&location=${businessData.location}`
    );
    if (response.ok) {
      const result = await response.json();
      setBusinessData({ ...businessData, headline: result.headline });
    }
    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading } = this.state;
    const { businessData } = this.context;
    // Show spinner while loading, else render business details
    return isLoading ? (
      <div className="p-6 flex justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    ) : (
      <div className="bg-blue-100 shadow-lg rounded-xl p-6 text-center text-gray-800 transition-all duration-300 hover:scale-105 hover:bg-blue-200">
        <h1 className="text-4xl font-semibold text-blue-600 mb-3">
          {businessData.name}
        </h1>
        <p className="text-xl text-gray-500">{businessData.location}</p>
        <p className="my-1">
          ⭐ <strong>{businessData.rating} Rating</strong>
        </p>
        <p className="my-1">
          📝 <strong>{businessData.reviews} Reviews</strong>
        </p>
        <p className="italic text-lg my-4">"{businessData.headline}"</p>
        <button
          onClick={this.regenerateHeadline}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-gradient-to-r from-[#F0A13A] to-[#C3C600] transition"
        >
          Regenerate SEO Headline
        </button>
      </div>
    );
  }
}

// Assign context to class component
BusinessCard.contextType = dashboardContext;
export default BusinessCard;
