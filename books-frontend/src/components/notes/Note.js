import React from 'react';

const Note = props => {
    return (
    <div className="card">
        <div className="card-body">
            {props.note.content}
        </div>
    </div>
    )
}

export default Note