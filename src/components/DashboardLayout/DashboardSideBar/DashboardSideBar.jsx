import React from 'react'
import SiteLogo from '../../../assets/images/logo.svg'
import SiteLogoCollapse from '../../../assets/images/logo-icon.svg'
import IconColse from '../../../assets/images/icon-cross.svg'
import { dashboard , profile , contracts } from '../../../config/routConst'
import { NavLink } from 'react-router-dom'

const DashboardSideBar = () => {
  const AddClass = () =>{
    document.body.classList.remove('sidebar-collapse');
  }
  const SidebarContent = [
    {
      iconName : "dashboard-icon",
      title : "Dashboard",
      URL : dashboard,
    },
    {
      iconName : "profile-icon",
      title : "Profile",
      URL : profile,
    },
    {
      iconName : "contracts-icon",
      title : "Contracts",
      URL : contracts,
    }
]
  return (
    <>
      <aside className="sidebar">
        <span className='menu-cross' onClick={AddClass}><img src={IconColse} alt="icon-cross" className="menu-cross-icon" /></span>
        <div className="trader-logo">
          <a className="site-logo">
            <img src={SiteLogo} alt="Site-logo" className="main-logo" />
            <img src={SiteLogoCollapse} alt="Site-logo" className="collapse-logo" />
          </a>
        </div>
        <div className="sidebar-menu">
          <ul>
            {SidebarContent?.map((list , i) =>{
                return (
                  <>
                    <li key={i}>
                      <NavLink to={list.URL} className="sidebar-menu-link" title={list.title} onClick={AddClass}>
                        <i className={list.iconName}></i>
                        <span>{list.title}</span>
                      </NavLink>
                    </li>
                  </>
                )
              })
            }
          </ul>
        </div >
      </aside >

    </>
  )
}

export default DashboardSideBar