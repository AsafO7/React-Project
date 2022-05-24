import { Modal } from "./Modal"
import { useState } from "react"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { AddEventModal } from "./AddEventModal";
import { v4 as uuidV4 } from "uuid";
import { UseLocalStorage } from "../hooks/UseLocalStorage";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
    const [editEventValue, setEditEventValue] = useState("")
    const [currentEdit, setCurrentEdit] = useState("")

    const editForm = React.useRef<any>()

    const dateToday = new Date(`${startDate.getMonth() + 2} ${numday - startDate.getDay()} 
                                ${startDate.getFullYear()}`)

    React.useEffect(() => {
        editForm.current?.focus()
    },[currentEdit])

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

    function setEditCurrent(id: string, desc: string) {
        setCurrentEdit(id)
        setEditEventValue(desc)
        // isEditEvent = true
    }

    function handleEdit(e: React.FormEvent, event: DayEvent) {
        e.preventDefault()

        setEvents((prevEvents: DayEvent[]) => {
            return prevEvents.map((ev) => {
                if(ev.id === event.id) ev.desc = editEventValue
                return ev
            })
        })
        setCurrentEdit("")
        // isEditEvent = false
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
            {/* if there are events, map them to the modal */}
            {events &&  events.map((event: DayEvent) => {
                if(checkDate(event.eDay, event.eMonth, event.eYear)) {
                    return event.id !== currentEdit ? 
                    <li className="event-list-item" key={event.id}>• {event.desc}
                        <EditIcon style={{cursor: "pointer", color: "black", marginLeft: "auto"}}
                        onClick={() => setEditCurrent(event.id, event.desc)} />
                        <DeleteIcon style={{cursor: "pointer", color: "black", marginLeft: "3px"}}
                        onClick={() => deleteEvent(event.id)} />
                    </li>
                    :
                    <div key={event.id} style={{display: "flex"}}>
                        <form onSubmit={(e) => handleEdit(e, event)} style={{display: "inline-block"}}>
                            <input value={editEventValue} onChange={(e) => setEditEventValue(e.target.value)}
                            ref={editForm} />
                        </form>
                        <span className="back-edit-btn">Back
                            <ArrowRightAltIcon style={{cursor: "pointer", color: "black"}}
                            onClick={() => setCurrentEdit("")} />
                        </span>
                    </div>
                }
                else return null
            })}</Modal>
        <AddEventModal open={isFormOpen} closeForm={() => setIsFormOpen(false)} addEvent={addEvent}
            date={dateToday} children=""/>
    </>)
}