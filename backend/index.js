const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//Port Number
const PORT = 5000;

//SEO Headlines
const headlines = [
  "Discover Why Locals Love [NAME] in [LOCATION]",
  "[NAME]: The Hidden Gem of [LOCATION]",
  "Top Reasons [NAME] Dominates [LOCATION]",
  "[NAME] is Revolutionizing [LOCATION]'s Market",
  "People Can't Stop Talking About [NAME] in [LOCATION]",
  "The Most Trusted Name in [LOCATION]? It’s [NAME]",
  "[NAME]: Setting the Standard for Excellence in [LOCATION]",
  "What Makes [NAME] a Must-Visit in [LOCATION]",
  "Here’s Why [NAME] Is Rated #1 in [LOCATION]",
  "[NAME] in [LOCATION]: Backed by Thousands of 5-Star Reviews",
  "You Won’t Believe What [NAME] Offers in [LOCATION]",
  "What Locals Wish They Knew About [NAME] Sooner",
  "[NAME] Is Changing the Game in [LOCATION] — Don’t Miss Out",
  "See Why [NAME] Is the Most Talked About Spot in [LOCATION]",
  "Still Undiscovered by Many: [NAME] in [LOCATION]",
];

// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  const rating = (Math.random() * 2 + 3).toFixed(1); // Random 3.0–5.0
  const reviews = Math.floor(Math.random() * 500 + 20);
  const headline = `Why ${name} is ${location}'s Sweetest Spot in 2025`;
  res.json({ rating, reviews, headline });
});

// GET /regenerate-headline
app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  const random = headlines[Math.floor(Math.random() * headlines.length)];
  const headline = random
    .replace("[NAME]", name)
    .replace("[LOCATION]", location);
  res.json({ headline });
});

// Starts the Express server on the specified PORT and logs a message to confirm it's running
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
