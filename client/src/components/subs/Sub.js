import { useState } from 'react';
import SubForm from './SubForm';

const Sub = ({ id, title, updateSub, deleteSub }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>Sub# {id} Title: {title}</h1>
      { editing ?
        <SubForm 
          id={id}
          title={title}
          updateSub={updateSub}
          setEdit={setEdit}
        />
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteSub(id)}>Delete</button>
        </>
      }
    </>
  )
}

export default Sub;