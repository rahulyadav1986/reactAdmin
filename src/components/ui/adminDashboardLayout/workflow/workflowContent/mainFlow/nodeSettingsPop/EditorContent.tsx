
import style from "./style.module.scss"
import SmileIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/smile.svg"
import MessageAddIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/addMessage.svg"
import Dustbin from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/dustbin.svg"
import IPhone from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/iphone.svg"
import BackArrow from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/backArrow.svg"
import CloudIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/cloud.svg"
import { useCallback, useState } from "react"
import EmojiPicker from 'emoji-picker-react';
import useOutside from "../../../../../../../hooks/useOutside";
import { useDropzone } from 'react-dropzone';
import ChooseTemplate from "../../../../campaignManager/campaignManagerContent/campaigns/campaignsContent/liveView/stepCampaignPop/stepForm/ChooseTemplate"
// import useToggle from "../../../../../../../../../../hooks/useToggle"

const EditorContent = ({ messageContent, onSaveMessageHandler }: any) => {
    // const [callrationDrop, toggleCallRatioDrop] = useToggle(false);
    // const handleBlankLayer = () => {
    //   toggleCallRatioDrop(false);
    //   // toggleRetryDurationDrop(false)
    // }
    // const [senderDrop, setSenderDrop] = useState(false)
    // const handleSenderDrop = ()=>{
    //   setSenderDrop(!senderDrop)
    // }
    const { getRootProps, getInputProps } = useDropzone({ accept: { 'image/*': ['.jpeg', '.png', '.jpg'] }, maxFiles: 1, maxSize: 1000000, onDropAccepted: (selectedFile) => dropAcceptHandler(selectedFile), onDropRejected: (fileRejectionReason) => { dropRejectionHandler(fileRejectionReason) } });

    const handleSenderDropValue = (e: any) => {
        //setSenderDropValue(e.target.textContent)
        setmessageContentForm({ ...messageContentForm, ['senderNo']: e.target.textContent });
        // setSenderDrop(false)
        setDrop(false)
    }
    const [emogidrop, setEmogidrop] = useState(false)
    const [uploadFile, setUploadFile] = useState(false);
    const [selectedImageURL, setSelectedImageURL] = useState<string | null>(null);
    const getConfigurations = () => {
        let configObj = { "text": "", "image": null, "senderNo": "" };
        // if (messageContent.messageConfiguration != undefined && Object.keys(messageContent.messageConfiguration).length > 0) {
        if (messageContent.image != undefined && messageContent.image != null) {
            setSelectedImageURL(messageContent.image);
        }
        return { ...configObj, ...messageContent };
        // }
        // else {
        //   return configObj;
        // }
    };
    const [messageContentForm, setmessageContentForm] = useState(getConfigurations);
    const handleEmogidrop = () => {
        setEmogidrop(!emogidrop)
        setUploadFile(false)
    }

    const handleUploadFile = (id: any) => {
        setUploadFile(id)
        setEmogidrop(false)
    }

    const emojiClickHandler = useCallback((emoji: any) => {
        console.log(emoji);
        handleEmogidrop();
        //settext(text.concat(emoji.emoji));
        if (messageContentForm.text.length < 119) {
            setmessageContentForm({ ...messageContentForm, ["text"]: messageContentForm.text.concat(emoji.emoji) });
        }
    }, [emogidrop, messageContentForm]);
    const [drop, setDrop, ref] = useOutside(false);
    const [dropEmogi, setDropEmogi, refEmogi] = useOutside(false)
    const onChangeFormValue = useCallback((fieldName: string, value: string) => {
        setmessageContentForm({ ...messageContentForm, [fieldName]: value });
    }, [messageContentForm]);

    const dropAcceptHandler = useCallback((selectedFile: any) => {
        // console.log("selected file", selectedFile[0], getBase64(selectedFile[0]));
        getBase64(selectedFile[0]).then((base64Url: any) => {

            handleUploadFile(false);
            if (base64Url != undefined) {
                console.log("selected file", selectedFile[0], base64Url);
                setmessageContentForm({ ...messageContentForm, ['image']: base64Url });
                setSelectedImageURL(base64Url);
            }
        });
    }, [messageContentForm, selectedImageURL]);

    const dropRejectionHandler = useCallback((reason: any) => {
        console.log("fail reason", reason);
        if (reason[0] != undefined && reason[0]['errors'] != undefined && reason[0]['errors'][0] != undefined && reason[0]['errors'][0]['message'] != undefined) {
            alert(reason[0]['errors'][0]['message']);
        }
        else {
            alert("Selected file is invalid.Please select a valid file.");
        }

    }, []);
    // delete selected File -------
    const deleteSelectedFile = useCallback(() => {
        setSelectedImageURL(null);
        setmessageContentForm({ ...messageContentForm, ['image']: null })
    }, [messageContentForm, selectedImageURL]);
    // save campaign configurations --------
    //   const saveCampaignConfigurations = useCallback(() => {
    //     // messageContent['messageConfiguration'] = messageContentForm;
    //     messageContent = { ...messageContent, ...messageContentForm };
    //     onSaveMessageHandler(messageContent);
    //     //contextCampaignManager.handleAddEditCampaigns(messageContent);
    //     contextCampaignManager.handleCreateCampaignStepThree(true);
    //   }, [contextCampaignManager.createCampaignStepThree, messageContentForm, onSaveMessageHandler, contextCampaignManager.handleAddEditCampaigns]);
    const getBase64 = (file: File) => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL: any = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                console.log(baseURL);
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };

    const [chooseTemplatePopup, setChooseTemplatePopup] = useState(false)
    const handleChooseTemplatePopup = (id: any) => {
        setChooseTemplatePopup(id)
    }
    const onTemplateSelect = useCallback((template: string) => {
        //alert(template);
        setmessageContentForm({ ...messageContentForm, ["text"]: template });
    }, [messageContentForm]);


    return (
        <>
            <div className={`${style.form_section_area}`} >
                {/* {
          callrationDrop ? <div className={style.overlay} onClick={handleBlankLayer}></div> : null
        } */}

                <div className={`${style.smsWhatsapp_info_wrapper} d-flex`}>
                    <div className={style.left}>
                        <div className={style.section}>
                            <div className={`${style.label_area} d-flex align-items-center justify-content-between`}>
                                <label htmlFor="">MESSAGE</label>
                                {/* <div className={style.upload_area}>
                  <input type="file" name="" id="templates" />
                  <label htmlFor="templates">Choose from templates</label>
                </div> */}
                                <div className={style.upload_area} onClick={() => handleChooseTemplatePopup(true)}>
                                    <label htmlFor="templates">Choose from templates</label>
                                </div>
                            </div>
                            <div className={style.message_area}>
                                <textarea name="sms_text" id="sms_text" onChange={(e) => { onChangeFormValue("text", e.target.value) }} maxLength={120} value={messageContentForm.text} />
                                <div className={`${style.footer_pallet} d-flex align-items-center justify-content-between`}>
                                    <div className={`${style.ft_left} d-flex align-items-center`}>
                                        <div>
                                            <span onClick={() => handleUploadFile(true)}><img src={MessageAddIcon} alt="" /></span>
                                            {
                                                uploadFile &&
                                                <div className={`${style.upload_doc_area} d-flex align-items-center justify-content-center`} >
                                                    <div className="overlay" onClick={() => handleUploadFile(false)}></div>
                                                    <div className={`${style.main_area} d-flex align-items-center justify-content-center`} >
                                                        <span className={style.back} onClick={() => handleUploadFile(false)}><img src={BackArrow} alt="" /></span>
                                                        <div {...getRootProps({ className: `dropzone` })}>
                                                            <div className={`${style.upload_main_area} d-flex align-items-center justify-content-center flex-column`}>
                                                                <span><img src={CloudIcon} alt="" /></span>
                                                                <p>Choose a file or drag & drop it here</p>
                                                                <p><span>JPEG and PNG formats, up to 1MB</span></p>
                                                                <div className={style.upload_file}>
                                                                    <input {...getInputProps()} />
                                                                    <label htmlFor="browse">Browse File</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>

                                        <div ref={refEmogi}>
                                            <span onClick={() => setDropEmogi(!dropEmogi)}><img src={SmileIcon} alt="" /></span>
                                            {
                                                dropEmogi &&
                                                <div className={style.emogi_drop_area_wrap}>
                                                    <EmojiPicker onEmojiClick={emojiClickHandler} />
                                                </div>
                                            }
                                        </div>






                                    </div>
                                    <div className={style.fi_right}>
                                        <span>Characters</span><br />
                                        {(120 - messageContentForm.text.length) >= 0 ? (120 - messageContentForm.text.length) : 0}/120 <span>left</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.section}>
                            <div className={`${style.label_area} d-flex align-items-center justify-content-between`}>
                                <label htmlFor="">GENERAL OPTIONS</label>
                            </div>
                            <div className={style.drop_area}>
                                <p>Sender</p>
                                <div className={style.drop_section} ref={ref}>
                                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setDrop(!drop)}>
                                        <span>{messageContentForm.senderNo != "" ? messageContentForm.senderNo : "--Select No--"}</span>
                                        <span><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                                    </div>
                                    {
                                        drop &&
                                        <ul className={style.drop_list}>
                                            <li onClick={handleSenderDropValue}>+91 7777777</li>
                                            <li onClick={handleSenderDropValue}>+91 9143116017</li>
                                            <li onClick={handleSenderDropValue}>+91 9088569878</li>
                                        </ul>
                                    }

                                </div>

                            </div>

                        </div>
                        {(selectedImageURL != null && selectedImageURL != "") &&

                            <div className={style.section}>
                                <div className={`${style.label_area} d-flex align-items-center justify-content-between`}>
                                    <label htmlFor="">IMAGES</label>
                                </div>
                                <div className={style.image_area}>
                                    <img src={selectedImageURL} alt="" />
                                    <div className={`${style.area} d-flex align-items-center justify-content-between`}>
                                        <p onClick={handleUploadFile}>Replace</p>
                                        <span onClick={deleteSelectedFile}><img src={Dustbin} alt="" /></span>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    <div className={style.right}>
                        <div className={style.ihpone_wrapper}>
                            <img src={IPhone} alt="" />
                            <div className={style.message_area}>
                                <div className={`${style.msg_portion} ${style.outgoing}`}>
                                    {messageContentForm.text != "" && <div className={style.message}>
                                        {/* <p>🎉 Exclusive Offer Alert! 🎉<br />
                  Hello [First Name]! As a valued customer, enjoy a 20% discount on your next purchase. Use code: SAVE20 at checkout. Limited time only. Happy shopping! 🛍️"</p>                   */}
                                        <p className={style.p_wrap}>{messageContentForm.text}</p>
                                    </div>}
                                    {selectedImageURL != null && <img src={selectedImageURL} alt="" />}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    chooseTemplatePopup && <ChooseTemplate handleChooseTemplatePopup={handleChooseTemplatePopup} onTemplateSelect={onTemplateSelect} />
                }


            </div>
            <div className={`${style.button_area_wrap} d-flex align-items-center justify-content-end`}>
                <div className={`${style.button} ${style.cancle} d-flex align-items-center justify-content-center`} onClick={() => onSaveMessageHandler(false)}>Back</div>
                <div className={`${style.button}  d-flex align-items-center justify-content-center`} onClick={()=>onSaveMessageHandler(messageContentForm)}>Save</div>
            </div>
        </>
    )
}

export default EditorContent