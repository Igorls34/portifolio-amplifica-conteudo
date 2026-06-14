import '../styles/Depoimentos.css'

interface DepoimentoItem {
  nome: string
  cargo: string
  foto?: string
  texto: string
  tipo: 'audio' | 'video'
  media: string
  mediaType: string
}

const depoimentos: DepoimentoItem[] = [
  {
    nome: 'Anderson Lopes',
    cargo: 'Diretor Executivo, Pint Service VR',
    foto: '/depoimento-cliente.jpeg',
    texto: 'A Amplifica tem sido de grande ajuda para a divulgação do nosso trabalho. Eles se empenham em atender todas as demandas, trazem ideias e colocam em prática. Discutimos juntos cada projeto — tenho certeza que tem sido muito bom para a empresa e só tende a melhorar. Recomendo fortemente.',
    tipo: 'audio',
    media: '/depoimento-audio.ogg',
    mediaType: 'audio/ogg'
  },
  {
    nome: 'Henrique Faria',
    cargo: 'Segurança Privada',
    foto: '/depoimento-henrique.jpeg',
    texto: 'Foi a primeira pessoa que contratei para cuidar das mídias do Instagram e curti demais a experiência. Uma cabeça pensa bem, mas duas pensam muito melhor. Gostei das montagens, dos vídeos com áudio e principalmente da logo que criou pros meus vídeos — deu identidade única ao conteúdo. Experiência excelente, valeu muito a pena!',
    tipo: 'audio',
    media: '/depoimento-video.mp4',
    mediaType: 'audio/mp4'
  }
]

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/>
  </svg>
)

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="depoimentos">
      <div className="container">
        <div className="depoimentos-header reveal">
          <span className="section-tag">Depoimentos</span>
          <h2>O que nossos <span className="neon-text">clientes</span> dizem</h2>
          <p>Resultados reais que falam por si</p>
        </div>

        <div className="depoimentos-grid">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className={`depoimento-card reveal delay-${Math.min(index + 1, 2)}`}>
              {/* Decorative big quote */}
              <div className="depoimento-quote-mark">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 11h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4v6h-2v4h2v-4zm8 0h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4v6h-2v4h2v-4z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="depoimento-stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>

              {/* Text */}
              <blockquote className="depoimento-texto">
                {depoimento.texto}
              </blockquote>

              {/* Audio Player */}
              <div className="depoimento-player">
                <div className="player-bar">
                  <div className="player-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    </svg>
                  </div>
                  <audio controls className="player-audio">
                    <source src={depoimento.media} type={depoimento.mediaType} />
                  </audio>
                </div>
                <span className="player-label">Ouça o depoimento completo</span>
              </div>

              {/* Client Info */}
              <div className="depoimento-author">
                {depoimento.foto ? (
                  <img src={depoimento.foto} alt={depoimento.nome} className="author-photo" loading="lazy" />
                ) : (
                  <div className="author-photo author-photo-placeholder">
                    {depoimento.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                )}
                <div className="author-info">
                  <span className="author-name">{depoimento.nome}</span>
                  <span className="author-role">{depoimento.cargo}</span>
                </div>
                <div className="author-verified">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
