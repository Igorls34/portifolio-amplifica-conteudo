import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>AMPLIFICA CONTEÚDO<span>.</span></h3>
            <p>Transformando marcas invisíveis em referências de mercado.</p>
          </div>
          <div className="footer-links">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="https://wa.me/351925811424" target="_blank" rel="noreferrer" className="link-premium">
                  WhatsApp: +351 925 811 424
                </a>
              </li>
              <li>
                <a href="mailto:amplificaconteudo.amp@gmail.com" className="link-premium">
                  E-mail: amplificaconteudo.amp@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/amplificaconteudo.ofc/" target="_blank" rel="noreferrer" className="link-premium">
                  Instagram: @amplificaconteudo.ofc
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pedrolucas.mateus99/" target="_blank" rel="noreferrer" className="link-premium">
                  CEO: @pedrolucas.mateus99
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Horário</h4>
            <ul>
              <li>Seg. a Sex.</li>
              <li>10h às 22h</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-behance-cta">
          <p>Explore nosso portfólio completo:</p>
          <a 
            href="https://www.behance.net/ppgamesgames" 
            target="_blank" 
            rel="noreferrer" 
            className="behance-footer-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h4v4H4V6zm0 6h4v4H4v-4zm6-6h6v2h-6V6zm0 2h8v2h-8V8zm0 4h8v2h-8v-2zm4 4h4v2h-4v-2z"/>
            </svg>
            Visitar Behance @ppgamesgames
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Amplifica Conteúdo. Todos os direitos reservados. Liderado por Pedro.</p>
          <p style={{ marginTop: '10px' }}>
            Created by <a href="https://igordev-portfolio-ofc.netlify.app/" target="_blank" rel="noreferrer" className="link-premium">IgorDev</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

