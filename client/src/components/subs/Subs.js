import { useState, useEffect } from 'react';
import axios from 'axios';
import SubForm from './SubForm';
import SubList from './SubList';

const Subs = ({}) => {
  const [subs, setSubs] = useState([])

  useEffect( () => {
    axios.get('/api/subs')
      .then( res => setSubs(res.data))
      .catch( err => console.log(err) )
  }, [])

                 // { title: 'cooking' }
  const addSub = (sub) => {
                    // { sub: { title: 'cooking'}}
    axios.post('/api/subs', { sub })
      .then( res => setSubs([...subs, res.data ]))
      .catch( err => console.log(err) )
  }

  const updateSub = (id, sub) => {
    axios.put(`/api/subs/${id}`, { sub })
      .then( res => {
        const newUpdatedSubs = subs.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setSubs(newUpdatedSubs)
      })
      .catch( err => console.log(err) )
  }

  const deleteSub = (id) => {
    axios.delete(`/api/subs/${id}`)
      .then( res => setSubs(subs.filter( s => s.id !== id)))
      .catch( err => console.log(err) )
  }

  return (
    <>
      <SubForm addSub={addSub} />
      <SubList 
        subs={subs} 
        updateSub={updateSub}
        deleteSub={deleteSub}
      />
    </>
  )
}

export default Subs;