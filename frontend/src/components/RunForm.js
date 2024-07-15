import {useState} from "react"
import { useRunContext } from "../hooks/useRunContext"

const RunForm = () => {
    const {dispatch} = useRunContext()
    const [date, setDate] = useState("")
    const [distance, setDistance] = useState("")
    const [speed, setSpeed] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // no page refresh

        const run = {date, distance, speed}

        const response = await fetch('/api/runs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(run)
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setDate("")
            setDistance("")
            setSpeed("")
            setError(null)
            console.log("Run added", json)
            dispatch({type: 'CREATE_RUN', payload: json})
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Run</h3>

            <label>Date (yyyy-mm-dd):</label>
            <input
                type="text"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />

            <label>Speed (Machine Setting):</label>
            <input
                type="text"
                onChange={(e) => setSpeed(e.target.value)}
                value={speed}
            />

            <label>Distance (in Kms):</label>
            <input
                type="text"
                onChange={(e) => setDistance(e.target.value)}
                value={distance}
            />

            <button>Add Run</button>

            {error && <div>{error}</div>}
        </form>
    )
}

export default RunForm
