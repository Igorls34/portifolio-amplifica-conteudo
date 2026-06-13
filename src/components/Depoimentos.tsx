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
    texto: 'A Amplifica transformou completamente a presença digital da minha empresa. Em apenas 3 meses, nossos resultados dispararam. O Pedro e a equipe são extremamente profissionais e antenados com as tendências. Recomendo de olhos fechados!',
    tipo: 'audio',
    media: '/depoimento-audio.ogg',
    mediaType: 'audio/ogg'
  },
  {
    nome: 'Henrique Faria',
    cargo: 'Segurança Privada',
    texto: 'Depois que a Amplifica assumiu nossas redes sociais, tudo mudou. O conteúdo que eles produzem é de altíssima qualidade e realmente conecta com nosso público. Pedro é um gênio do marketing digital!',
    tipo: 'video',
    media: '/depoimento-video.mp4',
    mediaType: 'video/mp4'
  }
]

const AudioIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
)

const VideoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
)

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="depoimentos">
      <div className="container">
        <div className="depoimentos-header reveal">
          <h2>O que nossos <span className="neon-text">clientes</span> dizem</h2>
          <p>Resultados reais que falam por si</p>
        </div>

        <div className="depoimentos-grid">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className={`depoimento-card reveal delay-${Math.min(index + 1, 2)}`}>
              <div className="depoimento-top">
                <div className="depoimento-foto-wrapper">
                  {depoimento.foto ? (
                    <>
                      <img
                        src={depoimento.foto}
                        alt={`Foto de ${depoimento.nome}`}
                        className="depoimento-foto"
                      />
                      <div className="depoimento-aspas">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 11h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4v6h-2v4h2v-4zm8 0h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4v6h-2v4h2v-4z"/>
                        </svg>
                      </div>
                    </>
                  ) : (
                    <div className="depoimento-foto depoimento-foto-placeholder">
                      <span>{depoimento.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}</span>
                    </div>
                  )}
                </div>
                <div className="depoimento-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/>
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="depoimento-texto">
                "{depoimento.texto}"
              </blockquote>

              <div className="depoimento-media">
                <div className="media-label">
                  {depoimento.tipo === 'audio' ? <AudioIcon /> : <VideoIcon />}
                  <span>{depoimento.tipo === 'audio' ? 'Ouça o depoimento' : 'Assista ao depoimento'}</span>
                </div>
                {depoimento.tipo === 'audio' ? (
                  <audio controls className="media-player">
                    <source src={depoimento.media} type={depoimento.mediaType} />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                ) : (
                  <video controls className="media-player video-player" playsInline preload="metadata">
                    <source src={depoimento.media} type={depoimento.mediaType} />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                )}
              </div>

              <div className="depoimento-cliente">
                <span className="cliente-nome">{depoimento.nome}</span>
                <span className="cliente-cargo">{depoimento.cargo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
