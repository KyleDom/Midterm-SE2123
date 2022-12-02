const diffOfTwoDates = (date1: Date, date2: Date) => {
    return Math.abs(date1.getTime() - date2.getTime()) / 3600 / 1000 
}
//test
const date1 = new Date("December 1, 2022 09:00:00" )
const date2 = new Date("December 1, 2022 07:35:00")
console.log(diffOfTwoDates(date1, date2))

const hexToRGB = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [ r, g, b ]
}

console.log(hexToRGB("9E"))