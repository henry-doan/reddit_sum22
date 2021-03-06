import { useState } from 'react';
import SubForm from './SubForm';
import Topics from '../topics/Topics';
import { Link } from 'react-router-dom';

const Sub = ({ id, title, updateSub, deleteSub }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>Sub# {id} Title: {title}</h1>
      { editing ?
        <>
          <SubForm 
            id={id}
            title={title}
            updateSub={updateSub}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteSub(id)}>Delete</button>
          {/* <Topics subId={id} subTitle={title} /> */}
          <Link 
            to={`/${id}/topics`}
            state={{ subId: id, subTitle: title }}
          >
            Topics
          </Link>
        </>
      }
    </>
  )
}

export default Sub;