// Header.js
import React , {useState} from 'react'
import WalletConnect from '@/modules/WalletConnect'

function Header() {
  const [openTool, setOpenTool] = useState(false)

  const [openMenuDesktop, setOpenMenuDesktop] = useState(true)
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  // desktop menu
  if (openMenuDesktop) {
    document.body.classList.remove('app-sidebar-collapsed')
    document.body.classList.add('app-sidebar-toggled')
  } else {
    document.body.classList.remove('app-sidebar-toggled')
    document.body.classList.add('app-sidebar-collapsed')
  }
  // mobile menu
  if (openMenuMobile) {
    document.body.classList.add('app-sidebar-mobile-toggled')
  } else {
    document.body.classList.remove('app-sidebar-mobile-toggled')
  }

  return (
    <div id='header' className='app-header'>
      <div className='desktop-toggler'>
        <button className='menu-toggler' type='button' onClick={() => setOpenMenuDesktop(!openMenuDesktop)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
      </div>
      <div className='mobile-toggler'>
        <button type='button' className='menu-toggler' onClick={() => setOpenMenuMobile(!openMenuMobile)}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
      </div>

      <div className='brand'>
        <a href='/' className='brand-logo'>
          <span className='brand-img'>
            <span className='brand-img-text text-theme'>H</span>
          </span>
          <span className='brand-text'>HUD ADMIN</span>
        </a>
      </div>

      <div className='menu'>
        <div className='menu-item dropdown dropdown-mobile-full'>
          <div onClick={() => setOpenTool(!openTool)} data-bs-toggle='dropdown' data-bs-display='static' className='menu-link'>
            <div className='menu-icon'>
              <i className='bi bi-grid-3x3-gap nav-icon'></i>
            </div>
          </div>
          {openTool && (
            <div className='dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1 show' data-bs-popper='static'>
              <div className='row row-grid gx-0'>
                <div className='col-4'>
                  <a href='/' className='dropdown-item text-decoration-none p-3 bg-none'>
                    <div className='position-relative'>
                      <i className='bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100'></i>
                      <i className='bi bi-envelope h2 opacity-5 d-block my-1'></i>
                    </div>
                    <div className='fw-500 fs-10px text-white'>INBOX</div>
                  </a>
                </div>
                <div className='col-4'>
                  <a href='/' target='_blank' className='dropdown-item text-decoration-none p-3 bg-none'>
                    <div>
                      <i className='bi bi-hdd-network h2 opacity-5 d-block my-1'></i>
                    </div>
                    <div className='fw-500 fs-10px text-white'>POS SYSTEM</div>
                  </a>
                </div>
                <div className='col-4'>
                  <a href='/' className='dropdown-item text-decoration-none p-3 bg-none'>
                    <div>
                      <i className='bi bi-calendar4 h2 opacity-5 d-block my-1'></i>
                    </div>
                    <div className='fw-500 fs-10px text-white'>CALENDAR</div>
                  </a>
                </div>
              </div>
              <div className='row row-grid gx-0'>
                <div className='col-4'>
                  <a href='/' className='dropdown-item text-decoration-none p-3 bg-none'>
                    <div>
                      <i className='bi bi-terminal h2 opacity-5 d-block my-1'></i>
                    </div>
                    <div className='fw-500 fs-10px text-white'>HELPER</div>
                  </a>
                </div>
                <div className='col-4'>
                  <a href='/' className='dropdown-item text-decoration-none p-3 bg-none'>
                    <div className='position-relative'>
                      <i className='bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100'></i>
                      <i className='bi bi-sliders h2 opacity-5 d-block my-1'></i>
                    </div>
                    <div className='fw-500 fs-10px text-white'>SETTINGS</div>
                  </a>
                </div>
                <div className='col-4'>
                  <a href='/' className='dropdown-item text-decoration-none p-3 bg-none'>
                    <div>
                      <i className='bi bi-collection-play h2 opacity-5 d-block my-1'></i>
                    </div>
                    <div className='fw-500 fs-10px text-white'>WIDGETS</div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='menu-item dropdown dropdown-mobile-full'>
          <div className='menu-link'>
            <WalletConnect/>
          </div>
        </div>
      </div>
      <form className='menu-search' method='POST' name='header_search_form'>
        <div className='menu-search-container'>
          <div className='menu-search-icon'>
            <a href='/' data-toggle-class='app-header-menu-search-toggled' data-toggle-target='.app'>
              <i className='bi bi-x-lg'></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Header
