import React, { useEffect, useState } from 'react';
import { getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi, updateComment as updateCommentApi } from '../api';
import Comment from './Comment';
import CommentForm from './CommentForm';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Comments = ({currentUserId}) => {
const [backendComments, setBackEndComments] = useState([])
const [activeComment, setActiveComment] =useState(null)
const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
);
const  getReplies = (commentId) =>{
    return backendComments.filter(backendComment => backendComment.parentId === commentId)
    .sort((a,b)=>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
};
const addComment = (text, parentId) =>{
    console.log('addComment',text,parentId);
    createCommentApi(text,parentId).then(comment =>{
        setBackEndComments([comment, ...backendComments]);
    })
}
const deleteComment = (commentId) =>{
    if(window.confirm('Are You Sure that you want to delete Comment?')){
        deleteCommentApi(commentId).then(() =>{
            const updatedBackendComments = backendComments.filter(
                (backendComment) => backendComment.id !== commentId
            );
            setBackEndComments(updatedBackendComments);
            setActiveComment(null)
        })
    }
}
const updateComment = (text,commentId) =>{
    updateCommentApi(text,commentId).then(() =>{
        const updateBackendComments = backendComments.map(backendComment =>{
            if(backendComment.id === commentId){
                return{...backendComment, body: text};
            }
            return backendComment;
        });
        setBackEndComments(updateBackendComments);
        setActiveComment(null);
    })
}

  useEffect(() =>{
    getCommentsApi().then((data) => {
        setBackEndComments(data);

    })
  }, []);
    return (
        <div className="container">
           <div className="row">
               <div className="col-md-6">
                   <div className="comments-title">
                       <h1>Comments</h1>
                   </div>
                   <div className="comment-form-title">
                       <h3>Write Comment</h3>
                   </div>
                   <CommentForm submitLabel="Comment" handleSubmit={addComment} />
                   
                   <div className="comments-container">
                        {rootComments.map((rootComment) =>(
                            <Comment 
                            key={rootComment.id} 
                            comment={rootComment} 
                            replies={getReplies(rootComment.id)}
                            currentUserId={currentUserId} 
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            addComment={addComment}
                            />
                        ))}
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Comments;