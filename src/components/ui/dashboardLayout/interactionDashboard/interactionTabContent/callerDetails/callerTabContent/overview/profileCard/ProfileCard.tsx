import {useContext} from "react"
import style from './style.module.scss'
import ProfileAvatarCard from "/assets/interactionCenter/profileCard/profile.png"
import MessageIcon from "/assets/interactionCenter/profileCard/messageIcon.svg"
import MailIcon from "/assets/interactionCenter/profileCard/mailIcon.svg"
import WhatsAppIcon from "/assets/interactionCenter/profileCard/whatsappIcon.svg"
import CallIcon from "/assets/interactionCenter/profileCard/callIcon.svg"
import { ContactList } from './Data'
import { ContextTable } from "../../../../../../../../../contexts/tableContext"
import WhatsAppMessage from "../../../../whatsAppMessagePopup/WhatsAppMessage"
import { createPortal } from "react-dom"
import { ContextSocialPopup } from "../../../../../../../../../contexts/socialPopupContext"

const ProfileCard = () => {
  const interactionTabContext = useContext(ContextTable)
  const socialPopupContext = useContext(ContextSocialPopup)
  return (
    <>
        <div className={`${interactionTabContext.interactionTabValue === 2 || interactionTabContext.interactionTabValue === 3 ? `${style.profile_card} ${style.height_adjust}` : style.profile_card}`}>
            <div className={`${style.profile_head} d-flex align-items-center`}>
                <span><img src={ProfileAvatarCard} alt="" /></span>
                <span className={`${style.text_details} d-flex flex-column`}>
                    <h2>Kavitha Mavin</h2>
                    <p>Mylton Keynes, UK</p>
                </span>
            </div>
            <ul className={`${style.contact_icons} d-flex`}>
                {
                    interactionTabContext.interactionTabValue === 2 || interactionTabContext.interactionTabValue === 3 ? <li><img src={CallIcon} alt="" /></li> : null
                }
                {
                    interactionTabContext.interactionTabValue === 3 ? null : <li><img src={MessageIcon} onClick={()=>socialPopupContext.handleWhatsAppMessagePopup(true)} alt="" /></li>
                }
                <li><img src={MailIcon} alt="" /></li>
                <li><img src={WhatsAppIcon} alt="" onClick={()=>socialPopupContext.handleWhatsAppMessagePopup(true)} /></li>
            </ul> 
            <ul className={style.contact_list_wrapper}>
                {
                    ContactList.map((item,i)=>{
                        return(
                            <li key={i} className='d-flex align-items-center'>
                                <span className={style.icon}>
                                    <img src={item.icon} alt="" />
                                </span>
                                <span className={`${style.text_area} d-flex flex-column`}>
                                    <span className={style.label}>{item.type}</span>
                                    <span className={style.value}>{item.value}</span>
                                </span>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
        {
            socialPopupContext.whatsAppMessahePop ? createPortal(<WhatsAppMessage />, document.body) : null
        }
        
    </>
    
  )
}

export default ProfileCard