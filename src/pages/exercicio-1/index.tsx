import { useState } from "react"

let temaDefault = ""

export default function Ex01() {

    const [tema, setTema] = useState<boolean>(false)

    { tema ? temaDefault = `bg-zinc-100` : temaDefault = `bg-black` }

    return (
        <>
            <div className={`flex flex-col justify-center items-center min-h-screen gap-20 ${temaDefault}`}>

                <h1>Exercicio 01</h1>
                <button className="flex justify-center items-center cursor-pointer" onClick={() => setTema(!tema)}>Trocar Tema</button>

            </div>
        </>
    )

}