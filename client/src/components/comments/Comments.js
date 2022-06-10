import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = ({}) => {
  const [comments, setComments] = useState([])

  const params = useParams()
  const { topicId } = params

  useEffect( () => {
    axios.get(`/api/topics/${topicId}/comments`)
      .then( res => {
        setComments(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addComment = (comment) => {
    axios.post(`/api/topics/${topicId}/comments`, { comment })
      .then( res => {
        setComments([...comments, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/topics/${topicId}/comments/${id}`, { comment })
      .then( res => {
        let newUpdatedComments = comments.map( m => {
          if (m.id === id) {
            return res.data
          } 
          return m
        })
        setComments(newUpdatedComments)
      })
      .catch( err => console.log(err) )
  }

  const deleteComment = (id) => {
    axios.delete(`/api/topics/${topicId}/comments/${id}`)
      .then( res => {
        setComments( comments.filter( c => c.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>All Comments</h1>
      <CommentForm addComment={addComment} />
      <CommentList
        comments={comments} 
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    </>
  )
} 

export default Comments;