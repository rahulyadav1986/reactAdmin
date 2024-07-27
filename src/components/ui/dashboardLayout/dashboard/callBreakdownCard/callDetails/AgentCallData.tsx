import { AgentCallDetailsData } from './Data'
import style from './style.module.scss'

const AgentCallData = () => {
  return (
    <>
        {
            AgentCallDetailsData.map((item,i)=>{
                return(
                    <>
                        <li className='d-flex' key={i}>
                            <div className={`${style.call_card} d-flex align-items-center justify-content-center flex-column`}>
                                <p>{item.label}</p>
                                <span className={style.no}>{item.calls}</span>
                            </div>
                            <ul className={`${style.child_level_one} d-flex flex-column justify-content-between`}>
                                {
                                    item.level.map((item,i)=>{
                                        return(
                                            <>
                                                <li key={i} className={`${item.label === 'Inbound' ? style.inbound : style.outbound} d-flex`}>
                                                    <div className={`${style.call_card} d-flex align-items-center justify-content-center flex-column`}>
                                                        <p>{item.label}</p>
                                                        <span className={style.no}>{item.calls}</span>
                                                        <span className={style.status}>({item.status}%)</span>
                                                    </div>
                                                    <ul className={`${style.child_level_two} d-flex flex-column justify-content-between`} >
                                                        {
                                                            item.level.map((item,i)=>{
                                                                return(
                                                                    <>
                                                                        <li key={i} className='d-flex'>
                                                                            <div className={`${style.call_card} ${ item.hasData === true ? style.hasData : ""} d-flex align-items-start justify-content-center flex-column`}>
                                                                                <span className='d-flex align-items-center'>
                                                                                    <span className={style.no}>{item.calls}</span>
                                                                                    <p>{item.label}</p>
                                                                                </span>
                                                                                <span className={style.status}>{item.status}%</span>
                                                                            </div>
                                                                            {
                                                                                item.hasData === true && 
                                                                                <ul className={`${style.child_level_three} d-flex flex-column justify-content-center`} >
                                                                                    {
                                                                                        item.level.map((item,i)=>{
                                                                                            return(
                                                                                                <>
                                                                                                    <li key={i}>
                                                                                                        <div className={`${style.call_card} d-flex align-items-start justify-content-center flex-column`}>
                                                                                                            <span className='d-flex align-items-center'>
                                                                                                                <span className={style.no}>{item.calls}</span>
                                                                                                                <p>{item.label}</p>
                                                                                                            </span>
                                                                                                            <span className={style.status}>{item.status}%</span>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                </>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>
                                                                            }
                                                                            
                                                                        </li>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </>
                )
            })
        }
    </>
  )
}

export default AgentCallData