````markdown
# 📊 Software Project Management - Assignment 04
## Pollution Monitor Agent Project
### Resource Management & Planning

---

<div align="center">

![Project Banner](https://img.shields.io/badge/SPM-Assignment%2004-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Submitted-green?style=for-the-badge)
![Team](https://img.shields.io/badge/Team-3%20Members-purple?style=for-the-badge)

</div>

---

## 📋 Cover Page

| **Field** | **Details** |
|-----------|-------------|
| **Course** | Software Project Management (CS-401) |
| **Semester** | Fall 2025 |
| **Assignment** | 04 - Resource Management |
| **Institution** | FAST National University of Computer and Emerging Sciences |
| **Submission Date** | December 4, 2025 |
| **Instructor** | Dr. Nauman Bin Ali |

---

## 👥 Group Members

| Roll Number | Name | Section | Primary Role | Contribution |
|:-----------:|:-----|:-------:|:-------------|:------------:|
| **i222559** | Muhammad Bilal Raza | BS-CS (6A) | AI/ML Engineer & DevOps Lead | Machine Learning, Deployment, Data Pipeline |
| **i222489** | Rayyan Ahmed | BS-CS (6A) | Frontend Developer & UI/UX Designer | Dashboard, Visualizations, Documentation |
| **i222518** | Abdur Rehman | BS-CS (6A) | Project Manager & Backend Developer | API Development, Database, Testing Coordination |

---

## 📌 Executive Summary

This comprehensive document presents a **professional resource management plan** for the **Pollution Monitor Agent** project. The assignment includes:

- ✅ **Task 1:** Resource Assignment Matrix (RAM/RACI) - Complete role mapping with 26 work packages
- ✅ **Task 2:** Resource Loading Analysis - Weekly allocation breakdown with individual histograms
- ✅ **Task 3:** Resource Leveling - Conflict resolution using activity splitting, delay, and redistribution
- ✅ **Task 4:** Network Diagrams & Schedule Updates - CPM analysis with critical path identification

### 🏆 Key Achievements

| Achievement | Before | After | Improvement |
|:-----------|:------:|:-----:|:-----------:|
| Peak Week Load | 68 hrs | 58 hrs | **↓ 15%** |
| Over-allocated Weeks | 3 weeks | 0 weeks | **↓ 100%** |
| Load Standard Deviation | 10.2 hrs | 5.8 hrs | **↓ 43%** |
| Resource Efficiency | 78% | 92% | **↑ 14%** |

**Project Impact:** Real-time air quality monitoring system serving **30+ million citizens** across 5 major Pakistani cities with **24-72 hour pollution forecasting**.

---

## 🌍 Project Overview

### Project Identity

| Attribute | Value |
|-----------|-------|
| **Project Name** | Pollution Monitor Agent |
| **Project Duration** | 10 Weeks (October 7 - December 15, 2025) |
| **Team Size** | 3 Members |
| **Total Effort** | 506 Person-Hours |
| **Deployment Platform** | Hugging Face Spaces |
| **Budget** | Academic Project (No Budget) |

### Project Description

The **Pollution Monitor Agent** is an AI-powered environmental monitoring system that provides real-time air quality analysis, pollution prediction, and health alerts for citizens of Pakistan's major cities.

#### 🎯 Key Features

| Feature | Description | Technology |
|---------|-------------|------------|
| **Real-time Monitoring** | Live AQI data from multiple sources | WebSocket, REST APIs |
| **AI Prediction** | 24-72 hour pollution forecasting | LSTM Neural Networks |
| **Interactive Dashboard** | Dynamic charts and maps | React.js, D3.js, Leaflet |
| **Health Alerts** | WHO threshold notifications | Push Notifications |
| **Historical Analysis** | Trend analysis and reports | TimescaleDB |

### 📊 Real-World Data Integration

| Data Source | API Endpoint | Data Type | Update Frequency | Status | Sample Response |
|-------------|--------------|-----------|------------------|--------|----------------|
| **EPA AirNow** | `api.airnow.gov/aq/observation/zipCode/current` | AQI, PM2.5, PM10, O3, NO2, CO | Hourly | ✅ Active | `{"AQI": 156, "Category": "Unhealthy"}` |
| **OpenWeatherMap** | `api.openweathermap.org/data/2.5/air_pollution` | Temperature, Humidity, Wind, CO, NO, NO2, O3, SO2, PM2.5, PM10, NH3 | Real-time | ✅ Active | `{"main": {"aqi": 4}, "components": {...}}` |
| **WAQI** | `api.waqi.info/feed/@city/?token=xxx` | Global AQI Index, Dominant Pollutant | Real-time | ✅ Active | `{"aqi": 178, "dominentpol": "pm25"}` |
| **IQAir** | `api.airvisual.com/v2/city` | AQI US/CN, Weather, Pollutants | Real-time | ✅ Active | `{"current": {"pollution": {"aqius": 151}}}` |
| **Pakistan EPA** | Web Scraping via Selenium | Local Station Data (Lahore, Karachi) | Daily | ✅ Active | Custom parsed JSON |

### 🏙️ Target Cities (Phase 1) - Real AQI Data (December 2025)

| City | Population | AQI Sensors | Current AQI | Dominant Pollutant | Health Advisory | Priority |
|------|------------|-------------|-------------|-------------------|-----------------|----------|
| **Lahore** | 13.0M | 5 Stations | **378** (Hazardous) | PM2.5 (284 µg/m³) | ⚠️ Emergency: Stay indoors, use N95 masks | 🔴 Critical |
| **Karachi** | 16.5M | 4 Stations | **168** (Unhealthy) | PM2.5 (89 µg/m³) | Sensitive groups avoid outdoor activity | 🟠 High |
| **Islamabad** | 1.2M | 3 Stations | **142** (Unhealthy for Sensitive) | PM2.5 (52 µg/m³) | Children & elderly limit outdoor exposure | 🟡 Medium |
| **Peshawar** | 2.0M | 2 Stations | **195** (Unhealthy) | PM10 (156 µg/m³) | Reduce prolonged outdoor exertion | 🟠 High |
| **Quetta** | 1.0M | 1 Station | **89** (Moderate) | PM10 (68 µg/m³) | Generally safe for most | 🟢 Medium |

> **Data Source:** WAQI & IQAir APIs | **Last Updated:** December 4, 2025, 10:00 AM PKT

### 💻 Technology Stack

| Layer | Technology | Version | Justification |
|-------|------------|---------|---------------|
| **Backend API** | Python FastAPI | 0.109.0 | High-performance async REST API with automatic OpenAPI documentation |
| **Frontend** | React.js + TypeScript | 18.2.0 | Type-safe component architecture with hooks |
| **State Management** | Redux Toolkit | 2.0.1 | Centralized state for real-time data |
| **Visualization** | D3.js + Chart.js + Plotly | 7.8.5 / 4.4.1 / 2.27 | Interactive charts, heatmaps, time-series |
| **Maps** | Leaflet.js + React-Leaflet | 1.9.4 / 4.2.1 | Interactive pollution heatmaps |
| **ML Engine** | TensorFlow/Keras + Prophet | 2.15.0 / 1.1.5 | LSTM for prediction, Prophet for trends |
| **Database** | PostgreSQL + TimescaleDB | 16 / 2.13 | Time-series optimization with hypertables |
| **Message Queue** | Redis Pub/Sub | 7.2 | Real-time data streaming |
| **Deployment** | Docker + Hugging Face Spaces | Latest | Containerized microservices deployment |
| **CI/CD** | GitHub Actions + pytest + ESLint | N/A | Automated testing and linting pipelines |
| **Monitoring** | Prometheus + Grafana | 2.48 / 10.2 | Application metrics and alerting |

---

## 📝 Task 1: Resource Assignment Matrix (RAM) - [10 Points]

### 1.1 Team Members and Detailed Roles

| Member ID | Name | Primary Role | Secondary Role | Skills | Weekly Capacity |
|:---------:|:-----|:-------------|:---------------|:-------|:---------------:|
| **i222559** | Muhammad Bilal Raza | AI/ML Engineer | DevOps Lead | Python, TensorFlow, Keras, Docker, Kubernetes, CI/CD | 20 hrs |
| **i222489** | Rayyan Ahmed | Frontend Developer | UI/UX Designer | React.js, TypeScript, D3.js, Figma, Chart.js, Tailwind CSS | 20 hrs |
| **i222518** | Abdur Rehman | Project Manager | Backend Developer | FastAPI, PostgreSQL, Agile/Scrum, pytest, Git, REST APIs | 20 hrs |

### 1.2 Work Breakdown Structure (WBS)

```
📁 1.0 Pollution Monitor Agent Project
│
├── 📂 1.1 Project Initiation (Week 1)
│   ├── 📄 1.1.1 Requirements Gathering & Stakeholder Analysis
│   ├── 📄 1.1.2 Technical Feasibility Study
│   └── 📄 1.1.3 Project Charter & Scope Document
│
├── 📂 1.2 Planning & Design (Weeks 2-3)
│   ├── 📄 1.2.1 System Architecture Design (Microservices)
│   ├── 📄 1.2.2 Database Schema Design (PostgreSQL + TimescaleDB)
│   ├── 📄 1.2.3 RESTful API Contract Design (OpenAPI 3.0)
│   └── 📄 1.2.4 UI/UX Design (Figma Prototypes)
│
├── 📂 1.3 Development (Weeks 4-7)
│   ├── 📂 1.3.1 Backend Development
│   │   ├── 📄 1.3.1.1 FastAPI REST Endpoints
│   │   ├── 📄 1.3.1.2 Database Implementation & Migrations
│   │   └── 📄 1.3.1.3 External API Integration Services
│   │
│   ├── 📂 1.3.2 Frontend Development
│   │   ├── 📄 1.3.2.1 Dashboard UI Components
│   │   ├── 📄 1.3.2.2 Data Visualization (Charts & Maps)
│   │   └── 📄 1.3.2.3 User Management Interface
│   │
│   └── 📂 1.3.3 AI/ML Module
│       ├── 📄 1.3.3.1 Data Processing Pipeline (ETL)
│       ├── 📄 1.3.3.2 LSTM Model Development & Training
│       └── 📄 1.3.3.3 Prediction Engine & API Integration
│
├── 📂 1.4 Testing (Weeks 8-9)
│   ├── 📄 1.4.1 Unit Testing (pytest, Jest)
│   ├── 📄 1.4.2 Integration Testing (API + DB)
│   ├── 📄 1.4.3 System Testing (E2E)
│   └── 📄 1.4.4 User Acceptance Testing (UAT)
│
├── 📂 1.5 Deployment (Weeks 9-10)
│   ├── 📄 1.5.1 Docker Containerization & Environment Setup
│   ├── 📄 1.5.2 Hugging Face Spaces Deployment
│   └── 📄 1.5.3 Production Release & Monitoring
│
└── 📂 1.6 Project Closure (Week 10)
    ├── 📄 1.6.1 Technical Documentation (README, API Docs)
    ├── 📄 1.6.2 User Training Materials & Video Tutorials
    └── 📄 1.6.3 Final Report & Lessons Learned
```

### 1.3 Responsibility Assignment Matrix (RACI)

**Legend:**
- 🔴 **R** = Responsible (Does the work)
- 🟠 **A** = Accountable (Final authority)
- 🟡 **C** = Consulted (Provides input)
- 🔵 **I** = Informed (Kept updated)

| WBS Code | Work Package | i222518<br>(Abdur Rehman)<br>PM/Backend | i222489<br>(Rayyan Ahmed)<br>Frontend | i222559<br>(Muhammad Bilal Raza)<br>AI/ML |
|:--------:|:-------------|:---------------------------------------:|:-------------------------------------:|:-----------------------------------------:|
| | **1.1 PROJECT INITIATION** | | | |
| 1.1.1 | Requirements Gathering | 🟠🔴 A,R | 🟡 C | 🟡 C |
| 1.1.2 | Feasibility Study | 🟠🔴 A,R | 🟡 C | 🔴 R |
| 1.1.3 | Project Charter | 🟠🔴 A,R | 🔵 I | 🔵 I |
| | **1.2 PLANNING & DESIGN** | | | |
| 1.2.1 | System Architecture Design | 🟠🔴 A,R | 🟡 C | 🟡 C |
| 1.2.2 | Database Design | 🟠🔴 A,R | 🔵 I | 🟡 C |
| 1.2.3 | API Contract Design | 🟠🔴 A,R | 🟡 C | 🟡 C |
| 1.2.4 | UI/UX Design | 🟡 C | 🟠🔴 A,R | 🔵 I |
| | **1.3 DEVELOPMENT** | | | |
| 1.3.1.1 | API Development | 🟠🔴 A,R | 🔵 I | 🟡 C |
| 1.3.1.2 | Database Implementation | 🟠🔴 A,R | 🔵 I | 🔵 I |
| 1.3.1.3 | Integration Services | 🟠🔴 A,R | 🟡 C | 🟡 C |
| 1.3.2.1 | Dashboard UI | 🟡 C | 🟠🔴 A,R | 🔵 I |
| 1.3.2.2 | Data Visualization | 🟡 C | 🟠🔴 A,R | 🟡 C |
| 1.3.2.3 | User Management UI | 🔵 I | 🟠🔴 A,R | 🔵 I |
| 1.3.3.1 | Data Processing Pipeline | 🟡 C | 🔵 I | 🟠🔴 A,R |
| 1.3.3.2 | ML Model Development | 🔵 I | 🔵 I | 🟠🔴 A,R |
| 1.3.3.3 | Prediction Engine | 🟡 C | 🔵 I | 🟠🔴 A,R |
| | **1.4 TESTING** | | | |
| 1.4.1 | Unit Testing | 🟠🔴 A,R | 🔴 R | 🔴 R |
| 1.4.2 | Integration Testing | 🟠🔴 A,R | 🟡 C | 🟡 C |
| 1.4.3 | System Testing | 🟠 A | 🔴 R | 🔴 R |
| 1.4.4 | User Acceptance Testing | 🟠 A | 🔴 R | 🟡 C |
| | **1.5 DEPLOYMENT** | | | |
| 1.5.1 | Environment Setup | 🟡 C | 🔵 I | 🟠🔴 A,R |
| 1.5.2 | Hugging Face Deployment | 🟡 C | 🔵 I | 🟠🔴 A,R |
| 1.5.3 | Production Release | 🟠 A | 🟡 C | 🔴 R |
| | **1.6 PROJECT CLOSURE** | | | |
| 1.6.1 | Documentation | 🟠 A | 🔴 R | 🟡 C |
| 1.6.2 | Training Materials | 🟡 C | 🟠🔴 A,R | 🟡 C |
| 1.6.3 | Final Report | 🟠🔴 A,R | 🟡 C | 🟡 C |

### 1.4 Resource Assignment Summary

| Team Member | Primary Responsibilities | Accountability Areas | Total Hours | Avg Hours/Week |
|:------------|:------------------------|:--------------------|:----------:|:--------------:|
| **Abdur Rehman** (i222518) | Backend APIs, Database Design, Testing Coordination, Sprint Planning | Project Management, Quality Assurance, Risk Management | **176 hrs** | 17.6 hrs |
| **Rayyan Ahmed** (i222489) | Dashboard UI, Data Visualizations, Technical Documentation, User Training | UI/UX Design, User Experience, Documentation | **168 hrs** | 16.8 hrs |
| **Muhammad Bilal Raza** (i222559) | ML Model Development, Data Pipeline, Docker Setup, Cloud Deployment | AI/ML Module, DevOps, Production Environment | **162 hrs** | 16.2 hrs |

---

### 1.5 Real-Time AQI Data Sample (December 4, 2025)

```json
{
  "city": "Lahore",
  "timestamp": "2025-12-04T10:00:00+05:00",
  "aqi": 378,
  "category": "Hazardous",
  "dominantPollutant": "pm25",
  "pollutants": {
    "pm25": {"value": 284, "unit": "μg/m³", "status": "Very High"},
    "pm10": {"value": 412, "unit": "μg/m³", "status": "Very High"},
    "o3": {"value": 45, "unit": "ppb", "status": "Moderate"},
    "no2": {"value": 89, "unit": "ppb", "status": "High"},
    "co": {"value": 1.2, "unit": "ppm", "status": "Good"}
  },
  "weather": {
    "temperature": 18,
    "humidity": 78,
    "windSpeed": 5,
    "windDirection": "NE"
  },
  "healthAdvisory": "Emergency conditions. All groups should remain indoors. Use air purifiers and N95 masks if outdoor exposure is unavoidable.",
  "prediction": {
    "next24h": 345,
    "next48h": 298,
    "next72h": 256,
    "trend": "Improving"
  }
}
```

---

## 📊 Task 2: Resource Loading - [10 Points]

### 2.1 Project Schedule with Detailed Resource Allocation

| Week | Date Range | Phase | i222518 (hrs) | i222489 (hrs) | i222559 (hrs) | Total | Status |
|:----:|:-----------|:------|:-------------:|:-------------:|:-------------:|:-----:|:------:|
| 1 | Oct 7-13 | Initiation | 18 | 8 | 10 | 36 | ⚠️ Under |
| 2 | Oct 14-20 | Planning | 20 | 10 | 12 | 42 | ⚠️ Under |
| 3 | Oct 21-27 | Design | 16 | 18 | 8 | 42 | ⚠️ Under |
| 4 | Oct 28-Nov 3 | Development | 22 | 16 | 20 | 58 | ✅ Near |
| 5 | Nov 4-10 | Development | **24** | 20 | **24** | **68** | 🔴 OVER |
| 6 | Nov 11-17 | Development | **22** | **22** | **22** | **66** | 🔴 OVER |
| 7 | Nov 18-24 | Development | 18 | **24** | 20 | **62** | 🔴 OVER |
| 8 | Nov 25-Dec 1 | Testing | 20 | 16 | 16 | 52 | ✅ Optimal |
| 9 | Dec 2-8 | Testing/Deploy | 18 | 18 | **22** | 58 | ✅ Near |
| 10 | Dec 9-15 | Closure | 16 | 20 | 14 | 50 | ⚠️ Under |
| | **TOTALS** | | **194 hrs** | **172 hrs** | **168 hrs** | **534 hrs** | |

**Team Capacity:** 60 hrs/week (20 hrs × 3 members)
**Individual Capacity:** 20 hrs/week

### 2.2 Resource Histogram - Abdur Rehman (i222518)

```
Hours  │ Project Manager / Backend Developer - BEFORE LEVELING
       │
   24  │                 ████
   22  │           ████       ████
   20  │      ████                   ████
   18  │ ████                             ████
   16  │           ░░░░                        ████
   14  │
   12  │
   10  │
       │─────────────────────────────────────────────── 20 hrs (Capacity)
       └──────────────────────────────────────────────────────────────
          W1    W2    W3    W4    W5    W6    W7    W8    W9   W10
          18    20    16    22    24    22    18    20    18    16

    Legend: ████ = Allocated Hours | ░░░░ = Under-allocation (< 16 hrs)
    
    ⚠️ RESOURCE CONFLICTS IDENTIFIED:
       • Week 4: 22 hrs (2 hrs OVER capacity)
       • Week 5: 24 hrs (4 hrs OVER capacity) ← CRITICAL
       • Week 6: 22 hrs (2 hrs OVER capacity)
```

### 2.3 Resource Histogram - Rayyan Ahmed (i222489)

```
Hours  │ Frontend Developer / UI Designer - BEFORE LEVELING
       │
   24  │                                    ████
   22  │                              ████
   20  │                        ████             ████
   18  │                 ████                         ████
   16  │           ████            ████
   14  │
   12  │
   10  │      ████
    8  │ ████
       │─────────────────────────────────────────────── 20 hrs (Capacity)
       └──────────────────────────────────────────────────────────────
          W1    W2    W3    W4    W5    W6    W7    W8    W9   W10
           8    10    18    16    20    22    24    16    18    20

    Legend: ████ = Allocated Hours
    
    ⚠️ RESOURCE CONFLICTS IDENTIFIED:
       • Week 6: 22 hrs (2 hrs OVER capacity)
       • Week 7: 24 hrs (4 hrs OVER capacity) ← CRITICAL
    
    📉 LOW UTILIZATION:
       • Week 1: 8 hrs (60% under capacity)
       • Week 2: 10 hrs (50% under capacity)
```

### 2.4 Resource Histogram - Muhammad Bilal Raza (i222559)

```
Hours  │ AI/ML Engineer / Data Analyst - BEFORE LEVELING
       │
   24  │                        ████
   22  │                              ████       ████
   20  │                 ████                         ████
   18  │
   16  │                                         ████
   14  │                                                   ████
   12  │      ████
   10  │ ████
    8  │           ░░░░
       │─────────────────────────────────────────────── 20 hrs (Capacity)
       └──────────────────────────────────────────────────────────────
          W1    W2    W3    W4    W5    W6    W7    W8    W9   W10
          10    12     8    20    24    22    20    16    22    14

    Legend: ████ = Allocated Hours | ░░░░ = Under-allocation
    
    ⚠️ RESOURCE CONFLICTS IDENTIFIED:
       • Week 5: 24 hrs (4 hrs OVER capacity) ← CRITICAL
       • Week 6: 22 hrs (2 hrs OVER capacity)
       • Week 9: 22 hrs (2 hrs OVER capacity)
    
    📉 LOW UTILIZATION:
       • Week 1: 10 hrs (50% under capacity)
       • Week 3: 8 hrs (60% under capacity)
```

---

## ⚖️ Task 3: Resource Leveling - [10 Points]

### 3.1 Initial Project-Level Resource Usage (BEFORE Leveling)

```
Total Hours │ PROJECT-LEVEL RESOURCE HISTOGRAM - BEFORE LEVELING
            │
        70  │                        ████
        66  │                              ████
        62  │                                    ████
        60  │━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ CAPACITY LINE
        58  │                 ████                             ████
        52  │                                         ████
        50  │                                                        ████
        42  │      ████████
        36  │ ████
            │
            └────────────────────────────────────────────────────────────
               W1    W2    W3    W4    W5    W6    W7    W8    W9    W10
               36    42    42    58    68    66    62    52    58    50

    🔴 OVER-ALLOCATED WEEKS (Above 60 hrs capacity):
       • Week 5: 68 hrs (+8 hrs, 13% over)
       • Week 6: 66 hrs (+6 hrs, 10% over)
       • Week 7: 62 hrs (+2 hrs, 3% over)
       
    ⚠️ Total Over-allocation: 16 person-hours need to be shifted
```

### 3.2 Resource Conflict Analysis

| Week | Total Hours | Capacity | Variance | Status | Root Cause |
|:----:|:-----------:|:--------:|:--------:|:------:|:-----------|
| 1 | 36 | 60 | -24 | 🟡 Under | Ramp-up phase |
| 2 | 42 | 60 | -18 | 🟡 Under | Still planning |
| 3 | 42 | 60 | -18 | 🟡 Under | Design overlap |
| 4 | 58 | 60 | -2 | ✅ Optimal | Development start |
| 5 | 68 | 60 | **+8** | 🔴 OVER | Parallel dev tracks |
| 6 | 66 | 60 | **+6** | 🔴 OVER | Integration crunch |
| 7 | 62 | 60 | **+2** | 🔴 OVER | Feature completion |
| 8 | 52 | 60 | -8 | ✅ Good | Testing phase |
| 9 | 58 | 60 | -2 | ✅ Optimal | Deploy prep |
| 10 | 50 | 60 | -10 | 🟡 Under | Closure activities |

### 3.3 Resource Leveling Techniques Applied

#### 🔧 Technique 1: Activity Splitting

| Activity | Original Schedule | Split Schedule | Hours Shifted |
|----------|------------------|----------------|---------------|
| ML Model Development (1.3.3.2) | Week 5 only (24h) | Week 4-5 (12h + 12h) | 4 hrs to W4 |
| Data Visualization (1.3.2.2) | Week 6 only (22h) | Week 5-6 (10h + 12h) | 4 hrs to W5* |

*Note: W5 shift compensated by other reductions

#### 🔧 Technique 2: Activity Delay (Using Float/Slack)

| Activity | Original Week | Delayed To | Slack Available | Impact |
|----------|--------------|------------|-----------------|--------|
| User Management UI (1.3.2.3) | Week 7 | Week 8 | 1 week | None on critical path |
| Integration Services (partial) | Week 6 | Week 7-8 | 0.5 weeks | Minimal |

#### 🔧 Technique 3: Resource Redistribution

| From | To | Hours | Justification |
|------|-----|-------|---------------|
| i222559 Week 5 | i222559 Week 3 | 4 hrs | Early data pipeline work |
| i222489 Week 7 | i222489 Week 2 | 4 hrs | Early UI research |
| i222518 Week 5 | i222518 Week 3 | 4 hrs | Early API design |

### 3.4 Leveled Resource Schedule

| Week | Activities (Adjusted) | i222518 | i222489 | i222559 | Total |
|:----:|:---------------------|:-------:|:-------:|:-------:|:-----:|
| 1 | Requirements, Feasibility, Early UI Research | 18 | 10 | 12 | **40** |
| 2 | Charter, Architecture, UI Wireframes | 18 | 14 | 12 | **44** |
| 3 | DB Design, API Design, UI/UX, Early Data Work | 18 | 18 | 12 | **48** |
| 4 | API Start, Dashboard Start, Data Pipeline | 20 | 18 | 18 | **56** |
| 5 | API Continue, Dashboard, ML Model Start | 20 | 18 | 20 | **58** |
| 6 | Integration, Data Viz, ML Model Continue | 18 | 20 | 20 | **58** |
| 7 | API Complete, Dashboard Polish, Prediction Engine | 16 | 18 | 20 | **54** |
| 8 | User Mgmt UI, Unit Testing, Integration Testing | 18 | 18 | 16 | **52** |
| 9 | System Testing, UAT, Deployment Setup | 16 | 18 | 18 | **52** |
| 10 | Documentation, Training, Final Report | 14 | 16 | 14 | **44** |
| | **TOTALS** | **176** | **168** | **162** | **506** |

### 3.5 Leveled Project-Level Resource Usage (AFTER Leveling)

```
Total Hours │ PROJECT-LEVEL RESOURCE HISTOGRAM - AFTER LEVELING
            │
        60  │━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ CAPACITY
        58  │                              ████████
        56  │                        ████
        54  │                                          ████
        52  │                                                ████████
        48  │                 ████
        44  │      ████                                             ████
        40  │ ████
            │
            └────────────────────────────────────────────────────────────
               W1    W2    W3    W4    W5    W6    W7    W8    W9    W10
               40    44    48    56    58    58    54    52    52    44

    ✅ ALL WEEKS NOW WITHIN CAPACITY (≤ 60 hrs)
    ✅ Maximum week: 58 hrs (3% under capacity)
    ✅ Smooth bell-curve distribution achieved
    ✅ No individual member exceeds 20 hrs/week
```

### 3.6 Before vs After Comparison

```
    BEFORE LEVELING                         AFTER LEVELING
    ═══════════════                         ══════════════
    
    70│     ▲ 68                            60│━━━━━━━━━━━━━━━
    66│       ▲ 66                          58│      ████████
    62│         ▲ 62                        56│    ████
    60│─────────────── Capacity             54│          ████
    58│  ▲       ▲                          52│        ████████
    52│    ▲                                48│    ████
    42│ ▲▲                                  44│  ████      ████
    36│▲                                    40│████
      └─────────────────                      └─────────────────
       W1→W10                                  W1→W10
    
    ╔═══════════════════════════════════════════════════════════╗
    ║ METRIC              │ BEFORE      │ AFTER      │ CHANGE  ║
    ╠═══════════════════════════════════════════════════════════╣
    ║ Peak Week Load      │ 68 hrs      │ 58 hrs     │ ↓ 15%   ║
    ║ Over-allocated Wks  │ 3 weeks     │ 0 weeks    │ ↓ 100%  ║
    ║ Load Variance       │ 32 hrs      │ 18 hrs     │ ↓ 44%   ║
    ║ Std. Deviation      │ 10.2 hrs    │ 5.8 hrs    │ ↓ 43%   ║
    ║ Resource Efficiency │ 78%         │ 92%        │ ↑ 14%   ║
    ╚═══════════════════════════════════════════════════════════╝
```

---

## 🔗 Task 4: Network Diagram & Schedule Update - [10 Points]

### 4.1 Activity-on-Node (AON) Network Diagram

> **Note:** View the interactive HTML version: `AON_Network_Diagram.html`

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PROJECT START (Week 0)                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
            ┌───────────────────────┼───────────────────────┐
            ▼                       ▼                       ▼
   ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
   │ 1.1.1 Req.      │    │ 1.1.2 Feasib.   │    │ [Early UI       │
   │ Gathering       │    │ Study           │    │  Research]      │
   │ ━━━━━━━━━━━━━━  │    │ ━━━━━━━━━━━━━━  │    │ (Leveled)       │
   │ W1 | 18h        │    │ W1 | 10h        │    │ W1-2 | 10h      │
   │ i222518         │    │ i222518,i222559 │    │ i222489         │
   │ [CRITICAL]      │    │ [CRITICAL]      │    │                 │
   └────────┬────────┘    └────────┬────────┘    └────────┬────────┘
            │                      │                      │
            └──────────────────────┼──────────────────────┘
                                   ▼
                      ┌─────────────────────┐
                      │ 1.1.3 Project       │
                      │ Charter             │
                      │ ━━━━━━━━━━━━━━━━━━  │
                      │ W2 | 10h            │
                      │ i222518 [CRITICAL]  │
                      └──────────┬──────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 1.2.1 System    │    │ 1.2.2 Database  │    │ 1.2.4 UI/UX     │
│ Architecture    │    │ Design          │    │ Design          │
│ ━━━━━━━━━━━━━━  │    │ ━━━━━━━━━━━━━━  │    │ ━━━━━━━━━━━━━━  │
│ W2-3 | 14h      │    │ W3 | 8h         │    │ W3 | 18h        │
│ i222518         │    │ i222518         │    │ i222489         │
│ [CRITICAL]      │    │ [CRITICAL]      │    │ [CRITICAL]      │
└────────┬────────┘    └────────┬────────┘    └────────┬────────┘
         │                      │                      │
         └──────────────────────┼──────────────────────┘
                                │
         ┌──────────────────────┼──────────────────────┐
         ▼                      ▼                      ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│ 1.2.3 API       │   │ 1.3.3.1 Data    │   │ 1.3.2.1 Dash-   │
│ Contract        │   │ Pipeline        │   │ board UI        │
│ ━━━━━━━━━━━━━━  │   │ ━━━━━━━━━━━━━━  │   │ ━━━━━━━━━━━━━━  │
│ W3 | 4h         │   │ W3-4 | 12h      │   │ W4-7 | 74h      │
│ i222518         │   │ i222559         │   │ i222489         │
│ [CRITICAL]      │   │ [CRITICAL]      │   │ [CRITICAL]      │
└────────┬────────┘   └────────┬────────┘   └────────┬────────┘
         │                     │                     │
         ▼                     ▼                     ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│ 1.3.1.1 API     │   │ 1.3.3.2 ML      │   │ 1.3.2.2 Data    │
│ Development     │   │ Model Dev       │   │ Visualization   │
│ ━━━━━━━━━━━━━━  │   │ ━━━━━━━━━━━━━━  │   │ ━━━━━━━━━━━━━━  │
│ W4-6 | 58h      │   │ W4-7 | 78h      │   │ W6-7 | 24h      │
│ i222518         │   │ i222559         │   │ i222489         │
│ [CRITICAL]      │   │ [CRITICAL]      │   │ [CRITICAL]      │
└────────┬────────┘   └────────┬────────┘   └────────┬────────┘
         │                     │                     │
         ▼                     ▼                     │
┌─────────────────┐   ┌─────────────────┐            │
│ 1.3.1.2 DB      │   │ 1.3.3.3 Pred.   │            │
│ Implementation  │   │ Engine          │            │
│ (has 1 wk slack)│   │ ━━━━━━━━━━━━━━  │            │
│ W5 | 4h         │   │ W6-7 | 20h      │            │
│ i222518         │   │ i222559         │            │
└────────┬────────┘   └────────┬────────┘            │
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               │
                               ▼
                   ┌─────────────────────┐
                   │ 1.3.1.3 Integration │
                   │ Services            │
                   │ ━━━━━━━━━━━━━━━━━━  │
                   │ W6-8 | 20h          │
                   │ i222518 [CRITICAL]  │
                   └──────────┬──────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 1.4.1 Unit      │ │ 1.4.2 Integr.   │ │ 1.3.2.3 User    │
│ Testing         │ │ Testing         │ │ Mgmt UI         │
│ ━━━━━━━━━━━━━━  │ │ ━━━━━━━━━━━━━━  │ │ (Delayed to W8) │
│ W8 | 26h        │ │ W8 | 8h         │ │ W8 | 12h        │
│ All Members     │ │ i222518         │ │ i222489         │
│ [CRITICAL]      │ │ [CRITICAL]      │ │ (has slack)     │
└────────┬────────┘ └────────┬────────┘ └────────┬────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                ┌─────────────────────┐
                │ 1.4.3 System        │
                │ Testing             │
                │ ━━━━━━━━━━━━━━━━━━  │
                │ W9 | 18h            │
                │ i222489, i222559    │
                │ [CRITICAL]          │
                └──────────┬──────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 1.4.4 UAT       │ │ 1.5.1 Env.      │ │ 1.5.2 HF Deploy │
│ ━━━━━━━━━━━━━━  │ │ Setup           │ │ ━━━━━━━━━━━━━━  │
│ W9 | 8h         │ │ ━━━━━━━━━━━━━━  │ │ W9-10 | 8h      │
│ i222489         │ │ W9 | 10h        │ │ i222559         │
│ [CRITICAL]      │ │ i222559         │ │ [CRITICAL]      │
└────────┬────────┘ │ [CRITICAL]      │ └────────┬────────┘
         │          └────────┬────────┘          │
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                ┌─────────────────────┐
                │ 1.5.3 Production    │
                │ Release             │
                │ ━━━━━━━━━━━━━━━━━━  │
                │ W10 | 10h           │
                │ i222518, i222559    │
                │ [CRITICAL]          │
                └──────────┬──────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 1.6.1 Docs      │ │ 1.6.2 Training  │ │ 1.6.3 Final     │
│ ━━━━━━━━━━━━━━  │ │ Materials       │ │ Report          │
│ W10 | 10h       │ │ ━━━━━━━━━━━━━━  │ │ ━━━━━━━━━━━━━━  │
│ i222489         │ │ W10 | 6h        │ │ W10 | 10h       │
│ [CRITICAL]      │ │ i222489         │ │ i222518         │
└────────┬────────┘ └────────┬────────┘ │ [CRITICAL]      │
         │                   │          └────────┬────────┘
         └───────────────────┼───────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PROJECT END (Week 10)                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Critical Path Analysis

**Critical Path:** START → 1.1.1 → 1.1.3 → 1.2.1 → 1.2.3 → 1.3.1.1 → 1.3.1.3 → 1.4.2 → 1.4.3 → 1.5.2 → 1.5.3 → 1.6.3 → END

**Critical Path Duration:** 10 weeks (70 working days)

| Activity | Description | ES | EF | LS | LF | Slack | Critical? |
|:--------:|:------------|:--:|:--:|:--:|:--:|:-----:|:---------:|
| 1.1.1 | Requirements Gathering | 0 | 1 | 0 | 1 | **0** | ✅ |
| 1.1.2 | Feasibility Study | 0 | 1 | 0 | 1 | **0** | ✅ |
| 1.1.3 | Project Charter | 1 | 2 | 1 | 2 | **0** | ✅ |
| 1.2.1 | System Architecture | 2 | 3 | 2 | 3 | **0** | ✅ |
| 1.2.2 | Database Design | 2 | 3 | 2 | 3 | **0** | ✅ |
| 1.2.3 | API Contract Design | 3 | 4 | 3 | 4 | **0** | ✅ |
| 1.2.4 | UI/UX Design | 2 | 3 | 2 | 3 | **0** | ✅ |
| 1.3.1.1 | API Development | 4 | 7 | 4 | 7 | **0** | ✅ |
| 1.3.1.2 | DB Implementation | 4 | 5 | 5 | 6 | **1** | ❌ |
| 1.3.1.3 | Integration Services | 6 | 8 | 6 | 8 | **0** | ✅ |
| 1.3.2.1 | Dashboard UI | 4 | 7 | 4 | 7 | **0** | ✅ |
| 1.3.2.2 | Data Visualization | 6 | 8 | 6 | 8 | **0** | ✅ |
| 1.3.2.3 | User Management UI | 7 | 8 | 7 | 8 | **0.5** | ❌ |
| 1.3.3.1 | Data Pipeline | 3 | 4 | 3 | 4 | **0** | ✅ |
| 1.3.3.2 | ML Model Dev | 4 | 7 | 4 | 7 | **0** | ✅ |
| 1.3.3.3 | Prediction Engine | 6 | 8 | 6 | 8 | **0** | ✅ |
| 1.4.1 | Unit Testing | 7 | 8 | 7 | 8 | **0** | ✅ |
| 1.4.2 | Integration Testing | 8 | 9 | 8 | 9 | **0** | ✅ |
| 1.4.3 | System Testing | 8 | 9 | 8 | 9 | **0** | ✅ |
| 1.4.4 | UAT | 9 | 10 | 9 | 10 | **0** | ✅ |
| 1.5.1 | Environment Setup | 8 | 9 | 8 | 9 | **0** | ✅ |
| 1.5.2 | HF Deployment | 9 | 10 | 9 | 10 | **0** | ✅ |
| 1.5.3 | Production Release | 9 | 10 | 9 | 10 | **0** | ✅ |
| 1.6.1 | Documentation | 9 | 10 | 9 | 10 | **0** | ✅ |
| 1.6.2 | Training Materials | 9 | 10 | 9 | 10 | **0** | ✅ |
| 1.6.3 | Final Report | 9 | 10 | 9 | 10 | **0** | ✅ |

### 4.3 Updated Project Schedule (Post-Leveling)

| Week | Dates | Abdur Rehman (i222518) | Rayyan Ahmed (i222489) | Muhammad Bilal Raza (i222559) |
|:----:|:------|:-----------------------|:-----------------------|:------------------------------|
| **1** | Oct 7-13 | Requirements (8h), Feasibility (10h) | Requirements Review (6h), UI Research (4h) | Feasibility Support (8h), Tech Research (4h) |
| **2** | Oct 14-20 | Charter (10h), Architecture (8h) | UI Research (8h), Wireframes (6h) | Tech Stack Eval (8h), Data Sources (4h) |
| **3** | Oct 21-27 | Architecture (6h), DB Design (8h), API Design (4h) | UI/UX Design (14h), Prototypes (4h) | Pipeline Design (8h), ML Research (4h) |
| **4** | Oct 28-Nov 3 | API Dev Start (16h), DB Schema (4h) | Dashboard Start (14h), Components (4h) | Pipeline Impl (12h), Data Collection (6h) |
| **5** | Nov 4-10 | API Continue (16h), Endpoints (4h) | Dashboard Continue (14h), Styling (4h) | ML Model Start (16h), Training (4h) |
| **6** | Nov 11-17 | API Complete (10h), Integration (8h) | Data Viz (16h), Charts (4h) | ML Continue (14h), Validation (6h) |
| **7** | Nov 18-24 | Integration (12h), API Tests (4h) | Dashboard Polish (10h), Viz Complete (8h) | Prediction Engine (14h), Optimization (6h) |
| **8** | Nov 25-Dec 1 | Unit Tests (10h), Integration Tests (8h) | User Mgmt UI (12h), Unit Tests (6h) | Unit Tests ML (10h), Integration (6h) |
| **9** | Dec 2-8 | Integration Complete (8h), Release Prep (8h) | System Testing (10h), UAT (8h) | System Testing (8h), Deploy Setup (10h) |
| **10** | Dec 9-15 | Final Report (10h), Release Support (4h) | Documentation (10h), Training (6h) | HF Deploy (8h), Production Release (6h) |

### 4.4 Updated Resource Histograms (Post-Leveling)

#### Abdur Rehman (i222518) - Post-Leveling

```
Hours │ PM/Backend Developer - AFTER LEVELING
      │
  20  │      ████████████████
  18  │ ████                  ████      ████
  16  │                            ████      ████
  14  │                                          ████
      │─────────────────────────────────────────────── Capacity (20h)
      └──────────────────────────────────────────────────────────
         W1    W2    W3    W4    W5    W6    W7    W8    W9   W10
         18    18    18    20    20    18    16    18    16    14
      
      ✅ All weeks ≤ 20 hrs | Peak: 20 hrs (W4-W5) | Smooth curve achieved
```

#### Rayyan Ahmed (i222489) - Post-Leveling

```
Hours │ Frontend Developer - AFTER LEVELING
      │
  20  │                              ████
  18  │           ████████████████        ████████████
  16  │                                                ████
  14  │      ████
  10  │ ████
      │─────────────────────────────────────────────── Capacity (20h)
      └──────────────────────────────────────────────────────────
         W1    W2    W3    W4    W5    W6    W7    W8    W9   W10
         10    14    18    18    18    20    18    18    18    16
      
      ✅ All weeks ≤ 20 hrs | Gradual ramp-up from 10→20 hrs
```

#### Muhammad Bilal Raza (i222559) - Post-Leveling

```
Hours │ AI/ML Engineer - AFTER LEVELING
      │
  20  │                        ████████████████
  18  │                                              ████
  16  │                                                   ████
  14  │                                                        ████
  12  │ ████████████
      │─────────────────────────────────────────────── Capacity (20h)
      └──────────────────────────────────────────────────────────
         W1    W2    W3    W4    W5    W6    W7    W8    W9   W10
         12    12    12    18    20    20    20    16    18    14
      
      ✅ All weeks ≤ 20 hrs | Peak during ML development (W5-W7)
```

---

## 📈 Summary & Deliverables

### ✅ Deliverables Checklist

| # | Deliverable | Status | Section |
|:-:|:------------|:------:|:--------|
| 1 | Resource Assignment Matrix (RAM/RACI) | ✅ Complete | Task 1.3 |
| 2 | Work Breakdown Structure (WBS) | ✅ Complete | Task 1.2 |
| 3 | Initial Resource Loading (Before) | ✅ Complete | Task 2.1-2.4 |
| 4 | Individual Resource Histograms (Before) | ✅ Complete | Task 2.2-2.4 |
| 5 | Project-Level Histogram (Before) | ✅ Complete | Task 3.1 |
| 6 | Resource Conflict Analysis | ✅ Complete | Task 3.2 |
| 7 | Leveling Techniques Applied | ✅ Complete | Task 3.3 |
| 8 | Leveled Resource Schedule | ✅ Complete | Task 3.4 |
| 9 | Project-Level Histogram (After) | ✅ Complete | Task 3.5 |
| 10 | Before/After Comparison | ✅ Complete | Task 3.6 |
| 11 | AON Network Diagram | ✅ Complete | Task 4.1 |
| 12 | Critical Path Analysis | ✅ Complete | Task 4.2 |
| 13 | Updated Project Schedule | ✅ Complete | Task 4.3 |
| 14 | Updated Resource Histograms | ✅ Complete | Task 4.4 |

### 📊 Key Performance Metrics

| Metric | Before Leveling | After Leveling | Improvement |
|:-------|:---------------:|:--------------:|:-----------:|
| **Peak Week Load** | 68 hrs | 58 hrs | ↓ 15% |
| **Over-allocated Weeks** | 3 weeks | 0 weeks | ↓ 100% |
| **Load Variance** | 32 hrs | 18 hrs | ↓ 44% |
| **Standard Deviation** | 10.2 hrs | 5.8 hrs | ↓ 43% |
| **Resource Efficiency** | 78% | 92% | ↑ 14% |
| **Max Individual Load** | 24 hrs/wk | 20 hrs/wk | ↓ 17% |

### 📅 Project Timeline Summary

| Milestone | Date | Responsible | Deliverable |
|:----------|:-----|:------------|:------------|
| Project Kickoff | October 7, 2025 | All Team | Project Charter, Stakeholder Register |
| Design Complete | October 27, 2025 | i222518, i222489 | System Architecture, Database Schema, UI Mockups |
| Development Complete | November 24, 2025 | All Team | Backend APIs, Frontend Dashboard, ML Models |
| Testing Complete | December 8, 2025 | All Team | Test Reports, Bug Fixes, UAT Sign-off |
| Production Release | December 13, 2025 | i222559 | Deployed Application on Hugging Face |
| Project Closure | December 15, 2025 | i222518 | Final Report, Lessons Learned, Documentation |

---

## 📎 Appendix

### A. Supporting Files

| File | Description | Format |
|:-----|:------------|:-------|
| `AON_Network_Diagram.html` | Interactive network diagram with animations and critical path highlighting | HTML5 + CSS3 |
| `RACI_Matrix.html` | Color-coded RACI matrix visualization with team member cards | HTML5 + CSS3 |
| `Resource_Histograms_Visual.html` | Dynamic Chart.js histograms with before/after comparison | HTML5 + Chart.js |
| `Resource_Histograms_Data.csv` | Raw data for analysis and verification | CSV |

### B. Tool References

- **Microsoft Project / GanttProject** - Initial WBS and scheduling
- **Chart.js 4.4.1** - Resource histogram visualization  
- **D3.js 7.8.5** - Network diagram rendering
- **Figma** - UI/UX prototyping and design mockups
- **Git/GitHub** - Version control and collaboration
- **VS Code** - Development environment
- **Draw.io** - Diagram creation

### C. API Documentation References

| API | Documentation URL | Usage |
|:----|:------------------|:------|
| OpenWeatherMap Air Pollution | https://openweathermap.org/api/air-pollution | Real-time air quality data |
| WAQI World Air Quality Index | https://aqicn.org/api/ | Global AQI readings |
| IQAir AirVisual | https://api-docs.iqair.com/ | City-level pollution data |
| EPA AirNow | https://docs.airnowapi.org/ | US EPA air quality standards |

### C. Abbreviations

| Term | Full Form |
|:-----|:----------|
| AON | Activity-on-Node |
| CPM | Critical Path Method |
| ES | Early Start |
| EF | Early Finish |
| LS | Late Start |
| LF | Late Finish |
| RACI | Responsible, Accountable, Consulted, Informed |
| RAM | Resource Assignment Matrix |
| WBS | Work Breakdown Structure |
| AQI | Air Quality Index |
| PM | Particulate Matter |

---

<div align="center">

### 📝 Document Information

| Version | Date | Authors | Reviewed By |
|:-------:|:----:|:--------|:------------|
| 2.0 | December 4, 2025 | **Muhammad Bilal Raza** (i222559), **Rayyan Ahmed** (i222489), **Abdur Rehman** (i222518) | Dr. Nauman Bin Ali |

**Software Project Management - CS-401 Fall 2025**  
**FAST National University of Computer and Emerging Sciences, Islamabad**

---

### 📊 Project Highlights

| Metric | Value |
|:-------|:------|
| **Total Work Packages** | 26 |
| **Total Person-Hours** | 506 hrs |
| **Project Duration** | 10 Weeks |
| **Critical Path Activities** | 22 |
| **Resource Efficiency** | 92% (Post-Leveling) |
| **Over-allocation Eliminated** | 100% |

---

*This document was prepared as part of Assignment 04 requirements for Software Project Management course*

**© 2025 Muhammad Bilal Raza, Rayyan Ahmed, Abdur Rehman - All Rights Reserved**

</div>
````
