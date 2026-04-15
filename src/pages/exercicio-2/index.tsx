import { useState } from "react"



export default function Ex02() {


    const [count, setCount] = useState(0)


    return (
        <>
            <div className={`flex flex-col justify-center items-center min-h-screen gap-20`}>
                <button name="contador" onClick={() => setCount(count + 1)}>Adiconar Contador</button>
                <p>{`${count}`}</p>
            </div>
        </>
    )

}