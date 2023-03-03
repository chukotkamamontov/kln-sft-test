import { getRandomNumber } from "./getRandomNumber"

export const getDirection = (current, size) => {
    const newCurrent = {...current}
    const direction = getRandomNumber(4)

    if ( direction === 0 && newCurrent.y - 1 >= 0) {
        newCurrent.y -= 1
        return {direction, newCurrent}
    }
    if ( direction === 1 && newCurrent.x + 1 < size) {  
        newCurrent.x += 1
        return {direction, newCurrent}
    }
    if ( direction === 2 && newCurrent.y + 1 < size) {
        newCurrent.y += 1
        return {direction, newCurrent}
    }
    if ( direction === 3 && newCurrent.x - 1 >= 0) {
        newCurrent.x -= 1
        return {direction, newCurrent}
    } 

    return getDirection(current, size) 
}