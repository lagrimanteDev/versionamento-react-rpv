import { useEffect, useState } from "react"

const COUNTER_STORAGE_KEY = "exercicio-2-counter"



export default function Ex02() {


    const [count, setCount] = useState(0)
    const [historico, setHistorico] = useState<number[]>([])

    useEffect(() => {
        const storedCount = window.localStorage.getItem(COUNTER_STORAGE_KEY)

        if (storedCount !== null) {
            setCount(Number(storedCount))
        }
        
    }, [])

    useEffect(() => {
        window.localStorage.setItem(COUNTER_STORAGE_KEY, String(count))
    }, [count])



    return (
        <>
            <div className="relative flex min-h-screen flex-col items-center justify-center ">

                <div className="relative z-10 flex items-center gap-4">
                <button className="cursor-pointer" onClick={() => setCount(count + 1)}>Adiconar Contador</button>
                <button className="cursor-pointer" onClick={() => setCount(count - 1)}>Remover Contador</button>
                <button className="cursor-pointer" onClick={() => setCount(0)}>Resetar Contador</button>
                <button className="cursor-pointer" onClick={() => setHistorico(oldState => [...oldState, count])}>Salvar historico</button>
                </div>
                <div className="flex items-center justify-center text-6xl font-bold ">
                    <p className="px-2">{`${count}`}</p>
                    {historico.map((item, index) => {
                        return (
                            <span key={index} className="text-sm mx-1">{item}</span>
                        )
                    })}
                </div>
            </div>
        </>
    )

}

