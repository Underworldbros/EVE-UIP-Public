

# 02_domain_boundaries.md
## Domain Boundaries — EVE Online Unified Intelligence Application

### Purpose of this Document
This document defines the **functional domains (modules)** of the application, their responsibilities, inputs, outputs, and interactions.  
It serves as a reference for:
- Architecture planning
- Feature scoping
- Module development and integration
- Aligning design decisions with core principles: modularity, transparency, action-orientation, extensibility, and sustainability

---

## Domain 1: Market Intelligence

**Scope:**  
- Analyze market trends and opportunities
- Generate actionable recommendations for trading and manufacturing
- Apply character skill modifiers (broker relations, accounting, trade skills) to transactions

**Inputs:**  
- Market orders from EVE ESI
- Historical price and volume data
- User-defined filters and thresholds
- Character skills affecting trade and industry

**Outputs:**  
- Profit/margin calculations
- Suggested order prices
- Manufacturing recommendations
- Alerts for profitable trades or item opportunities

**Interactions:**  
- Wallet Analytics (cost tracking)
- Ship Fitting & Operational Costs (materials needed for ships/fits)
- Calendar/Notifications (time-sensitive market opportunities)

**Design Notes:**  
- Module operates independently; calculations are **skill-aware but ship-independent**  
- Supports **context-driven alerts** to inform user action

---

## Domain 2: Wallet & Financial Analytics

**Scope:**  
- Track ISK inflows and outflows
- Categorize transactions
- Identify profitable and unprofitable activities

**Inputs:**  
- Wallet transaction data via ESI
- Run history data (linked to income sources)
- Market order execution data

**Outputs:**  
- Income vs expenditure dashboards
- Realized vs unrealized profit tracking
- Exportable financial reports
- Alerts for unusual financial activity

**Interactions:**  
- Market Intelligence (profitability assessment)
- Run History (link activity to ISK earned)
- Ship Fitting & Operational Costs (tracking operational expenses)

**Design Notes:**  
- Focused on **clarity of player ISK flows**  
- Supports **time-based aggregation** (hourly, daily, monthly)

---

## Domain 3: Run History & Activity Journal

**Scope:**  
- Log all player-run activities (combat sites, mining, exploration, abyssal runs, etc.)
- Record metadata for post-analysis

**Inputs:**  
- Manual entry or clipboard import
- In-game activity metadata (system, site type, ship, loot, duration)
- Optional user notes

**Outputs:**  
- Historical performance metrics (ISK/hour, loot efficiency, completion times)
- Comparative analytics (system, site, fit)
- Charts and dashboards for trend visualization

**Interactions:**  
- Wallet Analytics (income correlation)
- Map & Traffic Intelligence (site efficiency vs system congestion)
- Calendar/Notifications (track planned runs)

**Design Notes:**  
- Supports **repeatable activity tracking**  
- Designed for **longitudinal analysis** of player behavior

---

## Domain 4: Advanced Map & Traffic Intelligence

**Scope:**  
- Visualize the universe with static and dynamic overlays  
- Display system security, sovereignty, and traffic  
- Model site competition and player congestion

**Inputs:**  
- Static map data from SDE/EVE Wiki  
- Player jumps (hourly, 24h)  
- NPC kills (hourly, 24h)  
- Event data (incursions, invasions, faction warfare, seasonal events)  
- Run history metadata (optional)  

**Outputs:**  
- Interactive, zoomable universe map  
- System congestion heatmaps  
- Site availability and competition indicators  
- Route planning suggestions  

**Interactions:**  
- Run History (link site efficiency to system traffic)  
- Game Events & System Pressure Modeling  
- Calendar/Notifications (event propagation)

**Design Notes:**  
- Inspired by **EVEeye**, central intelligence layer for actionable spatial awareness  
- Dynamic overlays are **optional and user-toggleable**  

---

## Domain 5: Game Events & System Pressure Modeling

