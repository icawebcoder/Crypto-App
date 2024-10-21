import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CriptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {/* Este useMemo, lo que hace es evaluar si existe algún resultado, en caso que devuelva un true, 
            entonces muestra el contenido que engloba al fragment, en caso contrario, no debería de mostrarse.
            */}
            {hasResult && (
                <>

                    <h2>Cotización</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Imagen CryptoMoneda"
                        />
                        <div>
                            <p>Precio actual : <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día : <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día : <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas : <span>{result.CHANGEPCT24HOUR}%</span></p>
                            <p>Última actualización : <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>

                </>
            )}

        </div>
    )
}
