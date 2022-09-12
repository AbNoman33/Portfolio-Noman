
import WorkCard from '../workcard/WorkCard.jsx';
import WorkcardData from './WorkcardData.jsx';
import React from 'react';


const Work = () => {
  return (
    <div className='work-container'>
     <h1 className='project-heading'>Projects</h1>
      <div className="project-container">
       {WorkcardData.map((val, index) => {
        return (
          <WorkCard
          key={index}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          view={val.view}
          />
        )
       })}
      </div>
    </div>
  )
}

export default Work;