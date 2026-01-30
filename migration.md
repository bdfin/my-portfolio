# Blazor SSR Migration Plan

## Project Overview
Migrating a React/TypeScript portfolio website to a **minimal, dependency-free** .NET Blazor application with static server-side rendering.

**Current Stack:**
- React 18.2 + TypeScript
- Vite build tool
- Tailwind CSS (to be replaced with vanilla CSS)
- React Router DOM
- Headless UI components (Dialog/Tabs - to be replaced with vanilla HTML/CSS/JS)
- React Icons (to be replaced with SVG icons)
- Azure Static Web Apps hosting

**Target Stack:**
- .NET 10 Blazor with Static SSR (no WebSockets/SignalR)
- C# Razor components (server-rendered only)
- **Vanilla CSS only** (no frameworks, no preprocessors)
- Blazor Router (built-in)
- **No external component libraries**
- **No icon dependencies** (inline SVG)
- Azure App Service or Azure Container Apps hosting

**Migration Philosophy:**
- Zero external dependencies beyond .NET runtime
- Simple, maintainable vanilla CSS
- Static server-side rendering (no interactivity circuits)
- Modern CSS features (Grid, Flexbox, CSS Variables, Container Queries)
- Native HTML elements with custom styling
- **Zero JavaScript** - pure CSS solutions for all interactivity (checkbox hack, :target pseudo-class)

---

## Phase 1: Project Setup

### 1.1 .NET Project Initialization
- [ ] Install .NET 10 SDK
- [ ] Create new Blazor Web App project with SSR only: `dotnet new blazor -o src/BlazorApp -int None`
  - Note: `-int None` disables interactivity (no SignalR/WebSockets)
- [ ] Verify project builds: `dotnet build`
- [ ] Review generated files: `Program.cs`, `App.razor`, `Components/_Imports.razor`, `appsettings.json`
- [ ] Confirm `Program.cs` does NOT include `AddInteractiveServerComponents()` or SignalR setup

### 1.2 Solution Structure
- [ ] Create solution file: `dotnet new sln -n my-portfolio`
- [ ] Add project to solution: `dotnet sln add src/BlazorApp/BlazorApp.csproj`
- [ ] Configure project properties (nullable, implicit usings)
- [ ] Ensure render modes are set to static SSR only

### 1.3 Git Configuration
- [ ] Update `.gitignore` for .NET (bin/, obj/, .vs/)
- [ ] Archive React project (move to `archive/react-version/` or create `pre-blazor-migration` tag)
- [ ] Commit initial Blazor project structure

---

## Phase 2: CSS Architecture & Design System

