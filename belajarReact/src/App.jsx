import { useEffect, useState } from "react"

export default function App() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     const getData = async () => {
    //         const req = await fetch("https://jsonplaceholder.typicode.com/users")
    //         setData(await req.json())
    //     }
    //     getData();
    // }, [])

    // console.log(data)
    {/* {
        data.map((item) => {
            return (
                <div key={item.name} className="flex flex-col justify-center items-center p-4">
                    <div className="flex justify-center items-center">
                        {item.name}
                    </div>
                    <div className="flex justify-center items-center">
                        {item.email}
                    </div>
                </div>
            )
        })
    } */}
    // const id = form.get("id")
    // const pass = form.get("pass")
    // console.log(id)
    // console.log(pass)


    function hendleForm(event) {
        event.preventDefault()

        const form = new FormData(event.target)

        const data = Object.fromEntries(form.entries())

        const local = JSON.parse(localStorage.getItem("tes") || "[]")


        local.push(data)

        localStorage.setItem("tes", JSON.stringify(local))
    }


    return (

        <>
            <main>
                <div className="flex justify-center items-center p-20">
                    <form onSubmit={hendleForm} className="flex flex-col border-2 border-blue-500 gap-2">
                        <div className="flex gap-2 border-2 border-purple-500">
                            <label htmlFor="id">Id :</label>
                            <input type="text" name="id" />
                        </div>

                        <div className="flex gap-2 border-2 border-purple-500">
                            <label htmlFor="pass">pass :</label>
                            <input type="password" name="pass" />
                        </div>
                        <button type="submit" className="flex items-center justify-center gap-2 border-2 border-purple-500">Submit</button>
                    </form>
                </div>
            </main >
        </>
    )
}