import { useLocation } from 'react-router-dom'
import style from './style.module.scss'

type TopCardsProps= {
    index: number,
    item: any
}

const TopCards = (props: TopCardsProps) => {
  const location = useLocation()
  return (
    <div key={props.index} className={`${style.card} ${location.pathname.indexOf('/supervisor')>=0 ? style.supervisor : null} d-flex`}>
        <div className={`${style.icon_area} d-flex align-items-center justify-content-center`} style={{'backgroundColor': `${props.item.iconBgColor}`}}>
            <img src={props.item.icon} alt="" />
        </div>
        <div className={style.content_area}>
            <h4>{props.item.label}</h4>
            <span className={style.time} dangerouslySetInnerHTML={{__html:props.item.status}} />
            <div className={style.bottom_line}>
                Target threshold: <span dangerouslySetInnerHTML={{__html:props.item.threshold}} />
            </div>
            {
                props.item.maxmin.length > 0 && 
                <div className={`${style.last_bottom_area} d-flex align-items-center`}>
                    {
                        props.item.maxmin.map((maxminItem: any)=>{
                            return(
                                <span dangerouslySetInnerHTML={{__html:maxminItem}} />
                            )
                        })
                    }
                </div>
            }
            
        </div>
    </div>
  )
}

export default TopCards