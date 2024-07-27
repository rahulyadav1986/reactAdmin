import {useContext} from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/dashboard/main_dashboard/tablePops/cross.svg'
import LeftArrowIcon from '/assets/dashboard/main_dashboard/tablePops/leftArrow.svg'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
type VideoProps = {
  item: any
}
const ViolationPop = (props: VideoProps) => {
  const tablePopupContext = useContext(ContextTablePopup)
  return (
    <>
        <div className={`${style.header_widget_area} ${style.violation} d-flex align-items-center justify-content-between`}>
            <h4 className='d-flex align-items-center'><img className={style.left}  src={LeftArrowIcon} alt="" onClick={()=>tablePopupContext.handleViolationPop(false)} /> {props.item.type}</h4>
            <ul className={`${style.action_icons} d-flex align-items-center`}>
                <li><img src={CrossIcon} alt="" onClick={()=>tablePopupContext.handleFinalViolationClose(false)} /></li>                
            </ul>
        </div>
        <div className={style.image_area}>
            <img src={props.item.snapshotImage} alt="" />
        </div>
    </>
  )
}

export default ViolationPop