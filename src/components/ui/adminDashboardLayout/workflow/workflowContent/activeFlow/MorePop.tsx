
import { MorePopData } from './Data';
import style from './style.module.scss'
const MorePop = () => {
  return (
    <ul className={style.more_pop_area_wrapper}>
      {
        MorePopData.map((item)=>{
          return(
            <li key={item.id} >
              <span><img src={`/assets/dashboard/main_dashboard/admin/platformConfiguration/tableDrop/${item.icon}`} alt="" /></span> 
              <span>{item.label}</span>
            </li>
          )
        })
      }
      
    </ul>
  )
}

export default MorePop