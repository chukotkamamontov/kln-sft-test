import { getDirection } from "./getDirection";

export const getDirections = (count, size, start) => {
    const directions = [];
    let current = {...start}
    
    for (let i = 0; i < count; i++) {
        const {direction, newCurrent} = getDirection(current, size) 
        current = {...newCurrent}
        directions.push(direction);
    }

    return {directions, finish: current} 
}  