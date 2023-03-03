import { useCallback, useState } from "react"
import { getMatrix } from "../utils/getMatrix"
import { getRandomNumber } from "../utils/getRandomNumber"
import { getDirections } from "../utils/getDirections"

export const useLabyrinthData = (size) => {

    const [matrix, setMatrix] = useState(getMatrix(size))
    const [start, setStart] = useState(null)
    const [directions, setDirections] = useState([])
    const [finish, setFinish] = useState(null)

    const restart = useCallback((newSize) => {
        const startData = {x: getRandomNumber(newSize), y: getRandomNumber(newSize)}
        const directionsData = getDirections(10, newSize, startData)
        setStart(startData)
        setMatrix(getMatrix(newSize))
        setDirections(directionsData.directions)
        setFinish(directionsData.finish)
    }, [])

    return { matrix, start, restart, directions, finish }
}
