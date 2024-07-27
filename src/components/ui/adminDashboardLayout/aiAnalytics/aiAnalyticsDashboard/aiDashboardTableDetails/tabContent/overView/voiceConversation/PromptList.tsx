import style from './style.module.scss'
import AvatarIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/pro1.png"
import AvatarIcon2 from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/pro2.png"
import AvatarIcon3 from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/pro3.png"
import Caring from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/caring.svg"
import Curiosity from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/curiosity.svg"
import Approval from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/approval.svg"
import Confusion from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/confusion.svg"
import { useCallback, useContext, useEffect, useState } from 'react'
import { ContextAiAnalytics } from '../../../../../../../../../contexts/aiAnalyticsContext'
import { VoiceConversationData } from './Data'
import React from 'react'

const PromptList = ({ onMessageSelect, percentage }: any) => {
    const contentAiAnalytics = useContext(ContextAiAnalytics)
    const [timePercentage, setTimePercentage] = useState(0);
    const [startTimePercentage,setStartTimePercentage] = useState(0);
    const refs = VoiceConversationData[0].result.conversation.reduce((acc:any, value) => {
        acc[value.id] = React.createRef();
        return acc;
      }, {});
    useEffect(() => {
       console.log( 2)
        if(!isNaN(percentage))
        {
            setTimePercentage(percentage);
            let num = parseFloat(parseFloat(percentage).toFixed(2));
            console.log(num);
            setStartTimePercentage(num)
        }
       // console.log("time percentage", timePercentage);
    }, [percentage])

    const checkForHighLight = useCallback((startTime:any,itemIndex:any,id:any)=>{
        // console.log("start time",percentage,startTime);
        let nextStartTime = (VoiceConversationData[0].result.conversation != undefined && VoiceConversationData[0].result.conversation[itemIndex+1] != undefined && VoiceConversationData[0].result.conversation[itemIndex+1].message != undefined && VoiceConversationData[0].result.conversation[itemIndex+1].message[0] != undefined && VoiceConversationData[0].result.conversation[itemIndex+1].message[0].start != undefined)?VoiceConversationData[0].result.conversation[itemIndex+1].message[0].start:null;
        if(nextStartTime != null)
        {
            //console.log("time check ",itemIndex,startTime,nextStartTime)
            if(percentage >= startTime.toFixed(3) && percentage <= nextStartTime.toFixed(3))
            {
                if(refs[id] != undefined && refs[id].current != null && refs[id].current != null)
                {
                    refs[id].current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                }
                return style.highlight_message;
            }
            else
            {
                return null;
            }
        }
        else
        {
            if(percentage >= startTime.toFixed(3) && percentage < 100)
            {
                if(refs[id] != undefined && refs[id].current != null && refs[id].current != null)
                {
                    refs[id].current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                }
                return style.highlight_message;
            }
            else
            {
                return null;
            }
        }
    },[percentage]);

    return (
        <ul className={style.prompt_list_wrapper}>
            {
                VoiceConversationData.map((item, _i) => {
                    return (
                        <>
                            {
                                item.result.conversation.map((conversationItem, conversationItemIndex) => {
                                    return (
                                        <>
                                            <li key={conversationItemIndex} className={`${contentAiAnalytics.voiceConversationTranscript === true ? style.transcript : null} ${checkForHighLight(conversationItem.message[0].start,conversationItemIndex,conversationItem.id)}`} ref={refs[conversationItem.id]}>
                                                <span className={style.avatar_icon}><img src={`${conversationItem.from === "Speaker 0" ? AvatarIcon : conversationItem.from === "Speaker 1" ? AvatarIcon2 : conversationItem.from === "Speaker 2" ? AvatarIcon3 : null}`} alt="" /></span>
                                                <span className={style.prompt_details}>
                                                    <span className={`${style.naming_details} d-flex`}>
                                                        <span>{conversationItem.from}</span>
                                                        <span className={style.time}>{conversationItem.time}</span>
                                                    </span>
                                                        {
                                                            conversationItem.message.map((messageItem) => {
                                                                return (
                                                                    <div className={`${style.message} d-flex align-items-center ${(startTimePercentage >= messageItem.start && timePercentage <= messageItem.end)?style.highlight_message:null}`}>
                                                                        <p onClick={() => { onMessageSelect(messageItem.start), contentAiAnalytics.handlePlayPauseButtton(true) }}>{messageItem.text}</p>
                                                                        <span><img src={`
                                                                        ${messageItem.emotion.label === "caring" ? Caring :
                                                                                messageItem.emotion.label === "curiosity" ? Curiosity :
                                                                                    messageItem.emotion.label === "approval" ? Approval :
                                                                                        messageItem.emotion.label === "confusion" ? Confusion : Caring
                                                                            }
                                                                    `} alt="" /></span>
                                                                    </div>


                                                                )
                                                            })
                                                        }


                                                </span>
                                            </li>

                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }


        </ul>
    )
}

export default PromptList