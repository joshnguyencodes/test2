import { createContext, useReducer } from 'react'

export const RunContext = createContext()

export const runReducer = (state, action) => {
    switch(action.type) {
        case 'SET_RUNS':
            return{
                runs: action.payload
            }
        case 'CREATE_RUN':
            return{
                runs: [action.payload, ...state.runs]
            }
        case 'DELETE_RUN':
            return{
                runs: state.runs.filter((run) => run._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const RunProvider = ({ children }) => {
    const [state, dispatch] = useReducer(runReducer, {
        runs: null
    })
 

    return (
        <RunContext.Provider value={{...state, dispatch}}>
            {children}
        </RunContext.Provider>
    )
}