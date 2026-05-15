# Plan du nouveau site Daki Farm
> Version 2.0 — 11 mai 2026 — Mis à jour après validation cheffe de projet

---

## STATUT DES PLACEHOLDERS EN ATTENTE

Les éléments suivants restent à confirmer avant le développement complet :

| # | Information | Statut |
|---|---|---|
| A | Nombre réel d'utilisateurs actifs sur l'app | **À confirmer** |
| B | Date de signature MOU ANADER | **À confirmer** |
| C | Statut exact partenariat Ministère Agriculture CI | **À confirmer** |
| D | Statut exact accord République du Togo | **À confirmer** |
| E | Vidéos terrain HD disponibles (nombre, qualité) | **À confirmer** |
| F | Logos HD partenaires (ANADER, Togo, Qualiopi, presse) | **À confirmer** |
| G | Logo Daki Farm SVG fond transparent | **À confirmer** |
| H | Deadline V1 mise en ligne | **À confirmer** |

Ces éléments **ne bloquent pas** la construction des composants mais conditionnent le remplissage final du contenu.

---

## MESSAGING VALIDÉ SUR LES CHIFFRES D'IMPACT

**Formulation officielle à utiliser sur tout le site :**
> "Plus d'1 million d'agriculteurs déjà touchés via ANADER, avec un potentiel de 6M+ à 24 mois grâce à nos partenariats institutionnels en cours."

**Règles éditoriales strictes :**
- JAMAIS "1,5 million d'utilisateurs actifs" tant que non vérifiable
- TOUJOURS distinguer "agriculteurs touchables via ANADER" (1M+) vs "potentiel partenariats en cours" (5M additionnels)
- Les chiffres d'usage app réels seront ajoutés dès validation interne
- Formulation pour bailleurs : insister sur l'accès institutionnel (ANADER = crédibilité), pas sur les downloads

---

## 1. ARBORESCENCE COMPLÈTE (v2)

