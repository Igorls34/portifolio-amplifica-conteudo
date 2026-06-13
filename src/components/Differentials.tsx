import '../styles/Differentials.css'

const differentials = [
  {
    title: 'Qualidade Acima de Tudo',
    description: 'Não entregamos nada menos que o excelente. Seu conteúdo merece o melhor.',
    iconId: 'sparkles'
  },
  {
    title: 'Criatividade com Propósito',
    description: 'Ideias fora da caixa, mas sempre focadas na sua conversão.',
    iconId: 'lightbulb'
  },
  {
    title: 'Foco em Resultados',
    description: 'Métricas reais, não apenas curtidas. Queremos ver seu negócio crescendo.',
    iconId: 'target'
  },
  {
    title: 'Compromisso Real',
    description: 'Sua meta é a nossa meta. Ponto final. Somos parceiros de jornada.',
    iconId: 'handshake'
  },
  {
    title: 'Conteúdo Estratégico',
    description: 'Cada pixel e cada palavra têm um motivo de existir. Nada é por acaso.',
    iconId: 'compass'
  }
]

const getIcon = (iconId: string) => {
  const icons: Record<string, React.JSX.Element> = {
    sparkles: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74l2.26 2.26"></path>
        <path d="M21 21v-5h-5"></path>
      </svg>
    ),
    lightbulb: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    ),
    target: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <line x1="5" y1="5" x2="19" y2="19"></line>
        <line x1="5" y1="19" x2="19" y2="5"></line>
      </svg>
    ),
    handshake: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"></path>
        <path d="M16 16c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"></path>
      </svg>
    ),
    compass: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"></circle>
        <path d="M12 8v-1"></path>
        <path d="M12 17v1"></path>
        <path d="M8.22 8.22l-.71-.71"></path>
        <path d="M16.49 16.49l.71.71"></path>
        <path d="M7 12H6"></path>
        <path d="M18 12h1"></path>
        <path d="M8.22 15.78l-.71.71"></path>
        <path d="M16.49 7.51l.71-.71"></path>
      </svg>
    )
  }
  return icons[iconId] || null
}

const Differentials = () => {
  return (
    <section id="differentials" className="differentials">
      <div className="container">
        <div className="diff-header">
          <h2 className="reveal">Por que escolher a <span className="neon-text">Amplifica?</span></h2>
        </div>
        <div className="diff-list">
          {differentials.map((diff, index) => (
            <div key={index} className={`diff-item reveal-left delay-${Math.min(index + 1, 5)}`}>
              <div className="diff-icon">
                {getIcon(diff.iconId)}
              </div>
              <div className="diff-content">
                <h3>{diff.title}</h3>
                <p>{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials
