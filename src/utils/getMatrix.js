export const getMatrix = (size) => {
    const matrix = []
    for (let i = 0; i < size; i++) {
        const row = []
        for (let j = 0; j < size; j++) {
            row.push('cell')
        } 
        matrix.push(row)
    }
    return matrix
}