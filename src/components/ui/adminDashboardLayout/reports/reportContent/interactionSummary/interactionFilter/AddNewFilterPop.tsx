import style from './style.module.scss'
import Caret from "/assets/dashboard/main_dashboard/admin/reports/caret.svg"
import CaretRed from "/assets/dashboard/main_dashboard/admin/reports/caretRed.svg"
import { TeamData } from './Data'
import { useContext } from 'react'
import { ContextReport } from '../../../../../../../contexts/reportContext'
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg"
const AddNewFilterPop = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={style.team_option_pop_wrapper}>
        <div className={style.search_wrapper}>
            <div className={`${style.search_box} d-flex align-items-center`}>
                <img src={SearchIcon} alt="" />
                <input type="text" name="" id="" placeholder="Search skills" />
            </div>
        </div>
        <ul className={style.team_list}>
            {
                TeamData.map((item)=>{
                    return(
                        <li key={item.id}>
                            <div className={`${style.portion} d-flex align-items-center`}>
                                <span className={style.caret}>
                                    <img src={Caret} alt="" />
                                </span>
                                <div className={`${style.checkbox} ${style.active}`}>
                                    <input type="checkbox" name="" id={item.checkId} />
                                    <label htmlFor={item.checkId} ><span></span>{item.label}</label>
                                </div>
                            </div>
                            {
                                item.cat.map((catItem)=>{
                                    return(
                                        <li key={catItem.id} className={style.second}>
                                            <div className={`${style.portion} d-flex align-items-center`} onClick={()=>contextFilterReport.handleFilterTeamSecondLevel(catItem.checkId)}>
                                                <span className={`${style.caret} ${contextFilterReport.filterTeamSecondLevel === catItem.checkId ? style.roate_down : null}`}>
                                                    <img src={Caret} alt="" />
                                                </span>
                                                <div className={`${style.checkbox} ${style.active}`}>
                                                    <input type="checkbox" name="" id={catItem.checkId} />
                                                    <label htmlFor={catItem.checkId} ><span></span>{catItem.label}</label>
                                                </div>
                                            </div>
                                            {
                                                contextFilterReport.filterTeamSecondLevel === catItem.checkId ?
                                                <ul>
                                                    <li className={style.third}>
                                                        <div className={`${style.portion} d-flex align-items-center`} onClick={()=>contextFilterReport.handleFilterTeamThirdLevel(catItem.checkId)}>
                                                            <span className={`${style.caret} ${contextFilterReport.filterTeamThirdLevel === catItem.checkId ? style.roate_down : null} `}>
                                                                <img src={Caret} alt="" />
                                                            </span>
                                                            <div className={`${style.checkbox} ${style.active}`}>
                                                                <input type="checkbox" name="" id={catItem.teamSubCat.checkId} />
                                                                <label htmlFor={catItem.teamSubCat.checkId} ><span></span>{catItem.teamSubCat.name}</label>
                                                            </div>
                                                        </div>
                                                        {
                                                            contextFilterReport.filterTeamThirdLevel === catItem.checkId ?
                                                            <ul>
                                                                {
                                                                    catItem.teamSubCat.list.map((subMenu)=>{
                                                                        return(
                                                                            <li key={subMenu.id} className={style.fourth}>
                                                                                <div className={`${style.portion} d-flex align-items-center`} onClick={()=>contextFilterReport.handleFilterTeamFourthLevel(subMenu.checkId)}>
                                                                                    <span className={`${style.caret} ${subMenu.subList.length > 0 ? `${contextFilterReport.filterTeamFourthLevel === subMenu.checkId ? style.roate_down : null}` : null}  `}>
                                                                                        <img src={`${subMenu.subList.length > 0 ? CaretRed : Caret}`} alt="" />
                                                                                    </span>
                                                                                    <div className={`${style.checkbox} ${style.active}`}>
                                                                                        <input type="checkbox" name="" id={subMenu.checkId} />
                                                                                        <label htmlFor={subMenu.checkId} >
                                                                                            <span></span>
                                                                                            <b><img src={`/assets/dashboard/main_dashboard/admin/reports/${subMenu.avatarIcon === "" || null ? 'demoAvatar.svg' : subMenu.avatarIcon}`} alt="" /></b>
                                                                                            {subMenu.label}
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                {   
                                                                                    contextFilterReport.filterTeamFourthLevel === subMenu.checkId ?
                                                                                    subMenu.subList.length > 0 ?
                                                                                    <ul>
                                                                                        {
                                                                                            subMenu.subList.map((subMenuList)=>{
                                                                                                return(
                                                                                                    <li key={subMenuList.id} className={style.fifth}>
                                                                                                        <div className={`${style.portion} d-flex align-items-center`}>
                                                                                                            <span className={style.caret}>
                                                                                                                <img src={Caret} alt="" />
                                                                                                            </span>
                                                                                                            <div className={`${style.checkbox} ${style.active}`}>
                                                                                                                <input type="checkbox" name="" id={subMenuList.checkId} />
                                                                                                                <label htmlFor={subMenuList.checkId} >
                                                                                                                    <span></span>
                                                                                                                    <b><img src={`/assets/dashboard/main_dashboard/admin/reports/${subMenuList.avatarIcon === "" || null ? 'demoAvatar.svg' : subMenuList.avatarIcon}`} alt="" /></b>
                                                                                                                    {subMenuList.label}
                                                                                                                </label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                    </ul> : null : null
                                                                                }
                                                                                
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul> : null
                                                        }
                                                        
                                                    </li>
                                                </ul> : null
                                            }
                                            
                                        </li>
                                    )
                                })
                            }
                            
                        </li>
                    )
                })
            }
        </ul>
        <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`}>
            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleAddnewFilterCancle} >Cancel</div>
            <div className={`${style.button} ${style.apply} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleAddnewFilterCancle}>Apply</div>
        </div>
        
    </div>
  )
}

export default AddNewFilterPop