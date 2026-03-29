import '../styles/Services.css'

const services = [
  {
    title: 'Gestão de Conteúdo',
    description: 'Esqueça a preocupação de "o que postar amanhã". Nós cuidamos de todo o ecossistema da sua marca.',
    icon: '📱'
  },
  {
    title: 'Produção de Vídeo/Foto',
    description: 'Conteúdo visual de elite que faz o seu cliente parar o scroll e desejar o seu produto.',
    icon: '🎥'
  },
  {
    title: 'Estratégia Digital',
    description: 'O mapa do tesouro. Planejamos cada passo para que sua marca ocupe o lugar que merece.',
    icon: '🎯'
  },
  {
    title: 'Identidade Visual',
    description: 'Design que comunica profissionalismo e desejo imediato. A primeira impressão que vende.',
    icon: '🎨'
  }
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="reveal">Os 4 Pilares da <span className="neon-text">Amplificação</span></h2>
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
