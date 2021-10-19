import React,{useState} from 'react';

const CommentForm = ({handleSubmit, submitLabel,hasCancelButton=false,initialText='', handleCancel}) => {
    const [text,setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = (event) =>{
        event.preventDefault();
        handleSubmit(text);
        setText("");
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea className="comment-form-textarea" rows="4" cols="50"
                 value={text}
                  onChange={(event) => setText(event.target.value)} />
                  <button className="comment-submit-form btn btn-success" disabled={isTextareaDisabled}>{submitLabel}</button>
                  {hasCancelButton && (
                      <button type="button" className="comment-form-button comment-form-cancel-button" onClick={handleCancel}>Cancel</button>
                  )}
            </form>
        </div>
    );
};

export default CommentForm;