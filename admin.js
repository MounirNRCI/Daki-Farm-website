(function () {
  const PASS = 'dakifarm';
  let editMode = false;

  /* ── UI ── */
  const ui = document.createElement('div');
  ui.id = 'df-admin-ui';
  ui.style.cssText = [
    'position:fixed;bottom:24px;right:24px;z-index:99999',
    'display:none;flex-direction:column;gap:8px;align-items:flex-end'
  ].join(';');

  function makeBtn(label, bg, color) {
    const b = document.createElement('button');
    b.innerHTML = label;
    b.style.cssText = [
      'padding:11px 18px;border:none;border-radius:4px',
      'font-family:system-ui,sans-serif;font-weight:700;font-size:13px',
      'cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.35)',
      'background:' + bg + ';color:' + color
    ].join(';');
    return b;
  }

  const editBtn  = makeBtn('✏️&nbsp; Éditer le texte', '#84B843', '#1B3318');
  const saveBtn  = makeBtn('⬇️&nbsp; Télécharger la page', '#1B3318', '#fff');
  const closeBtn = makeBtn('✕&nbsp; Quitter l\'édition', '#333', '#fff');
  saveBtn.style.display  = 'none';
  closeBtn.style.display = 'none';

  ui.appendChild(saveBtn);
  ui.appendChild(closeBtn);
  ui.appendChild(editBtn);
  document.body.appendChild(ui);

  /* ── Activation ── */
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'E') {
      if (ui.style.display === 'flex') { deactivate(); return; }
      const pass = prompt('🔑 Mot de passe admin :');
      if (pass === PASS) {
        ui.style.display = 'flex';
      } else if (pass !== null) {
        alert('Mot de passe incorrect.');
      }
    }
  });

  /* ── Sélecteurs éditables ── */
  const SEL = [
    'h1','h2','h3','h4','h5',
    'p',
    '.eyebrow',
    '[class*="-desc"]','[class*="-title"]','[class*="-name"]',
    '[class*="-body"]','[class*="-sub"]','[class*="-lead"]',
    '[class*="-h1"]','[class*="-h2"]','[class*="-h3"]',
    '[class*="-quote"]','[class*="-tag"]','[class*="-label"]',
    '[class*="-kpi"]','[class*="-num"]','[class*="-stat-l"]',
    '[class*="-caption"]','[class*="-org"]','[class*="-country"]'
  ].join(',');

  function getEditables() {
    return Array.from(document.querySelectorAll(SEL)).filter(function (el) {
      return !el.closest('nav, script, style, svg, #df-admin-ui') &&
             !el.querySelector('img, svg, iframe, video') &&
             el.children.length === 0; // only leaf text nodes
    });
  }

  /* ── Activer édition ── */
  editBtn.addEventListener('click', function () {
    editMode = true;
    getEditables().forEach(function (el) {
      el.contentEditable = 'true';
      el.dataset.dfOrig = el.innerHTML;
      el.style.outline = '2px dashed rgba(132,184,67,.6)';
      el.style.borderRadius = '2px';
      el.style.cursor = 'text';
    });
    editBtn.style.display  = 'none';
    saveBtn.style.display  = 'block';
    closeBtn.style.display = 'block';

    /* bannière info */
    const banner = document.createElement('div');
    banner.id = 'df-banner';
    banner.style.cssText = [
      'position:fixed;top:0;left:0;right:0;z-index:99998',
      'background:#84B843;color:#1B3318;text-align:center',
      'font-family:system-ui,sans-serif;font-weight:700;font-size:13px',
      'padding:10px;letter-spacing:.04em'
    ].join(';');
    banner.textContent = 'MODE ÉDITION — Cliquez sur n\'importe quel texte pour le modifier';
    document.body.prepend(banner);
  });

  /* ── Télécharger ── */
  saveBtn.addEventListener('click', function () {
    cleanup();
    const filename = location.pathname.split('/').pop() || 'index.html';
    const html = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { ui.style.display = 'flex'; }, 300);
  });

  /* ── Quitter sans sauver ── */
  closeBtn.addEventListener('click', function () {
    if (confirm('Annuler les modifications ?')) {
      getEditables().forEach(function (el) {
        if (el.dataset.dfOrig !== undefined) {
          el.innerHTML = el.dataset.dfOrig;
          delete el.dataset.dfOrig;
        }
      });
      cleanup();
    }
  });

  function cleanup() {
    editMode = false;
    getEditables().forEach(function (el) {
      el.removeAttribute('contenteditable');
      el.style.outline = '';
      el.style.borderRadius = '';
      el.style.cursor = '';
    });
    const banner = document.getElementById('df-banner');
    if (banner) banner.remove();
    editBtn.style.display  = 'block';
    saveBtn.style.display  = 'none';
    closeBtn.style.display = 'none';
  }

  function deactivate() {
    cleanup();
    ui.style.display = 'none';
  }
})();
