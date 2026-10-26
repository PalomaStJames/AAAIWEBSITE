import { useEffect, useState, type CSSProperties } from 'react'
import anniversaryLogo from '@/imports/Untitled-1.png'
import footerAnniversaryLogo from '@/imports/Untitled-1-1.png'

type Directory = 'international' | 'national'

type Association = {
  name: string
  logo: string
  website: string
  descriptor: string
}

const internationalAssociations: Association[] = [
  {
    name: 'Adfest',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/adfest.jpg',
    website: 'http://www.adfest.com/',
    descriptor: 'Creative festival',
  },
  {
    name: 'AFAA',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/affa.jpg',
    website: 'http://afaaglobal.org/',
    descriptor: 'Regional federation',
  },
  {
    name: 'American Association of Advertising Agencies',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/american_associations4.jpg',
    website: 'https://www.aaaa.org/',
    descriptor: 'Industry association',
  },
  {
    name: 'Cannes Lions',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/cannes_lions.jpg',
    website: 'https://www.canneslions.com/',
    descriptor: 'Creative excellence',
  },
  {
    name: 'IAA Global',
    logo: 'https://aaaindia.org/wp-content/uploads/2026/01/iaa-logo.jpg',
    website: 'https://www.iaaglobal.org/',
    descriptor: 'Global network',
  },
]

const nationalAssociations: Association[] = [
  {
    name: 'ABC',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/abc-2.jpg',
    website: 'https://auditbureau.org/',
    descriptor: 'Circulation standards',
  },
  {
    name: 'ACI',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/associations2.jpg',
    website: 'https://adcouncilofindia.org/',
    descriptor: 'Industry council',
  },
  {
    name: 'ASCL',
    logo: 'https://aaaindia.org/wp-content/uploads/2026/01/asci.jpg',
    website: 'https://www.ascionline.in/',
    descriptor: 'Self-regulation',
  },
  {
    name: 'BARC India',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/associations1.jpg',
    website: 'https://www.barcindia.co.in/',
    descriptor: 'Audience measurement',
  },
  {
    name: 'IAA (India Chapter)',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/iaa-2.jpg',
    website: 'https://iaaindiachapter.org/',
    descriptor: 'Professional network',
  },
  {
    name: 'IAMAI',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/associations10.jpg',
    website: 'https://www.iamai.in/',
    descriptor: 'Digital industry',
  },
  {
    name: 'IBDF',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/ibdf.jpg',
    website: 'https://ibdf.com/',
    descriptor: 'Broadcasting body',
  },
  {
    name: 'Indian Newspaper Society',
    logo: 'https://aaaindia.org/wp-content/uploads/2026/01/ins.jpg',
    website: 'https://www.indiannewspapersociety.in/',
    descriptor: 'Publishing industry',
  },
  {
    name: 'IOAA',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/associations5.jpg',
    website: 'https://www.ioaa.co.in/',
    descriptor: 'Outdoor advertising',
  },
  {
    name: 'The Advertising Club',
    logo: 'https://aaaindia.org/wp-content/uploads/2025/12/associations7.jpg',
    website: 'https://theadvertisingclub.net/',
    descriptor: 'Creative community',
  },
  {
    name: 'The Indian Society of Advertisers',
    logo: 'https://aaaindia.org/wp-content/uploads/2026/05/isa.jpg',
    website: 'https://www.isanet.org.in/',
    descriptor: 'Advertiser body',
  },
  {
    name: 'Waves India',
    logo: 'https://aaaindia.org/wp-content/uploads/2026/01/wave-logo.jpg',
    website: 'https://wavesindia.org/',
    descriptor: 'National initiative',
  },
]

const navigation = [
  { label: 'About', href: 'https://aaaindia.org/about-us/' },
  { label: 'Lifetime Award', href: 'https://aaaindia.org/lifetime-award/' },
  { label: 'Goafest', href: 'https://www.goafest.com/' },
  { label: 'SG Lecture', href: 'https://aaaindia.org/subhas-ghosal-lecture/' },
  { label: 'Membership', href: 'https://aaaindia.org/member-details/' },
  { label: 'Media', href: 'https://aaaindia.org/media-centre/' },
]

