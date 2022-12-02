const diffOfTwoDates = (date1: Date, date2: Date) => {
    return Math.abs(date1.getTime() - date2.getTime()) / 3600 / 1000 
}
//test
const date1 = new Date("December 1, 2022 09:00:00" )
const date2 = new Date("December 1, 2022 07:35:00")
console.log(diffOfTwoDates(date1, date2))

const hexToRGB = (hex: string) => {
    
}

console.log(hexToRGB("9E"))