import { useCallback, useContext, useEffect, useState } from 'react';
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../../../contexts/campaignManagerContext';
// import useToggle from '../../../../../../../../../../hooks/useToggle';
// import TagSearchInput from '../../../../../../../../../shared/tagInput/TagSearchInput';
import CrossIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/cross.svg"
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg"
import { SkillsData } from '../../../../../../../platformConfiguration/platformConfigurationContent/callScript/callScriptTemplates/Data';
import useOutside from '../../../../../../../../../../hooks/useOutside';
const Configurations = ({ campaignData, onSaveCampaignHandler }: any) => {
  console.log("campaign data for configurations", campaignData);
  const contextCampaignManager = useContext(ContextCampaignManager);
  // const [callrationDrop, toggleCallRatioDrop] = useToggle(false);
  const [selectedSkills, setSelectedSkills] = useState(new Array());

  const getConfigurations = () => {
    let configObj = { isRecording: false, isAmdDetection: false, dialingMode: "predictive", callRatio: 1, campaignScheduling: false, callType: "international", skills: [], dncBlockedBy: [] };
    // if (campaignData.configurations != undefined && Object.keys(campaignData.configurations).length > 0) {
    if (campaignData.skills != undefined) {
      setSelectedSkills(campaignData.skills);
    }
    return { ...configObj, ...campaignData };
    // }
    // else {
    //   return configObj;
    // }
  };

  const [campaignConfigurationForm, setCampaignConfigurationForm] = useState(getConfigurations);

  useEffect(() => {
    console.log("campaign configuration form", campaignConfigurationForm);
    campaignData = { ...campaignData, ...campaignConfigurationForm };
    onSaveCampaignHandler(campaignData);
  }, [campaignConfigurationForm]);


  const onChangeFormData = useCallback((name: any, value: any) => {
    setCampaignConfigurationForm({ ...campaignConfigurationForm, [name]: value });
  }, [campaignConfigurationForm]);


  const onCheckBoxChange = useCallback((event: any) => {
    console.log(event.target);
    let dncData = campaignConfigurationForm.dncBlockedBy;
    if (event.target.checked == true) {
      if (dncData.indexOf(event.target.value) < 0) {
        dncData.push(event.target.value);
        onChangeFormData("dncBlockedBy", dncData);
      }
    }
    else {
      if (campaignConfigurationForm.dncBlockedBy.indexOf(event.target.value) >= 0) {
        dncData = dncData.filter((el: string) => el != event.target.value);
        onChangeFormData("dncBlockedBy", dncData);
      }
    }
  }, [campaignConfigurationForm, onChangeFormData]);
  // save campaign configurations --------
  const saveCampaignConfigurations = useCallback(() => {
    //campaignData['configurations'] = campaignConfigurationForm;
    campaignData = { ...campaignData, ...campaignConfigurationForm }
    onSaveCampaignHandler(campaignData);
    //contextCampaignManager.handleAddEditCampaigns(campaignData);
    contextCampaignManager.handleCreateCampaignStepThree(true);
  }, [contextCampaignManager.createCampaignStepThree, campaignConfigurationForm, onSaveCampaignHandler, contextCampaignManager.handleAddEditCampaigns]);

  // const [skillPop, toggleSkillPop] = useToggle(false);
  const onChangeSkillHandler = useCallback((event: any) => {
    if (event.target.checked == true) {
      setSelectedSkills([...selectedSkills, event.target.value]);
    }
    else {
      setSelectedSkills((selectedSkills) => {
        return selectedSkills.filter((el) => el != event.target.value);
      })
    }
  }, [selectedSkills]);

  const onSkillApply = useCallback(() => {
    setCampaignConfigurationForm({ ...campaignConfigurationForm, ['skills']: selectedSkills });
    setDropSkill(false)
  }, [campaignConfigurationForm, selectedSkills]);

  // on delete skill ---------------
  const deleteSkill = useCallback((item: any) => {
    setSelectedSkills((selectedSkills) => selectedSkills.filter((el) => el != item));
    setCampaignConfigurationForm((campaignConfigurationForm: any) => {
      campaignConfigurationForm['skills'] = selectedSkills.filter((el) => el != item);
      return campaignConfigurationForm;
    });
  }, [campaignConfigurationForm, selectedSkills]);

  // on select all click ------------------
  const onSelectAllClick = useCallback((event: any) => {
    if (event.target.checked) {
      setSelectedSkills((_selectedSkills) => SkillsData.map((el) => el.skill));
    }
    else {
      setSelectedSkills([]);
    }
  }, [SkillsData, selectedSkills]);

  const [dropSkill, setDropSkill, refSkillDrop] = useOutside(false)
  const [dropCallRatio, setDropCallRatio, refCallRatioDrop] = useOutside(false)
  return (
    <>
      <div className={`${style.form_section_area} ${contextCampaignManager.createCampaignPopType !== 'voice' ? style.others : null}`}>

        <div className={style.form_area_wrapper}>
          <div className={style.configuration_wrapper}>
            <div className={style.switch_wrapper}>
              <div className={style.switch_check}>
                <input type="checkbox" name="isRecording" id="campaignRecording" onChange={(event) => onChangeFormData(event?.target.name, event?.target.checked)} checked={campaignConfigurationForm.isRecording ? true : false} />
                <label htmlFor="campaignRecording">
                  <span></span> Campaign Recording
                </label>
              </div>
              <p>Capture valuable interactions for compliance, quality, and training.</p>
            </div>
            <div className={style.switch_wrapper}>
              <div className={style.switch_check}>
                <input type="checkbox" name="isAmdDetection" id="AMDDetection" onChange={(event) => onChangeFormData(event?.target.name, event?.target.checked)} checked={campaignConfigurationForm.isAmdDetection ? true : false} />
                <label htmlFor="AMDDetection">
                  <span></span> AMD Detection
                </label>
              </div>
              <p>dentifying live answers, answering machines, or no response in outbound calls for optimal handling</p>
            </div>
            <div className={style.dialing_mode_wrapper}>
              <label htmlFor="DiallingMode">Dialling Mode</label>
              <ul className={`${style.radio_wrapper} d-flex align-items-center`}>
                <li className='d-flex align-items-center'>
                  <input type="radio" name="dialingMode" id="Predictive" value="predictive" onChange={(event) => onChangeFormData(event?.target.name, event?.target.value)} checked={campaignConfigurationForm.dialingMode === 'predictive' ? true : false} />
                  <label htmlFor="Predictive">
                    <span></span>Predictive
                  </label>
                </li>
                <li className='d-flex align-items-center'>
                  <input type="radio" name="dialingMode" id="Preview" value="preview" onChange={(event) => onChangeFormData(event?.target.name, event?.target.value)} checked={campaignConfigurationForm.dialingMode === 'preview' ? true : false} />
                  <label htmlFor="Preview">
                    <span></span>Preview
                  </label>
                </li>
                <li className='d-flex align-items-center'>
                  <input type="radio" name="dialingMode" id="Progressive" value="progressive" onChange={(event) => onChangeFormData(event?.target.name, event?.target.value)} checked={campaignConfigurationForm.dialingMode === 'progressive' ? true : false} />
                  <label htmlFor="Progressive">
                    <span></span>Progressive
                  </label>
                </li>
              </ul>
            </div>
            <div className={`${style.call_ratio_wrapper} d-flex align-items-center`}>
              <label htmlFor="callRatio">Call Ratio</label>
              <div className={style.select_wrapper} ref={refCallRatioDrop}>
                <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setDropCallRatio(!dropCallRatio)}>
                  <span>{campaignConfigurationForm.callRatio}</span>
                  <span><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                </div>
                {
                  dropCallRatio &&
                  <ul className={`${style.drop_area}`}>
                    <li onClick={() => { onChangeFormData("callRatio", 1), setDropCallRatio(false) }}>1</li>
                    <li onClick={() => { onChangeFormData("callRatio", 2), setDropCallRatio(false) }}>2</li>
                    <li onClick={() => { onChangeFormData("callRatio", 3), setDropCallRatio(false) }}>3</li>
                  </ul>
                }

              </div>
            </div>
            <div className={style.switch_wrapper}>
              <div className={style.switch_check}>
                <input type="checkbox" name="campaignScheduling" id="CampaignScheduling" onChange={(event) => onChangeFormData(event.target.name, event.target.checked)} checked={campaignConfigurationForm.campaignScheduling ? true : false} />
                <label htmlFor="CampaignScheduling">
                  <span></span> Campaign Scheduling
                </label>
              </div>
              <p>Capture valuable interactions for compliance, quality, and training.</p>
            </div>
            <div className={style.dialing_mode_wrapper}>
              <label htmlFor="CallType">Call Type</label>
              <ul className={`${style.radio_wrapper} d-flex align-items-center`}>
                <li className='d-flex align-items-center'>
                  <input type="radio" name="callType" id="International" value="international" onChange={(event) => onChangeFormData(event.target.name, event.target.value)} checked={campaignConfigurationForm.callType === 'international' ? true : false} />
                  <label htmlFor="International">
                    <span></span>International
                  </label>
                </li>
                <li className='d-flex align-items-center'>
                  <input type="radio" name="callType" id="Domestic" value="domestic" onChange={(event) => onChangeFormData(event.target.name, event.target.value)} checked={campaignConfigurationForm.callType === 'domestic' ? true : false} />
                  <label htmlFor="Domestic">
                    <span></span>Domestic
                  </label>
                </li>

              </ul>
            </div>
            {/* <div className={`${style.call_ratio_wrapper} d-flex align-items-center`}>
                  <label htmlFor="RetryDuration">Retry Duration</label>
                  <div className={style.select_wrapper}>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={toggleRetryDurationDrop}>
                      <span>{campaignConfigurationForm.retryDuration}</span>
                      <span><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                    </div>
                    {
                      retryDurationDrop &&
                      <ul className={`${style.drop_area}`}>
                        <li onClick={() => { onChangeFormData("retryDuration", "1m"), toggleRetryDurationDrop(false) }}>1m</li>
                        <li onClick={() => { onChangeFormData("retryDuration", "2m"), toggleRetryDurationDrop(false) }}>2m</li>
                        <li onClick={() => { onChangeFormData("retryDuration", "5m"), toggleRetryDurationDrop(false) }}>5m</li>
                        <li onClick={() => { onChangeFormData("retryDuration", "10m"), toggleRetryDurationDrop(false) }}>10m</li>
                      </ul>
                    }

                  </div>
                </div> */}
            <div className={`${style.call_ratio_wrapper} d-flex align-items-center`}>
              <label htmlFor="Skills">Skills</label>
              {/* <TagSearchInput skills={skills} onChangeSkills={(value: any) => { setSkills(value) }} placeholder="Add Skill" width="auto" /> */}
              <div className={`${style.skill_main_wrapper} ${style.skill}`} ref={refSkillDrop}>
                <div className={style.skill_search_wrapper}>
                  <div className={style.tag_area} >
                    {
                      campaignConfigurationForm.skills.map((item: any) => {
                        return (<div className={`${style.skill} align-items-center justify-content-between`}>
                          <span>{item}</span>
                          <span className={style.cross}><img src={CrossIcon} alt="" onClick={() => deleteSkill(item)} /></span>
                        </div>)
                      })
                    }

                    {/* <div className={`${style.skill} align-items-center justify-content-between`}>
                              <span>Skill 2</span>
                              <span className={style.cross}><img src={CrossIcon} alt="" /></span>
                          </div>
                          <div className={`${style.skill} align-items-center justify-content-between`}>
                              <span>Skill 3</span>
                              <span className={style.cross}><img src={CrossIcon} alt="" /></span>
                          </div>
                          <div className={`${style.skill} align-items-center justify-content-between`}>
                              <span>Skill 4</span>
                              <span className={style.cross}><img src={CrossIcon} alt="" /></span>
                          </div> */}
                  </div>
                  <span onClick={()=>setDropSkill(!dropSkill)} className={style.icon}><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                </div>
                {
                  dropSkill &&
                  <div className={style.drop_area}>
                    <div className={style.top_area}>
                      <div className={`${style.search_box} d-flex align-items-center`}>
                        <img src={SearchIcon} alt="" />
                        <input type="text" name="" id="" value="" placeholder='Search lists' />
                      </div>
                      <div className={style.check_box_wrapper}>
                        <input type="checkbox" name="selectAll" id="selectAll" onChange={onSelectAllClick} />
                        <label htmlFor="selectAll">
                          <span></span>
                          Select All
                        </label>
                      </div>
                    </div>
                    <div className={style.filter_area}>
                      {
                        SkillsData.map((item: any) => {
                          return <div className={style.check_box_wrapper}>
                            <input type="checkbox" value={item.skill} id={item.id} onChange={onChangeSkillHandler} checked={selectedSkills.indexOf(item.skill) >= 0 ? true : false} />
                            <label htmlFor={item.id}>
                              <span></span>
                              {item.skill}
                            </label>
                          </div>
                        })

                      }
                    </div>
                    <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                      <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => { setDropSkill(false), setSelectedSkills([]) }}>Cancel</div>
                      <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={onSkillApply}>Apply</div>
                    </div>
                  </div>
                }

              </div>

            </div>
            <div className={`${style.dialing_mode_wrapper} ${style.no_border}`}>
              <label htmlFor="DNCBlockedBy">DNC Blocked By</label>
              <ul className={`${style.radio_wrapper} d-flex align-items-center`}>
                <li className='d-flex align-items-center'>
                  <input type="checkbox" name="phone" id="Phone" onChange={onCheckBoxChange} value="phone" checked={(campaignConfigurationForm.dncBlockedBy.indexOf("phone") >= 0) ? true : false} />
                  <label htmlFor="Phone">
                    <span></span>Phone
                  </label>
                </li>
                <li className='d-flex align-items-center'>
                  <input type="checkbox" name="firstName" id="Firstname" onChange={onCheckBoxChange} checked={(campaignConfigurationForm.dncBlockedBy.indexOf("first name") >= 0) ? true : false} value="first name" />
                  <label htmlFor="Firstname">
                    <span></span>First name
                  </label>
                </li>
                <li className='d-flex align-items-center'>
                  <input type="checkbox" name="email" id="Email" onChange={onCheckBoxChange} checked={(campaignConfigurationForm.dncBlockedBy.indexOf("email") >= 0) ? true : false} value="email" />
                  <label htmlFor="Email">
                    <span></span>Email
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className={`${style.button} ${style.cancle} d-flex align-items-center justify-content-center`} onClick={contextCampaignManager.handleCancleCreateContentPopType}>Cancle</button>
        <button type="button" className={`${style.button} ${style.cancle} d-flex align-items-center justify-content-center`} onClick={() => contextCampaignManager.handleCreateCampaignStepOne(true)}>Back</button>
        <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={saveCampaignConfigurations}>Next</button>
      </div>
    </>
  )
}

export default Configurations