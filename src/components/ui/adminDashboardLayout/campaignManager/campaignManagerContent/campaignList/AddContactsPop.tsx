import { useCallback, useContext, useState } from 'react'
import style from './style.module.scss'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
import UploadIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/addContacts/upload.svg"
import Doc from "/assets/dashboard/main_dashboard/admin/campaignManager/addContacts/doc.png"
import { ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
import { useDropzone } from 'react-dropzone';
import { read, utils } from 'xlsx';

const AddContactsPop = ({onDataParse}:any) => {
    const contextCampaignManager = useContext(ContextCampaignManager)
    const [selectedDoc,setSelectedDoc] = useState(new Array());

    const { getRootProps, getInputProps } = useDropzone({ accept: { 'application/*': ['.csv', '.xls', '.xlsx', '.txt'] }, maxFiles: 1, onDropAccepted: (selectedFile) => dropAcceptHandler(selectedFile), onDropRejected: (fileRejectionReason) => { dropRejectionHandler(fileRejectionReason) } });


    const dropAcceptHandler = useCallback((selectedFile: any) => {
        console.log("selected file", selectedFile[0]);
        contextCampaignManager.handleUploadDoc(true);
        setSelectedDoc(selectedFile);
        
    }, []);

    const dropRejectionHandler = useCallback((reason: any) => {
        console.log("fail reason", reason);

    }, []);

    const closePopup = useCallback(()=>{
        contextCampaignManager.handleImportContactsPop("");
        setSelectedDoc([]);
    },[]);

    const parseContactList = useCallback(()=>{
        if(selectedDoc.length > 0)
        {
            const file = selectedDoc[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target?.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setTimeout(()=>{
                        onDataParse(rows);
                        contextCampaignManager.handleFinalImportDoc(true);
                    },200);
                }
            }
            reader.readAsArrayBuffer(file);
        }
    },[selectedDoc,onDataParse]);
    return (
        <div className={`${style.campaign_list_pop_wrapper} d-flex align-items-center justify-content-center`}>
            <div className={style.ovarlay} onClick={() => contextCampaignManager.handleImportContactsPop("")}></div>
            <div className={`${style.main_area}`}>
                <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                    <h3>Upload Contacts</h3>
                    <span className={style.Cross} onClick={closePopup}><img src={CrossIcon} alt="" /></span>
                </div>
                <div className={style.drop_zone} >
                    <div {...getRootProps({ className: `dropzone` })}>
                        <div className={`${style.drop_area} d-flex align-items-center justify-content-center`}>
                            {/* <input type="file" name="" id="" onChange={()=>contextCampaignManager.handleUploadDoc(true)} /> */}
                            <input {...getInputProps()} />
                            <div className={`${contextCampaignManager.uploadDoc === true ? style.browse : null} d-flex align-items-center justify-content-center`}>
                                <span><img src={UploadIcon} alt="" /></span>
                                <span>{contextCampaignManager.uploadDoc !== true ? 'Drop the xls file or' : null}  <strong>Browse</strong> </span>
                            </div>
                            {
                                contextCampaignManager.uploadDoc === true && selectedDoc.length > 0 ?
                                    <div className={`${style.doc} d-flex align-items-center`}>
                                        <div><img src={Doc} alt="" /></div>
                                        <h4>{selectedDoc[0].name}<br /><span>34KB</span></h4>
                                    </div> : null

                            }
                        </div>
                    </div>
                    <div className={style.bottom_area_label_area}>
                        <a href='/assets/Sample.xlsx' target='download'><h4>Download a sample template</h4> </a>
                        <p>You can download this template and add contact details and upload the same file here</p>
                    </div>
                </div>
                {
                    contextCampaignManager.uploadDoc === true ?
                        <div className="d-flex justify-content-end">
                            <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={parseContactList}>Import</button>
                        </div> : null
                }

            </div>
        </div>
    )
}

export default AddContactsPop