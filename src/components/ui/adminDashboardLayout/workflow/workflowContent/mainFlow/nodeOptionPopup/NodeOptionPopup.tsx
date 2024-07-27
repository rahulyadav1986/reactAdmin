import { NodeOptionData } from './Data'
import style from './style.module.scss'
const NodeOptionPopup = ({...props}) => {
const handleItemClick:any = (item:any)=>{
    props.onMenuSelect(item);
};
  return (
    <div className={style.node_option_wrap}>
        {
            NodeOptionData.map((item:any)=>{
                return(
                    (props.nodeType == undefined || (props.nodeType == 'Trigger' && item.name == 'General')) && <div key={item.id} className={style.node_section}>
                        <h3>{item.name}</h3>
                        <ul className={style.node_menu}>
                            {
                               (props.nodeType == undefined || props.nodeType != 'Trigger') && item.options.map((item:any)=>{
                                    return(
                                        <li key={item.id} className='d-flex align-items-center' onClick={()=>handleItemClick(item.type)}>
                                            <span className={style.icon_wrap}><img src={item.icon} alt="" /></span>
                                            <span>{item.label}</span>
                                        </li>
                                    )
                                })
                            }
                            {
                             props.nodeType == 'Trigger' && item.options.map((item:any)=>{
                                    return(
                                       (item.type.toLowerCase() == "sms" || item.type.toLowerCase() == 'voice' || item.type.toLowerCase() == 'whatsapp') && <li key={item.id} className='d-flex align-items-center' onClick={()=>handleItemClick(item.type)}>
                                            <span className={style.icon_wrap}><img src={item.icon} alt="" /></span>
                                            <span>{item.label}</span>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default NodeOptionPopup