import { useContext } from 'react'
import { CampaignManagerSidebarData, CreteCampaignData } from './Data'
import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/add.svg"
import ComingSoon from "/assets/dashboard/main_dashboard/admin/campaignManager/coming.svg"
import { ContextCampaignManager } from '../../../../../contexts/campaignManagerContext'
import useOutside from '../../../../../hooks/useOutside'
const CampaignManagerSidebar = () => {
  const commonPath = "/assets/dashboard/main_dashboard/admin/campaignManager"
  const contextCampaignManager = useContext(ContextCampaignManager)
  const [drop, setDrop, ref] = useOutside(false)
  return (
    <div className={`${style.sidebar_area} ${contextCampaignManager.campaignHamburgar ? style.open : null}`}>
        <div className={style.section_area}>
            <h5>QUICK ACTIONS</h5>
            {/* <div style={{margin: '0 12px', cursor: 'pointer'}} className={`${style.button} d-flex align-items-center justify-content-center`} onClick={contextCampaignManager.handleCreateCampaignPop}>
                <span style={{'marginRight': '5px'}}><img src={AddIcon} alt="" /></span>
                <span>Create</span> 
            </div>
            {
                contextCampaignManager.createCampaignPop ?
                <ul className={`${style.create_campaign_pop} `}>
                    {
                        CreteCampaignData.map((item)=>{
                            return(
                                <li key={item.id} className='d-flex align-items-center'>
                                    <span><img src={AddIcon} alt="" /></span>
                                    <span>{item.name}</span>
                                </li>
                            )
                        })
                    }
                    
                </ul> : null
            } */}
            <div ref={ref}>
                <div style={{margin: '0 12px', cursor: 'pointer'}} className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>setDrop(!drop)}>
                    <span style={{'marginRight': '5px'}}><img src={AddIcon} alt="" /></span>
                    <span>Create</span> 
                </div>
                {
                    drop ?
                    <ul className={`${style.create_campaign_pop} `}>
                        {
                            CreteCampaignData.map((item)=>{
                                return(
                                    <li key={item.id} className='d-flex align-items-center'>
                                        <span><img src={AddIcon} alt="" /></span>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }
                        
                    </ul> : null
                }
            </div>
            
        </div>
        {
            CampaignManagerSidebarData.map((menu)=>{
                return(
                    <div className={style.section_area}>
                        <h5>{menu.catName}</h5>
                        <ul className={style.menu_area}>
                            { 
                                menu.menuList.length > 0 ?
                                <>
                                    {
                                        menu.menuList.map((subMenu)=>{
                                            return(
                                                <li className={`${contextCampaignManager.campaignManagerSidebarTab === subMenu.tabId ? style.active: null} d-flex align-items-center`} onClick={()=>contextCampaignManager.handleCampaignManagerSidebarTab(subMenu.tabId)}>
                                                    <span><img src={`${commonPath}/${subMenu.icon}`} alt="" /></span>
                                                    <span dangerouslySetInnerHTML={{ __html: subMenu.menuName }}/>
                                                </li>
                                            )
                                        })
                                    }
                                </> : 
                                <li>
                                    <span className={style.soon}>Coming Soon</span>
                                    <div className={`${style.coming} d-flex align-items-center`}>
                                        <span><img src={ComingSoon} alt="" /></span>
                                        <span>Third-Party Integrations</span>
                                    </div>
                                </li>
                            }
                            
                        </ul>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default CampaignManagerSidebar