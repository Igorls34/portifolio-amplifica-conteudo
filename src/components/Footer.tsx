import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>AMPLIFICA CONTEÚDO<span>.</span></h3>
            <p>Seu conteúdo também pode ser amplificado.</p>
          </div>
          <div className="footer-links">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="https://wa.me/351925811424" target="_blank" rel="noreferrer">
                  WhatsApp: +351 925 811 424
                </a>
              </li>
              <li>E-mail: contato@amplificaconteudo.com.br</li>
              <li>
                <a href="https://www.instagram.com/amplificaconteudo.ofc/" target="_blank" rel="noreferrer">
                  Instagram: @amplificaconteudo.ofc
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pedrolucas.mateus99/" target="_blank" rel="noreferrer">
                  CEO: @pedrolucas.mateus99
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/ppgamesgames" target="_blank" rel="noreferrer">
                  Portfólio: Behance
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Horário</h4>
            <ul>
              <li>Seg. a Sex.</li>
              <li>09h às 18h</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Amplifica Conteúdo. Todos os direitos reservados. Liderado por Pedro.</p>
          <p style={{ marginTop: '10px' }}>
            Created by <a href="https://igordev-portfolio-ofc.netlify.app/" target="_blank" rel="noreferrer" style={{ opacity: 1, textDecoration: 'underline', color: 'var(--primary-neon)' }}>IgorDev</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
