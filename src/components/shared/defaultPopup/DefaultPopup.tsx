import {useContext} from "react"
import style from './style.module.scss'
import InfoIcon from "/assets/ticketmanagement/info.svg"
import ArrowForwardIcon from "/assets/ticketmanagement/arrow-right.svg"
import CrossIcon from "/assets/ticketmanagement/cross.svg"
import { ContextDefaultPopup } from "../../../contexts/defaultPopupContext"

type DefaultPopProps = {
    title?: string,
    subTitle?: string,
    buttonNameOne?: string,
    buttonNameTwo?: string
}

const DefaultPopup = (props: DefaultPopProps) => {
  const popupDefaultContext = useContext(ContextDefaultPopup)
  return (
    <>
        {
            popupDefaultContext.defaultPopup &&
            <div className={`${style.default_popup_wrapper} d-flex`}>
                <img src={CrossIcon} alt="" className={style.cross} onClick={popupDefaultContext.handleDefaultPopup} />
                <span className={style.icon}><img src={InfoIcon} alt="" /></span>
                <div className={style.content_area}>
                    <h2>{props.title}</h2>
                    <p>{props.subTitle}</p>
                    {
                        props.buttonNameOne || props.buttonNameTwo ? 
                        <div className={`${style.button_wrap} d-flex align-items-center`}>
                            {
                                props.buttonNameOne ? 
                                <button className={`${style.buttonOne} d-flex align-items-center`}>
                                    <span>{props.buttonNameOne}</span>
                                    <span><img src={ArrowForwardIcon} alt="" /></span>
                                </button>
                                :
                                null
                            }
                            {
                                props.buttonNameTwo ? 
                                <button className={`${style.buttonTwo} d-flex align-items-center`} onClick={popupDefaultContext.handleDefaultPopup}>
                                    <span>{props.buttonNameTwo}</span>
                                </button>
                                :
                                null
                            }
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        }
    </>
    
  )
}

export default DefaultPopup