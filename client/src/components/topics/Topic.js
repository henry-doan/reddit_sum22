import { useState } from 'react';
import TopicForm from './TopicForm';

const Topic = ({ id, title, desc, updateTopic, deleteTopic }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>{title}</h1>
      <p>{desc}</p>
      {/* { condition ? what happens when the condition is met : else } */}
      {
        editing ?
        <>
          <TopicForm 
            id={id}
            title={title}
            desc={desc}
            updateTopic={updateTopic}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteTopic(id)}>Delete</button>
        </>
      }
    </>
  )
}

export default Topic;