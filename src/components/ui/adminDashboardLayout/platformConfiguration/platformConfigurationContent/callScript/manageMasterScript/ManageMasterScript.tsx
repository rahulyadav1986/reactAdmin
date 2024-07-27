import { useCallback, useContext, useEffect, useState } from 'react'
import style from './style.module.scss'
import { ContextPlatformConfiguration } from '../../../../../../../contexts/platformConfigurationContext'
import MasterAddIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/masterAdd.svg";
import CallScript from '../../../../../dashboardLayout/interactionDashboard/interactionTabContent/callerDetails/callerTabContent/callScript/CallScript';
const ManageMasterScript = () => {
  const contextAddCallScript = useContext(ContextPlatformConfiguration)
  const [sectionForm, setSectionForm] = useState({ title: "", purpose: "", script: "", weightage: 0 });
  const checkForScript = useCallback(()=>{
    if (contextAddCallScript.masterScript != "" && contextAddCallScript.masterScript != "0") {
      //setSelectedScript((scriptDataInfo: any) => {
        let scriptDataInfo = contextAddCallScript.allScripts.filter((el) => el.id == contextAddCallScript.masterScript);
        return scriptDataInfo[0];
     // });
    }
    else
    {
      return { id: 0, name: "", noOfSections: "", createdOn: "", lasteUpdatedOn: "", description: "", weightage: 0, skills: [], sectionIds: [] };
    }
  },[]);
  const [selectedScript, setSelectedScript] = useState(checkForScript);
  useEffect(() => {
    if (contextAddCallScript.masterScript != "" && contextAddCallScript.masterScript != "0") {
      setSelectedScript((scriptDataInfo: any) => {
        scriptDataInfo = contextAddCallScript.allScripts.filter((el) => el.id == contextAddCallScript.masterScript);
        return scriptDataInfo[0];
      });
    }

  }, [contextAddCallScript.masterScript]);


  const saveSection = useCallback(() => {
    console.log(sectionForm);
    if (sectionForm.title != "" && sectionForm.purpose != "" && sectionForm.script != "") {
      contextAddCallScript.manageMasterScripts(sectionForm);
      contextAddCallScript.handleNewScriptPop(false);
      setSectionForm({ title: "", purpose: "", script: "", weightage: 0 });

    }
    else {
      alert("Please enter all the details");
    }
  }, [sectionForm,contextAddCallScript]);


  const onChangeSectionHandler = useCallback((event: any) => {
    const { name, value } = event.target;
    setSectionForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  }, [sectionForm, setSectionForm]);
  
  return (
    <div className={style.manage_master_script_wrapper}>
      <ul className={`${style.bedcrumb} d-flex align-items-center`}>
        <li className={style.main} onClick={() => {contextAddCallScript.handleMasterScript("");contextAddCallScript.handleNewScriptPop(false);}}>Call Script Templates</li>
        <li>{contextAddCallScript.masterScript == "0" ? "Manage Master Script" : selectedScript != null && selectedScript.name}</li>
      </ul>
      {
        contextAddCallScript.newScriptPop === false ?
          <div className={`${style.new_section_area_wrapper} d-flex align-items-center justify-content-center`} onClick={() => contextAddCallScript.handleNewScriptPop(true)}>
            <div className={`${style.button} d-flex align-items-center justify-content-center`}><span><img src={MasterAddIcon} alt="" /></span> New Section</div>
          </div> :
          <div className={`${style.new_call_script_add_wrapper} `}>
            <div className={`${style.add_wraper} d-flex align-items-end justify-content-between`}>
              <form className={style.new_script_add_area}>
                <div className={style.portion}>
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" placeholder='Enter title' className={style.form_control} name="title" value={sectionForm.title} onChange={onChangeSectionHandler} />
                </div>
                <div className={`${style.portion} ${style.small}`}>
                  <label htmlFor="purpose" className={style.blue}>Purpose</label>
                  <input type="text" name="purpose" id="purpose" placeholder='Enter purpose' className={style.form_control} value={sectionForm.purpose} onChange={onChangeSectionHandler} />
                </div>
                <div className={`${style.portion} ${style.small}`}>
                  <label htmlFor="script" className={style.blue}>Script</label>
                  <input type="text" name="script" id="script" placeholder='Enter script' className={style.form_control} value={sectionForm.script} onChange={onChangeSectionHandler} />
                </div>
              </form>
              <div className={`${style.button_area} d-flex align-items-center`}>
                <button className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => contextAddCallScript.handleNewScriptPop(false)}>Cancel</button>
                <button className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={() => { saveSection(); }}>Save</button>
              </div>
            </div>
          </div>
      }



      <div className={style.list_area_master_script}>
      
        <CallScript scriptTemplate={selectedScript}/>
      </div>
    </div>
  )
}

export default ManageMasterScript;