import { useCallback, useContext, useState } from "react"
import { ContextPlatformConfiguration } from "../../../../../../../contexts/platformConfigurationContext"
import { SkillsData } from "./Data"
import style from "./style.module.scss"
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg"
import AddIconForSkill from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/table_add.svg"
const Skill = ({script}:any) => {
    console.log("script template skill",script);
  const contextAddCallScript = useContext(ContextPlatformConfiguration)
  const [checkValue, setCheckValue] = useState(script.skills);
  const onChangleCheckValue = (e:any)=>{
    
    const {value, checked} = e.target
    if(checked === true){
        setCheckValue([...checkValue,value]);
        //contextAddCallScript.manageScriptInfo({...script,skills:value})
    }
    else
    {
        setCheckValue((checkValue:any)=>checkValue.filter((el:any)=>el != value));
    }
    
    
  }

  const updateSkillValue = useCallback(()=>{
    console.log(checkValue);
    contextAddCallScript.manageScriptInfo({...script,skills:checkValue});
    contextAddCallScript.handleSkillDrop("");
  },[checkValue,contextAddCallScript.skillDrop,contextAddCallScript.allScripts,contextAddCallScript.manageScriptInfo]);

//   const onSelectCheck = useCallback((evt:any)=>{
//     if(evt.target.checked)
//     {
//         let skills:any = [];
//         SkillsData.map((el,i)=>{
//             skills.push(el.skill);
//             if(i == SkillsData.length - 1)
//             {
//                 setCheckValue(skills);
//             }
//         });
//     }
//     else
//     {
//         setCheckValue([]);
//     }
//   },[]);
  return (
    <>
        {
            contextAddCallScript.skillDrop === script.id ? <div className="overlay" onClick={()=>contextAddCallScript.handleSkillDrop("")}></div>: null
        }
        <div className={`${style.skills_area} d-flex align-items-center`}>
            {
                script.skills[0] ? 
                <span className={style.select_main_level}>{script.skills[0]}</span> : null
            }
            
            {
                script.skills.length > 1 ? <span className={style.select_more_level}>{script.skills.length-1} more</span> : null
            }
            
            <div className={`${style.add_button} d-flex align-items-center justify-content-center`} onClick={()=>contextAddCallScript.handleSkillDrop(script.id)}>
                <img src={AddIconForSkill} alt="" />
            </div>
            {
                contextAddCallScript.skillDrop == script.id ? 
                <div className={style.skill_drop_area_wrapper}>
                    <div className={style.top_area}>
                        <div className={`${style.search_box} d-flex align-items-center`}>
                            <img src={SearchIcon} alt="" />
                            <input type="text" name="" id="" placeholder='Search skills' />
                        </div>
                        <div className={style.check_box_wrapper}>
                            <input type="checkbox" name={script.name} id="selectAll" />
                            <label htmlFor="selectAll">
                                <span></span>
                                Select All
                            </label>
                        </div>
                    </div>
                    <div className={style.filter_area}>
                        {
                            SkillsData.map((item)=>{
                                return(
                                    <div className={style.check_box_wrapper} key={item.id}>
                                        <input type="checkbox" id={item.id} value={item.skill} onChange={onChangleCheckValue} defaultChecked={checkValue.includes(item.skill)}/>
                                        <label htmlFor={item.id}>
                                            <span></span>
                                            {item.skill}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                        <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextAddCallScript.handleSkillDrop("")}>Cancel</div>
                        <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={updateSkillValue}>Apply</div>
                    </div>
                </div> : null
            }
            
        </div>
        
        
    </>
    
  )
}

export default Skill