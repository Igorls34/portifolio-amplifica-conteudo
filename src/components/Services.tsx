import '../styles/Services.css'

const services = [
  {
    title: 'Gestão de Conteúdo',
    description: 'Esqueça a preocupação de "o que postar amanhã". Nós cuidamos de todo o ecossistema da sua marca.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 11h6M9 15h6"/>
      </svg>
    )
  },
  {
    title: 'Identidade Visual',
    description: 'Design que comunica profissionalismo e desejo imediato. A primeira impressão que vende.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="13.5" cy="6.5" r="1.5"/>
        <circle cx="17.5" cy="10.5" r="1.5"/>
        <circle cx="8.5" cy="7.5" r="1.5"/>
        <path d="M12 17s-4-3-5-5m5 5s4-3 5-5"/>
      </svg>
    )
  }
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="reveal">Os 2 Pilares da <span className="neon-text">Amplificação</span></h2>
          <p className="reveal delay-1">Soluções integradas que transformam sua marca em referência</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card reveal delay-${index + 1}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
