import Topic from './Topic';

const TopicList = ({ topics, updateTopic, deleteTopic }) => (
  <>
    <h3>All Topics</h3>
    { topics.map( t => 
      <Topic
        key={t.id} 
        {...t}
        updateTopic={updateTopic}
        deleteTopic={deleteTopic}
      /> 
    )}
  </>
)

export default TopicList;