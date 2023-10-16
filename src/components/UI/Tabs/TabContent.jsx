import React from 'react';
import Badge from '../Badge.jsx'

export default function TabContent({ content, skills }) {
  return (
    <div className='font-high-l  dark:font-[280] font-[399] leading-6 mt-6'>
      <section>
        {content}
      </section>

      <section className="flex flex-wrap gap-3 mt-5">
        {skills.map(skill => <Badge>{skill}</Badge>)}
      </section>
    </div>
  )
}
