import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        console.log(process.env.SERVICE_NAME);
    }, []);

    return (
        <h1 className="text-blue-300 text-3xl font-bold underline">
            Hello world {process.env.SERVICE_NAME}
        </h1>
    )
}
