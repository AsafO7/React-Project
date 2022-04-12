import { Day } from "./Day"
// require('datejs')

let numDays:number[] = []
for(let i = 1; i < 43; i++) {
  numDays[i-1] = i
}

// Find a way to get yearly data of days in every month

export type monthObj = {
    month: number,
    year: number
}

function getNumOfDaysInMonth(month: number, year: number) {
    if(month + 1 === 2) {
        if((year % 100 === 0 && year % 400 === 0) || year % 4 === 0) {
            return 29
        }
        else return 28
    }
    if(month + 1 === 7 || month + 1 === 8) return 31
    if(month + 1 === 1 || month + 1 === 3 || month + 1 === 5 || month + 1 === 10 || month + 1 === 12) return 31
    else return 30
}

export const Days:React.FC<monthObj> = ({month, year}) => {
    let monthStartDay = new Date(`${month + 1} 1 ${year}`)
    let numOfDaysInMonth = getNumOfDaysInMonth(month, year)
    return (
        <section className="num-days">
            {numDays.map((numDay) => {
                return <Day key={numDay} numday={numDay} startDate={monthStartDay}
                numOfDaysInMonth={numOfDaysInMonth}/>
            })}
        </section>
  )}