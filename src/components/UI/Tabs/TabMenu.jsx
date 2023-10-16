import React from 'react'

export default function TabMenu({ tabs, activeTabId, setActiveTabId }) {
    const tabTitleClickHandler = (id) => {
        setActiveTabId(id);
    }

    const isActiveTabTitle = (id) => id === activeTabId;

    const activeTabTitleCSS = (id) => {
        const CSS = 'dark:text-sky-400 text-slate-900 dark:border-b-2 border-b-[0.2rem] border-sky-400'
        return isActiveTabTitle(id) ? CSS : '';
    };

    return (
        <aside className='mb-2'>
            <ul className='flex  gap-6 font-normal mt-2 border-b-2 w-fit dark:border-slate-800 border-sky-200'>
                {tabs.map(tab =>
                (<li className={`cursor-pointer text-base font-[490] sm:text-base md:text-lg px-2 py-2 ${activeTabTitleCSS(tab['id'])}`} data-active-tab={isActiveTabTitle(tab['id'])} onClick={() => tabTitleClickHandler(tab['id'])} >
                    {tab['title']}
                </li>))}
            </ul>
        </aside>
    )
}
