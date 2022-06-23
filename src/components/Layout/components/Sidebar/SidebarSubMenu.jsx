import React, {useState} from 'react'
function SidebarSubMenu({item}) {
  const [openSubMenu, setSubMenu] = useState(false)
  switch (item.type) {
    case 'menu-header':
      return <div className='menu-header'>{item.title}</div>
    case 'sub_menu':
      return (
        <div className='menu-item has-sub expand'>
          <span onClick={() => setSubMenu(!openSubMenu)} className='menu-link'>
            <span className='menu-icon'>
              <i className={item.icon}></i>
            </span>
            <span className='menu-text'>{item.title}</span>
            <span className='menu-caret'>
              <b className='caret'></b>
            </span>
          </span>
          <div className='menu-submenu' style={openSubMenu ? {display: 'block'} : {display: 'none'}}>
            {item.subNav.map((item_sub, index) => {
              return (
                <div className='menu-item' key={index}>
                  <a href={item_sub.path} className='menu-link'>
                    <span className='menu-text'><i className={item_sub.icon}></i> {item_sub.title}</span>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      )
    default:
      return (
        <div className='menu-item'>
          <a href={item.path} className='menu-link'>
            <span className='menu-icon'>
              <i className={item.icon}></i>
            </span>
            <span className='menu-text'>{item.title}</span>
          </a>
        </div>
      )
  }
}

export default SidebarSubMenu
      