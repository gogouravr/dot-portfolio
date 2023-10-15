import React from 'react'

export default function TabMenu({ tabs, activeTabId, setActiveTabId }) {
    const tabTitleClickHandler = (id) => {
        setActiveTabId(id);
    }

    const isActiveTabTitle = (id) => id === activeTabId;

    const activeTabTitleCSS = (id) => {
        const CSS = 'text-sky-500 opacity-100 border-b-2 border-sky-400'
        return isActiveTabTitle(id) ? CSS : '';
    };

    return (
        <aside className='mb-2'>
            <ul className='flex gap-8 font-normal mt-2 border-b-2  w-fit border-slate-800'>
                {tabs.map(tab =>
                (<li className={`cursor-pointer opacity-70 text-lg px-2 py-2 relative ${activeTabTitleCSS(tab['id'])}`} data-active-tab={isActiveTabTitle(tab['id'])} onClick={() => tabTitleClickHandler(tab['id'])} >
                    {tab['title']}
                </li>))}
            </ul>
        </aside>
    )
}
