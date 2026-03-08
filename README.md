# Engineering Handbook

![License: MIT](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-blue)
![Deployment](https://img.shields.io/badge/deployment-static-brightgreen)

> A structured **open-source engineering knowledge base** for mastering backend engineering — from **fundamental data structures** to **distributed systems design**.

Built for **interview preparation**, **deep technical revision**, and **structured learning**.

The goal of this project is to transform fragmented learning resources into a structured, continuously evolving engineering handbook.

Inspired by the documentation design philosophy used by companies like Stripe and Vercel.

---

## Table of Contents

- [Live Website](#live-website)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Learning Roadmap](#learning-roadmap)
- [Documentation Structure](#documentation-structure)
- [Design System](#design-system)
- [Features](#features)
- [Adding a New Topic](#adding-a-new-topic)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Live Website

**GitHub Pages** — https://aj-world.github.io/engineering-handbook/

**Netlify** — https://engineering-handbook.netlify.app

---

## Quick Start

Clone the repository:

```bash
git clone https://github.com/Aj-world/engineering-handbook.git
```

Open `index.html` in your browser. No build process required.

---

## Project Structure

```
engineering-handbook/
│
├── index.html
│   └── Homepage / learning roadmap
│
├── pages/
│   └── Topic documentation pages
│
│   ├── arrays.html
│   ├── hashmap.html
│   ├── linkedlist.html
│   ├── stack.html
│   ├── queue.html
│   ├── trees.html
│   ├── graphs.html
│
│   ├── operating-systems.html
│   ├── networking.html
│   ├── databases.html
│
│   ├── rest-api.html
│   ├── authentication.html
│   ├── authorization.html
│   ├── api-security.html
│
│   ├── caching.html
│   ├── message-queues.html
│   ├── event-driven.html
│   ├── file-storage.html
│
│   ├── scalability.html
│   ├── load-balancing.html
│   ├── sharding.html
│   ├── distributed-systems.html
│
│   ├── docker.html
│   ├── cicd.html
│   ├── cloud-basics.html
│   └── monitoring.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── search.js
│
└── README.md
```

---

## Learning Roadmap

| Phase  | Area                     | Topics                                                       |
| ------ | ------------------------ | ------------------------------------------------------------ |
| **01** | Programming Fundamentals | Arrays, HashMap, Linked List, Stack, Queue, Trees, Graphs    |
| **02** | Core Computer Science    | Operating Systems, Networking, Databases                     |
| **03** | Backend Engineering      | REST API Design, Authentication, Authorization, API Security |
| **04** | Advanced Backend         | Caching, Message Queues, Event Driven Systems, File Storage  |
| **05** | System Design            | Scalability, Load Balancing, Sharding, Distributed Systems   |
| **06** | Infrastructure           | Docker, CI/CD, Cloud Basics, Monitoring                      |

---

## Documentation Structure

Each topic follows a **consistent learning format**:

```
1. Theory
2. Mental Model
3. Properties
4. Complexity
5. Real System Usage
6. Code Example
```

This structure helps with **fast revision before interviews**.

---

## Design System

### Fonts

| Usage    | Font           |
| -------- | -------------- |
| Headings | Fraunces       |
| Code     | JetBrains Mono |
| Body     | DM Sans        |

### Phase Color System

| Phase | Color  |
| ----- | ------ |
| 01    | Blue   |
| 02    | Purple |
| 03    | Teal   |
| 04    | Amber  |
| 05    | Sky    |
| 06    | Rose   |

Used throughout the UI to visually distinguish roadmap stages.

---

## Features

- Live search (`Ctrl + K` / `⌘ + K`)
- Keyboard navigation
- Active sidebar highlighting
- Copy-to-clipboard for code blocks
- Responsive layout
- Sticky documentation sidebar
- No build tools required
- Pure **HTML + CSS + Vanilla JS**

---

## Adding a New Topic

1. Create a new page:
```
pages/your-topic.html
```

2. Copy the structure from:
```
pages/arrays.html
```

3. Update the `title`, `header`, and `content sections`.

4. Register the topic in:
```
assets/js/search.js
```

5. Link it from `index.html`.

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/Aj-world/engineering-handbook.git
```

Open `index.html` in any browser. No build process required.

---

## Deployment

### GitHub Pages

```
Settings → Pages → Source → Deploy from branch
Branch → master → Folder → /root
```

Site URL: https://aj-world.github.io/engineering-handbook/

### Netlify

Connect the repository or drag the folder to https://app.netlify.com/drop

Netlify will automatically deploy the site.

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch:
```bash
git checkout -b topic/your-topic-name
```
3. Add or improve documentation
4. Open a pull request

---

## License

[MIT License](LICENSE) — free to use, modify, and distribute.

---

## Author

**Abinash Nayak**
Backend Engineering Learner & System Design Enthusiast

---

## Future Improvements

- Interactive diagrams
- System design visualizations
- Topic progress tracking
- Search indexing across pages