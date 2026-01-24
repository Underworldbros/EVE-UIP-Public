

# EVE Online Unified Intelligence Application
## Project Overview & Concept Cover Letter

### Purpose
This document serves as a high-level introduction and conceptual overview for the **EVE Online Unified Intelligence Application**. It defines the project’s intent, guiding principles, and core feature domains as they currently stand in the ideation phase. All features described are **subject to change** as development progresses, constraints are discovered, and priorities are refined.

This is a living document, not a fixed specification.

---

## Project Vision
EVE Online produces immense volumes of data, but that data is fragmented across many specialized tools and websites. This project aims to consolidate those functions into **one cohesive, resource-efficient application** that emphasizes context, synthesis, and decision support.

The application is designed to help answer practical questions such as:
- *Where should I operate right now?*
- *What activities are actually profitable for me?*
- *What risks or competition should I expect?*
- *What should I buy, build, or replace next?*

---

## Core Design Principles

- **Modularity First**  
  Each functional domain is isolated to allow independent development, iteration, and replacement.

- **Data Honesty**  
  All analytics are heuristic and statistical. Predictions are framed as guidance, not certainty.

- **Player-Relevant Context**  
  Data is filtered and structured to support real player decisions, not raw data exploration.

- **Incremental Delivery**  
  A stable, useful core takes priority over feature completeness.

---

## Key Feature Domains (Current Concept)

### Market Intelligence
Market intelligence focuses on **economic analysis independent of ships or fittings**, driven purely by market data and character skills that affect trading costs.

Key capabilities include:
- Historical price trends and volume analysis
- Profit and margin calculations
- Broker fee, tax, and skill-based cost adjustments
- Order optimization suggestions
- Manufacturing profitability analysis based on inputs, outputs, and demand

---

### Wallet & Financial Analytics
This domain provides a structured view of income and expenditure across all activities.

Key capabilities include:
- Wallet parsing and categorization
- Income vs expenditure reporting
- Realized vs unrealized profit tracking
- Long-term financial summaries
- Exportable reports

The focus is on understanding **where ISK is gained or lost over time**.

---

### Run History & Activity Journal
The activity journal records what the player actually does in space and how those activities perform.

Key capabilities include:
- Persistent run logging for combat, mining, exploration, and other activities
- Manual and clipboard-based data entry
- Run metadata (site type, system, ship, notes)
- Historical performance analysis (ISK/hour, averages, variance)
- Comparative analysis across systems, routes, and activity types

---

### Advanced Map & Traffic Intelligence
The map system, inspired by tools such as **EVEeye**, acts as a central intelligence layer.

Key capabilities include:
- Universe-wide map with security, sovereignty, and topology context
- Dynamic overlays for:
  - Player jumps
  - NPC kills
  - Event-driven traffic
- System congestion and competition indicators
- Route planning and system bookmarking

The map is designed to support **where to go and where to avoid**, not just visualization.

---

### Game Events & System Pressure Modeling
Large-scale in-game events materially alter player movement and competition.

Key capabilities include:
- Tracking of incursions, invasions, seasonal events, and similar phenomena
- Modeling spillover effects into surrounding systems
- A composite **System Pressure Index** that reflects abnormal activity levels

This domain feeds directly into map intelligence and site availability estimates.

---

### Player Tracking & Threat Awareness
This domain provides situational awareness regarding other players.

Key capabilities include:
- Heuristic threat ratings based on kill activity and security context
- Player, corporation, and alliance tagging
- Watchlists and alerts
- Kill density and temporal heatmaps

Threat indicators are explicitly subjective and user-adjustable.

---

### Ship Fitting & Operational Costs
Ship fitting is treated as an **operational decision**, not a market calculation input.

Key capabilities include:
- Tracking of commonly used ships and fits
- Identification of recurring expenditures:
  - Hull replacements
  - Ammunition and charges
  - Drones, boosters, and consumables
- Mapping fits to market items to inform:
  - What needs to be purchased
  - Replacement cost estimates
  - Long-term operational budgeting

This domain directly informs **what to buy**, not **how prices are calculated**.

---

### Character Management & Skill Planning
Character management focuses strictly on **skills and training paths**.

