import { useCallback, useContext, useState } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
import moment from 'moment';
// import useToggle from '../../../../../../../../hooks/useToggle'
import useOutside from '../../../../../../../../hooks/useOutside'
const NewListPop = () => {
  const contextCampaignManager = useContext(ContextCampaignManager);
  const [listForm, setListForm] = useState({ id: "", listname: "", desc: "", type: "default", purpose: "", contacts: new Array(), linkedCampaigns: new Array(), lastModified: "", lastAssigned: "", campaignStatus: true });
  const [errorMsg, setErrorMsg] = useState({listname:"",purpose:""});

  // on change input values----------z
  const onInputChangeHandler = useCallback((event: any) => {
    const { name, value } = event.target;
    if(name == 'listname')
    {
      setErrorMsg((errorMsg)=> ({...errorMsg,[name]:""}));
    }
    setListForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  }, [listForm]);

  // on list add submit -----------------
  const onListAddSubmit = useCallback(() => {
    console.log("list data",listForm);
    if (listForm.listname != "" && listForm.purpose != "") {
      listForm.lastModified = moment().format("DD MMMM YYYY,HH:mm:ss");
      const selectedItem:any = contextCampaignManager.handleAddEditCampaignList(listForm);
      if(selectedItem)
      {
        contextCampaignManager.handleSetAddContacts(true);
        contextCampaignManager.handleSelectedCampaign(selectedItem.id);
        contextCampaignManager.handleFinalImportDoc(false);
      }
    }
    else {
      if(listForm.listname == "")
      {
        setErrorMsg((errorMsg)=> ({...errorMsg,['listname']:"Please add list name"}));
      }
      if(listForm.purpose == "")
      {
        setErrorMsg((errorMsg)=> ({...errorMsg,['purpose']:"Please select purpose"}));
      }
    }
  }, [listForm]);

  const onPurposeChange = useCallback((value:any)=>{
    setListForm((prevFormData) => ({ ...prevFormData, ['purpose']: value }));
    setErrorMsg((errorMsg)=> ({...errorMsg,['purpose']:""}));
    // togglePurposeDrop(false)
    setDrop(false)
  },[]);

  // const [purposeDrop, togglePurposeDrop] = useToggle(false)

  const [drop, setDrop, ref] = useOutside(false)
  return (
    <div className={`${style.campaign_list_pop_wrapper} d-flex align-items-center justify-content-center`}>
      <div className={style.ovarlay} onClick={() => contextCampaignManager.handleCampaignNewListPop(false)}></div>
      <div className={`${style.main_area}`}>
        <div className={`${style.head} d-flex align-items-center justify-content-between`}>
          <h3>New List</h3>
          <span className={style.Cross} onClick={() => contextCampaignManager.handleCampaignNewListPop(false)}><img src={CrossIcon} alt="" /></span>
        </div>
        <div className={style.form_area_wrapper}>
          <div className={style.portion}>
            <label htmlFor="ListName">List name <span className='red'>*</span></label>
            <input type="text" id="ListName" name="listname" value={listForm.listname} placeholder='Name your list' className={style.form_control} onChange={onInputChangeHandler} />
            {errorMsg.listname != "" && <div className={style.error_msg}>{errorMsg.listname}</div>}
          </div>
          <div className={style.portion}>
            <label htmlFor="purpose">Purpose <span className='red'>*</span></label>
              {/* <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={togglePurposeDrop}>
                  <span>{(listForm.purpose != '')?listForm.purpose:"Choose the purpose"}</span>
                  <span><img src={DownArrow} alt="" /></span>
              </div> */}
              <div ref={ref}>
                <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={()=>setDrop(!drop)} >
                    <span>{(listForm.purpose != '')?listForm.purpose:"Choose the purpose"}</span>
                    <span><img src={DownArrow} alt="" /></span>
                </div>
                {/* {
                  purposeDrop && 
                  <ul className={style.drop_area}>
                      <li onClick={()=>onPurposeChange('general')}>General</li>
                      <li onClick={()=>onPurposeChange('sms')}>Sms</li>
                      <li onClick={()=>onPurposeChange('whatsapp')}>Whatsapp</li>
                      <li onClick={()=>onPurposeChange('voice')}>Voice</li>
                  </ul>
                } */}
                {
                  drop && 
                  <ul className={style.drop_area}>
                      <li onClick={()=>onPurposeChange('general')}>General</li>
                      <li onClick={()=>onPurposeChange('sms')}>Sms</li>
                      <li onClick={()=>onPurposeChange('whatsapp')}>Whatsapp</li>
                      <li onClick={()=>onPurposeChange('voice')}>Voice</li>
                  </ul>
                }
            </div>
            {errorMsg.purpose != "" && <div className={style.error_msg}>{errorMsg.purpose}</div>}
          </div>
          <div className={style.portion}>
            <label htmlFor="Description">Description</label>
            <textarea name="desc" id="Description" placeholder='Describe the list description' value={listForm.desc} className={`${style.form_control} ${style.textarea}`} onChange={onInputChangeHandler} />
          </div>
          <div className={style.portion}>
            <label htmlFor="type">List Type</label>
            <div className={`${style.checkbox_area} d-flex align-items-center`}>
              <div className={`${style.check}`}>
                <input type="radio" name="type" id="default" value="default" onChange={onInputChangeHandler} checked={listForm.type == 'default'?true:false}/>
                <label htmlFor="default" className='d-flex align-items-center'>
                  <span></span> Default
                </label>
              </div>
              <div className={`${style.check}`}>
                <input type="radio" name="type" id="DNC" value="dnc" onChange={onInputChangeHandler} checked={listForm.type == 'dnc'?true:false}/>
                <label htmlFor="DNC" className='d-flex align-items-center'>
                  <span></span> DNC
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={onListAddSubmit}>Proceed</button>
        </div>
      </div>

    </div>
  )
}

export default NewListPop