### 2.1 CSS Variables Setup
- [ ] Create `wwwroot/css/variables.css` with design tokens:
  - Colors (black: #000, white: #fff, gray shades)
  - Spacing scale (0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, etc.)
  - Typography (font-family: monospace, font-sizes, line-heights)
  - Breakpoints (mobile-first: 640px, 768px, 1024px, 1280px)
  - Z-index scale
  - Border radius values
  - Transition durations

### 2.2 Base Styles
- [ ] Create `wwwroot/css/reset.css` with modern CSS reset
- [ ] Create `wwwroot/css/base.css`:
  - Body styles (background: black, color: slate-50, font: monospace)
  - Typography defaults
  - Link styles
  - Focus styles for accessibility
  - Custom scrollbar styles
  - Selection styles

### 2.3 Layout Utilities
- [ ] Create `wwwroot/css/layout.css`:
  - Container classes (max-width, centering)
  - Flexbox utilities (flex, flex-col, items-center, justify-between, gap, etc.)
  - Grid utilities (grid, grid-cols)
  - Spacing utilities (padding, margin classes)
  - Responsive utilities

### 2.4 Component Styles
- [ ] Create `wwwroot/css/components.css`:
  - Button styles (primary, secondary, hover, focus, disabled states)
  - Input/textarea styles
  - Card styles
  - Navigation styles
  - Footer styles
  - Link styles
- [ ] Create `wwwroot/css/animations.css`:
  - Fade-in animation
  - Hover transitions
  - Loading spinner animation

### 2.5 Compile CSS
- [ ] Create `wwwroot/css/app.css` that imports all CSS files
- [ ] Reference in `index.html`: `<link href="css/app.css" rel="stylesheet" />`
- [ ] Test CSS loads correctly

---

## Phase 3: SVG Icon System

### 3.1 Extract Icons
- [ ] Identify all react-icons used:
  - FaBars (hamburger menu)
  - FaXmark (close X)
  - FaGithub
  - FaLinkedin
  - FaEnvelope
  - FaDatabase
  - FaDocker
  - FaReact
  - SiCsharp
  - SiMicrosoftazure
  - SiBlazor
- [ ] Download SVG paths from icon sources (FontAwesome, Simple Icons)
- [ ] Create reusable Icon component: `Components/Icon.razor`

### 3.2 Icon Component
- [ ] Implement `Icon.razor` with parameters:
  - `Name` (string): icon identifier
  - `Size` (int, default 24): icon size in pixels
  - `CssClass` (string): additional CSS classes
- [ ] Store SVG paths in C# dictionary or switch statement
- [ ] Test all icons render correctly

---

## Phase 4: Core Application Structure

### 4.1 Routing Setup
- [ ] Configure routes in `App.razor`:
  - `/` → Home page
  - `/work` → Work page
  - `/about` → About page
  - `NotFound` → 404/Error page
- [ ] Test routing and navigation

### 4.2 Layout Component
- [ ] Create `Shared/MainLayout.razor`
- [ ] Implement structure:
  - Header with NavBar
  - Main content area with `@Body`
  - Footer
- [ ] Apply CSS classes (container, flex layout, min-height)
- [ ] Add fade-in animation class
- [ ] Test layout renders correctly

### 4.3 Navigation Component
- [ ] Create `Shared/NavBar.razor`
- [ ] Implement desktop navigation:
  - Logo image
  - Navigation links (Home, Work, About)
- [ ] Implement mobile navigation:
  - Hamburger button (toggle mobile menu)
  - Mobile menu overlay with links
  - Close button
  - Social icons in mobile menu
- [ ] Use Blazor's built-in `NavLink` component with custom styling
- [ ] Implement mobile menu state with C# boolean property
- [ ] Style with pure CSS (no Headless UI)

### 4.4 Footer Component
- [ ] Create `Shared/Footer.razor`
- [ ] Port footer content
- [ ] Apply styling

---

## Phase 5: Page Components

### 5.1 Home Page
- [ ] Create `Pages/Home.razor` with `@page "/"`
- [ ] Port content from `HomePage.tsx`
- [ ] Reference child components (Title, Text, TechIcons)
- [ ] Test rendering

### 5.2 Work Page
- [ ] Create `Pages/Work.razor` with `@page "/work"`
- [ ] Port content from `WorkPage.tsx`
- [ ] Test rendering

### 5.3 About Page
- [ ] Create `Pages/About.razor` with `@page "/about"`
- [ ] Port content from `AboutPage.tsx`
- [ ] Test rendering

### 5.4 Error/404 Page
- [ ] Create `Pages/NotFound.razor` with `@page "/404"`
- [ ] Port content from `ErrorPage.tsx`
- [ ] Configure as NotFound in router
- [ ] Test 404 handling

---

## Phase 6: Reusable UI Components

### 6.1 Typography Components (7)
- [ ] `Components/Title.razor` - H1 heading
- [ ] `Components/Subtitle.razor` - H2 heading
- [ ] `Components/Text.razor` - Paragraph with margin
- [ ] `Components/Label.razor` - Form label
- [ ] `Components/List.razor` - UL wrapper
- [ ] `Components/ListItem.razor` - LI element
- [ ] `Components/AnchorLink.razor` - External link with styling

### 6.2 Form Components (3)
- [ ] `Components/Button.razor` - Button with hover/focus states
- [ ] `Components/TextInput.razor` - Input field with label
- [ ] `Components/TextAreaInput.razor` - Textarea with label

### 6.3 Display Components (5)
- [ ] `Components/TechIcons.razor` - Tech stack grid with icons
- [ ] `Components/SocialIcons.razor` - Social media links with icons
- [ ] `Components/WorkTimeline.razor` - Work experience timeline
- [ ] `Components/Loading.razor` - Loading state wrapper
- [ ] `Components/LoadingSpinner.razor` - Spinner animation

### 6.4 Feature Components (2)
- [ ] `Components/ContactMe.razor` - Contact form
- [ ] `Components/AboutTabs.razor` - Tab interface (vanilla CSS/JS)

---

## Phase 7: Interactive Components (Pure CSS - No JavaScript)

### 7.1 Mobile Menu (CSS Checkbox Hack)
- [ ] Implement in `NavBar.razor`:
  - Add hidden checkbox: `<input type="checkbox" id="mobile-menu-toggle" class="menu-toggle" />`
  - Add label for hamburger: `<label for="mobile-menu-toggle">☰</label>`
  - Add label for close button inside menu: `<label for="mobile-menu-toggle">✕</label>`
  - Render menu panel as sibling to checkbox
- [ ] Style with CSS:
  - Hide checkbox: `.menu-toggle { display: none; }`
  - Show/hide menu based on checkbox state: `.menu-toggle:checked ~ .mobile-menu { ... }`
  - Show/hide overlay: `.menu-toggle:checked ~ .overlay { ... }`
  - Slide-in animation using `transform: translateX()`
  - Transparent overlay with backdrop-filter blur
  - Z-index layering for proper stacking
- [ ] Test keyboard navigation (checkbox is focusable)

### 7.2 Tabs Component (CSS :target Pseudo-Class or Radio Buttons)
- [ ] **Option A - Radio Button Approach (Recommended):**
  - Create `AboutTabs.razor`:
    - Hidden radio inputs: `<input type="radio" name="tabs" id="tab1" checked />`
    - Label buttons: `<label for="tab1">Tab 1</label>`
    - Tab panels as siblings to inputs
  - Style with CSS:
    - Hide radio buttons: `input[type="radio"] { display: none; }`
    - Active tab styling: `#tab1:checked ~ .tabs-labels label[for="tab1"] { ... }`
    - Show panel: `#tab1:checked ~ .tab-panels .panel1 { display: block; }`
    - Hide other panels by default
- [ ] **Option B - :target Pseudo-Class:**
  - Use anchor links: `<a href="#tab1">Tab 1</a>`
  - Panel IDs: `<div id="tab1" class="tab-panel">...</div>`
  - Style: `.tab-panel:target { display: block; }`
  - Note: Changes URL hash
- [ ] Choose approach and implement
- [ ] Add smooth transitions with CSS

### 7.3 Form Handling (Traditional POST)
- [ ] Implement form submission in `ContactMe.razor`
- [ ] Use standard HTML `<form>` with POST action
- [ ] Server-side endpoint to handle form submission
- [ ] Redirect after post pattern (PRG)
- [ ] Add HTML5 validation attributes
- [ ] Style validation states with CSS (`:invalid`, `:valid`)

---

## Phase 8: Tailwind CSS to Vanilla CSS Conversion

### 8.1 Analyze Tailwind Usage
- [ ] Document all Tailwind classes used in current app:
  - Layout: `flex`, `flex-col`, `items-center`, `justify-between`, `max-w-7xl`, etc.
  - Spacing: `px-6`, `py-8`, `mt-4`, `mb-6`, `space-x-6`, etc.
  - Typography: `text-sm`, `text-xl`, `font-semibold`, `font-mono`, etc.
  - Colors: `bg-black`, `text-white`, `text-gray-200`, `ring-gray-300`, etc.
  - Responsive: `lg:flex`, `md:order-2`, `sm:max-w-sm`, etc.
  - Effects: `hover:bg-gray-800`, `focus-visible:outline`, etc.

### 8.2 Create CSS Equivalents
- [ ] Create utility classes in `layout.css`:
  ```css
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-between { justify-content: space-between; }
  .max-w-7xl { max-width: 80rem; margin: 0 auto; }
  .container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
  ```
- [ ] Create spacing utilities:
  ```css
  .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
  .mt-4 { margin-top: 1rem; }
  /* etc. */
  ```
- [ ] Create responsive utilities using media queries:
  ```css
  @media (min-width: 1024px) {
    .lg\:flex { display: flex; }
  }
  ```
- [ ] Alternative: Use component-specific classes instead of utilities

### 8.3 Choose Approach
- [ ] **Option A (Recommended):** Component-specific CSS classes
  - More maintainable for small projects
  - Better for this portfolio site (20 components)
  - Example: `.nav-bar {}`, `.nav-bar__logo {}`, `.nav-bar__menu {}`
- [ ] **Option B:** Minimal utility classes
  - Create only the most-used utilities (flex, grid, spacing)
  - Combine with component classes
- [ ] Document chosen approach in README

---

## Phase 9: SEO & Meta Tags

### 9.1 HTML Head Configuration
- [ ] Update `wwwroot/index.html` with meta tags:
  - Charset, viewport
  - Description, author
  - Open Graph tags (og:title, og:description, og:image, og:url)
  - Favicon reference
- [ ] Ensure all tags from React version are migrated
- [ ] Test with social media preview tools

### 9.2 Analytics Integration
- [ ] Add Google Analytics script to `index.html`
- [ ] Add CookieYes consent script to `index.html`
- [ ] Test analytics on navigation (use `NavigationManager.LocationChanged` if needed)
- [ ] Verify GDPR compliance

---

## Phase 10: Build & Optimization

### 10.1 Build Configuration
- [ ] Configure `.csproj` for optimizations:
  ```xml
  <PropertyGroup>
    <PublishReadyToRun>true</PublishReadyToRun>
    <PublishReadyToRunShowWarnings>true</PublishReadyToRunShowWarnings>
  </PropertyGroup>
  ```
- [ ] Test production build: `dotnet publish -c Release`
- [ ] Analyze output in `bin/Release/net10.0/publish/`
- [ ] Verify CSS is minimal and unminified (easy to debug)
- [ ] Verify NO JavaScript files present

### 10.2 CSS Optimization
- [ ] Remove unused CSS
- [ ] Combine CSS files if beneficial
- [ ] Consider minification (optional - Azure handles this)
- [ ] Test CSS loads and applies correctly
- [ ] Verify CSS-only menu and tabs work in all browsers

### 10.3 Image Optimization
- [ ] Verify `logo.webp` is optimized
- [ ] Add width/height attributes to prevent layout shift
- [ ] Test image loading

### 10.4 Zero JavaScript Verification
- [ ] Confirm no `.js` files in `wwwroot/js/`
- [ ] Confirm no `<script>` tags in layouts/pages
- [ ] Test site functions without JavaScript enabled in browser

---

## Phase 11: Deployment Configuration

### 11.1 Azure App Service Configuration
- [ ] Create Azure App Service (Linux or Windows)
- [ ] Configure environment variables in Azure portal:
  - `ASPNETCORE_ENVIRONMENT=Production`
- [ ] Enable HTTPS only
- [ ] Configure health check endpoint
- [ ] Set up Application Insights (optional)

### 11.2 GitHub Actions Workflow
- [ ] Create/update `.github/workflows/azure-deploy.yml`:
  ```yaml
  name: Deploy to Azure App Service

  on:
    push:
      branches: [ main ]
    workflow_dispatch:

  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest

      steps:
      - uses: actions/checkout@v3

      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '10.0.x'

      - name: Build
        run: dotnet build src/BlazorApp/BlazorApp.csproj -c Release

      - name: Publish
        run: dotnet publish src/BlazorApp/BlazorApp.csproj -c Release -o ${{env.DOTNET_ROOT}}/myapp

      - name: Deploy to Azure Web App
        uses: azure/webapps-deploy@v2
        with:
          app-name: 'your-app-name'
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          package: ${{env.DOTNET_ROOT}}/myapp
  ```
- [ ] Set up Azure publish profile in GitHub secrets
- [ ] Test workflow on branch

### 11.3 Local Development Setup
- [ ] Document commands:
  - Run: `dotnet watch` (hot reload enabled)
  - Build: `dotnet build`
  - Publish: `dotnet publish -c Release`
- [ ] Test hot reload functionality
- [ ] Configure HTTPS for local dev (trust cert)
- [ ] Verify no SignalR scripts loaded (check browser network tab)
- [ ] Test CSS-only interactivity (menu, tabs) during development

---

## Phase 12: Testing & Quality Assurance

### 12.1 Visual Testing
- [ ] Compare React site vs Blazor site side-by-side
- [ ] Test all pages render identically
- [ ] Test all components display correctly
- [ ] Test responsive design:
  - Mobile (320px, 375px, 414px)
  - Tablet (768px, 1024px)
  - Desktop (1280px, 1920px)
- [ ] Test cross-browser:
  - Chrome/Edge (Chromium)
  - Firefox
  - Safari (if available)

### 12.2 Functional Testing
- [ ] Test navigation between pages (full page reloads)
- [ ] Test mobile menu open/close (CSS checkbox)
- [ ] Test tab switching in About page (CSS radio/target)
- [ ] Test all external links
- [ ] Test form submission with POST/redirect
- [ ] Test 404 page navigation
- [ ] Test with JavaScript disabled in browser
- [ ] Verify no JavaScript errors (should be none)

### 12.3 Accessibility Testing
- [ ] Test keyboard navigation (Tab, Enter, Space for checkboxes/radios)
- [ ] Test screen reader compatibility (aria-labels, proper label associations)
- [ ] Test focus indicators (especially on hidden checkbox/radio controls)
- [ ] Test color contrast (black/white theme)
- [ ] Verify checkbox and radio button labels are properly associated
- [ ] Run Lighthouse accessibility audit

### 12.4 Performance Testing
- [ ] Test server response times for page requests
- [ ] Test First Contentful Paint (FCP)
- [ ] Test Time to Interactive (TTI)
- [ ] Test with throttled network (3G)
- [ ] Verify no WebSocket connections in network tab
- [ ] Verify no JavaScript downloads
- [ ] Run Lighthouse performance audit
- [ ] Target: FCP < 1s, TTI < 1.5s (server-rendered, zero JavaScript, instant interactive)

### 12.5 SEO Testing
- [ ] Test meta tags with social media debuggers:
  - Facebook Sharing Debugger
  - Twitter Card Validator
  - LinkedIn Post Inspector
- [ ] Test robots.txt accessibility
- [ ] Test favicon in browser tabs
- [ ] Run Lighthouse SEO audit

---

## Phase 13: Documentation & Cleanup

### 13.1 Update Documentation
- [ ] Update README.md:
  ```markdown
  # beaufindlay.com

  My personal portfolio site built with .NET Blazor WebAssembly.

  ## Tech Stack
  - .NET 10 Blazor SSR (static server-side rendering)
  - Pure CSS only (zero JavaScript)
  - Hosted on Azure App Service

  ## Development
  - Run: `dotnet watch`
  - Build: `dotnet build`
  - Publish: `dotnet publish -c Release`

  ## Features
  - Zero external dependencies (no npm, no frameworks, no JavaScript)
  - Static server-side rendering (no WebSockets)
  - Pure CSS interactivity (checkbox hack for menu, radio buttons for tabs)
  - Mobile-first responsive design
  - Accessible and SEO-optimized
  - Works with JavaScript disabled
  ```
- [ ] Document CSS architecture in comments
- [ ] Add migration notes (lessons learned, gotchas)

### 13.2 Clean Up React Files
- [ ] Archive React project:
  - Option A: Move to `archive/react-version/`
  - Option B: Create git tag `pre-blazor-migration` and delete
  - Option C: Keep in separate branch
- [ ] Remove Node.js files from root:
  - Delete `src/Client/package.json`
  - Delete `src/Client/package-lock.json`
  - Delete `src/Client/node_modules/`
  - Delete `src/Client/tsconfig*.json`
  - Delete `src/Client/vite.config.ts`
  - Delete `src/Client/tailwind.config.js`
  - Delete `src/Client/postcss.config.js`
  - Delete `src/Client/.eslintrc.cjs`
- [ ] Update `.gitignore` (remove Node.js entries)

### 13.3 Code Quality
- [ ] Run `dotnet format` on all files
- [ ] Add XML documentation comments to public components
- [ ] Ensure consistent naming conventions
- [ ] Remove unused using statements
- [ ] Remove commented-out code

---

## Phase 14: Production Deployment

### 14.1 Pre-Deployment Checklist
- [ ] All components migrated and tested ✓
- [ ] All routes working ✓
- [ ] Mobile menu functional ✓
- [ ] Tabs functional ✓
- [ ] Analytics configured ✓
- [ ] SEO tags verified ✓
- [ ] Performance acceptable ✓
- [ ] No console errors ✓
- [ ] Cross-browser tested ✓

### 14.2 Deploy to Production
- [ ] Merge `blazor-refactor` branch to `main`
- [ ] Monitor GitHub Actions workflow
- [ ] Verify deployment succeeds
- [ ] Test production site at beaufindlay.com

### 14.3 Post-Deployment
- [ ] Verify site loads correctly in production
- [ ] Test all functionality in production
- [ ] Verify analytics tracking
- [ ] Monitor for errors (first 24-48 hours)
- [ ] Check browser console for any warnings
- [ ] Verify SSL certificate
- [ ] Test social media sharing previews

---

## Component Migration Checklist

### Pages (5)
- [ ] Layout (MainLayout.razor)
- [ ] Home (Pages/Home.razor)
- [ ] Work (Pages/Work.razor)
- [ ] About (Pages/About.razor)
- [ ] Error/404 (Pages/NotFound.razor)

### Typography Components (7)
- [ ] Title.razor
- [ ] Subtitle.razor
- [ ] Text.razor
- [ ] Label.razor
- [ ] List.razor
- [ ] ListItem.razor
- [ ] AnchorLink.razor

### Form Components (3)
- [ ] Button.razor
- [ ] TextInput.razor
- [ ] TextAreaInput.razor

### Display Components (5)
- [ ] TechIcons.razor
- [ ] SocialIcons.razor
- [ ] WorkTimeline.razor
- [ ] Loading.razor
- [ ] LoadingSpinner.razor

### Feature Components (3)
- [ ] NavBar.razor (in Shared/)
- [ ] Footer.razor (in Shared/)
- [ ] ContactMe.razor
- [ ] AboutTabs.razor

### Shared/Infrastructure (2)
- [ ] Icon.razor (new - SVG icon system)
- [ ] CssHelper.cs (optional - CSS class utilities)

**Total: 25 components**

---

## CSS File Structure

```
wwwroot/
├── css/
│   ├── variables.css      # CSS custom properties (design tokens)
│   ├── reset.css          # Modern CSS reset
│   ├── base.css           # Base typography and body styles
│   ├── layout.css         # Layout utilities (flex, grid, container)
│   ├── components.css     # Component-specific styles
│   ├── animations.css     # Animations and transitions
│   └── app.css            # Main file that imports all others
├── logo.webp
├── robots.txt
└── index.html
```

---

## Key Syntax Conversions

| React/JSX | Blazor/Razor |
|-----------|--------------|
| `className="..."` | `class="..."` |
| `{variable}` | `@variable` |
| `{condition && <Element />}` | `@if (condition) { <Element /> }` |
| `{items.map(item => ...)}` | `@foreach (var item in items) { ... }` |
| `const [state, setState] = useState()` | `private bool state;` + `StateHasChanged()` |
| `onClick={handler}` | `@onclick="Handler"` |
| `onChange={handler}` | `@onchange="Handler"` |
| `<Component prop={value} />` | `<Component Prop="@value" />` |
| Props interface | `[Parameter]` properties |
| `import Component from './Component'` | `@using` or implicit |

---

## Dependencies Eliminated

### Removed Libraries
- ❌ Tailwind CSS → ✅ Vanilla CSS
- ❌ PostCSS → ✅ None
- ❌ Autoprefixer → ✅ Modern browsers only
- ❌ React Icons → ✅ Inline SVG
- ❌ Headless UI → ✅ Native HTML + CSS
- ❌ React Router DOM → ✅ Blazor Router (built-in)
- ❌ Vite → ✅ .NET SDK
- ❌ TypeScript → ✅ C#
- ❌ ESLint → ✅ Roslyn analyzers (built-in)
- ❌ Node.js → ✅ None

### Added Technology
- ✅ Static server-side rendering (Blazor SSR mode)
- ✅ Pure CSS interactivity techniques (checkbox hack, radio buttons, :target pseudo-class)

### Build Dependencies
- Before: Node.js, npm, Vite, TypeScript compiler, Tailwind CLI
- After: .NET SDK only

### Hosting Requirements
- Before: Static hosting (Azure Static Web Apps, any CDN)
- After: ASP.NET Core server (Azure App Service, Container Apps, or any host supporting .NET)

---

## Risk Assessment

### High Risk (Requires Testing)
- **Mobile menu with CSS checkbox hack:** CSS-only implementation complexity
  - *Mitigation:* Well-established pattern, test thoroughly across browsers
- **Tabs with CSS (radio buttons or :target):** CSS-only implementation complexity
  - *Mitigation:* Test both approaches, choose most accessible
- **Icon system:** 11 icons need SVG paths
  - *Mitigation:* Download from FontAwesome/Simple Icons, test early
- **CSS-only accessibility:** Ensuring keyboard navigation works properly
  - *Mitigation:* Thorough accessibility testing with screen readers

### Medium Risk
- **CSS conversion from Tailwind:** Large effort
  - *Mitigation:* Component-specific CSS, test each component
- **Server hosting:** Requires server infrastructure instead of static hosting
  - *Mitigation:* Azure App Service is straightforward to configure
- **Browser compatibility for CSS tricks:** Checkbox hack and advanced selectors
  - *Mitigation:* Test on all major browsers, provide fallbacks if needed

### Low Risk
- **Basic component migration:** Straightforward
- **Routing:** Blazor router is similar to React Router
- **Static assets:** Simple copy operation

---

## Success Criteria

- [ ] Zero npm/Node.js dependencies
- [ ] Zero CSS framework dependencies
- [ ] Zero JavaScript (pure CSS interactivity)
- [ ] All pages render identically to React version
- [ ] Mobile menu works smoothly (CSS checkbox hack)
- [ ] Tabs work smoothly (CSS radio buttons or :target)
- [ ] Site loads in < 2 seconds on 4G (server-rendered)
- [ ] Site works with JavaScript disabled
- [ ] No WebSocket connections present
- [ ] No SignalR scripts loaded
- [ ] No JavaScript files served
- [ ] Analytics functional (server-side or noscript fallback)
- [ ] SEO tags correct
- [ ] Mobile responsive
- [ ] Cross-browser compatible (including CSS-only features)
- [ ] Keyboard accessible (Tab/Enter/Space navigation)
- [ ] Lighthouse score: 95+ (Performance, Accessibility, SEO)
- [ ] Server resource usage minimal (stateless requests only)

---

## Estimated Timeline

- **Phase 1-2 (Setup & CSS):** 2-3 days
- **Phase 3 (Icons):** 0.5-1 day
- **Phase 4 (Core Structure):** 1-2 days
- **Phase 5-6 (Pages & Components):** 3-4 days
- **Phase 7 (Interactive - CSS only):** 1-2 days
- **Phase 8 (CSS Conversion):** 2-3 days
- **Phase 9 (SEO & Analytics):** 0.5-1 day
- **Phase 10-11 (Build & Deploy):** 1-2 days (server configuration)
- **Phase 12 (Testing):** 2-3 days (including CSS-only interactivity testing)
- **Phase 13-14 (Docs & Deploy):** 1 day

**Total: 14-22 days** (depending on CSS approach and server setup complexity)

---

## Notes

- This plan prioritizes **simplicity** and **maintainability** over feature richness
- No external dependencies means **no breaking changes** from library updates
- Vanilla CSS may take longer initially but is **easier to maintain** long-term
- Static SSR provides **instant page loads** with server-side rendering and excellent SEO
- **Zero JavaScript** - pure CSS interactivity (checkbox hack, radio buttons) - **no framework hydration, no parsing overhead**
- The site will be **future-proof** with minimal maintenance requirements
- Focus on **modern CSS features** (Grid, Flexbox, Custom Properties) rather than utility classes
- Test frequently throughout migration - **don't wait until the end**
- **Tradeoff:** Requires server hosting instead of static hosting, but provides better initial load performance
- **Key Benefits:**
  - No WebSocket connections = lower server resource usage, simpler architecture, no reconnection issues
  - No JavaScript = works with JS disabled, faster TTI, smaller payload, privacy-friendly
  - Accessible by default (native HTML form controls)