const pageContent = {
  international: {
    eyebrow: 'Associated bodies · International',
    titleStart: 'Connected to the',
    titleAccent: 'world of advertising.',
    intro:
      'Explore the international associations and creative organisations connected to the Advertising Agencies Association of India.',
    indexLabel: 'International associations',
    sectionKicker: 'The global network',
    sectionTitle: 'International associations',
    sectionCopy:
      'A curated directory of industry bodies and creative platforms. Select an organisation to visit its official website.',
  },
  national: {
    eyebrow: 'Associated bodies · National',
    titleStart: 'Connected to India’s',
    titleAccent: 'advertising ecosystem.',
    intro:
      'Explore the national institutions and industry organisations connected to the Advertising Agencies Association of India.',
    indexLabel: 'National associations',
    sectionKicker: 'The national network',
    sectionTitle: 'National associations',
    sectionCopy:
      'A connected directory of industry bodies shaping advertising, media and creativity across India.',
  },
}

const marqueeContent = {
  international: ['Creative connections', 'Beyond borders', 'One global community'],
  national: ['Built in India', 'Shaping the industry', 'One creative community'],
}

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <path d="M7.5 16.5 16.5 7.5M9 7.5h7.5V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.8 19c.55-3.2 2.67-5 6.2-5s5.65 1.8 6.2 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      <rect height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" width="17" x="3.5" y="5.5" />
      <path d="m5 7 7 5.4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d="M8.3 4.6 6.8 3.8c-.9-.5-2-.1-2.4.8C2 10.4 8.6 19.2 15.7 20.2c1 .1 1.9-.5 2.1-1.5l.4-1.6c.2-.8-.2-1.6-.9-2l-2.1-1c-.6-.3-1.4-.2-1.9.3l-1.1 1.1c-2.1-1-3.7-2.6-4.7-4.7l1.1-1.1c.5-.5.6-1.3.3-1.9l-.6-3.2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55" />
    </svg>
  )
}

function NetworkIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      <circle cx="6" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m8 7 7.8-.8M7.5 8.7l8 7.6M17.8 8.2l-.6 7.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className={`menu-lines ${open ? 'open' : ''}`}>
      <i />
      <i />
    </span>
  )
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a aria-label="AAAI home" className={`brand ${footer ? 'footer-brandmark' : ''}`} href="https://aaaindia.org/">
      <img
        alt={footer ? 'AAAI celebrating 80 years' : 'Advertising Agencies Association of India'}
        className={footer ? 'footer-anniversary-logo' : 'primary-logo'}
        src={footer ? footerAnniversaryLogo : '/aaai-primary-logo.png'}
      />
    </a>
  )
}

function AssociationCard({
  association,
  index,
  total,
}: {
  association: Association
  index: number
  total: number
}) {
  return (
    <a
      className="association-card"
      href={association.website}
      rel="noreferrer"
      style={{ '--delay': `${index * 45}ms` } as CSSProperties}
      target="_blank"
    >
      <div className="card-top">
        <span>{association.descriptor}</span>
        <span className="card-number">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
      <div className="logo-stage">
        <img alt={`${association.name} logo`} loading="lazy" src={association.logo} />
      </div>
      <h3>{association.name}</h3>
      <div className="card-footer">
        <span>Visit Website</span>
        <span className="round-arrow">
          <ArrowUpRight />
        </span>
      </div>
    </a>
  )
}

