

# 03_technical_architecture.md
## Technical Architecture — EVE Online Unified Intelligence Application

### Purpose of this Document
This document outlines the **technical architecture** of the EVE Online Unified Intelligence Application.  
It defines:
- Module interactions and dependencies  
- Backend and frontend responsibilities  
- Database structure and storage strategies  
- Data ingestion and pipeline design  

This serves as a **development blueprint**, guiding implementation, testing, and scalability planning.

---

## 1. High-Level Architecture

```
+---------------------------+
|        Frontend           |
|  (React.js / Vue.js)      |
|---------------------------|
| - Dashboards             |
| - Interactive Map        |
| - Alerts & Notifications |
| - Run Journals           |
+-----------+---------------+
            |
            v
+---------------------------+
|        Backend            |
|  (Node.js / Django)       |
|---------------------------|
| - API Aggregation        |
| - Data Processing        |
| - Heuristic Calculations |
| - Event & SPI Modeling   |
+-----------+---------------+
            |
            v
+---------------------------+
|       Database Layer      |
|  (PostgreSQL / MongoDB)   |
|---------------------------|
| - Market Data            |
| - Wallet Transactions    |
| - Run History            |
| - Map & Traffic Metrics  |
| - Ship Fits & Character  |
| - Player/Corp Data       |
+---------------------------+
```

**Notes:**
- Frontend communicates via REST/GraphQL APIs.
- Backend handles **data aggregation, processing, caching, and computation**.
- Database is structured for **efficient querying and analytics**, with time-series storage for market and traffic data.

---

## 2. Module Interactions

| Module                        | Inputs                                    | Outputs                                    | Interactions                                      |
|--------------------------------|------------------------------------------|--------------------------------------------|--------------------------------------------------|
| Market Intelligence             | ESI market data, historical prices       | Profit calculations, order suggestions    | Wallet Analytics, Ship Fitting, Calendar        |
| Wallet & Financial Analytics    | Wallet transactions, market executions  | Income vs expenditure reports             | Market Intelligence, Ship Fitting               |
| Run History & Activity Journal  | Manual or clipboard entry, site metadata| ISK/hour, efficiency dashboards           | Map & Traffic, Calendar                          |
| Map & Traffic Intelligence      | Static map, jumps, NPC kills, events    | Interactive map, congestion overlays     | Run History, SPI, Calendar                        |
| Game Events & SPI Modeling      | Events, jumps, NPC kills                | System Pressure Index, alerts            | Map, Calendar, Run History                        |
| Player Tracking & Threat        | zKillboard, EVEWho, user tags           | Threat dashboards, heatmaps              | Map, Calendar                                    |
| Ship Fitting & Operational Costs| Fit data, consumables, market prices    | Cost projections, shopping lists         | Market Intelligence, Wallet Analytics           |
| Character Management & Skills   | Skill data, training paths               | Skill dashboards, adjusted calculations  | Market Intelligence, Ship Fitting               |
| Calendar & Notifications        | User events, market alerts, SPI         | Reminders, alerts, planner dashboards    | Map, Run History, Market Intelligence          |

**Notes:**
- Each module is loosely coupled and communicates primarily through the backend API.
- Heuristic and analytical computations are centralized to reduce duplication.

---

## 3. Backend Responsibilities

- **API Layer:**  
  - Aggregates data from EVE ESI, zKillboard, EVEWho, and other sources  
  - Provides secure endpoints for frontend consumption  

- **Data Processing Layer:**  
  - Calculates SPI, market trends, profit margins, and threat ratings  
  - Normalizes and validates incoming data  

- **Caching Layer:**  
  - Stores frequently accessed metrics to reduce API calls  
  - Supports offline or degraded mode  

- **Job Scheduling:**  
  - Periodic refresh of market data, player jumps, NPC kills, and event feeds  
  - Scheduled alerts and notifications  

---

## 4. Frontend Responsibilities

- Render dashboards and interactive map with **real-time overlays**
- Visualize analytics in an **actionable, user-centric manner**
- Manage user inputs for:
  - Run logging
  - Ship fitting tracking
  - Character management
  - Calendar events
- Trigger alerts and notifications from backend signals

**Technologies:**  
- React.js or Vue.js for reactive UI  
- D3.js or Chart.js for visualizations  
- Leaflet.js for map overlays  

---

## 5. Database & Data Storage

**Database Choice:** PostgreSQL or MongoDB, depending on data type:

| Data Type                  | Storage Strategy                                  |
|-----------------------------|--------------------------------------------------|
| Market Data                 | Time-series, indexed by region & item           |
| Wallet Transactions         | Relational, timestamped, categorized           |
| Run History                 | Document-style for flexibility                  |
| Map & Traffic Metrics       | Time-series with spatial indexing               |
| Ship Fittings               | Document/JSON for fit details                   |
| Character Skills            | Relational with skill levels and training paths |
| Player/Corp Data            | Relational with tag-based filtering             |
| Event Feeds                 | Time-stamped, cached for trend analysis         |

**Additional Notes:**  
- Heavy read operations (dashboards, analytics) use **denormalized or cached aggregates**  
- Write operations (user inputs, API ingestion) are **transaction-safe**  
- Supports **archiving** for historical analytics without overloading the main DB  

---

## 6. Data Pipelines

1. **API Ingestion Pipeline**
   - Poll EVE ESI, zKillboard, EVEWho  
   - Validate and normalize data  
   - Store in staging tables or collections  

2. **Processing Pipeline**
   - Compute SPI, threat ratings, market predictions, profit margins  
   - Aggregate traffic and jumps data for map overlays  
   - Generate alerts and notifications  

3. **Caching & Query Pipeline**
   - Prepare aggregated datasets for frontend consumption  
   - Provide filtered, user-specific views  
   - Support offline or reduced-connectivity mode  

4. **Export / Interoperability**
   - CSV/JSON export for market, wallet, and run data  
   - EFT/PYFA fit import/export  
   - Optional integration points for future plugins  

---

## Closing Statement
This technical architecture ensures the application is:
- **Modular:** Independent modules with defined inputs/outputs  
- **Action-Oriented:** Analytics and alerts designed to inform player decisions  
- **Transparent:** Computation and data flow are traceable  
- **Scalable & Extensible:** Supports new modules, features, and data sources  
- **Sustainable:** Efficient caching, offline support, and compliance with CCP policies  

---

Next steps:
- Map API rate limits to ingestion schedules  
- Define module-specific database schemas  
- Implement backend API contracts for each module