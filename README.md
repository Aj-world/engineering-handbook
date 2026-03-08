# Engineering Handbook

> A structured, open-source knowledge base for mastering backend engineering — from fundamental data structures through distributed systems design.

Built for interview preparation and deep structured learning. Inspired by the documentation style of Stripe Docs and Vercel Docs.

---

## Project Structure

```
engineering-handbook/
│
├── index.html                  ← Homepage / roadmap overview
│
├── pages/                      ← Individual topic pages
│   ├── arrays.html
│   ├── hashmap.html
│   ├── linkedlist.html
│   ├── stack.html
│   ├── queue.html
│   ├── trees.html
│   ├── graphs.html
│   ├── operating-systems.html
│   ├── networking.html
│   ├── databases.html
│   ├── rest-api.html
│   ├── authentication.html
│   ├── authorization.html
│   ├── api-security.html
│   ├── caching.html
│   ├── message-queues.html
│   ├── event-driven.html
│   ├── file-storage.html
│   ├── scalability.html
│   ├── load-balancing.html
│   ├── sharding.html
│   ├── distributed-systems.html
│   ├── docker.html
│   ├── cicd.html
│   ├── cloud-basics.html
│   └── monitoring.html
│
├── assets/
│   ├── css/
│   │   └── style.css           ← All shared styles (tokens, layout, components)
│   │
│   └── js/
│       └── search.js           ← Live search + copy-to-clipboard + sidebar active state
│
└── README.md
```

---

## Phases

| Phase | Topic Area | Topics |
|-------|-----------|--------|
| 01 | Programming Fundamentals | Arrays, HashMap, Linked List, Stack, Queue, Trees, Graphs |
| 02 | Core Computer Science | Operating Systems, Networking, Databases |
| 03 | Backend Engineering | REST API Design, Authentication, Authorization, API Security |
| 04 | Advanced Backend | Caching, Message Queues, Event Driven Systems, File Storage |
| 05 | System Design | Scalability, Load Balancing, Sharding, Distributed Systems |
| 06 | Infrastructure | Docker, CI/CD, Cloud Basics, Monitoring |

---

## Design System

### Fonts
- **Headings:** Fraunces (optical-size serif)
- **Code / labels:** JetBrains Mono
- **Body:** DM Sans

### Colors
```css
--blue:   #4d91ff   /* Phase 01 */
--purple: #9b7dff   /* Phase 02 */
--teal:   #2dd9b0   /* Phase 03 */
--amber:  #f5a623   /* Phase 04 */
--sky:    #38c8f5   /* Phase 05 */
--rose:   #ff6b81   /* Phase 06 */
```

### Layout
Three-column documentation layout:
- **Left sidebar** (252px) — sticky nav with all topics
- **Main content** (flex, max 900px) — article prose
- **Right rail** (200px) — on-page TOC (hidden below 1200px)

---

## Adding a New Topic Page

1. Create `pages/your-topic.html`
2. Use the same HTML shell as `pages/arrays.html` (copy the boilerplate)
3. Update the `<title>` and doc header content
4. Set `.sidebar-item.active` on the correct sidebar link
5. Add the topic to the `TOPICS` array in `assets/js/search.js`
6. Link it from `index.html` in the correct phase section

---

## Features

- **Live search** — `⌘K` / `Ctrl+K` opens search, filters all 30 topics instantly
- **Keyboard navigation** — Arrow keys navigate results, `Escape` closes
- **Active sidebar** — current page auto-highlighted via JS pathname detection
- **Copy code** — one-click copy button on every code block
- **Responsive** — sidebar collapses on mobile, TOC rail hides below 1200px
- **No build step** — pure HTML + CSS + vanilla JS, deploy directly on Netlify/GitHub Pages

---

## Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/your-username/engineering-handbook.git
git push -u origin main
# Enable GitHub Pages → Settings → Pages → Deploy from branch: main / (root)
```

### Netlify
Drag and drop the `engineering-handbook/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b topic/linked-list`
3. Add your content following the existing page template
4. Open a pull request with a short description

All contributions welcome — corrections, new topics, better examples.

---

## License

MIT — free to use, modify, and distribute.
