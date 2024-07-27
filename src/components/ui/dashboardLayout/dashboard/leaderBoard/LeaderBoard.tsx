import { LeaderData } from './Data'
import style from './style.module.scss'

const LeaderBoard = () => {
  return (
    <div className={style.leaderboard_wrapper}>
      <h2>Agents Leaderboard</h2>
      <ul className={`${style.leader_top_list} d-flex align-items-end`}>
        {
          LeaderData.slice(0,3).map((item,i)=>{
            return(
              <li key={i} className='d-flex flex-column align-items-center'>
                <span><img src={item.avatar} alt="" /></span> 
                <span className={style.name}>{item.name}</span>
                <span className={style.points}>{item.points} pts</span>
                <span><span className={style.rank}>{item.rank}</span></span>
              </li>
            )
          })
        }
      </ul>
      <ul className={style.others_leader_list}>
        {
          LeaderData.slice(3).map((item,i)=>{
            return(
              <li key={i} className='d-flex justify-content-between align-items-center'>
                <span className={`${style.caret_status} d-flex flex-column align-items-center`}>
                  <span>{item.rank}</span>
                  <span className={`${style.caret_direction}`}></span>
                </span>
                <span className={`${style.name_area} d-flex align-items-center`}>
                  <span><img src={item.avatar} alt="" /></span>
                  <span>{item.name}</span>
                </span>
                <span className={style.points}>{item.points}</span>
            </li> 
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default LeaderBoard