Key capabilities include:
- Skill tracking and visualization
- Training path planning and optimization
- Skill-based modifiers applied to:
  - Market fees and taxes
  - Industry efficiency
  - Ship fitting eligibility and effectiveness

Character skills affect:
- Market calculations (fees, taxes)
- What ships and fittings can be used effectively

---

### Market & Combat Correlation
This domain links destruction to economic opportunity.

Key capabilities include:
- Correlation of large-scale kill events with market movement
- Analysis of demand spikes for hulls, fittings, and components
- Build vs destroy ratio tracking
- Historical response timelines

---

### Calendar, Planning & Notifications
Planning tools support both gameplay and economic timing.

Key capabilities include:
- In-game event tracking
- Personal planning (runs, production cycles, logistics)
- Nested time views (hourly to monthly)
- Notifications and reminders

---

## Monetization & Sustainability Strategy

### Constraints
- The application is developed primarily for personal use.
- Direct sale of the software is not legally viable or desirable.
- Monetization must comply with CCP’s third-party tool and EULA policies.

Monetization exists solely to support **infrastructure costs**, **scalability**, and **ongoing maintenance**, not as a commercial product.

---

### ISK-Based Contributions
Inspired by existing tools such as EVE Tycoon, EVE Guru, and EVEeye.

- Voluntary in-game ISK donations
- Public wallet address for transparency
- Optional recognition (non-gameplay affecting)
- No gameplay advantages or data gating tied to ISK payments

---

### Advertising Support
- Non-intrusive banner advertisements
- Limited placement (sidebar or footer)
- No pop-ups or disruptive formats
- Ads treated as optional support, not core functionality

---

### Feature Parity & Ethics
- All core functionality remains available to all users
- No paywalled analytics or competitive advantages
- Monetization does not influence data accuracy or update frequency

---

## Competitive Parity & Feature Gaps

The application is strong in **cross-domain intelligence** (market, map, player, event), but some features are currently missing that are common in other mature tools:

1. **Import / Export & Interoperability**
   - CSV/JSON import of wallet, market, and run logs
   - EFT/PYFA ship fits import/export
   - Contract-style item list import

2. **Shopping Lists & Logistics Planning**
   - Consolidated shopping lists for fits, production, and market plans
   - Regional sourcing and haul cost awareness
   - Risk-adjusted purchase recommendations

3. **Multi-Character / Corporation Support**
   - Cross-character dashboards
   - Aggregated wallets and assets
   - Corp-level views for industrial pipelines and shared runs

4. **Notifications as a First-Class System**
   - Market alerts (margin thresholds, order outbid)
   - Map alerts (system pressure spikes, events)
   - Financial alerts (unexpected expenses, income drops)

5. **Explainability & Transparency**
   - Clear explanations of heuristics and indices
   - Visibility into calculation inputs and weights
   - Adjustable thresholds for recommendations

6. **Offline / Low-Connectivity Usability**
   - Cached, read-only mode
   - Graceful degradation when APIs are unavailable
   - Explicit timestamps on all data

7. **Legal / Policy Guardrails**
   - Rate-limit awareness
   - CCP third-party policy compliance
   - Source disclaimers and transparency

Incorporating these gaps where relevant will make the application **more competitive** and robust compared to established tools like EVE Tycoon, EVE Guru, and EVEeye.

---

## Development Status & Disclaimer
This project is currently in the **conceptual design phase**. All systems, boundaries, and monetization strategies described here are provisional. As development proceeds:

- Features may be re-scoped, split, or removed
- Data sources may change
- Monetization approaches may be adjusted or abandoned

This document should be treated as a **directional reference**, not a final specification.

---

## Closing Statement
The EVE Online Unified Intelligence Application is intended to grow iteratively into a reliable strategic companion. Its success depends on clear system boundaries, respect for EVE’s data ecosystem, competitive awareness, and sustainable design.

The goal is not to monetize EVE—but to understand it well enough to act intelligently within it.

---
**Proprietary Notice:** This documentation and the EVE Unified Intelligence project are proprietary. Unauthorized distribution, reproduction, or reuse is strictly prohibited.
