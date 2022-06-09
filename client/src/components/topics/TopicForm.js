import { useState, useEffect } from 'react';

const TopicForm = ({ addTopic, id, title, desc, updateTopic, setEdit }) => {
  const [topic, setTopic] = useState({ title: '', desc: '' })

  useEffect( () => {
    if (id) {
      setTopic({ title, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTopic(id, topic)
      setEdit(false)
    } else {
      addTopic(topic)
    }
    setTopic({ title: '', desc: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create '} Topic</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name='title'
          value={topic.title}
          onChange={(e) => setTopic({...topic, title: e.target.value })} 

          required
          placeholder='title'
        />
        <label>Description</label>
        <textarea
          name='desc'
          value={topic.desc}
          onChange={(e) => setTopic({...topic, desc: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TopicForm;