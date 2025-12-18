type MenuItem = {
  name: string
  description: string
  price: string
  tag?: 'popular' | 'new' | 'veg'
}

type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

// Menu data displayed on the site
const menu: MenuCategory[] = [
  {
    id: 'starters',
    title: 'Starters',
    items: [
      { name: 'Crispy Halloumi Bites', description: 'Honey chilli glaze, toasted sesame', price: '£5.50', tag: 'popular' },
      { name: 'Garlic Flatbread', description: 'Wood-fired dough, garlic butter, herbs', price: '£4.20' },
      { name: 'Smoky Chicken Wings', description: 'House rub, pickled slaw, lime', price: '£5.90' },
    ],
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      { name: 'Fire-Grilled Peri Chicken', description: 'Charred half chicken, peri glaze, slaw', price: '£11.50', tag: 'popular' },
      { name: 'Loaded Smashed Burger', description: 'Double smash patty, cheese, crispy onions', price: '£10.80' },
      { name: 'Paneer Masala Wrap', description: 'Fresh naan wrap, tikka paneer, mint yoghurt', price: '£9.40', tag: 'veg' },
      { name: 'Spicy Box Meal', description: 'Chicken strips, fries, house salad, sauces', price: '£10.20' },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      { name: 'Peri Fries', description: 'Crispy skin-on fries with house peri salt', price: '£3.80', tag: 'popular' },
      { name: 'Charred Corn', description: 'Butter, chilli flakes, lime', price: '£3.50' },
      { name: 'House Slaw', description: 'Creamy, crunchy, fresh herbs', price: '£3.20' },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      { name: 'Mango Lassi', description: 'Thick, cool, cardamom', price: '£3.90', tag: 'new' },
      { name: 'Craft Soda', description: 'Blood orange / ginger beer', price: '£2.80' },
      { name: 'Bottled Water', description: 'Sparkling or still', price: '£1.50' },
    ],
  },
]

const highlights = [
  { title: 'Fast service', copy: 'Fresh off the grill in minutes. Ready for collection on time.' },
  { title: 'Fresh ingredients', copy: 'Daily prep, crisp veg, and marinades mixed in-house.' },
  { title: 'Affordable', copy: 'Family portions without the app mark-ups. Clear GBP pricing.' },
  { title: 'Loved locally', copy: '4.8★ on delivery apps — placeholders ready for your reviews.' },
]

const hours = [
  { label: 'Mon – Thu', value: '12:00 – 22:00' },
  { label: 'Fri – Sat', value: '12:00 – 23:30' },
  { label: 'Sunday', value: '12:00 – 21:30' },
]

const phoneDisplay = '0191 222 4040'
const phoneHref = 'tel:+441912224040'
const whatsappHref = 'https://wa.me/447700900999?text=Hi%2C%20I%27d%20like%20to%20order%20for%20collection.'

