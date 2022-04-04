import { Modal } from "./Modal"
import { useState } from "react"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { AddEventModal } from "./AddEventModal";
import { v4 as uuidV4 } from "uuid";

type Props = {
    numday: number
}

type Event = {
    id: string,
    event: string
}

// Find a way to get yearly data of days in every month

export const Day:React.FC<Props> = ({numday}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [events, setEvents] = useState<Event[]>([])

    function addEvent(event: string) {
        setEvents(prevEvents => {
            if(prevEvents.find(e => e.event === event)) {
                return prevEvents
            }
            return [...prevEvents, { id: uuidV4(), event}]
        })
    }

    function deleteEvent(id: string) {
        setEvents(prevEvents => {
            return prevEvents.filter(e => e.id !== id)
        })
    }

    if(numday < 7 || 37 < numday) {
        return <span className="num-day"></span>
    }
    // if(numday > 39) {
    //     return null
    // }
    return (<>
        <span className="num-day">{numday - 6} 
            <CalendarTodayIcon color="success" className="events-btn" onClick={() => setIsOpen(true)} />
            <button className="add-event-btn" onClick={() => setIsFormOpen(true)}></button>
        </span>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>sssssssssssssss
        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Modal>
        <AddEventModal open={isFormOpen} closeForm={() => setIsFormOpen(false)} children=""/>
    </>)
}