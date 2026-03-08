/**
 * Engineering Handbook — Search
 * Provides live search across all topics.
 * Works from both index.html (root) and pages/*.html (one level deep).
 */

const TOPICS = [
  // Phase 1
  { name: 'Arrays',            slug: 'arrays',             phase: 'Phase 01 · Fundamentals', color: '#4d91ff' },
  { name: 'HashMap',           slug: 'hashmap',            phase: 'Phase 01 · Fundamentals', color: '#4d91ff' },
  { name: 'Linked List',       slug: 'linkedlist',         phase: 'Phase 01 · Fundamentals', color: '#4d91ff' },
  { name: 'Stack',             slug: 'stack',              phase: 'Phase 01 · Fundamentals', color: '#4d91ff' },
  { name: 'Queue',             slug: 'queue',              phase: 'Phase 01 · Fundamentals', color: '#4d91ff' },
  { name: 'Trees',             slug: 'trees',              phase: 'Phase 01 · Fundamentals', color: '#4d91ff' },
  { name: 'Graphs',            slug: 'graphs',             phase: 'Phase 01 · Fundamentals', color: '#4d91ff' },
  // Phase 2
  { name: 'Operating Systems', slug: 'operating-systems',  phase: 'Phase 02 · CS Core',      color: '#9b7dff' },
  { name: 'Networking',        slug: 'networking',         phase: 'Phase 02 · CS Core',      color: '#9b7dff' },
  { name: 'Databases',         slug: 'databases',          phase: 'Phase 02 · CS Core',      color: '#9b7dff' },
  // Phase 3
  { name: 'REST API Design',   slug: 'rest-api',           phase: 'Phase 03 · Backend',      color: '#2dd9b0' },
  { name: 'Authentication',    slug: 'authentication',     phase: 'Phase 03 · Backend',      color: '#2dd9b0' },
  { name: 'Authorization',     slug: 'authorization',      phase: 'Phase 03 · Backend',      color: '#2dd9b0' },
  { name: 'API Security',      slug: 'api-security',       phase: 'Phase 03 · Backend',      color: '#2dd9b0' },
  // Phase 4
  { name: 'Caching',           slug: 'caching',            phase: 'Phase 04 · Advanced',     color: '#f5a623' },
  { name: 'Message Queues',    slug: 'message-queues',     phase: 'Phase 04 · Advanced',     color: '#f5a623' },
  { name: 'Event Driven Systems', slug: 'event-driven',   phase: 'Phase 04 · Advanced',     color: '#f5a623' },
  { name: 'File Storage',      slug: 'file-storage',       phase: 'Phase 04 · Advanced',     color: '#f5a623' },
  // Phase 5
  { name: 'Scalability',       slug: 'scalability',        phase: 'Phase 05 · System Design', color: '#38c8f5' },
  { name: 'Load Balancing',    slug: 'load-balancing',     phase: 'Phase 05 · System Design', color: '#38c8f5' },
  { name: 'Sharding',          slug: 'sharding',           phase: 'Phase 05 · System Design', color: '#38c8f5' },
  { name: 'Distributed Systems', slug: 'distributed-systems', phase: 'Phase 05 · System Design', color: '#38c8f5' },
  // Phase 6
  { name: 'Docker',            slug: 'docker',             phase: 'Phase 06 · Infrastructure', color: '#ff6b81' },
  { name: 'CI/CD',             slug: 'cicd',               phase: 'Phase 06 · Infrastructure', color: '#ff6b81' },
  { name: 'Cloud Basics',      slug: 'cloud-basics',       phase: 'Phase 06 · Infrastructure', color: '#ff6b81' },
  { name: 'Monitoring',        slug: 'monitoring',         phase: 'Phase 06 · Infrastructure', color: '#ff6b81' },
];

/** Resolve path to pages/ dir relative to caller */
function pagesBase() {
  // If we're already inside pages/, just use ./
  if (window.location.pathname.includes('/pages/')) return './';
  return './pages/';
}

function buildResultHTML(topic) {
  const href = `${pagesBase()}${topic.slug}.html`;
  return `
    <a class="search-result-item" href="${href}">
      <div class="sri-icon" style="background:${topic.color}18">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${topic.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      </div>
      <div class="sri-text">
        <p class="sri-name">${highlight(topic.name)}</p>
        <p class="sri-phase">${topic.phase}</p>
      </div>
      <span class="sri-mark">↗</span>
    </a>`;
}

let _query = '';

function highlight(text) {
  if (!_query) return text;
  const re = new RegExp(`(${_query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(77,145,255,.25);color:#f0f4ff;border-radius:2px;padding:0 2px">$1</mark>');
}

function initSearch() {
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const kbd     = document.getElementById('search-kbd');
  if (!input || !results) return;

  function doSearch(q) {
    _query = q.trim();
    results.innerHTML = '';

    if (!_query) {
      results.classList.remove('visible');
      return;
    }

    const matches = TOPICS.filter(t =>
      t.name.toLowerCase().includes(_query.toLowerCase()) ||
      t.phase.toLowerCase().includes(_query.toLowerCase())
    ).slice(0, 6);

    if (matches.length === 0) {
      results.innerHTML = `<p class="sri-empty">No results for "<strong>${_query}</strong>"</p>`;
    } else {
      results.innerHTML = matches.map(buildResultHTML).join('');
    }
    results.classList.add('visible');
  }

  input.addEventListener('input', e => doSearch(e.target.value));

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-search')) {
      results.classList.remove('visible');
    }
  });

  // ⌘K / Ctrl+K focus
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
    if (e.key === 'Escape') {
      results.classList.remove('visible');
      input.blur();
    }
  });

  // Keyboard navigation in results
  input.addEventListener('keydown', e => {
    const items = results.querySelectorAll('.search-result-item');
    const active = results.querySelector('.search-result-item:focus');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!active) items[0]?.focus();
      else {
        const idx = [...items].indexOf(active);
        items[idx + 1]?.focus();
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (active) {
        const idx = [...items].indexOf(active);
        if (idx === 0) input.focus();
        else items[idx - 1]?.focus();
      }
    }
  });

  // Hide kbd hint when typing
  input.addEventListener('focus', () => { if (kbd) kbd.style.opacity = '0'; });
  input.addEventListener('blur',  () => { if (kbd) kbd.style.opacity = '1'; });
}

// Copy-to-clipboard for code blocks
function initCopyButtons() {
  document.querySelectorAll('.code-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block')?.querySelector('pre');
      if (!pre) return;
      navigator.clipboard.writeText(pre.innerText).then(() => {
        btn.textContent = 'copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });
}

// Active sidebar link highlight
function initActiveSidebar() {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-item').forEach(el => {
    const href = el.getAttribute('href') || '';
    if (href === current || href.endsWith('/' + current)) {
      el.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSearch();
  initCopyButtons();
  initActiveSidebar();
});
