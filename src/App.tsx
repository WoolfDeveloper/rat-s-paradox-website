import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const AppContent = () => {
  return (
    <Routes>
      {ROUTES.map((route, index) => route.enabled && (
        <Route key={index} path={route.path} element={route.component()} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function App() {
  // Al pasar al dominio ratsparadox.com se debe cambiar el basename
  return (
    <BrowserRouter basename="/rat-s-paradox-website">
      <AppContent />
    </BrowserRouter>
  )
}

export default App
