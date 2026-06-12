import { ArrowRight } from "lucide-react"

export default function Home() {
    return (
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold flex gap-2 items-center">
                Home <ArrowRight />
            </h1>
        </div>
    )
}