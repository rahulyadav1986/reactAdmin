import { useContext } from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/dashboard/main_dashboard/tablePops/cross.svg'
import QualityProfileAvatar from '/assets/dashboard/main_dashboard/tablePops/quality_profile.png'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
import QualitySlider from './QualitySlider'
import { QualityFormData } from './Data'

const QualityFormPopup = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  
  return (
    <>
        <div className={`${style.header_widget_area} d-flex align-items-center justify-content-between`}>
            <h4>Quality Form</h4>
            <span><img src={CrossIcon} alt="" onClick={()=>tablePopupContext.handleQualityFormPopup(false)} /></span>
            
        </div>
        <div className={style.body_wrapper}>
            <ul className={`${style.profile_details_area} d-flex`}>
                <li className='d-flex flex-column'>
                    <h4>AGENT</h4>
                    <div className='d-flex align-items-center'>
                        <span><img src={QualityProfileAvatar} alt="" /></span> 
                        <span>Kiranmai Kulakarni</span>
                    </div>
                </li>
                <li className='d-flex flex-column'>
                    <h4>DATE & TIME</h4>
                    <div className='d-flex align-items-center'>
                        <span>Today, 00:00:00</span>
                    </div>
                </li>
                <li className='d-flex flex-column'>
                    <h4>INTERACTION TYPE</h4>
                    <div className='d-flex align-items-center'>
                        <span>Audio Call</span>
                    </div>
                </li>
            </ul>
            <div className={style.table_area_wrapper}>
                <table className={style.quality_table}>
                    <thead>
                        <tr>
                            <th style={{'width':'220px'}}>TTTLE</th>
                            <th style={{'width':'169px'}}>PURPOSE</th>
                            <th style={{'width':'226px'}}>SCRIPT</th>
                            <th style={{'width':'83px'}}>MAX<br />WEIGHTAGE</th>
                            <th style={{'width':'273px'}}>YOUR WEIGHTED SCORE</th>
                            <th style={{'width':'272px'}}>CoMMENTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           QualityFormData.map((formData,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>
                                            <h4>{formData.title}</h4>
                                        </td>
                                        <td>
                                            <p>{formData.purpose}</p>
                                        </td>
                                        <td>
                                            <p>{formData.script}</p>
                                        </td>
                                        <td>{formData.maxWeightage}</td>
                                        <td className={style.slider}>
                                            <QualitySlider ws={formData.weightageScore} />
                                        </td>
                                        <td>
                                            <textarea name="" id="" placeholder='Type your comments'></textarea>
                                        </td>
                                    </tr>
                                )
                           }) 
                        }
                        
                    </tbody>
                </table>
            </div>
            <div className={style.bottom_comment_area}>
                <textarea name="" id=""></textarea>
            </div>
            <div className={`${style.button_wrapper} d-flex align-items-center justify-content-end`}>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>tablePopupContext.handleQualityFormPopup(false)}>Back</div>
                <div className={`${style.button} ${style.save} d-flex align-items-center justify-content-center`} onClick={tablePopupContext.handleQualityFormPopupFinal}>Save</div>
            </div>
        </div>
    </>
  )
}

export default QualityFormPopup