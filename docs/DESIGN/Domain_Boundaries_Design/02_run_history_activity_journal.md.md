

# 02_run_history_activity_journal.md
## Run History & Activity Journal

### Purpose of this Document
This document defines the **Run History & Activity Journal** domain.  
This domain captures **what the player does in space**, structured as discrete “runs,” and preserves the **context and outcomes** of those activities for later analysis.

This domain is the **source of truth for activity execution**, while all ISK outcomes derived from these activities are consumed by the Financial / Industry domain.

---

## Scope Definition

### Included
- Logging of all non-market, non-industry player activities
- Structured capture of:
  - Location
  - Activity type
  - Enemies or opponents
  - Loot and spoils
  - Bounties and rewards
  - Notes and annotations
- Historical run storage and editing
- Cross-linking to universe entities (systems, items, factions, players)

### Explicitly Excluded
- Market valuation logic
- ISK calculations beyond raw outcomes
- Asset management
- Industry execution
- Tactical or strategic recommendations

This domain records **what happened**, not **what should be done next**.

---

## UI Structure Principles

- This domain is presented as a **primary top-level tab**
- Primary tabs are **user-reorderable**
- Internal navigation uses **left-oriented, vertically stacked tabs and sub-tabs**
- All data entry and stored runs are **fully editable**
- Heavy emphasis on:
  - Speed of entry
  - Flexibility
  - Post-hoc correction

---

## Primary Tab 1: Run Entry (Fillable Form)

### Purpose
This tab is the **primary data entry interface** for recording a run.

---

### Run Type Selector
- A mandatory dropdown selector determines the run type
- Selection dynamically alters the rest of the form

Example run types include:
- Combat sites
- Incursions
- Abyssal sites
- Wormholes
- Faction Warfare
- PvP
- Mining
- Exploration
- Any future activity category

---

### Dynamic Form Behavior
Based on run type selection:
- Relevant fields are displayed
- Irrelevant fields are hidden
- All fields remain **optional**, except run type

Examples:
- Combat sites:
  - System
  - Faction
  - Site name
  - Difficulty
  - Enemy types
  - Loot
  - Bounties
- PvP:
  - Location
  - Opponent(s)
  - Ship types
  - Outcome
- Mining:
  - Location
  - Ore types
  - Quantity
  - Duration

---

### Loot & Spoils Section
- Copy-and-paste compatible
- Identical behavior to the Appraisal section in the Financial window
- Raw item lists only
- Valuation handled downstream by financial systems

---

### Notes Field
- Free-form text field at the end of the form
- Intended for:
  - Tactical observations
  - Environmental context
  - Subjective impressions
  - Reminders

---

### Fuzzy Linking & Validation
- All relevant text fields support fuzzy search and linking:
  - Items
  - Systems
  - Site names
  - NPC factions
  - Player names
- Matches are automatically linked on save
- All links are **editable post-creation** to correct:
  - Typos
  - Incorrect associations
  - Ambiguous matches

---

### Quality-of-Life Features
- All run categories are **favoritable**
- Favorited categories appear first in the selector
- Designed to minimize friction for repeated activities

---

## Primary Tab 2: Run History

### Purpose
This tab is the **persistent ledger** of all recorded runs.

---

### Run Storage & Organization
- Runs are stored using **EVE time**
- Searchable via fuzzy search
- Filterable by:
  - Run type
  - Location
  - Date/time
  - Participants
  - Loot presence
  - Custom tags

---

### Collapsible Run Display
- Each run appears as a collapsible entry
- Default collapsed view shows:
  - Run title
  - Run type
  - Timestamp
  - Highly abbreviated outcome summary (type-dependent)

Examples:
- Combat site: total loot + bounties
- Mining: total volume
- PvP: ships destroyed/lost

---

### Full Edit Capability
- Any field from the original run entry form is editable
- Edits propagate to dependent systems:
  - Financial outcomes
  - Asset updates
  - Analytics

No run is ever “locked.”

---

## Primary Tab 3: Reference & Notes

### SubTab 3.1 — University Browser
- Cached or browsable view of the EVE University
- Intended for:
  - Quick reference
  - Contextual lookup
  - Linking systems, regions, and entities into runs

This is not a full web site cache; it is a **reference companion** to the Run Journal.

---

### SubTab 3.2 — General Notes
- Simple text editor
- Not tied to individual runs
- Intended for:
  - Long-term observations
  - Strategy notes
  - To-do lists
  - Free-form documentation

---

## Design Notes & Constraints

- Data entry must be **fast and forgiving**
- The system assumes:
  - Imperfect memory
  - Incomplete data
  - Post-run corrections
- This domain prioritizes **accuracy over automation**
- Automation is additive, never destructive

---

### Closing Statement
The Run History & Activity Journal is the **experiential backbone** of the application.  
It captures player activity in a structured yet flexible form, ensuring that **what happens in space** is preserved accurately and can later be analyzed financially, geographically, or behaviorally.

It intentionally avoids interpretation and optimization logic, serving instead as a **trusted historical record** upon which other domains depend.

---

**Next Logical Steps**
- Define Run Type schemas and extensibility rules
- Specify cross-domain data propagation (Run → Financial, Assets, Map)
- Design UI interaction patterns for fast entry and editing
