import { RunContext } from "../context/RunContext"
import { useContext } from "react"

export const useRunContext = () => {
    const context = useContext(RunContext)

    if (!context) {
        throw new Error('useRunContext must be used within a RunProvider')
    }

    return context
}