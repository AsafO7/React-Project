import { useState } from "react"
import { Days } from "./Days"

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"]

let today = new Date()

export const Calendar = () => {
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())

  function setPrevMonth(month: number) {
    if(month - 1 < 0) {
      setMonth(11)
      setYear((prev) => {
        return prev - 1
      })
    }
    else setMonth((prev) => {
      return prev - 1
    })
  }
  
  function setNextMonth(month: number) {
    if(month + 1 > 11) {
      setMonth(0)
      setYear((prev) => {
        return prev + 1
      })
    }
    else setMonth((prev) => {
      return prev + 1
    })
  }

  return (
    <div className="cal-container">
      <div className="month-btn-container">
        <button className="prev-month-btn" onClick={() => setPrevMonth(month)}></button>
        <span className="date-title">{MONTHS[month]} {year}</span>
        <button className="next-month-btn" onClick={() => setNextMonth(month)}></button>
      </div>
      <main className="calendar">
        <section className="week-days">
          {DAYS.map((day) => {
            return <span key={day} className="week-day">{day}</span>
          })}
        </section>
        <Days month={month} year={year}/>
      </main>
    </div>
  )
}