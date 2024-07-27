import { ReportSidebarData } from './Data'
import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/reports/add.svg"
import DownArrowIcon from "/assets/dashboard/main_dashboard/admin/reports/downArrow.svg"
import BarIcon from "/assets/dashboard/main_dashboard/admin/reports/bar.svg"
import ReportTimeIcon from "/assets/dashboard/main_dashboard/admin/reports/reminderTime.svg"
import { useContext } from 'react'
import { ContextReport } from '../../../../../contexts/reportContext'
const ReportSidebar = () => {
  const contextReportSidebar = useContext(ContextReport)
  return (
    <div className={`${style.sidebar_area} ${contextReportSidebar.reportHamburgar ? style.open : null}`}>
        <ul className={style.menu_area}>
            {
                ReportSidebarData.map((item)=>{
                    return(
                        <li key={item.id} className='d-flex align-items-center justify-content-between'>
                            <span className={style.menu_catName}>{item.menuCatName}</span>
                            {
                                item.menuCatName === 'custom reports' ? 
                                <img className={style.add} src={AddIcon} alt="" onClick={()=>contextReportSidebar.handleCustomerReportsPop(true)} /> : 
                                item.menuCatName === 'scheduled reports' ?
                                <img className={style.add} src={AddIcon} alt="" onClick={()=>contextReportSidebar.handleSchedulePop(true)} /> : null
                            }
                            {
                               item.menuCat.length > 0 ?
                               <ul>
                                    {
                                        item.menuCat.map((menu)=>{
                                            return(
                                                <li key={menu.id} className={`${ menu.menuSubCatName === "" ? style.noMargin : null} ${style.subCateName} `}>
                                                    {
                                                        menu.menuSubCatName === "" ?
                                                        null :
                                                        <>
                                                            <div className='d-flex align-items-center' onClick={()=>contextReportSidebar.handleReportSubMenu(menu.menuSubCatTabId)}>
                                                                <span className={`${style.subMenuName} ${contextReportSidebar.reportSubMenu === menu.menuSubCatTabId ? style.rotate : null}`}>
                                                                    <img className={style.downArrow} src={DownArrowIcon} alt="" />
                                                                </span>  
                                                                <span className={style.subMenuName}>{menu.menuSubCatName}</span>
                                                            </div>
                                                            
                                                        </> 
                                                    }  
                                                    <ul className={`${style.subMenuWrapper} ${contextReportSidebar.reportSubMenu === menu.menuSubCatTabId ? style.close : null}`}>
                                                        {
                                                            menu.subCatItem.map((subMenu)=>{
                                                                return(
                                                                    <li key={subMenu.id} className={`${contextReportSidebar.reportSidebarTab === subMenu.subCatItemId ? style.active : null} ${style.submenu} d-flex align-items-center`} onClick={()=>contextReportSidebar.handleReportSidebarTab(subMenu.subCatItemId)}>
                                                                        <img src={BarIcon} alt="" />
                                                                        <span>{subMenu.menuName}</span>
                                                                        {
                                                                            contextReportSidebar.reportSidebarTab === subMenu.subCatItemId ? 
                                                                            <span className={style.time}><img src={ReportTimeIcon} alt="" /></span> : null
                                                                        }
                                                                        
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </li>
                                            )
                                        })
                                    }
                                    
                                </ul> : <span className={style.no_label}>No {item.menuCatName}</span>
                            } 

                            
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ReportSidebar