import Comment from './Comment';

const CommentList = ({ comments, updateComment, deleteComment }) => (
  <>
    { comments.map( c => 
      <Comment 
        key={c.id}
        {...c}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    )}
  </>
)

export default CommentList;