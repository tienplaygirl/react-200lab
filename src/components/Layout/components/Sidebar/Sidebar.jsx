// Header.js
import React from 'react'
import { SidebarData } from './SidebarData'
import SidebarSubMenu from './SidebarSubMenu'
function Sidebar() {
  return (
    <div id='sidebar' className='app-sidebar'>
      <div className='app-sidebar-content' data-scrollbar='true' data-height='100%' data-init='true'>
        <div className='menu'>
          {SidebarData.map((item,index) => {
             return <SidebarSubMenu item={item} key={index}/>
          })}
        </div>
        <div className='p-3 px-4 mt-auto'>
          <a href='/' target='_blank' className='btn d-block btn-outline-theme'>
            <i className='fa fa-code-branch me-2 ms-n2 opacity-5'></i> Documentation
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
