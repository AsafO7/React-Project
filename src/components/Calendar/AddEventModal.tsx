import React, { FormEvent, useRef } from "react"
import { Button, Form, Modal } from "react-bootstrap"

type Props = {
    // children: string,
    open: boolean,
    closeForm: () => void
}

// Add a form that will enable the user to write an event.
// Take the event written and write it in the Modal componant - use local storage.

export const AddEventModal:React.FC<Props> = ({ open, closeForm }) => {
    const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        // addEvent({
        //     name: nameRef.current.value
        // })
        closeForm()
    }

    if(!open) return  null
    return (
        <>
        <div className="modal-overlay"/>
        <div className="modal-container">
            <button onClick={closeForm} className="modal-btn">X</button>
            <Form onSubmit={handleSubmit} className="form-body">
                <Modal.Header>
                    <Modal.Title className="form-title">New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body className="form-modal-body">
                    <Form.Group controlId="name" className="form-input">
                        <Form.Label className="form-label">Event</Form.Label>
                        <Form.Control ref={nameRef} type="text" required/>
                    </Form.Group>
                    <Button className="form-add-btn" type="submit">Add</Button>
                </Modal.Body>
            </Form>
        </div>
    </>
    )
}