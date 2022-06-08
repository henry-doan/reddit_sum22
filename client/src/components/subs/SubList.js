import Sub from './Sub';

const SubList = ({ subs, updateSub, deleteSub }) => (
  <>
    <h1>All Subs</h1>
    { subs.map( s =>
      <Sub
        key={s.id}
        // id={s.id} title={s.title}
        {...s}
        updateSub={updateSub}
        deleteSub={deleteSub}
      />
    )}
  </>
)

export default SubList;