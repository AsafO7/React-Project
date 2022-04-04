import { Days } from "./Days"

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


export const Calendar = () => {
  return (
    <div className="cal-container">
      <div className="month-btn-container">
        <button className="prev-month-btn"></button>
        <button className="next-month-btn"></button>
      </div>
      <main className="calendar">
        <section className="week-days">
          {DAYS.map((day) => {
            return <span key={day} className="week-day">{day}</span>
          })}
        </section>
        <Days />
        {/* In here, map a Day component with the relavent data */}
      </main>
    </div>
  )
}