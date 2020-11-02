import React from 'react';

const Note = props => {
    return (
    <div>
    <div className="card">
        <div className="card-body">
            {props.note.content}
        </div>
        <div className="card-footer">
            <small><i>{props.bookTitle}</i></small>
        </div>
    </div>
    <br />
    </div>
    )
}

export default Note