import React, { type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error('Erro capturado pelo ErrorBoundary:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          fontFamily: 'sans-serif'
        }}>
          <h1 style={{ color: '#d32f2f', marginBottom: '1rem' }}>
            Ops! Algo deu errado
          </h1>
          <p style={{ color: '#666', marginBottom: '2rem', maxWidth: '600px' }}>
            Desculpe, ocorreu um erro inesperado. Por favor, recarregue a página ou entre em contato conosco.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#0052cc',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Recarregar página
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
