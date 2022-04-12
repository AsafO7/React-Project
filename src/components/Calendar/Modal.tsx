import React, { MouseEventHandler } from 'react'

type Props = {
    children: string
    open: boolean
    onClose: MouseEventHandler<HTMLButtonElement>
}

export const Modal:React.FC<Props> = ({ open, children, onClose }) => {
    if(!open) return  null
    return (<>
        <div className="modal-overlay"/>
        <div className="modal-container">
            <button onClick={onClose} className="modal-btn">X</button>
            <div className="day-event">
                <h1>Events</h1>
                <ul>{children}</ul>
            </div>
        </div>
    </>)
}
