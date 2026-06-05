# Signal by Salesforce

A demo marketing site for Agentforce Adaptive Websites (AWAC) — built to showcase personalization capabilities to TMT customers across broadcast, streaming, telco, and ad tech subverticals.

## What This Is

Signal by Salesforce is a fictional B2B platform brand designed as the front-end vessel for an AWAC demo. The site is intentionally industry-neutral within TMT — no specific operator, network, or carrier — so it can be shown to any subvertical customer without breaking context. The AWAC content zone and chat widget are placeholder-ready, wired up once the AWAC library is obtained.

## Stack

- Static HTML / CSS / JS — no framework
- Hosted on Heroku via the [Heroku static buildpack](https://github.com/heroku/heroku-buildpack-static)
- `static.json` configures the buildpack root and clean URLs
- Inter font via Google Fonts
- Unsplash images referenced by direct photo ID URLs (stable)

## Structure

```
signal-website/
├── index.html          # Full single-page site
├── css/style.css       # All styles — design tokens, layout, components
├── js/main.js          # Industry tab switcher, signal bar animation
├── static.json         # Heroku static buildpack config
└── .gitignore
```

## Sections

| Section | Notes |
|---|---|
| Nav | Fixed, blurred navy, dual CTAs |
| Hero | Gradient + Unsplash photo overlay, stats card, signal bars |
| Logo strip | 6 fictional TMT brand wordmarks |
| Capabilities | 4-card grid: Unified Profiles, Real-Time Signals, Intelligent Engagement, Adaptive Experiences |
| Industry tabs | Broadcast / Streaming / Telco / Ad Tech — JS-driven content swap |
| AWAC Content Zone | 4 placeholder recommendation cards — replace with AWAC component |
| Footer | 3-column links, legal line |
| Chat widget | Floating bottom-right button — replace with AWAC chat embed |

## Deploying to Heroku

```bash
heroku create signal-by-salesforce
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static
git push heroku main
```

## Wiring Up AWAC

When the AWAC library is available:
1. Replace the `.awac-zone-inner` div contents with the AWAC Content Zone component
2. Replace the `.chat-widget` div with the AWAC Chat Window embed
3. Add your Enhanced Chat deployment ID and org config as Heroku env vars

## Related

- Salesforce org: `smb-linear-demo`
- Adaptive Agent ID: `16jdK000000VqYbQAK`
- Prompt Template: `AdaptivePrompt` (ID: `0hfdK000000SVTtQAO`)
