import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'

const normalizePath = (pathname) => (pathname === '/app' ? '/app' : '/')

function RootRouter() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => {
      setPath(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (nextPath) => {
    const normalized = normalizePath(nextPath)
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized)
    }
    setPath(normalized)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (path === '/app') {
    return <App />
  }

  return <LandingPage onEnterApp={() => navigate('/app')} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootRouter />
  </StrictMode>,
)
