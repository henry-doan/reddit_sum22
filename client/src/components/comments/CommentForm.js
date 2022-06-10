import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, author, body, updateComment, setEdit }) => {
  const [comment, setComment] = useState({ author: '', body: '' })

  useEffect( () => {
    if (id) {
      setComment({ author, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ author: '', body: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create' } Comment</h1>
      <form onSubmit={handleSubmit}>
        <label>Author:</label>
        <input 
          name='author'
          value={comment.author}
          onChange={(e) => setComment({ ...comment, author: e.target.value })}
          required
        />
        <label>Body:</label>
        <textarea
          name='body'
          value={comment.body}
          onChange={(e) => setComment({ ...comment, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default CommentForm;