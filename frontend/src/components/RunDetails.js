import { useRunContext } from "../hooks/useRunContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const RunDetails = ({ run }) => {
    const date = run.date

    // slice out the time
    const formattedDate = date.slice(0, 10)

    const {dispatch} = useRunContext()

    const handleClick = async () => {
        const response = await fetch('https://treadmill-tracker-backend.onrender.com/api/runs/' + run._id,{
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            console.log('Run deleted', json)
            dispatch({type: 'DELETE_RUN', payload: json})
        }
    }

    return (
        <div className="run-details">
            <h4>{formattedDate}</h4>
            <p><strong>Speed: </strong> {run.speed}</p>
            <p><strong>Distance: </strong> {run.distance} kms</p>
            <p>{formatDistanceToNow(new Date(run.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>    
    )
}

export default RunDetails