### Logique de navigation mise à jour
- **Couche institutionnelle** (parcours #1, prioritaire) : Home → Mission → Services → Impact → Partenaires & Accréditations → Presse → Contact
- **Couche sponsors** (parcours #2) : page Devenir Partenaire dédiée, accessible depuis home et nav
- **NRCI** visible dès la home (section dédiée + signal dans la nav) — PAS caché dans un sous-menu

---

### Pages

#### `/` — Accueil
**But stratégique :** Première impression décisive. Convaincre en 15 secondes qu'on est face à un acteur technologique institutionnel africain.
**Audience cible :** Tous — bailleurs prioritaires, gouvernements, sponsors, presse
**Sections :**
1. **Hero** — Image ou vidéo pleine largeur + bande "Édité par NRCI · En partenariat avec ANADER" + H1 + sous-titre + 2 CTAs
2. **Chiffres-clés animés** — 5 KPIs sur fond vert foncé
3. **Notre mission** — Texte court + carte Afrique stylisée
4. **Le groupe NRCI** — Bloc sobre (logos, certifications, 3 chiffres groupe) → lien vers /nrci
5. **Nos 6 services** — Cards horizontales avec badges Actif / Bêta / Bientôt
6. **Partenaires & Accréditations** — Logos en bande (ANADER, Qualiopi, Challenge App Afrique, presse)
7. **Preuve sociale** — 3 citations presse (RFI, France24, Tribune Afrique)
8. **Double CTA final** — "Devenir partenaire institutionnel" / "Devenir sponsor"

---

#### `/mission` — Notre mission & vision
**But stratégique :** Poser le "why" avec la rigueur attendue par FAO, Banque Mondiale, AFD.
**Audience cible :** Bailleurs institutionnels, gouvernements
**Sections :**
1. Statement de mission (1 phrase forte, grande typographie)
2. Contexte — Le défi agricole africain (données FAO/Banque Mondiale)
3. Notre approche : numérique + local + gratuit
4. Alignement avec les ODD (icônes officielles ONU — ODD 1, 2, 8, 13, 17)
5. Édité par NRCI : passerelle vers /nrci

---

#### `/services` — Nos 6 services *(page-hub + 6 sous-pages)*
**But stratégique :** Démontrer la profondeur de l'écosystème technique.
**Audience cible :** Partenaires techniques, bailleurs, presse spécialisée

**Page-hub `/services` :**
- Grille 6 cards avec icône, titre, 2 lignes description, badge statut, lien "En savoir plus"

**Statut des services (à afficher via badge discret) :**

| Service | Statut | Badge |
|---|---|---|
| Daki Farm e-learning | En production | `●  Actif` (vert) |
| Smart Irrigation | En production | `●  Actif` (vert) |
| Arbor'IA | En déploiement | `●  Bêta` (sable/or) |
| Détection de maladies | En déploiement | `●  Bêta` (sable/or) |
| Marketplace | En développement | `○  Bientôt` (gris) |
| Call Center ANADER | En production (CI) | `●  Actif` (vert) |

> **Note :** Confirmer ces statuts avec l'équipe produit avant mise en ligne.

**Sous-pages :**

`/services/e-learning` — ACTIF
- 1 000+ capsules vidéo / 15+ langues africaines / gratuit
- Capture d'écran de l'app / démo courte
- Partenariat ANADER (accès 1M+ agriculteurs)
- IA conversationnelle multilingue
- Stats d'usage (à compléter)

`/services/arboria` — BÊTA
- Wordmark "Arbor'IA" en Syne (pas de logo séparé)
- Gestion de parcelles + imagerie satellite + conseils en fertilisation IA
- Schéma technique simplifié (3 étapes : parcelle → satellite → recommandation)

`/services/smart-irrigation` — ACTIF
- Irrigation selon météo et besoins des plantes
- Pas de capteurs au sol (argumentaire différenciateur)
- Économie d'eau estimée (chiffre à compléter)

`/services/detection-maladies` — BÊTA
- IA d'analyse photo des plantes
- Mode d'emploi en 3 étapes (photo → diagnostic → recommandation)
- Cultures et maladies supportées

`/services/marketplace` — BIENTÔT
- Vente directe agriculteurs ↔ acheteurs
- Suppression des intermédiaires (impact revenus)
- Formulaire "être notifié au lancement"

`/services/call-center` — ACTIF (Côte d'Ivoire)
- Call Center ANADER — complémentarité digital ↔ humain
- Couverture terrain CI
- Chiffres de sollicitation (à compléter)

---

#### `/impact` — Impact & données terrain
**But stratégique :** Page de crédibilisation pour les bailleurs. Données vérifiables, terrain réel.
**Audience cible :** FAO, Banque Mondiale, AFD, gouvernements
**Sections :**
1. Dashboard visuel (5 KPIs animés au scroll)
2. Carte Afrique interactive SVG — zones actives / en déploiement / ciblées
3. Témoignages agriculteurs (photos terrain + quotes)
4. Études de cas : Côte d'Ivoire (ANADER), Togo
5. Alignement ODD (icônes officielles)

---

#### `/partenaires` — Partenaires & accréditations
**But stratégique :** Légitimer l'écosystème institutionnel.
**Sections :**
1. Partenaires actifs (logos + 2 lignes contexte) : ANADER, Togo, Ministère CI si signé
2. Certifications : Qualiopi + Challenge App Afrique RFI/France24
3. Mentions presse (logos cliquables)
4. CTA : "Devenir partenaire institutionnel"

---

#### `/devenir-partenaire` — Devenir partenaire (sponsors privés)
**But stratégique :** Conversion sponsors entreprises. Clarté, pricing visible.
**Audience cible :** Sponsors entreprises privées
**Sections :**
1. Accroche : "Touchez 1M+ d'agriculteurs africains engagés"
2. Les 4 packs (cards comparatives) — voir tableau v2 ci-dessous
3. Audience décrite (profil agriculteurs, pays, engagement)
4. Processus en 3 étapes
5. Formulaire de contact rapide

**Packs sponsors (v2 — dossier officiel) :**

| Pack | Tarif | Inclus |
|---|---|---|
| **Bronze** | 5 000 € | Logo visible · Annonces publicitaires (budget 3 000 € → 300 000 publications) · Top View (budget 2 000 € → 66 400 affichages) |
| **Silver** | 10 000 € | Tout Bronze · + 1 vidéo sponsorisée 2 min diffusée 3 mois (300 000 publications) |
| **Gold** | 15 000 € | Tout Silver · + 3 vidéos sponsorisées 2 min (500 000 publications chacune) · + Budget annonces porté à 5 000 € |
| **Premium** | Sur mesure | Tout Gold au minimum · Partenariat structurant · Exclusivité sectorielle · Conditions à négocier |

> Card "Gold" mise en avant visuellement (badge "Le plus choisi" ou taille légèrement supérieure).

---

#### `/presse` — Espace presse
**But stratégique :** Faciliter le travail journalistique, renforcer la crédibilité.
**Sections :**
1. Revue de presse (logos médias cliquables) : RFI, France24, La Tribune Afrique, Africa News Agency, MC Doualiya
2. Communiqués téléchargeables (PDF)
3. Kit presse : logos HD, visuels, biographie Mounir Jamaï
4. Contact presse

---

#### `/nrci` — Le groupe NRCI *(anciennement /a-propos)*
**But stratégique :** Signal de crédibilité institutionnel — ancrage du groupe éditeur.
**Audience cible :** Bailleurs qui font leur due diligence, partenaires potentiels
**Sections :**
1. Le groupe NRCI — présentation, chiffres (300+ projets, 50k communautés, 10k h formation), historique
2. Mounir Jamaï — biographie + photo
3. Équipe clé
4. Nos activités : transport (Go Consult), énergie (NR Counter), formation (Qualiopi), agritech (Daki Farm), ASEWA
5. Présence géographique (carte : Paris, Maroc, CI, Togo)

---

#### `/contact`
**Sections :**
1. Formulaire contextualisé (dropdown : bailleur institutionnel / sponsor / presse / autre)
2. Email direct : contact@daki-farm.com
3. Adresse : 9 rue Fulton, 75013 Paris
4. Réseaux sociaux

---

## 2. PLAN DE DESIGN PAR PAGE

### Philosophie globale
> "Corporate africain premium" — sobre, puissant, technologique. Ni ONG, ni startup.
> Références : OCP Group × Yara International × AfDB × Orange Business.

### Hero
- **Layout :** Plein écran (100vh), image ou vidéo avec overlay vert foncé dégradé
- **Bande de crédibilité** (juste au-dessus ou en-dessous du H1) : "Édité par NRCI · En partenariat avec ANADER" — logos miniatures + texte 13px, opacité 80%
- **H1 :** 72–80px, Syne Bold, blanc
- **Sous-titre :** 18–20px, DM Sans Regular, blanc 85%
- **CTAs :** Primaire (fond lime #84B843, texte blanc) + Secondaire (outline blanc)
- **Scroll indicator :** chevron animé discret en bas

### Section chiffres-clés
- Fond vert foncé #1F3A1F
- 5 colonnes, chiffres Syne Bold 56px blanc/lime, labels DM Sans 13px uppercase blanc 65%
- Animation CountUp au scroll (Framer Motion)

### Cards services (home)
- Grille 3×2, fond blanc, hover → fond vert foncé
- Badge statut en haut à droite de chaque card (petit, discret)
- Icône SVG vert lime, titre DM Sans SemiBold 20px, description 14px gris

### Bande NRCI (home)
- Fond blanc ou gris très clair (#F8F8F8)
- Logo NRCI + 3 chiffres groupe horizontaux + lien "En savoir plus →"
- Pas de section entière — bloc horizontal sobre de 80–100px de hauteur

### Section partenaires (bande logos)
- Fond blanc ou vert lime très light
- Logos en niveaux de gris par défaut → couleur au hover
- Séparation visuelle Qualiopi + Challenge App Afrique vs partenaires institutionnels

### Page Impact — Carte Afrique
- SVG interactif : pays actifs = vert lime plein, pays en déploiement = vert outline, pays cibles = gris outline
- Tooltip au hover : nom pays + statut + chiffre clé

### Cards packs sponsors
- Gold card légèrement élargie ou badge "Recommandé"
- Fond blanc, bordure vert lime pour Gold, bordure or/sable pour Premium
- Prix en Syne Bold vert lime 36px
- Feature list avec icône check vert

---

## 3. RÉFÉRENCES INSPIRANTES

| # | Site | URL | Ce qu'on retient |
|---|---|---|---|
| 1 | **OCP Group** | https://www.ocpgroup.ma | Hero vidéo, grille services sobre, bande KPIs, carte Afrique, very corporate |
| 2 | **Yara International** | https://www.yara.com | Leader agritech mondial — typo noble, sections impact, palette verte pro |
| 3 | **Orange Business** | https://www.orange-business.com | Tech corporate africain, présentation services modulaire |
| 4 | **AfDB** | https://www.afdb.org | Rigueur institutionnelle, hiérarchie info, KPIs impact, confiance maximale |
| 5 | **Ecobank Group** | https://www.ecobank.com | Groupe panafricain 36 pays, design corporate clair |
| 6 | **GSMA** | https://www.gsma.com | Orga internationale tech — sobriété, rapports téléchargeables, presse |
| 7 | **Investissement Québec International** | https://www.investquebec.com/international | Référence site institutionnel pour investisseurs — structure, ton, CTAs |
| 8 | **CEPICI Invest CI** | https://www.invest.ci | Site officiel ivoirien d'attractivité — même sphère qu'ANADER/Ministère |

---

## 4. PALETTE ET TYPOGRAPHIE

### Palette de couleurs

| Rôle | Couleur | HEX | Usage |
|---|---|---|---|
| Vert lime principal | Vert végétal lumineux | `#84B843` | CTA, accents, icônes, KPIs, badge Actif |
| Vert foncé corporate | Vert forêt profond | `#1F3A1F` | Fonds hero/footer, navbar |
| Vert foncé secondaire | Vert ardoise | `#2F5233` | Variante fonds, hover states |
| Blanc pur | Blanc | `#FFFFFF` | Fonds pages, texte sur vert foncé |
| Gris anthracite | Texte principal | `#1C1C1C` | Corps de texte |
| Gris clair | Texte secondaire | `#6B7280` | Sous-titres, labels |
| Or/Sable premium | Accent chaud | `#C9A84C` | Badge Premium, badge Bêta, séparateurs |
| Vert lime 15% | Fond léger | `#84B84326` | Backgrounds cards, sections claires |
| Gris perle | Fond neutre | `#F8F9FA` | Sections fond clair alternées |

### Règles
- Fond blanc + texte anthracite → pages contenu
- Fond vert foncé + texte blanc → hero, bandes KPIs, footer
- Lime → jamais en fond de page, toujours en élément
- Or → max 2 occurrences par page

---

### Typographie (Google Fonts)

| Élément | Police | Poids | Desktop | Mobile |
|---|---|---|---|---|
| H1 Hero | Syne | Bold 700 | 72–80px | 40px |
| H2 sections | Syne | Bold 700 | 40–48px | 28px |
| H3 cards | DM Sans | SemiBold 600 | 20–24px | 18px |
| Corps | DM Sans | Regular 400 | 16px | 15px |
| Chiffres KPI | Syne | Bold 700 | 56–64px | 40px |
| Labels/tags | DM Sans | Medium 500 | 12–13px | 12px |
| CTA boutons | DM Sans | SemiBold 600 | 15px | 15px |
| Wordmark "Arbor'IA" | Syne | Bold 700 | — | — |

---

## 5. STACK TECHNIQUE

| Couche | Choix | Justification |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SEO natif, performance, Vercel ready |
| CSS | Tailwind CSS | Cohérence système design, purge auto |
| Composants | shadcn/ui + custom Daki Farm | Base solide, accessible |
| Animations | Framer Motion + GSAP | CountUp, scroll-reveal, carte SVG |
| Images | Next/Image | WebP auto, lazy loading |
| Carte Afrique | react-simple-maps ou SVG custom | Interactivité + légèreté |
| Formulaires | react-hook-form + Resend | Emails sans backend lourd |
| **CMS headless** | **Sanity** | Mise à jour contenus/chiffres/témos sans dev — interface éditeur non-technique |
| **i18n** | **next-intl** | FR + EN dès V1, architecture AR prête pour V1.1 |
| Analytics | Plausible | RGPD-friendly, léger |
| Hébergement | Vercel | CI/CD natif Next.js |

**Architecture i18n :**
- Routes : `/` (FR) et `/en/` (EN) dès la V1
- `/ar/` réservé en V1.1 — structure prête, traductions à fournir
- Fichiers de traduction JSON par langue dans `/messages/fr.json` et `/messages/en.json`
- Le CMS Sanity gère les contenus éditoriaux multilingues

---

## 6. PARCOURS UTILISATEUR PRIORITAIRE

**Parcours #1 — Bailleur institutionnel (conversion principale)**
```
Home hero → Section Mission → Section Services → Page /impact → Page /partenaires → /contact (formulaire "bailleur institutionnel")
```

**Parcours #2 — Sponsor privé (conversion secondaire)**
```
Home → CTA "Devenir sponsor" → /devenir-partenaire → Formulaire
```

**Parcours #3 — Journaliste / vérification**
```
Home → /presse → Kit téléchargeable → Contact presse
```

---

## 7. SÉQUENCE DE BUILD

Construction itérative, section par section, validée ensemble.

### Phase 2 — Home page (en cours)
- [ ] Hero section (3 concepts → choix → build)
- [ ] Bande chiffres-clés
- [ ] Section mission + carte Afrique
- [ ] Bloc NRCI (bande sobre)
- [ ] Section services (6 cards + badges)
- [ ] Bande partenaires/logos
- [ ] Section presse/citations
- [ ] Double CTA final

### Phase 3 — Pages intérieures
- [ ] /mission
- [ ] /services hub + 6 sous-pages
- [ ] /impact (avec carte interactive)
- [ ] /partenaires
- [ ] /devenir-partenaire
- [ ] /nrci
- [ ] /presse
- [ ] /contact

### Phase 4 — CMS + i18n
- [ ] Intégration Sanity (schémas : chiffres, partenaires, témoignages, presse)
- [ ] Traductions EN (messages/en.json)
- [ ] Structure AR (messages/ar.json) — textes à fournir

### Phase 5 — Finalisation
- [ ] SEO (meta, OG, sitemap, robots)
- [ ] Performance (lighthouse > 90)
- [ ] Accessibilité (WCAG AA)
- [ ] Tests mobile (iOS/Android)
- [ ] Mise en ligne Vercel
