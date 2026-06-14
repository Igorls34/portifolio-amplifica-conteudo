import { useState, useEffect } from 'react'
import '../styles/Portfolio.css'
import { imageMap } from '../imagens/imagesMap'

interface PortfolioItem {
  id: string
  image?: string
  video?: string
  title: string
  category: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'v1',
    video: '/portfolio-video.mp4',
    image: 'thumb-video-1',
    title: 'Projeto Audiovisual Premium',
    category: 'Motion Design'
  },
  {
    id: 'v2',
    video: '/portfolio-video-2.mp4',
    image: 'thumb-video-2',
    title: 'Produção de Conteúdo',
    category: 'Motion Design'
  },
  {
    id: 'v3',
    video: '/portfolio-video-3.mp4',
    image: 'thumb-video-3',
    title: 'Edição de Vídeo Profissional',
    category: 'Motion Design'
  },
  {
    id: '1',
    image: 'imagem-1.jpeg',
    title: 'Projeto Marca Premium',
    category: 'Identidade Visual'
  },
  {
    id: '3',
    image: 'imagem-3.jpeg',
    title: 'Conteúdo Social Media',
    category: 'Redes Sociais'
  },
  {
    id: '6',
    image: 'WhatsApp Image 2026-04-03 at 14.30.102.jpeg',
    title: 'Branding Completo',
    category: 'Identidade Visual'
  },
  {
    id: '15',
    image: 'WhatsApp Image 2026-04-03 at 14.306.10.jpeg',
    title: 'Instagram Reels',
    category: 'Redes Sociais'
  }
]

const categories = ['Todos', ...Array.from(new Set(portfolioItems.map(item => item.category)))]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    setShowAll(false)
  }, [selectedCategory])

  const filteredItems = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6)
  const hasMore = filteredItems.length > 6

  const getImageUrl = (item: PortfolioItem) => {
    if (item.image) {
      if (item.image.startsWith('thumb-')) return `/${item.image}.jpg`
      return imageMap[item.image]
    }
    return undefined
  }

  const canOpen = (item: PortfolioItem) => {
    return !!(item.video || getImageUrl(item))
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-header reveal">
          <h2>Nosso <span className="neon-text">Portfólio</span></h2>
          <p>Conheça os projetos que transformamos e as marcas que elevamos</p>
        </div>

        <div className="portfolio-filters reveal delay-1">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {displayedItems.map((item, index) => {
            const imageUrl = getImageUrl(item)
            const isVideoItem = !!item.video
            return (
              <div 
                key={item.id}
                className={`portfolio-item delay-${Math.min(index % 4 + 1, 4)} ${!canOpen(item) ? 'image-missing' : ''}`}
                onClick={() => canOpen(item) && setSelectedItem(item)}
              >
                <div className="portfolio-image-wrapper">
                  {imageUrl ? (
                    <>
                      <img 
                        src={imageUrl} 
                        alt={item.title}
                        className="portfolio-image"
                        loading="lazy"
                      />
                      <div className="portfolio-overlay">
                        <div className="portfolio-content">
                          <h3>{item.title}</h3>
                          <p className="portfolio-category">{item.category}</p>
                          {isVideoItem ? (
                            <div className="play-icon-sm">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                              </svg>
                            </div>
                          ) : (
                            <button className="view-btn">Ver Projeto</button>
                          )}
                        </div>
                      </div>
                    </>
                  ) : isVideoItem ? (
                    <>
                      <div className="portfolio-video-thumb">
                        <div className="play-icon">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                          </svg>
                        </div>
                      </div>
                      <div className="portfolio-overlay">
                        <div className="portfolio-content">
                          <h3>{item.title}</h3>
                          <p className="portfolio-category">{item.category}</p>
                          <button className="view-btn">Ver Projeto</button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="portfolio-placeholder">
                      <p>Imagem não encontrada: {item.image}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {hasMore && !showAll && (
          <div className="portfolio-more reveal delay-2">
            <button 
              className="more-btn"
              onClick={() => setShowAll(true)}
            >
              Ver Mais Projetos
            </button>
          </div>
        )}

        {hasMore && showAll && (
          <div className="portfolio-less reveal delay-2">
            <button 
              className="more-btn"
              onClick={() => setShowAll(false)}
            >
              Ver Menos
            </button>
          </div>
        )}

        <div className="portfolio-cta reveal delay-2">
          <h3>Veja mais projetos incríveis no nosso Behance</h3>
          <p>Explore todo o portfólio completo com cases de sucesso e trabalhos exclusivos</p>
          <button 
            className="behance-btn"
            onClick={() => window.open('https://www.behance.net/ppgamesgames', '_blank')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h4v4H4V6zm0 6h4v4H4v-4zm6-6h6v2h-6V6zm0 2h8v2h-8V8zm0 4h8v2h-8v-2zm4 4h4v2h-4v-2z"/>
            </svg>
            Explorar Portfólio Completo no Behance
          </button>
        </div>
      </div>

      {selectedItem && (
        <div className="portfolio-modal" onClick={() => setSelectedItem(null)}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)} aria-label="Fechar modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {selectedItem.video ? (
              <video controls className="modal-video" playsInline>
                <source src={selectedItem.video} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            ) : selectedItem.image && imageMap[selectedItem.image] ? (
              <img src={imageMap[selectedItem.image]} alt={selectedItem.title} loading="lazy" />
            ) : null}
            <div className="modal-info">
              <h3>{selectedItem.title}</h3>
              <p className="modal-category">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
