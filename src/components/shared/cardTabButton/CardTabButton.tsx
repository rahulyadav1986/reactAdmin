
import { useContext } from 'react'
import style from './style.module.scss'
import { ContextTable } from '../../../contexts/tableContext'
type TabButtonProps = {
  item: any,
  index: any
}
const CardTabButton = (props: TabButtonProps) => {
  const tableChannelTabContext = useContext(ContextTable)
  return (
    <li key={props.index} className={`${tableChannelTabContext.tableChannelTab === props.index ? style.active : ""} ${style.button}`} onClick={()=>tableChannelTabContext.handleTableChannelTab(props.index)}>{props.item.label}</li>
  )
}

export default CardTabButton