import { useContext } from 'react'
import style from './style.module.scss'
import PlatformVideo from "/assets/dashboard/main_dashboard/admin/video/video.mp4"
import VidIcon from "/assets/dashboard/main_dashboard/admin/vidIcon.svg"
import HelpIcon from "/assets/dashboard/main_dashboard/admin/help.svg"
import CrossIcon from "/assets/dashboard/main_dashboard/admin/cross.svg"
import { ContextPlatformConfiguration } from '../../../../../../contexts/platformConfigurationContext'
import { ChannelsData, GeneralData, QuickSettingsData } from './Data'
const PlatformSettings = () => {
  const AdBg = {'backgroundImage':'url(/assets/dashboard/main_dashboard/admin/platformConfiguration/ad.png)'}
  const contextPlatformConfiguration = useContext(ContextPlatformConfiguration)
  return (
    <div className={style.platform_settings_wrapper}>
       {/* <h1>At Glance - Platform Settings</h1> */}
       <div className={style.details_wrapper}>
          <div className={`${style.advertisement_wrapper} d-flex justify-content-center`}>
            <div className={style.advertisement_main_wrapper}>
            {
              contextPlatformConfiguration.advertisement ?
              <div className={`${style.main_wrap} d-flex align-items-center`} style={AdBg}>
                <img src={CrossIcon} className={style.cross} onClick={()=>contextPlatformConfiguration.handleAdvertisement(false)} alt="" />
                <div><video className={style.video} src={PlatformVideo} autoPlay muted loop data-object-fit="cover"></video></div>
                <div className={style.details_area}>
                    <h4>Initiate Your Platform Journey by Setting Up Things</h4>
                    <p>Step by step guide to learn and setting up the platform to have smooth journey</p>
                    <div className={`${style.button_area} d-flex align-items-center`}>
                        <div className={`${style.button} d-flex align-items-center justify-content-center`}>
                          <span><img src={VidIcon} alt="" /></span> 
                          <span>How to setup plaform</span>
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
              <div className={`${style.card_wrapper}  ${style.grid_5}` }>
                {
                  QuickSettingsData.map((item,i)=>{
                    return(
                      <div key={i} className={`${style.card} ${style.grid} d-flex flex-column align-items-center`} onClick={()=>contextPlatformConfiguration.handlePlatformConfigurationTab(2)}>
                        <div className={style.icon_area} style={{'backgroundColor': `${item.iconBg}`}}>
                          <img src={`/assets/dashboard/main_dashboard/admin/platformConfiguration/quickSettings/${item.icon}`} alt="" />
                        </div>
                          <h3>{item.heading}</h3>
                          <p>{item.text}</p>
                          <div className={`${style.button} d-flex align-items-center justify-content-center`}>
                            <span></span>
                          </div>
                      </div>
                    )
                  })
                }
                
              </div>
          </div>
          <div className={style.section}>
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
          </div>
       </div>
    </div>
  )
}

export default PlatformSettings