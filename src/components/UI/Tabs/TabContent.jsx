import React from 'react';
import Badge from '../Badge.jsx'

export default function TabContent({ content, skills }) {
  return (
    <div className='font-high-l font-[280] leading-6 mt-6'>
      <section>
        {content}
      </section>

      <section className="flex gap-3 mt-5">
        {skills.map(skill => <Badge>{skill}</Badge>)}
      </section>
    </div>
  )
}
