import { useState, useEffect } from 'react';

const SubForm = ({ addSub, id, setEdit, title, updateSub }) => {
  const [sub, setSub] = useState({ title: '' })

  // if i am editing then preload the form
  useEffect( () => {
    if (id) {
      // setSub({ title: title })
      setSub({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault() // to not reload the page and lose our data, and put our values in the url 
    if (id) {
      // edit
      updateSub(id, sub) 
      setEdit(false) // close the form
    } else {
      // add
      // { title: 'cooking' }
      addSub(sub) // call the add function with what i have in state 
    }
    // clear out the form
    setSub({ title: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Add' } Sub</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          // required for inputs 
          name='title' 
          value={sub.title}
          // save what the user types to the state
          onChange={(e) => setSub({ ...sub, title: e.target.value })}
          // optional 
          required
          placeholder='title'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SubForm;