import { Day } from "./Day"


let numDays:number[] = []
for(let i = 1; i < 43; i++) {
  numDays[i-1] = i
}

export const Days = () => {
    return (
        <section className="num-days">
            {numDays.map((numDay) => {
                return <Day key={numDay} numday={numDay}/>
            })}
        </section>
  )}