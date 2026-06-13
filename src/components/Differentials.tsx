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
  if (iconId === 'sparkles') return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  )
  if (iconId === 'lightbulb') return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
    </svg>
  )
  if (iconId === 'target') return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  )
  if (iconId === 'handshake') return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
    </svg>
  )
  if (iconId === 'compass') return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  )
  return null
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
