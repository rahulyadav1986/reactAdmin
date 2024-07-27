import style from './style.module.scss'
import CallIcon from "/assets/interactionCenter/phone.svg"
import RecordingIcon from "/assets/interactionCenter/recording.svg"
import RecordingPauseIcon from "/assets/interactionCenter/recordingPause.svg"
// import { CallPadListing } from './Data';
import { useContext } from 'react';
import CallEndPopup from '../callEndPopup/CallEndPopup';
import CallPadIconOne from "/assets/interactionCenter/icons/i1.svg";
import CallPadIconTwo from "/assets/interactionCenter/icons/i2.svg";
import CallPadIconThree from "/assets/interactionCenter/icons/i3.svg";
import CallPadIconFour from "/assets/interactionCenter/icons/i4.svg";
import CallPadIconFive from "/assets/interactionCenter/icons/i5.svg";
import CallPadIconSix from "/assets/interactionCenter/icons/i6.svg";
import CallPadIconSeven from "/assets/interactionCenter/icons/i7.svg";
import CallPadIconEight from "/assets/interactionCenter/icons/i8.svg";
import CallPadIconNine from "/assets/interactionCenter/icons/i9.svg";
import CallPadIconTen from "/assets/interactionCenter/icons/i10.svg";
import { ContextMediaManagement } from '../../../../../../contexts/mediaManagementContext';
import {createPortal} from "react-dom"
import AgentTransferPopup from '../agentTransferPopup/AgentTransferPopup';
import KeyPadPopup from '../keyPadPopup/KeyPadPopup';
import ConferencePopup from '../conferencePopup/ConferencePopup';
import ScreenSharingPopup from '../screenSharingPopup/ScreenSharingPopup';
import CoBrowsePopup from '../coBrowsePopup/CoBrowsePopup';

const TabCallCard = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <div className={style.call_card_wrap}>
        <div className={`${style.card_header} d-flex align-items-center justify-content-between`}>
            <div className='d-flex align-items-center'>
                <span className={style.call_icon}><img src={CallIcon} alt="" /></span>
                <span className='d-flex flex-column'>
                    <span className={style.title}>Kavitha Mavin</span>
                    <span className={style.sub_title}>Classic Customer</span>
                </span>
                <span className={style.recording}>
                    {
                        mediaHandleContext.tabPad === 6 ? <img src={RecordingPauseIcon} alt="" /> : <img src={RecordingIcon} alt="" />
                    }
                </span>
                <span className={style.rec_text}>{mediaHandleContext.tabPad === 6 ? "PAUSE" : null} REC </span>
            </div>
            <div>
                <div className={style.status_bound}>Inbound Call</div>
                <span className={style.time}>00:01:30</span> 
            </div>
        </div>
        <div className={style.call_option_card_wrapper}>
            <ul className={style.call_list}>
                <li className={`${mediaHandleContext.tabPad === 0 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(0)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleEndPopup(true)}>
                        <img src={CallPadIconOne} alt="" />
                    </div>
                    End Call
                </li>
                <li className={`${mediaHandleContext.tabPad === 1 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(1)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleAgentTransferPopup(true)}>
                        <img src={CallPadIconTwo} alt="" />
                    </div>
                    Transfer...
                </li>
                <li className={`${mediaHandleContext.tabPad === 2 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(2)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`}>
                        <img src={CallPadIconThree} alt="" />
                    </div>
                    Mute
                </li>
                <li className={`${mediaHandleContext.tabPad === 4 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(4)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleKeyPadPop(true)} >
                        <img src={CallPadIconFour} alt="" />
                    </div>
                    Key Pad...
                </li>
                <li className={`${mediaHandleContext.tabPad === 5 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(5)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} >
                        <img src={CallPadIconFive} alt="" />
                    </div>
                    Hold Call
                </li>
                <li className={`${mediaHandleContext.tabPad === 6 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(6)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} >
                        <img src={CallPadIconSix} alt="" />
                    </div>
                    Pause Rec
                </li>
                <li className={`${mediaHandleContext.tabPad === 7 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(7)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleConferencePop(true)}>
                        <img src={CallPadIconSeven} alt="" />
                    </div>
                    Conference
                </li>
                <li className={`${mediaHandleContext.tabPad === 8 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(8)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`}  onClick={()=>mediaHandleContext.handlScreenSharingPop(true)}>
                        <img src={CallPadIconEight} alt="" />
                    </div>
                    Share Screen
                </li>
                <li className={`${mediaHandleContext.tabPad === 9 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(9)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} >
                        <img src={CallPadIconNine} alt="" />
                    </div>
                    Park Call
                </li>
                <li className={`${mediaHandleContext.tabPad === 10 ? style.active: null}`} onClick={()=>mediaHandleContext.handleTab(10)}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handlCoBrowsePop(true)}>
                        <img src={CallPadIconTen} alt="" />
                    </div>
                    Co-browse
                </li>
            </ul>
            {
                mediaHandleContext.endPopup ? createPortal( <CallEndPopup />, document.body ) : null
            }
            {
                mediaHandleContext.agentTransferPop ? createPortal(<AgentTransferPopup />, document.body) : null
            }
            {
                mediaHandleContext.keyPadPop ? createPortal(<KeyPadPopup />, document.body) : null
            }
            {
               mediaHandleContext.conferencePop ? createPortal(<ConferencePopup />, document.body) : null 
            }
            {
               mediaHandleContext.screenSharingPop ? createPortal(<ScreenSharingPopup />, document.body) : null 
            }
            {
               mediaHandleContext.coBrowsePop ? createPortal(<CoBrowsePopup />, document.body) : null 
            }
            
            
            
        </div>
    </div>
  )
}

export default TabCallCard



