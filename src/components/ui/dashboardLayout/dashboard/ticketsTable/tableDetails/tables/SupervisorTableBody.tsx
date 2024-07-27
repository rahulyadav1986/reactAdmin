
import { HeaderContext } from '../../../../../../../contexts/headerContext'
import Availability from '../../../../dashboardHeader/availability/Availability'
import { SupervisorCommonTableData } from './Data'
import style from './style.module.scss'
import ActionIcon from '/assets/dashboard/main_dashboard/action.svg'
import AudioCallIcon from '/assets/dashboard/main_dashboard/supAudio.svg'
import ActiveAudioCallIcon from '/assets/dashboard/main_dashboard/supAudioActive.svg'
import ChatIcon from '/assets/dashboard/main_dashboard/supChat.svg'
import ActiveChatIcon from '/assets/dashboard/main_dashboard/supChatActive.svg'
import VideoCallIcon from '/assets/dashboard/main_dashboard/sup_video.svg'
import ActiveVideoCallIcon from '/assets/dashboard/main_dashboard/sup_videoActive.svg'
import ActionChatIcon from '/assets/dashboard/main_dashboard/message.svg'
import ActionCallIcon from '/assets/dashboard/main_dashboard/call_button.svg'
import WifiIcon from '/assets/dashboard/main_dashboard/wifi.svg'
import { useContext } from 'react'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
import { ContextGlobalChat } from '../../../../../../../contexts/globalChatContext'
const SupervisorTableBody = () => {
  const contextSupervisorPopup = useContext(ContextTablePopup)
  const chatGlobalContext = useContext(ContextGlobalChat)
  return (
    <>
    {
      SupervisorCommonTableData.map((item,i)=>{
        return(
          <tr key={i}>
            <td>
                <div className={style.checkbox}>
                    <input type="checkbox" name="thead_check" id={item.id} />
                    <label htmlFor={item.id}><span></span></label>
                </div>
            </td>
            <td>
                <div className={`${style.profile_wrap} d-flex align-items-center`}>
                    <span><img src={item.userDetails.avatar} alt="" /></span> 
                    <span className='d-flex flex-column'>
                        <span className={style.name}>{item.userDetails.name}</span>
                        <span className={style.phone}>{item.userDetails.contactInfo}</span>
                    </span>
                </div>
            </td>
            <td>
              <HeaderContext>
                <Availability />
              </HeaderContext>
            </td>
            <td className={style.icon}>
                <span className='d-flex align-items-center'>
                  {
                    item.noOfAudioCall === 0 ? <img src={AudioCallIcon} alt="" /> : <img className={style.active} src={ActiveAudioCallIcon} alt="" onClick={()=>contextSupervisorPopup.handleSupAudioCallPop(true)} />
                  }
                  {item.noOfAudioCall}
                </span>
            </td>
            <td className={style.icon}>
                <span className='d-flex align-items-center'>
                  {
                    item.noOfChat === 0 ? <img src={ChatIcon} alt="" /> : <img className={style.active} src={ActiveChatIcon} alt="" onClick={()=>contextSupervisorPopup.handleChatPop(true)} />
                  }
                  {item.noOfChat}
                </span>
            </td>
            <td className={style.icon}>
                <span className='d-flex align-items-center'>
                  {
                    item.noOfVideoCall === 0 ? <img src={VideoCallIcon} alt="" /> : <img className={style.active} src={ActiveVideoCallIcon} alt=""  onClick={()=>contextSupervisorPopup.handleSupVideoCallPop(true)} />
                  }
                  {item.noOfVideoCall}
                </span>
            </td>
            <td>
                  {
                    item.noOfWhf === 0 ?  item.whfStatus :
                    <span className={style.no_of_whf} onClick={()=>contextSupervisorPopup.handleWhfPop(true)}>
                      <img src={WifiIcon} alt="" />
                      {item.whfStatus}
                      <span>{item.noOfWhf}</span> 
                    </span>
                    
                  }
                
            </td>
            <td>
                <span className={`${style.action_icon_wrap} d-flex align-items-center`}>
                    <span><img src={ActionChatIcon} alt="" onClick={chatGlobalContext.handleAddNewChat} /></span> 
                    <span><img src={ActionCallIcon} alt="" /></span> 
                </span>
            </td>
            <td>{item.avarageHandlingTime}</td>
            <td>{item.noOfInteractionHandle}</td>
            <td className={style.action}>
                <img src={ActionIcon} alt="" />
            </td>
          </tr>
        )
      })
    }
       
    </>
  )
}

export default SupervisorTableBody