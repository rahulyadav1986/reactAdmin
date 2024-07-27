import { useContext } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/cross.svg"
import PlatformVideo from "/assets/dashboard/main_dashboard/admin/video/video.mp4"
import VidIcon from "/assets/dashboard/main_dashboard/admin/vidIcon.svg"
import HelpIcon from "/assets/dashboard/main_dashboard/admin/help.svg"
import UserIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/settings/user.svg"

import ViewIcon  from "/assets/dashboard/main_dashboard/admin/campaignManager/settings/view.svg"
import ListIcon  from "/assets/dashboard/main_dashboard/admin/campaignManager/settings/list.svg"
import AddIcon  from "/assets/dashboard/main_dashboard/admin/campaignManager/settings/add.svg"
import { CampaignsData } from './Data'
const CampaignOverview = () => {
  const AdBg = {'backgroundImage':'url(/assets/dashboard/main_dashboard/admin/campaignManager/videoBG.png)'}
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={style.campaign_overview_wrapper}>
       <div className={style.details_wrapper}>
          <div className={`${style.advertisement_wrapper} d-flex justify-content-center`}>
            <div className={style.advertisement_main_wrapper}>
            {
              contextCampaignManager.advertisement ?
              <div className={`${style.main_wrap} d-flex align-items-center`} style={AdBg}>
                <img src={CrossIcon} className={style.cross} onClick={()=>contextCampaignManager.handleAdvertisement(false)} alt="" />
                <div><video className={style.video} src={PlatformVideo} autoPlay muted loop data-object-fit="cover"></video></div>
                <div className={style.details_area}>
                    <h4>Initiate Your Platform Journey by Setting Up Things</h4>
                    <p>Step by step guide to learn and setting up the platform to have smooth journey</p>
                    <div className={`${style.button_area} d-flex align-items-center`}>
                        <div className={`${style.button} d-flex align-items-center justify-content-center`}>
                          <span><img src={VidIcon} alt="" /></span> 
                          <span>Get Started</span>
                        </div>
                        <div className={`${style.help} d-flex align-items-center`}>
                          <span><img src={HelpIcon} alt="" /></span> 
                          <span>Help</span>
                        </div>
                    </div>
                </div>
              </div> : null
            }
            </div>
          </div>
          <div className={style.section}>
              <div className={style.heading_wrap}>
                <h3>Quick Settings</h3>
                <p>Quickly Unlock an Exceptional Experience with Carefully Selected Features</p>
              </div>
              <div className={`${style.card_wrapper}  ${style.grid_2}` }>

                  <div className={style.card}>
                    <div className={`${style.content_area} d-flex`}>
                        <div className={`${style.audience_area} d-flex flex-column align-items-center`}>
                            <span><img src={UserIcon} alt="" /></span>
                            <h5>Audience</h5>
                        </div>
                        <p>Build targeted audiences, manage lists, and connect with the right people for your campaigns. Explore the Audience tab now</p>
                        
                    </div>
                    <ul className={`${style.action_icon_wrapper} d-flex align-items-center justify-content-between`}>
                            <li onClick={contextCampaignManager.handleAllContacts}>
                              <span><img src={ViewIcon} alt="" /></span>
                              <span>All Contacts</span>
                            </li>
                            <li onClick={contextCampaignManager.handleManageList}>
                              <span><img src={ListIcon} alt="" /></span>
                              <span>Manage Lists</span>
                            </li>
                            <li>
                              <span><img src={AddIcon} alt="" /></span>
                              <span>New Contact</span>
                            </li>
                        </ul>
                  </div>

                  <div className={style.card}>
                    <div className={`${style.content_area} d-flex flex-column`}>
                        <h5>Introducing</h5>
                        <span className={`${style.design_text} design_text`}>Campaign<b>WorkflowStudio</b></span>
                        <p>Build campaign workflows with automated user journeys, using pre defined templates</p>
                        
                    </div>
                    <ul className={`${style.action_icon_wrapper} d-flex align-items-center justify-content-between`}>
                            <li>
                              <span><img src={ViewIcon} alt="" /></span>
                              <span>All Contacts</span>
                            </li>
                            <li>
                              <span><img src={ListIcon} alt="" /></span>
                              <span>Manage Lists</span>
                            </li>
                            <li>
                              <span><img src={AddIcon} alt="" /></span>
                              <span>New Contact</span>
                            </li>
                        </ul>
                  </div>
                
              </div>
          </div>
          <div className={style.section}>
              <div className={style.heading_wrap}>
                <h3>Campaigns</h3>
                <p>Quickly create campaigns from multi-channel engagements</p>
              </div>
              <div className={`${style.card_wrapper}  ${style.grid_3}` }>
                {
                  CampaignsData.map((item,i)=>{
                    return(
                      <div key={i} className={`${style.card}  ${style.list} d-flex align-items-center`}>
                        <div className={style.icon_area} style={{'backgroundColor': `${item.iconBg}`}}>
                          <img src={`/assets/dashboard/main_dashboard/admin/campaignManager/channel/${item.icon}`} alt="" />
                        </div>
                        <div>
                          <h3>{item.heading}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    )
                  })
                }
                
              </div>
          </div>
          {/* <div className={style.section}>
              <div className={style.heading_wrap}>
                <h3>Channels</h3>
                <p>Configure your digital channels, phone, other communication channels</p>
              </div>
              <div className={`${style.card_wrapper}  ${style.grid_3}` }>
                {
                  ChannelsData.map((item,i)=>{
                    return(
                      <div key={i} className={`${style.card}  ${style.list} d-flex align-items-center`}>
                        <div className={style.icon_area} style={{'backgroundColor': `${item.iconBg}`}}>
                          <img src={`/assets/dashboard/main_dashboard/admin/platformConfiguration/channels/${item.icon}`} alt="" />
                        </div>
                        <div>
                          <h3>{item.heading}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    )
                  })
                }
                
              </div>
          </div>
          <div className={style.section}>
              <div className={style.heading_wrap}>
                <h3>General Settings</h3>
                <p>Set up your general settings for apps, agent interface, this text needs to be updated</p>
              </div>
              <div className={`${style.card_wrapper}  ${style.grid_3}` }>
                {
                  GeneralData.map((item,i)=>{
                    return(
                      <div key={i} className={`${style.card}  ${style.list} d-flex align-items-center`}>
                        <div className={style.icon_area} style={{'backgroundColor': `${item.iconBg}`}}>
                          <img src={`/assets/dashboard/main_dashboard/admin/platformConfiguration/general/${item.icon}`} alt="" />
                        </div>
                        <div>
                          <h3>{item.heading}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    )
                  })
                }
                
              </div>
          </div> */}
       </div>
    </div>
  )
}

export default CampaignOverview