**Scope:**  
- Track large-scale events that influence player behavior  
- Quantify **system pressure** using a composite index  

**Inputs:**  
- Incursion, invasion, and faction warfare data  
- Player jump and NPC kill metrics  
- User-run history (optional for local weighting)  

**Outputs:**  
- System Pressure Index (SPI) per system  
- Visual alerts for high-activity systems  
- Event spillover projections for adjacent systems  

**Interactions:**  
- Map & Traffic Intelligence (overlays)  
- Run History & Calendar (event-informed planning)  

**Design Notes:**  
- Indexes system “busyness” relative to historical norms  
- Alerts and recommendations are **heuristic and adjustable**  

---

## Domain 6: Player Tracking & Threat Awareness

**Scope:**  
- Maintain intelligence on player threats (gankers, competitors)  
- Track corporations and alliances  

**Inputs:**  
- zKillboard data  
- EVEWho lookup data  
- User-defined player and corp tagging  

**Outputs:**  
- Threat rating dashboards  
- Heatmaps for kill density  
- Alerts for dangerous players or regions  

**Interactions:**  
- Map & Traffic Intelligence (threat overlays)  
- Calendar/Notifications (threat alerts for planned runs)  

**Design Notes:**  
- Heuristic-based scoring, **adjustable by user**  
- Focused on actionable awareness, not policing  

---

## Domain 7: Ship Fitting & Operational Costs

**Scope:**  
- Track player ships and fits  
- Calculate recurring operational expenses  

**Inputs:**  
- User-defined ship fits (manual or import)  
- Consumable usage patterns (ammo, boosters, drones)  
- Market data for component pricing  

**Outputs:**  
- Cost projections for operational activities  
- Shopping lists for consumables or replacement ships  
- Fit-linked alerts for market purchases  

**Interactions:**  
- Market Intelligence (what to buy for production)  
- Wallet Analytics (tracking expenditure)  

**Design Notes:**  
- Focused on **buying and budgeting decisions**, not market calculations themselves  

---

## Domain 8: Character Management & Skill Planning

**Scope:**  
- Track skills and training paths  
- Apply skill modifiers to market, industry, and fitting calculations  

**Inputs:**  
- Character skill data via ESI  
- User-defined training plans  

**Outputs:**  
- Skill dashboards  
- Training path recommendations  
- Adjusted metrics for market fees, industrial efficiency, and fitting eligibility  

**Interactions:**  
- Market Intelligence (fee and tax adjustments)  
- Ship Fitting & Operational Costs (fit eligibility)  

**Design Notes:**  
- Skills influence **market calculations and operational capability**, not fit choice directly  

---

## Domain 9: Calendar, Planning & Notifications

**Scope:**  
- Track in-game events and personal schedules  
- Provide alerts and reminders  

**Inputs:**  
- User-defined events  
- Game event feeds (incursions, invasions, seasonal events)  
- Market alerts and SPI notifications  

**Outputs:**  
- Nested planner views (hourly → monthly)  
- Actionable alerts and reminders  
- Event-linked dashboards  

**Interactions:**  
- Map & Traffic Intelligence (event propagation)  
- Run History (planned runs)  
- Market Intelligence (time-sensitive trade opportunities)  

**Design Notes:**  
- Alerts are **action-oriented**, configurable, and context-sensitive  

---

### Closing Statement
These **domain boundaries** define the scope, responsibilities, and interfaces for each module. They ensure that the system is:
- **Modular** — each domain can evolve independently  
- **Action-oriented** — outputs guide player decisions  
- **Transparent** — inputs and calculations are clear  
- **Extensible & Scalable** — new domains or modules can be added without disruption  

---

Next steps involve **technical architecture mapping**, showing how each domain interacts, the data flow between modules, and persistence/caching strategies.


---
**Proprietary Notice:** This documentation and the EVE Unified Intelligence project are proprietary. Unauthorized distribution, reproduction, or reuse is strictly prohibited.
