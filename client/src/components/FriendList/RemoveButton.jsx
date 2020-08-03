import React from "react"
import Button from "react-bootstrap/Button"

function RemoveButton(props, { onRemoveFriend }) {
    return (
        <Button onClick={() => props.test(props.id)} variant="danger" size="sm">Remove</Button>
    )
}

export default RemoveButton;