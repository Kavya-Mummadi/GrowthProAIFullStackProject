// Dashboard component to display the form and business card UI
// Uses Context to access and update shared business data
import { Component } from "react";
import dashboardContext from "../../context/dashboardContext";
import BusinessForm from "../BusinessForm";
import BusinessCard from "../BusinessCard";

class BusinessDashboard extends Component {
  componentDidMount() {
    document.title = "GrowthPro AI";
  }

  render() {
    return (
      <dashboardContext.Consumer>
        {({ businessData, setBusinessData }) => (
          <main className="min-h-screen bg-gradient-to-r from-[#DDE0FA] to-[#F0CBF6] flex flex-col items-center justify-start px-6 py-10 transition-all duration-300">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-black tracking-tight text-blue-700 drop-shadow-sm animate-fade-in">
                Mini Local Business Dashboard
              </h1>
              <p className="mt-2 text-lg text-gray-600 font-medium">
                Turning Business Data into SEO Superpower✨
              </p>
            </header>

            <section className="w-full max-w-xl space-y-8">
              <BusinessForm setBusinessData={setBusinessData} />
              {businessData ? (
                <BusinessCard />
              ) : (
                <div className="text-center text-sm text-gray-400">
                  ✨ Just a few clicks away from revealing your business
                  brilliance! 🚀
                </div>
              )}
            </section>
          </main>
        )}
      </dashboardContext.Consumer>
    );
  }
}

export default BusinessDashboard;
