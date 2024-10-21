import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import './index.css'
import { useCryptoStore } from "./store"
import CriptoPriceDisplay from "./components/CriptoPriceDisplay"

function App() {
  const fetchCrypto = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCrypto()
  }, [])

  return (
    <div className="container">
      <h1 className="app-title">
        Cotizador de <span>Criptomedas</span>
      </h1>
      <div className="content">
        <CriptoSearchForm />
        <CriptoPriceDisplay />
      </div>
    </div>
  )
}

export default App
