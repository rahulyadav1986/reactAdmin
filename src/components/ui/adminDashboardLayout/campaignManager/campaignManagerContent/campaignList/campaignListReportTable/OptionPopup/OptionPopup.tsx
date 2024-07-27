import { NodeOptionData } from './Data'
import style from './style.module.scss'
const OptionPopup = ({...props}) => {
const handleItemClick:any = (item:any)=>{
    props.onMenuSelect(item);
};
  return (
    <div className={style.node_option_wrap}>
        {
            NodeOptionData.map((item:any)=>{
                return(
                    <div key={item.id} className={style.node_section}>
                        <h3>{item.name}</h3>
                        <ul className={style.node_menu}>
                            {
                                item.options.map((item:any)=>{
                                    return(
                                        <li key={item.id} className='d-flex align-items-center' onClick={()=>handleItemClick(item.type)}>
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

export default OptionPopup