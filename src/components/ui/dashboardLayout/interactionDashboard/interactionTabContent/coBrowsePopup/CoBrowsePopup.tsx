import {useContext} from "react"
import style from './style.module.scss'
import CrossIcon from '/assets/interactionCenter/cross.svg'
import SentIcon from "/assets/interactionCenter/sent.svg"
import CancleIcon from "/assets/dashboard/cancle.svg"
import BrowseIcon from "/assets/interactionCenter/browse.svg"
import CopyIcon from "/assets/interactionCenter/copy.svg"
import JoinBrowseIcon from "/assets/interactionCenter/browser2.svg"
import ChatIcon from "/assets/interactionCenter/chat.svg"
import WhatsAppIcon from "/assets/interactionCenter/whatsapp.svg"
import EmailIcon from "/assets/interactionCenter/email.svg"
import LinkSentIcon from "/assets/interactionCenter/link_sent.svg"
import FormArroIcon from "/assets/interactionCenter/form_right.svg"
import ShareIcon from "/assets/interactionCenter/share.svg"
import { ContextMediaManagement } from "../../../../../../contexts/mediaManagementContext"
const CoBrowsePopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <>
        <div className={`${style.screen_record_wrapper} d-flex align-items-center justify-content-center`}>
            <div className="overlay" onClick={()=>mediaHandleContext.handlCoBrowsePop(false)}></div>
            <div className={style.main_wrapper}>
                <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
                    <h4>Request Co-browsing</h4>
                    <span><img src={CrossIcon} onClick={()=>mediaHandleContext.handlCoBrowsePop(false)} alt=""/></span>
                </div>
                {
                    mediaHandleContext.proceedBrowserPallet ? 
                    <div className={`${style.screen_sharing_pallet} d-flex align-items-center justify-content-between`}>
                        <div className={style.wrap} onClick={mediaHandleContext.handleInitiateBrowsePallet}>
                            <div className={style.sharing_pallet}>
                                <div className={`${mediaHandleContext.initiateCoBrowse ? `${style.active} ${style.sharingBox}` : style.sharingBox } d-flex flex-column align-items-center justify-content-center`}>
                                    <img src={BrowseIcon} alt="" />
                                    <p>Request customer to <strong>initiate</strong>  co-browser session</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.wrap} onClick={mediaHandleContext.handleJoinBrowseSessionPallet}>
                            <div className={style.sharing_pallet}>
                                <div className={`${mediaHandleContext.joinBrowseSession ? `${style.active} ${style.sharingBox}` : style.sharingBox } d-flex flex-column align-items-center justify-content-center`}>
                                    <img src={JoinBrowseIcon} alt="" />
                                    <p>Request customer <strong>to join</strong>  co-browser session</p>
                                </div>
                            </div>
                        </div>
                        
                    </div> : 
                    null
                }
                

                {
                mediaHandleContext.proceedFirstStep ? 
                <>
                        <div className={style.proces_share_wrapper}>
                            <h5>Select below to proceed and share</h5>
                            <ul className={style.type_list}>
                                <li>Document</li>
                                <li>Presentation</li>
                                <li>Browser</li>
                                <li>Other Documents</li>
                                <li className={`${mediaHandleContext.accountFormsPallet ? style.active : null} d-flex align-items-center justify-content-between`} onClick={mediaHandleContext.handleAccountFormPallet}>Forms <img src={FormArroIcon} alt="" /> </li>
                            </ul>
                            {
                                mediaHandleContext.accountFormsPallet ? 
                                <div className={`${style.form_buttons_wrapper} d-flex align-items-center`}>
                                    <div className={`${style.button} d-flex align-items-center justify-content-center`}>Account Opening Form</div>
                                    <div className={`${style.button} d-flex align-items-center justify-content-center`}>Loan Account Form</div>
                                </div> :
                                null
                            }
                            
                        </div>

                        <div className={style.share_area_button_wrap}>
                            <div className={style.check_area}>
                                <input type="checkbox" name="" id="shareLink" onChange={mediaHandleContext.handleShareLinkPallet} />
                                <label htmlFor="shareLink">
                                    <span></span>
                                    Share link
                                </label>
                            </div>
                        </div>
                        {
                            mediaHandleContext.shareLinkPallet ?  
                            <div className={`${style.share_options_area_wrap} d-flex align-items-center`}>
                                <div className={style.link_area}>
                                    <input type="text" name="" className={style.form_control} id="" />
                                    <img src={CopyIcon} className={style.copy} alt="" />
                                </div>
                                <div className={`${style.share_area_wrap} d-flex align-items-center`}>
                                    <span>Share</span>
                                    <ul className={`${style.icon_area} d-flex align-items-center`}>
                                        <li><img src={EmailIcon} alt="" /></li>
                                        <li><img src={ChatIcon} onClick={mediaHandleContext.handleCustomerPhonePallet} alt="" /></li>
                                        <li><img src={WhatsAppIcon} alt="" /></li>
                                    </ul>
                                </div>
                            </div> :
                            null
                        }
                        
                        {
                            mediaHandleContext.customerPhonePallet && mediaHandleContext.shareLinkPallet && mediaHandleContext.customerPhonePallet ? 
                            <div className={`${style.phone_no_panel}`}>
                                <input type="text" name="" placeholder="Enter customer phone number" className={style.form_control} id="" />
                                <img src={LinkSentIcon} className={style.sent} alt="" />
                            </div> :
                            null
                        }
                </> :
                null
                }
                

                

                <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`}>
                    {
                        mediaHandleContext.proceedFirstStepButton ? 
                        <div className={`${style.button} ${style.bg} d-flex align-items-center justify-content-center`} onClick={mediaHandleContext.handleProceedFirstStep}>
                            <span><img src={SentIcon} alt="" /></span>
                            <span>Proceed</span>
                        </div> :
                        <div className={`${style.button} ${style.bg} d-flex align-items-center justify-content-center`} >
                            <span><img src={ShareIcon} alt="" /></span>
                            <span>Share</span>
                        </div>
                    }
                    
                    
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handlCoBrowsePop(false)}>
                        <span><img src={CancleIcon} alt="" /></span>
                        <span>Cancel</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CoBrowsePopup