export default function App() {
  const getDirectoryFromPath = (): Directory =>
    window.location.pathname.includes('national') &&
    !window.location.pathname.includes('international')
      ? 'national'
      : 'international'

  const [directory, setDirectory] = useState<Directory>(getDirectoryFromPath)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onPopState = () => setDirectory(getDirectoryFromPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const selectDirectory = (next: Directory) => {
    setDirectory(next)
    setMenuOpen(false)
    window.history.pushState({}, '', `/${next}/`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const associations =
    directory === 'international' ? internationalAssociations : nationalAssociations
  const copy = pageContent[directory]

  return (
    <div className="site-shell">
      <div className="announcement">
        <div className="announcement-inner">
          <span>Glimpses from 80 Years of AAAI Celebrations held on 19th May 2026.</span>
          <a href="https://aaaindia.org/" rel="noreferrer" target="_blank">
            Explore AAAI <ArrowUpRight />
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav aria-label="Primary navigation" className="desktop-nav">
            {navigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
            <a className="active" href={`/${directory}/`} onClick={(event) => event.preventDefault()}>
              Associated Bodies
            </a>
          </nav>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-nav">
            {navigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
                <ArrowUpRight />
              </a>
            ))}
            <button onClick={() => selectDirectory('international')} type="button">
              International Associations <ArrowUpRight />
            </button>
            <button onClick={() => selectDirectory('national')} type="button">
              National Associations <ArrowUpRight />
            </button>
          </nav>
        )}
      </header>

      <section aria-label="Celebrating 80 years of AAAI" className="anniversary-band">
        <div aria-hidden="true" className="anniversary-line anniversary-line-left" />
        <div className="anniversary-mark">
          <span aria-hidden="true" className="anniversary-dots">
            <i />
            <i />
            <i />
            <i />
          </span>
          <img alt="AAAI celebrating 80 years" src={anniversaryLogo} />
          <span className="anniversary-caption">Celebrating eight decades of advertising leadership</span>
        </div>
        <div aria-hidden="true" className="anniversary-line anniversary-line-right" />
      </section>

      <main>
        <section className="hero">
          <div aria-hidden="true" className="hero-aura" />
          <div aria-hidden="true" className="hero-brand-motif">
            <div className="hero-dot-row">
              <i />
              <i />
              <i />
              <i />
            </div>
            <svg fill="none" viewBox="0 0 640 270">
              <path
                d="M-18 154 C65 32 158 33 240 142 C310 235 365 234 420 145 C482 43 555 44 660 144"
                stroke="#36A9D6"
                strokeLinecap="round"
                strokeWidth="25"
              />
              <path
                d="M-18 154 C65 32 158 33 240 142 C310 235 365 234 420 145 C482 43 555 44 660 144"
                opacity=".9"
                stroke="#E6007E"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="eyebrow">
            <span aria-hidden="true" className="eyebrow-dots">
              <i />
              <i />
              <i />
              <i />
            </span>
            {copy.eyebrow}
          </div>
          <h1>
            {copy.titleStart}
            <br />
            <span>{copy.titleAccent}</span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-copy">
              <p>{copy.intro}</p>
              <a className="hero-cta" href="#associations">
                <NetworkIcon />
                Explore the network
                <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="hero-controls">
            <div className="switcher-unit">
              <span className="control-label">View associations</span>
              <div className="directory-switcher" aria-label="Association directory">
                <button
                  className={directory === 'national' ? 'selected' : ''}
                  onClick={() => selectDirectory('national')}
                  type="button"
                >
                  National
                </button>
                <button
                  className={directory === 'international' ? 'selected' : ''}
                  onClick={() => selectDirectory('international')}
                  type="button"
                >
                  International
                </button>
              </div>
            </div>
            <div className="hero-index">
              <span className="index-icon">
                <NetworkIcon />
              </span>
              <strong>{String(associations.length).padStart(2, '0')}</strong>
              <span>
                {copy.indexLabel}
                <br />
                listed on this page
              </span>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="brand-rule">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div
          aria-label={marqueeContent[directory].join('. ')}
          className="brand-marquee"
        >
          <svg
            aria-hidden="true"
            className="marquee-line"
            preserveAspectRatio="none"
            viewBox="0 0 1440 74"
          >
            <path
              d="M-20 42 C100 -10 180 -10 280 39 S450 90 560 35 S740 -10 850 39 S1020 90 1130 35 S1320 -5 1460 40"
              fill="none"
              stroke="#36A9D6"
              strokeWidth="2.5"
            />
            <path
              d="M-20 49 C100 -3 180 -3 280 46 S450 97 560 42 S740 -3 850 46 S1020 97 1130 42 S1320 2 1460 47"
              fill="none"
              opacity=".7"
              stroke="#E6007E"
              strokeWidth="1.4"
            />
          </svg>
          <div aria-hidden="true" className="marquee-track">
            {[0, 1].map((group) => (
              <div className="marquee-group" key={group}>
                {marqueeContent[directory].map((item, index) => (
                  <span className="marquee-item" key={item}>
                    <span className="marquee-word">{item}</span>
                    <span className="marquee-symbol">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="directory-section" id="associations">
          <div className="directory-inner">
            <div className="section-heading">
              <div>
                <span className="section-kicker">{copy.sectionKicker}</span>
                <h2>{copy.sectionTitle}</h2>
              </div>
              <div className="section-side">
                <div aria-hidden="true" className="network-mini">
                  <span />
                  <span />
                  <span />
                  <span />
                  <svg fill="none" viewBox="0 0 150 46">
                    <path
                      d="M2 29 C29 2 48 4 67 25 S104 47 148 11"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p>{copy.sectionCopy}</p>
              </div>
            </div>
            <div className="card-grid">
              {associations.map((association, index) => (
                <AssociationCard
                  association={association}
                  index={index}
                  key={association.name}
                  total={associations.length}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-intro">
            <span className="section-kicker">Get in touch</span>
            <h2>Have a question for AAAI?</h2>
            <p>
              Connect with the AAAI team for enquiries about the Association and its work across
              the advertising industry.
            </p>
            <a className="contact-cta" href="mailto:aaai@aaai.in">
              <MailIcon />
              Write to us
              <ArrowUpRight />
            </a>
          </div>
          <div className="contact-details">
            <div>
              <span className="contact-icon">
                <PersonIcon />
              </span>
              <div>
                <span>Contact person</span>
                <strong>
                  Mr Gopakumar R Nair
                  <small>Secretary General</small>
                </strong>
              </div>
            </div>
            <div>
              <span className="contact-icon">
                <PersonIcon />
              </span>
              <div>
                <span>Contact person</span>
                <strong>
                  Mr Sudesh Kapoor
                  <small>Sr Advisor</small>
                </strong>
              </div>
            </div>
            <div>
              <span className="contact-icon">
                <MailIcon />
              </span>
              <div>
                <span>Email</span>
                <strong>
                  <a href="mailto:gopakumar.nair@aaai.in">gopakumar.nair@aaai.in</a>
                  <a href="mailto:aaai@aaai.in">aaai@aaai.in</a>
                </strong>
              </div>
            </div>
            <div>
              <span className="contact-icon">
                <PhoneIcon />
              </span>
              <div>
                <span>Telephone</span>
                <strong>
                  <a href="tel:+912223080870">+91-22-23080870</a>
                  <a href="tel:+912223012565">+91-22-23012565</a>
                </strong>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="contact-art">
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div>
            <Brand footer />
            <p>
              Promoting professionalism and supporting the interests of India’s advertising
              agencies since 1945.
            </p>
          </div>
          <div className="footer-links">
            <a href="https://aaaindia.org/about-us/">About AAAI</a>
            <a href="https://aaaindia.org/member-details/">Membership</a>
            <a href="https://aaaindia.org/media-centre/">Media Centre</a>
            <button onClick={() => selectDirectory('national')} type="button">
              National
            </button>
            <button onClick={() => selectDirectory('international')} type="button">
              International
            </button>
            <a href="mailto:aaai@aaai.in">Contact</a>
          </div>
        </div>
        <div aria-hidden="true" className="footer-watermark">
          AAAI
        </div>
        <div className="footer-bottom">
          <span>© aaaindia.org 2026. All Rights Reserved.</span>
          <span>Powered by: On-lyne</span>
        </div>
      </footer>
    </div>
  )
}
