import { useState, useEffect } from 'react'
import '../styles/Portfolio.css'
import { imageMap } from '../imagens/imagesMap'

interface PortfolioItem {
  id: string
  image: string
  title: string
  category: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    image: 'imagem-1.jpeg',
    title: 'Projeto Marca Premium',
    category: 'Identidade Visual'
  },
  {
    id: '2',
    image: 'imagem-2.jpeg',
    title: 'Campanha Digital',
    category: 'Marketing Digital'
  },
  {
    id: '3',
    image: 'imagem-3.jpeg',
    title: 'Conteúdo Social Media',
    category: 'Redes Sociais'
  },
  {
    id: '4',
    image: 'WhatsApp Image 2026-04-03 at 14.28.45.jpeg',
    title: 'Fotografia Comercial',
    category: 'Fotografia'
  },
  {
    id: '5',
    image: 'WhatsApp Image 2026-04-03 at 14.30.10.jpeg',
    title: 'Design Editorial',
    category: 'Design'
  },
  {
    id: '6',
    image: 'WhatsApp Image 2026-04-03 at 14.30.102.jpeg',
    title: 'Branding Completo',
    category: 'Identidade Visual'
  },
  {
    id: '7',
    image: 'WhatsApp Image 2026-04-03 at 14.30.11.jpeg',
    title: 'Produção de Vídeo',
    category: 'Vídeo'
  },
  {
    id: '8',
    image: 'WhatsApp Image 2026-04-03 at 14.30.116.jpeg',
    title: 'Layout Digital',
    category: 'Design Digital'
  },
  {
    id: '9',
    image: 'WhatsApp Image 2026-04-03 at 14.30.120.4jpeg.jpeg',
    title: 'Embalagem Premium',
    category: 'Design de Produto'
  },
  {
    id: '10',
    image: 'WhatsApp Image 2026-04-03 at 14.30.120.jpeg',
    title: 'Estratégia de Conteúdo',
    category: 'Estratégia'
  },
  {
    id: '11',
    image: 'WhatsApp Image 2026-04-03 at 14.30.181.jpeg',
    title: 'Fotografia de Eventos',
    category: 'Fotografia'
  },
  {
    id: '12',
    image: 'WhatsApp Image 2026-04-03 at 14.30.191.jpeg',
    title: 'Criativo para Publicidade',
    category: 'Publicidade'
  },
  {
    id: '13',
    image: 'WhatsApp Image 2026-04-03 at 14.30.210.jpeg',
    title: 'Catálogo Digital',
    category: 'Design'
  },
  {
    id: '14',
    image: 'WhatsApp Image 2026-04-03 at 14.301.10.jpeg',
    title: 'Motion Graphics',
    category: 'Motion Design'
  },
  {
    id: '15',
    image: 'WhatsApp Image 2026-04-03 at 14.306.10.jpeg',
    title: 'Instagram Reels',
    category: 'Redes Sociais'
  },
  {
    id: '16',
    image: 'WhatsApp Image 2026-04-03 at 14.33.230.jpeg',
    title: 'Ilustração Digital',
    category: 'Arte Digital'
  },
  {
    id: '17',
    image: 'WhatsApp Image 2026-04-03 at 14.33.233.jpeg',
    title: 'Webdesign Responsivo',
    category: 'Design Digital'
  },
  {
    id: '18',
    image: 'WhatsApp Image 2026-04-03 at 14.33.239.jpeg',
    title: 'Apresentação Corporativa',
    category: 'Design'
  },
  {
    id: '19',
    image: 'WhatsApp Image 2026-04-03 at 14.33.623.jpeg',
    title: 'Fotografia Produto',
    category: 'Fotografia'
  },
  {
    id: '20',
    image: 'WhatsApp Image 2026-04-03 at 14.337.23.jpeg',
    title: 'Gestão de Redes',
    category: 'Marketing Digital'
  },
  {
    id: '21',
    image: 'WhatsApp Image 2026-04-03 at 14.40.170.jpeg',
    title: 'Consultoria de Marca',
    category: 'Estratégia'
  }
]

const categories = ['Todos', ...Array.from(new Set(portfolioItems.map(item => item.category)))]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    setShowAll(false)
  }, [selectedCategory])

  const filteredItems = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6)
  const hasMore = filteredItems.length > 6

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
            const imageUrl = imageMap[item.image]
            return (
              <div 
                key={item.id}
                className={`portfolio-item reveal delay-${Math.min(index % 4 + 1, 4)} ${!imageUrl ? 'image-missing' : ''}`}
                onClick={() => imageUrl && setSelectedImage(item)}
              >
                <div className="portfolio-image-wrapper">
                  {imageUrl ? (
                    <>
                      <img 
                        src={imageUrl} 
                        alt={item.title}
                        className="portfolio-image"
                      />
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

      {selectedImage && imageMap[selectedImage.image] && (
        <div className="portfolio-modal" onClick={() => setSelectedImage(null)}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)} aria-label="Fechar modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={imageMap[selectedImage.image]} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p className="modal-category">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio

