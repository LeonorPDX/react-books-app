import React from 'react';

const Note = props => {
    return (
    <div className="card">
        <div className="card-body">
            {props.note.content}
        </div>
        <div className="card-footer">
            {props.bookTitle}
        </div>
    </div>
    )
}

export default Note