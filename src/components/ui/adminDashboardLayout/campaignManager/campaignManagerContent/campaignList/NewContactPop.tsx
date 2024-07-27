import { useCallback, useContext, useState } from 'react'
import style from './style.module.scss'
import CheckIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/addContacts/check.svg"
import WindowsIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/addContacts/windows.svg"
import ServerIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/addContacts/api.svg"
import CrossIcon from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
import { ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
const NewListPop = ({onTypeSelect}:any) => {
    const contextCampaignManager = useContext(ContextCampaignManager);

    const [addType, setAddType] = useState("");

    const onProceedBtnHandler = useCallback(() => {
        if (addType != "") {
            contextCampaignManager.handleCampaignNewContactsfromSubList(false);
            contextCampaignManager.handleImportContactsPop(addType);
            onTypeSelect(addType);
        }
        else {
            alert("Please select the method you want to add contact with");
        }
    }, [addType]);
    return (
        <>
        <div className={`${style.campaign_list_pop_wrapper} d-flex align-items-center justify-content-center`}>
            <div className={style.ovarlay} onClick={() => contextCampaignManager.handleCampaignNewContactsfromSubList(false)}></div>
            <div className={`${style.main_area}`}>
                <div className={`${style.head} d-flex align-items-center justify-content-between`} style={{ 'marginBottom': '21px' }}>
                    <h3>New Contacts</h3>
                    <span className={style.Cross} onClick={() => contextCampaignManager.handleCampaignNewContactsfromSubList(false)}><img src={CrossIcon} alt="" /></span>
                </div>

                <div className={style.details_area}>
                    <div className={style.head}>
                        <h2>How would you like to  add contacts to this list?</h2>
                        <p>You must have permission to market to imported contacts, and each contact must contain an email address</p>
                    </div>
                    <div className={style.card_wrapper}>
                        <div className={style.card}>
                            <input type="radio" name="addNewContact" id="api" onClick={() => setAddType("api")} />
                            <label htmlFor="api" className='d-flex align-items-center flex-column'>
                                <div className={style.icon}>
                                    <img src={ServerIcon} alt="" />
                                </div>
                                <h4>Using API</h4>
                                <p>Import contacts from external service that uses API information</p>
                            </label>

                        </div>
                        <div className={style.card}>
                            <input type="radio" name="addNewContact" id="file" onClick={() => setAddType("file")} />
                            <label htmlFor="file" className='d-flex align-items-center flex-column'>
                                <div className={style.icon}>
                                    <img src={CheckIcon} alt="" />
                                </div>
                                <h4>Upload a file</h4>
                                <p>Import contacts from csv or xls file or tab delimited text file</p>
                            </label>

                        </div>
                        <div className={style.card}>
                            <input type="radio" name="addNewContact" id="manually" onClick={() => setAddType("manual")} />
                            <label htmlFor="manually" className='d-flex align-items-center flex-column'>
                                <div className={style.icon}>
                                    <img src={WindowsIcon} alt="" />
                                </div>
                                <h4>Add Manually</h4>
                                <p>Create contacts in bulk using an interface</p>
                            </label>

                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={onProceedBtnHandler}>Proceed</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default NewListPop;