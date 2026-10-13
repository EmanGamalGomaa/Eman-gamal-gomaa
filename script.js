/* ==========================================================================
   Renders the portfolio from data.js — edit content there, not here.
   ========================================================================== */

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const escapeHtml = (str = "") =>
    String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const categoryLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || id;

  const ICONS = {
    brand: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>',
    social: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
    video: '<rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3z"/>',
    motion: '<circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4z"/>',
    content: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
    behance: '<path d="M3 6h5a3 3 0 010 6H3zM3 12h6a3 3 0 010 6H3zM14 7h6M13 14h8a4 4 0 10-1 3"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>',
    youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
    dribbble: '<circle cx="12" cy="12" r="9"/><path d="M4 9c6 1 12 0 15-4M7 20c2-6 6-9 13-8M9 3c4 5 6 11 6 18"/>',
    play: '<path d="M8 5l11 7-11 7z" fill="currentColor"/>',
  };

  const icon = (name, size = 24) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---- Basic bindings ---------------------------------------------------- */
  $$("[data-bind]").forEach((el) => {
    el.textContent = SITE[el.dataset.bind] || "";
  });
  $("#year").textContent = new Date().getFullYear();

  $("#stats").innerHTML = SITE.stats
    .map((s) => `<li><strong>${escapeHtml(s.value)}</strong><span>${escapeHtml(s.label)}</span></li>`)
    .join("");

  $("#aboutText").innerHTML = SITE.about.map((p) => `<p>${escapeHtml(p)}</p>`).join("");

  if (SITE.cvUrl) {
    const cv = $("#cvLink");
    cv.href = SITE.cvUrl;
    cv.hidden = false;
  }

  /* ---- Services ---------------------------------------------------------- */
  $("#servicesList").innerHTML = SERVICES.map(
    (s) => `
      <article class="service reveal">
        <div class="service__icon">${icon(s.icon, 26)}</div>
        <h3>${escapeHtml(s.title)}</h3>
        <p>${escapeHtml(s.text)}</p>
      </article>`
  ).join("");

  /* ---- Tools ------------------------------------------------------------- */
  $("#tools").innerHTML = TOOLS.map(
    (t) => `<li class="tool"><span class="tool__mark" style="--c:${t.color === "#111111" ? "#fff" : t.color}">${escapeHtml(t.short)}</span>${escapeHtml(t.name)}</li>`
  ).join("");

  /* ---- Process ----------------------------------------------------------- */
  $("#processList").innerHTML = PROCESS.map(
    (p) => `<li class="reveal"><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.text)}</p></li>`
  ).join("");

  /* ---- Experience -------------------------------------------------------- */
  $("#timeline").innerHTML = EXPERIENCE.map(
    (e) => `
      <li class="reveal">
        <span class="timeline__period">${escapeHtml(e.period)}</span>
        <div>
          <h3>${escapeHtml(e.title)}</h3>
          <p class="timeline__place">${escapeHtml(e.place)}</p>
          <p>${escapeHtml(e.text)}</p>
        </div>
      </li>`
  ).join("");

  /* ---- Testimonials ------------------------------------------------------ */
  if (TESTIMONIALS.length) {
    $("#testimonials").hidden = false;
    $("#quotes").innerHTML = TESTIMONIALS.map(
      (t) => `
        <figure class="quote reveal">
          <blockquote>“${escapeHtml(t.quote)}”</blockquote>
          <figcaption><strong>${escapeHtml(t.name)}</strong><span>${escapeHtml(t.role)}</span></figcaption>
        </figure>`
    ).join("");
  }

  /* ---- Contact ----------------------------------------------------------- */
  const contactItems = [];
  if (SITE.email) contactItems.push(["Email", `mailto:${SITE.email}`, SITE.email]);
  if (SITE.whatsapp) contactItems.push(["WhatsApp", `https://wa.me/${SITE.whatsapp}`, `+${SITE.whatsapp}`]);
  if (SITE.phone) contactItems.push(["Phone", `tel:${SITE.phone.replace(/\s/g, "")}`, SITE.phone]);
  if (SITE.location) contactItems.push(["Based in", "", SITE.location]);

  $("#contactList").innerHTML = contactItems
    .map(([label, href, text]) =>
      `<li><small>${label}</small>${href ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(text)}</a>` : `<span>${escapeHtml(text)}</span>`}</li>`
    )
    .join("");

  $("#socials").innerHTML = Object.entries(SITE.socials)
    .filter(([, url]) => url)
    .map(([name, url]) =>
      `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener" aria-label="${name}">${icon(name, 20)}</a></li>`
    )
    .join("");

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = `New project inquiry — ${data.get("service")}`;
    const body = `Hi Eman,\n\n${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  /* ---- Projects ---------------------------------------------------------- */
  const grid = $("#projects");
  const filters = $("#filters");
  let activeFilter = "all";

  const usedCategories = CATEGORIES.filter(
    (c) => c.id === "all" || PROJECTS.some((p) => p.category === c.id)
  );

  filters.innerHTML = usedCategories
    .map((c) => {
      const count = c.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c.id).length;
      return `<button class="filter${c.id === "all" ? " is-active" : ""}" data-filter="${c.id}" role="tab" aria-selected="${c.id === "all"}">${escapeHtml(c.label)}<sup>${count}</sup></button>`;
    })
    .join("");

  const isVideo = (p) => Boolean(p.video) || p.category === "video" || p.category === "motion";

  const renderProjects = () => {
    const list = PROJECTS.map((p, i) => ({ ...p, index: i })).filter(
      (p) => activeFilter === "all" || p.category === activeFilter
    );

    grid.innerHTML = list
      .map(
        (p, i) => `
        <button class="card" data-index="${p.index}" style="animation-delay:${i * 70}ms">
          <div class="card__media" style="--tint:${escapeHtml(p.tint || "")}">
            ${
              p.cover
                ? `<img src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.title)}" loading="lazy" />`
                : `<div class="placeholder">${escapeHtml(p.client || p.title)}</div>`
            }
            <span class="card__badge">${escapeHtml(categoryLabel(p.category))}</span>
            ${isVideo(p) ? `<span class="card__play">${icon("play", 18)}</span>` : ""}
          </div>
          <div class="card__info">
            <h3 class="card__title">${escapeHtml(p.title)}</h3>
            <span class="card__year">${escapeHtml(p.year)}</span>
          </div>
          <p class="card__cat">${escapeHtml(p.client)}</p>
        </button>`
      )
      .join("");
  };

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    $$(".filter", filters).forEach((b) => {
      const on = b === btn;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on);
    });
    renderProjects();
  });

  renderProjects();

  /* ---- Project modal ----------------------------------------------------- */
  const modal = $("#modal");
  let lastFocus = null;

  const videoEmbed = (url) => {
    const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
    if (yt) return `<iframe src="https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="Video"></iframe>`;
    const vimeo = url.match(/vimeo\.com\/(\d+)/);
    if (vimeo) return `<iframe src="https://player.vimeo.com/video/${vimeo[1]}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen title="Video"></iframe>`;
    return `<video src="${escapeHtml(url)}" controls autoplay playsinline></video>`;
  };

  const openModal = (p) => {
    lastFocus = document.activeElement;
    const media = $("#modalMedia");
    media.style.setProperty("--tint", p.tint || "");
    media.innerHTML = p.video
      ? videoEmbed(p.video)
      : p.cover
        ? `<img src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.title)}" />`
        : `<div class="placeholder">${escapeHtml(p.client || p.title)}</div>`;

    $("#modalMeta").textContent = [categoryLabel(p.category), p.client, p.year].filter(Boolean).join(" · ");
    $("#modalTitle").textContent = p.title;
    $("#modalDesc").textContent = p.description || "";
    $("#modalTags").innerHTML = (p.deliverables || []).map((d) => `<li>${escapeHtml(d)}</li>`).join("");
    $("#modalGallery").innerHTML = (p.images || [])
      .map((src) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(p.title)}" loading="lazy" />`)
      .join("");

    const link = $("#modalLink");
    link.hidden = !p.link;
    if (p.link) link.href = p.link;

    modal.hidden = false;
    document.body.classList.add("no-scroll");
    $(".modal__close", modal).focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    $("#modalMedia").innerHTML = ""; // stops any playing video
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  };

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openModal(PROJECTS[card.dataset.index]);
  });

  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---- Navigation -------------------------------------------------------- */
  const nav = $("#nav");
  const toggle = $("#navToggle");
  const links = $("#navLinks");

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    links.classList.toggle("is-open", open);
    nav.classList.toggle("menu-open", open);
  };

  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  links.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the nav link of the section in view
  const navLinks = $$("a[href^='#']", links).filter((a) => !a.classList.contains("btn"));
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  navLinks.forEach((a) => {
    const section = $(a.getAttribute("href"));
    if (section) sectionObserver.observe(section);
  });

  /* ---- Reveal on scroll -------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => revealObserver.observe(el));
})();
