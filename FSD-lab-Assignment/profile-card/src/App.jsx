const profiles = [
  {
    name: 'Aarav Mehta',
    role: 'Frontend Developer',
    imageUrl: 'https://i.pravatar.cc/240?img=12',
    description: 'Builds thoughtful interfaces and turns complex ideas into simple experiences.',
    accent: 'coral',
  },
  {
    name: 'Maya Chen',
    role: 'Product Designer',
    imageUrl: 'https://i.pravatar.cc/240?img=47',
    description: 'Creates warm, accessible products where every interaction has a purpose.',
    accent: 'mint',
  },
  {
    name: 'Noah Williams',
    role: 'Data Scientist',
    imageUrl: 'https://i.pravatar.cc/240?img=53',
    description: 'Finds the story in the numbers and helps teams make confident decisions.',
    accent: 'gold',
  },
]

function ProfileCard({ name, role, imageUrl, description, accent }) {
  return (
    <article className={`profile-card profile-card--${accent}`}>
      <div className="profile-card__topline" />
      <img className="profile-card__image" src={imageUrl} alt={`${name} profile`} />
      <div className="profile-card__content">
        <p className="profile-card__role">{role}</p>
        <h2>{name}</h2>
        <p className="profile-card__description">{description}</p>
        <button className="profile-card__button" type="button">View profile <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow">Assignment 04 / React fundamentals</p>
        <h1>Meet the people<br /><em>behind the work.</em></h1>
        <p className="intro">A reusable profile card, powered by a single list of data and passed down through props.</p>
      </header>

      <section className="profile-grid" aria-label="Profile cards">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </section>

      <footer className="page-footer">
        <span>React / Props / Components</span>
        <span>03 profiles</span>
      </footer>
    </main>
  )
}

export default App
