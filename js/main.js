/* Signal by Salesforce — main.js */

// Industry tab switcher
const industryData = {
  broadcast: {
    title: "Broadcast & Cable",
    body: "Deliver personalized content recommendations and package upsells to viewers based on real-time engagement signals and unified audience profiles.",
    features: [
      "Audience segment activation across digital and linear",
      "Real-time viewership signal capture",
      "Dynamic ad slot personalization",
      "Churn prediction and retention nudges"
    ],
    cards: [
      { name: "Prime Time Package Upsell", score: "94 match" },
      { name: "Sports Bundle Recommendation", score: "88 match" },
      { name: "Local News Engagement", score: "81 match" }
    ]
  },
  streaming: {
    title: "Streaming & OTT",
    body: "Power next-best-content recommendations and subscription upgrade flows with AI-driven personalization built on unified subscriber data.",
    features: [
      "Content affinity modeling from watch history",
      "Subscription tier upgrade propensity scoring",
      "Personalized homepage and browse experiences",
      "Win-back campaigns for churned subscribers"
    ],
    cards: [
      { name: "Premium Tier Upgrade Prompt", score: "97 match" },
      { name: "Series Continuation Nudge", score: "91 match" },
      { name: "Genre Discovery Module", score: "85 match" }
    ]
  },
  telco: {
    title: "Telco & Connectivity",
    body: "Unify customer data across service lines to deliver contextual offers, reduce churn, and personalize every digital touchpoint in the subscriber journey.",
    features: [
      "Cross-product upsell (broadband + mobile + TV)",
      "Network usage-based offer personalization",
      "Digital self-serve deflection with AI guidance",
      "Proactive retention for at-risk subscribers"
    ],
    cards: [
      { name: "5G Upgrade Campaign", score: "93 match" },
      { name: "Bundle Consolidation Offer", score: "87 match" },
      { name: "Device Trade-In Prompt", score: "79 match" }
    ]
  },
  adtech: {
    title: "Ad Tech & Platforms",
    body: "Activate first-party audience data across programmatic channels with real-time signal enrichment and identity resolution built for the cookieless era.",
    features: [
      "First-party data clean room activation",
      "Lookalike audience modeling at scale",
      "Cross-channel frequency and reach optimization",
      "Real-time contextual signal enrichment"
    ],
    cards: [
      { name: "Audience Segment Export", score: "96 match" },
      { name: "Contextual Targeting Layer", score: "89 match" },
      { name: "Identity Resolution Graph", score: "83 match" }
    ]
  }
};

function setActiveTab(vertical) {
  document.querySelectorAll('.industry-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.vertical === vertical);
  });

  const data = industryData[vertical];
  if (!data) return;

  document.querySelector('.industry-content-title').textContent = data.title;
  document.querySelector('.industry-content-body').textContent = data.body;

  const featureList = document.querySelector('.industry-features');
  featureList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

  const miniCards = document.querySelector('.industry-mini-cards');
  miniCards.innerHTML = data.cards.map(c => `
    <div class="industry-mini-card">
      <span class="industry-mini-card-name">${c.name}</span>
      <span class="industry-mini-card-score">${c.score}</span>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.industry-tab').forEach(tab => {
    tab.addEventListener('click', () => setActiveTab(tab.dataset.vertical));
  });

  // Animate signal bars in hero
  const bars = document.querySelectorAll('.hero-signal-bars span');
  const heights = [30, 55, 75, 45, 90, 65, 40, 80, 60, 35];
  bars.forEach((bar, i) => {
    bar.style.height = `${heights[i % heights.length]}%`;
  });
});
