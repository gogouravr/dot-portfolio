import React, { useState } from 'react';
import TabContent from './TabContent';
import TabMenu from './TabMenu';

export default function Tab({ tabs }) {
  const firstTabId = tabs[0]['id'];
  const [activeTabId, setActiveTabId] = useState(firstTabId);


  const activeTabContent = () => {
    return tabs.find(tab => tab['id'] === activeTabId)['content'];
  }

  const activeTabSkills = () => {
    return tabs.find(tab => tab['id'] === activeTabId)['skills'];
  }

  const activeTabLink = () => {
    return tabs.find(tab => tab['id'] === activeTabId)['link'];
  }

  return (
    <div>
      <TabMenu tabs={tabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
      <TabContent content={activeTabContent()} hyperlink={activeTabLink()} skills={activeTabSkills()} />
    </div>
  )
}
