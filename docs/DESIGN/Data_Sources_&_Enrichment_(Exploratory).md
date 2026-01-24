

## Data Sources & Enrichment *(Exploratory)*

This section outlines **potential data sources and enrichment paths** that may support the application’s analytical goals.  
Inclusion of a source does **not** imply mandatory use. All integrations are optional and subject to feasibility, performance constraints, and CCP policy compliance.

---

### Core Data Sources (Candidate Set)

| Source | Possible Usage |
|------|----------------|
| **EVE ESI** | Official character data, wallet transactions, market orders, map statistics, sovereignty data, scheduled events |
| **EVE SDE** | Static universe topology, item definitions, blueprints, NPC entities, site classifications |
| **EVE Wiki** | Supplemental static knowledge: site descriptions, event explanations, lore context |
| **zKillboard** | Kill frequency, kill density, ship destruction patterns, conflict hotspots |
| **EVEWho** | Corporation and alliance resolution, membership verification |
| **User-generated data** | Run history, system annotations, custom tags, after-action notes |

---

### Data Enrichment Concepts *(Optional)*

These approaches may be used to **add analytical value** without introducing automation or decision enforcement.

#### Cross-Source Correlation
- Linking kill events to:
  - Market price movements
  - System traffic changes
  - Event timelines
- Enriching static data with:
  - Player-generated context
  - Historical activity patterns

#### Derived Metrics (Heuristic-Based)
- System pressure indices
- Activity density scores
- Risk context indicators
- Site competition estimates

All derived metrics should be:
- Transparent
- User-adjustable
- Fully disableable

---

### User Data as a First-Class Source

User-generated data may function as:
- A personalization layer
- A bias-correction mechanism against public aggregates
- A memory extension rather than a recommendation engine

Examples include:
- “I ran this site here recently”
- “This system was crowded at this time”
- “This pilot was encountered previously”

User data is assumed to be **subjective and local**, not globally authoritative.

---

## 3. Technical Architecture — Map-Focused Considerations *(Conceptual)*

This section describes **possible architectural approaches**, not finalized design decisions.

---

### Backend *(Conceptual)*

#### Periodic Ingestion (Non-Real-Time)
- Scheduled retrieval of:
  - Map statistics
  - Event states
  - Killboard summaries
- Ingestion frequency may vary by data type

This approach may help:
- Reduce API pressure
- Avoid real-time dependency
- Limit unnecessary data churn

---

#### Time-Sliced System Snapshots
- Systems captured at defined intervals
- Enables:
  - Historical comparison
  - Trend visualization
  - Heatmap generation

Snapshots may be:
- Rolled up over time
- Archived or discarded based on storage constraints

---

### Data Storage & Caching *(Optional Strategies)*

- Short-term caches for high-access data
- Longer-term aggregates for trend analysis
- Logical separation between:
  - Raw data
  - Derived metrics
  - User annotations

This separation may improve:
- Performance
- Debuggability
- Feature isolation

---

### Frontend — Map-Oriented *(Exploratory)*

#### Interactive Map Engine
- **Leaflet.js** is a strong candidate due to:
  - Lightweight footprint
  - Layer flexibility
  - 2D-first design
- Alternatives may be evaluated if requirements evolve

---

#### Layer-Based Rendering
- Each overlay rendered independently
- Supports:
  - Visibility toggles
  - Opacity control
  - Ordering and grouping

This aligns with the design goal of **non-forced intelligence**.

---

### Performance & Scaling Considerations

#### Clustering & Level-of-Detail
- Aggregate system nodes at low zoom levels
- Expand detail progressively at higher zoom
- Reduce visual noise and CPU usage

#### Degradation Strategy
- Graceful fallback behavior when:
  - Data is missing
  - APIs are unavailable
  - Features are disabled by the user

---

## Architectural Philosophy (Summary)

- Data informs; it does not decide
- Complexity should always be opt-in
- Visual clarity outweighs raw completeness
- User context is more valuable than global averages

---

### Closing Note

This section is intentionally open-ended.

As development progresses:
- Some data sources may be dropped
- Others may be added
- Certain heuristics may evolve or be abandoned entirely

The architecture should remain **adaptable**, **transparent**, and **respectful of player agency**.

---
**Proprietary Notice:** This documentation and the EVE Unified Intelligence project are proprietary. Unauthorized distribution, reproduction, or reuse is strictly prohibited.
