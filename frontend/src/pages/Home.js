import { useEffect } from "react"
import RunDetails from "../components/RunDetails"
import RunForm from "../components/RunForm"
import { useRunContext } from "../hooks/useRunContext"


const Home = () => {
    const {runs, dispatch} = useRunContext()

    useEffect(() => {
        const fetchRuns = async () => {
            const response = await fetch('/api/runs')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_RUNS', payload: json})
            }
        }
        fetchRuns()
    }, [dispatch])

    return (
        <div className="home">
            <div className="runs">
                {runs && runs.map((run) => (
                   <RunDetails key={run._id} run={run} />    
                ))}
            </div>
            <RunForm />
        </div>
    )
}

export default Home
