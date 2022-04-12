import { Modal } from "./Modal"
import { useState } from "react"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { AddEventModal } from "./AddEventModal";
import { v4 as uuidV4 } from "uuid";
import { UseLocalStorage } from "../hooks/UseLocalStorage";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    numday: number,
    startDate: Date,
    numOfDaysInMonth: number
}

export type DayEvent = {
    id: string,
    eDay: number,
    eMonth: number,
    eYear: number,
    desc: string
}

// After leaving the page, days with events are no longer different in color - fix it!

export const Day:React.FC<Props> = ({numday, startDate, numOfDaysInMonth}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [events, setEvents] = UseLocalStorage("events", [])
    // const [hasEvent, setHasEvent] = useState(false)

    const dateToday = new Date(`${startDate.getMonth() + 2} ${numday - startDate.getDay()} 
                                ${startDate.getFullYear()}`)
    

    function checkDate(d: number, m: number, y: number) {
        // console.log(d, m, y)
        if(d === dateToday.getDate() && m === dateToday.getMonth() && y === dateToday.getFullYear()) return true
        return false
    }

    function addEvent(event: string, eventDate: Date) {
        setEvents((prevEvents: DayEvent[]) => {
            if(prevEvents.find(e => e.desc === event && e.eDay === eventDate.getDate() &&
            e.eMonth === eventDate.getMonth() && e.eYear === eventDate.getFullYear())) {
                return prevEvents
            }
            // setHasEvent(true)
            return [...prevEvents, { id: uuidV4(), eDay: dateToday.getDate(), eMonth: dateToday.getMonth(),
                eYear: dateToday.getFullYear(), desc: event}]
        })
    }

    function deleteEvent(id: string) {
        // setHasEvent(false)
        setEvents((prevEvents: DayEvent[]) => {
            return prevEvents.filter(e => e.id !== id)
        })
    }

    if(numday < startDate.getDay() + 1 || numOfDaysInMonth + startDate.getDay() < numday) {
        return <span className="num-day"></span>
    }
    return (<>
        <span className="num-day">{numday - startDate.getDay()}
            {!(events.find((e: DayEvent) => e.eDay === dateToday.getDate() &&
            e.eMonth === dateToday.getMonth() && e.eYear === dateToday.getFullYear())) && 
                <CalendarTodayIcon color="primary" className="events-btn" onClick={() => setIsOpen(true)} />}
            {(events.find((e: DayEvent) => e.eDay === dateToday.getDate() &&
            e.eMonth === dateToday.getMonth() && e.eYear === dateToday.getFullYear())) && 
                <CalendarTodayIcon color="warning" className="events-btn" onClick={() => setIsOpen(true)} />}
            <button className="add-event-btn" onClick={() => setIsFormOpen(true)}></button>
        </span>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            {events &&  events.map((event: DayEvent) => {
                if(checkDate(event.eDay, event.eMonth, event.eYear)) {
                    return <li className="event-list-item" key={event.id}>• {event.desc} 
                        <DeleteIcon style={{cursor: "pointer", color: "black", marginLeft: "3px"}}
                        onClick={() => deleteEvent(event.id)} />
                    </li>
                }
                else return null
            })}</Modal>
        <AddEventModal open={isFormOpen} closeForm={() => setIsFormOpen(false)} addEvent={addEvent}
            date={dateToday} children=""/>
    </>)
}