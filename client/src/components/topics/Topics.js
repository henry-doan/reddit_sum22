import { useState, useEffect } from 'react';
import axios from 'axios';
import TopicForm from './TopicForm';
import TopicList from './TopicList';
import { useParams, useLocation } from 'react-router-dom';

// const Topics = ({ subId, subTitle }) => {
const Topics = ({ }) => {
  const [topics, setTopics] = useState([])

  // use only one
  
  // grab info from url 
  const params = useParams()

  // const { subId } = params

  // to grab infor from the link state, read only
  const location = useLocation()
  const { subId, subTitle } = location.state

  useEffect( () => {
    // grab all topics from backend
    axios.get(`/api/subs/${subId}/topics`)
      .then( res => {
        // store them in our front end
        setTopics(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addTopic = (topic) => {
    // add a topic into our back end
    axios.post(`/api/subs/${subId}/topics`, { topic })
      .then( res => {
        // add a topic to our front end
        setTopics([...topics, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateTopic = (id, topic) => {
    // update in the back end
    axios.put(`/api/subs/${subId}/topics/${id}`, { topic })
      .then( res => {
        // this will update in the front end
        let newUpdatedTopic = topics.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setTopics(newUpdatedTopic)
      })
      .catch( err => console.log(err) )
  }

  const deleteTopic = (id) => {
    axios.delete(`/api/subs/${subId}/topics/${id}`)
      .then( res => setTopics(topics.filter( t => t.id !== id)))
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>{subTitle}'s Topics</h1>
      <TopicForm addTopic={addTopic} />
      <TopicList
        topics={topics}
        updateTopic={updateTopic}
        deleteTopic={deleteTopic}
      />
    </>
  )
}

export default Topics;