const SectionHeading = ({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) => (
  <div className="section-heading">
    <p className="kicker">{kicker}</p>
    <h2>{title}</h2>
    {copy && <p className="muted">{copy}</p>}
  </div>
)

const MenuCard = ({ item }: { item: MenuItem }) => (
  <article className="card menu-card">
    <div>
      <div className="menu-card-top">
        <h4>{item.name}</h4>
        <span className="price">{item.price}</span>
      </div>
      <p className="muted small">{item.description}</p>
    </div>
    {item.tag && <span className={`pill pill-${item.tag}`}>{item.tag === 'veg' ? 'Veg' : item.tag === 'new' ? 'New' : 'Popular'}</span>}
  </article>
)

function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Family-run · Delivery & collection</p>
            <h1>Fresh. Hot. Ready when you are.</h1>
            <p className="lede">
              Flame-grilled mains, saucy wraps, and sides that stay crispy. Order direct for the fastest prep and best
              prices.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#menu">
                View menu
              </a>
              <a className="btn ghost" href={phoneHref}>
                Order by phone
              </a>
            </div>
            <div className="hero-badges">
              <span className="pill">Ready in 15-20 mins</span>
              <span className="pill">Halal friendly</span>
              <span className="pill">App-free ordering</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="card highlight">
              <p className="muted small">Tonight&apos;s best sellers</p>
              <div className="list">
                <div className="list-row">
                  <span>Peri Chicken Box</span>
                  <strong>£10.20</strong>
                </div>
                <div className="list-row">
                  <span>Loaded Smashed Burger</span>
                  <strong>£10.80</strong>
                </div>
                <div className="list-row">
                  <span>Mango Lassi</span>
                  <strong>£3.90</strong>
                </div>
              </div>
              <div className="cta-row">
                <a className="btn primary wide" href={phoneHref}>
                  Call to order
                </a>
                <a className="btn secondary wide" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </div>
              <p className="muted tiny">We confirm prep time instantly. Collection door is on Westgate Rd.</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="container split">
            <SectionHeading
              kicker="About the kitchen"
              title="Family recipes, cooked fast, never rushed."
              copy="We prep fresh each morning and cook to order so your wraps stay crisp, fries stay hot, and mains stay juicy."
            />
            <div className="card about-card">
              <p>
                We are an independent takeaway serving Newcastle since 2015. The grill stays hot, the marinades are made in-house, and
                the team knows you by name. Order direct by phone for the quickest prep and zero app mark-ups.
              </p>
              <div className="about-points">
                <div>
                  <h4>Reliable timing</h4>
                  <p className="muted small">Average collection in under 20 minutes. We will tell you if we are busy.</p>
                </div>
                <div>
                  <h4>Consistent quality</h4>
                  <p className="muted small">Same recipes every week: fresh herbs, soft naan wraps, crisp skin-on fries.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="section menu">
          <div className="container">
            <SectionHeading
              kicker="Menu"
              title="Order favourites or try something new."
              copy="Menu built for delivery and collection. Prices are upfront in GBP."
            />
            <div className="menu-grid">
              {menu.map((category) => (
                <div key={category.id} className="menu-section">
                  <div className="menu-section-header">
                    <h3>{category.title}</h3>
                  </div>
                  <div className="menu-cards">
                    {category.items.map((item) => (
                      <MenuCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section reasons">
          <div className="container">
            <SectionHeading
              kicker="Why customers love us"
              title="Hot food, honest prices, no waiting around."
              copy="Everything is optimised for speed: quick phones, accurate timings, and clear hand-off."
            />
            <div className="cards-grid">
              {highlights.map((item) => (
                <article key={item.title} className="card reason-card">
                  <div className="accent-dot" aria-hidden />
                  <h4>{item.title}</h4>
                  <p className="muted">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hours" className="section hours">
          <div className="container split">
            <div className="card contact-card">
              <SectionHeading kicker="Opening hours & location" title="Call to order — we pick up fast." />
              <div className="contact-details">
                <div>
                  <p className="label">Phone</p>
                  <a className="muted" href={phoneHref}>
                    {phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="label">Address</p>
                  <p className="muted">214 Westgate Rd, Newcastle upon Tyne</p>
                </div>
              </div>
              <ul className="hours-list">
                {hours.map((row) => (
                  <li key={row.label}>
                    <span>{row.label}</span>
                    <span className="muted">{row.value}</span>
                  </li>
                ))}
              </ul>
              <div className="cta-row">
                <a className="btn primary" href={phoneHref}>
                  Call now
                </a>
                <a className="btn ghost" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp order
                </a>
              </div>
            </div>
            <div className="card map-card">
              <div className="map-embed">
                <iframe
                  title="Takeaway location"
                  src="https://maps.google.com/maps?q=Westgate%20Rd%20Newcastle&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <p className="muted tiny">Collection parking on side street. Delivery radius 3 miles.</p>
            </div>
          </div>
        </section>

        <section id="delivery" className="section delivery">
          <div className="container delivery-grid">
            <div className="card delivery-card">
              <SectionHeading
                kicker="Delivery & collection"
                title="Choose how you eat."
                copy="Call us direct for collection or local delivery. Platforms optional — keep more of the order with us."
              />
              <ul className="list">
                <li className="list-row">
                  <span>Collection</span>
                  <span className="muted">Ready in 15–20 mins. Pay at counter.</span>
                </li>
                <li className="list-row">
                  <span>Delivery</span>
                  <span className="muted">3-mile radius. Cash or card on delivery.</span>
                </li>
                <li className="list-row">
                  <span>Delivery apps</span>
                  <span className="muted">Placeholders for Just Eat / Uber Eats links.</span>
                </li>
              </ul>
            </div>
            <div className="card delivery-highlight">
              <h3>Hungry now?</h3>
              <p className="muted">Skip the app queue. Ring us and we will give you an exact hand-off time.</p>
              <div className="cta-row">
                <a className="btn primary" href={phoneHref}>
                  Order by phone
                </a>
                <a className="btn secondary" href={whatsappHref} target="_blank" rel="noreferrer">
                  Message us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="cta-footer" id="cta">
        <div className="container cta-footer-inner">
          <div>
            <p className="eyebrow">Hungry? Order now.</p>
            <h2>Fresh off the grill and on its way.</h2>
            <p className="muted">Call or message. We answer fast and keep the line moving.</p>
          </div>
          <div className="cta-row">
            <a className="btn primary" href={phoneHref}>
              Call to order
            </a>
            <a className="btn ghost" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="brand">Spice Street Kitchen</p>
            <p className="muted tiny">Made in Newcastle. Direct orders welcomed.</p>
          </div>
          <a className="muted tiny" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
