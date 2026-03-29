import '../styles/Differentials.css'

const differentials = [
  {
    title: 'Qualidade acima de tudo',
    description: 'Não entregamos nada menos que o excelente. Seu conteúdo merece o melhor.',
    icon: '💎'
  },
  {
    title: 'Criatividade com Propósito',
    description: 'Ideias fora da caixa, mas sempre focadas na sua conversão.',
    icon: '💡'
  },
  {
    title: 'Foco em Resultados',
    description: 'Métricas reais, não apenas curtidas. Queremos ver seu negócio crescendo.',
    icon: '📈'
  },
  {
    title: 'Compromisso Real',
    description: 'Sua meta é a nossa meta. Ponto final. Somos parceiros de jornada.',
    icon: '🤝'
  },
  {
    title: 'Conteúdo Estratégico',
    description: 'Cada pixel e cada palavra têm um motivo de existir. Nada é por acaso.',
    icon: '🧩'
  }
]

const Differentials = () => {
  return (
    <section id="differentials" className="differentials">
      <div className="container">
        <div className="diff-header">
          <h2 className="reveal">Por que escolher a <span className="neon-text">Amplifica?</span></h2>
        </div>
        <div className="diff-list">
          {differentials.map((diff, index) => (
            <div key={index} className={`diff-item reveal-left delay-${index + 1}`}>
              <div className="diff-icon">{diff.icon}</div>
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
