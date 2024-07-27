import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/add.svg"
import EditIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/edit.svg"
import DeleteIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/delete.svg"
import { useContext, useEffect, useState } from 'react'
import { ContextPlatformConfiguration } from '../../../../../../../contexts/platformConfigurationContext'
import Skill from './Skill'
//import { CallSCriptTableData } from './Data'
const CallScriptTemplates = () => {
  const contextAddCallScript = useContext(ContextPlatformConfiguration);
  const [callScriptData,setCallScriptTable] = useState(new Array());
  useEffect(()=>{
    console.log("script page init",contextAddCallScript.allScripts);
    setCallScriptTable(contextAddCallScript.allScripts);
  },[contextAddCallScript.allScripts]);
  return (
    <>
        
        {/* <h1>Call Script Templates</h1> */}
        <div className={style.list_area_wrapper}>
            <div className={style.main_list_wrapper}>
                <div className={`${style.header_wrapper} d-flex align-items-center justify-content-between`}>
                    <h2>All Templates</h2>
                    <div className={`${style.button_wrapper} d-flex align-items-center`}>
                        <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextAddCallScript.handleMasterScript("0")}>Manage Master Script</div>
                        <div className={`${style.button} ${style.new} d-flex align-items-center justify-content-center`} onClick={()=>contextAddCallScript.handleCreateCallScript(true)}>
                            <span><img src={AddIcon} alt="" /></span> New Script
                        </div>
                    </div>
                </div>
                <div className={style.script_table_wrapper}>
                    <table className={style.script_table}>
                        <thead>
                            <tr>
                                <th>SCRIPT NAME</th>
                                <th># of SECTIONS</th>
                                <th>CREATED ON</th>
                                <th>Last Updated</th>
                                <th>WEIGHTAGE</th>
                                <th>ASSIGNED SKILLS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                callScriptData.map((item)=>{
                                    return(
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.sectionIds.length}</td>
                                            <td>{item.createdOn}</td>
                                            <td>{item.lasteUpdatedOn}</td>
                                            <td>{item.weightage}</td>
                                            <td>
                                                {/* <PlatformConfigurationContext> */}
                                                    <Skill script={item}/>
                                                {/* </PlatformConfigurationContext> */}
                                            </td>
                                            <td>
                                                <div className={`${style.action} d-flex align-items-center`}>
                                                    <img src={EditIcon} alt="" onClick={()=>contextAddCallScript.handleMasterScript(item.id)}/>
                                                    <img src={DeleteIcon} alt="" onClick={()=>contextAddCallScript.deleteScriptInfo(item.id)}/>
                                                </div>
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default CallScriptTemplates