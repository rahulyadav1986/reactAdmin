import { HelpGuideData } from './Data'
import style from './style.module.scss'
const HelpGuide = () => {
  return (
    <div className={style.help_guide_wrapper}>
        <div className={style.head}>
            <h2>Need some help?</h2>
        </div>
        <div className={style.details}>
            {
                HelpGuideData.map((item)=>{
                    return(
                        <div className={style.portion}>
                            <div className={`${style.image_back} d-flex align-items-center justify-content-center`} style={{'backgroundColor': item.bgColor}}>
                                <img src={`/assets/dashboard/main_dashboard/admin/insights/${item.img}`} alt="" />
                            </div>
                            <div className={style.content_area}>
                                <span className={style.tag}>{item.tag}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default HelpGuide