import style from './style.module.scss'
import UploadIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/upload.svg";
import MicIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/mic.svg";
import DeleteIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/delete.svg";
import { useDropzone } from 'react-dropzone';
import { useCallback, useEffect, useState } from 'react';
const UseAudio = ({ content, onAudioFileChange }: any) => {
    const [audioFileList, setAudioFileList] = useState(content.fileList);
    const [selectedFile, setSelectedFile] = useState(content.selectedFile);
    const [mediaContentValue, setMediaContent] = useState(content);


    const dropAcceptHandler = useCallback((acceptedFile: any) => {
        console.log("file list", acceptedFile, audioFileList);
        if (acceptedFile.length > 0) {
            if (audioFileList.length > 0) {
                console.log("audio file list", audioFileList);
                let errorMsg: any = "";
                audioFileList.map((item: any, index: any) => {
                    if (item.path == acceptedFile[0].path && item.name == acceptedFile[0].name) {
                        errorMsg = "You have already selected a file with same name";
                    }
                    if (index == audioFileList.length - 1) {
                        if (errorMsg != "") {
                            alert(errorMsg);
                        }
                        else {
                            setAudioFileList([...audioFileList, ...acceptedFile]);
                        }
                    }
                });
            }
            else {
                setAudioFileList([...audioFileList, ...acceptedFile]);
            }
        }

    }, [audioFileList]);
    const dropRejectionHandler = useCallback((rejectionInfo: any) => {
        //alert(1);
        console.log("rejection response", rejectionInfo);
        if(rejectionInfo.length > 0)
        {
            if(rejectionInfo[0].errors != undefined && rejectionInfo[0].errors.length > 0)
            {
                if(rejectionInfo[0].errors[0].code != undefined && rejectionInfo[0].errors[0].code == 'file-invalid-type')
                {
                    alert("Please select audio file");
                }
                else if(rejectionInfo[0].errors[0].message != undefined && rejectionInfo[0].errors[0].message != "")
                {
                    alert(rejectionInfo[0].errors[0].message);
                }
                else
                {
                    alert("Unable to select file.Please try selecting the file again.");
                }
                
            }
            
        }
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ accept: { 'audio/*': ['mp3'] },maxSize:2000000, onDropAccepted: (selectedFile) => dropAcceptHandler(selectedFile), onDropRejected: (fileRejectionReason) => { dropRejectionHandler(fileRejectionReason) } });

    const deleteAudioFile = useCallback((elIndex: any) => {
        setAudioFileList((audioFileList: any) => {
            // alert(index);
            // audioFileList.splice(index,1);
            // console.log("delete",audioFileList);
            let fileList = audioFileList.filter((el: any, index: any) => el != null && elIndex != index);
            return fileList;
        });
    }, [audioFileList, setAudioFileList]);
    const selectCheckboxHandler = useCallback((fileName: any) => {
        setSelectedFile(fileName);
    }, [])
    useEffect(() => {
        console.log("selected media", mediaContentValue);
        setMediaContent({ ...mediaContentValue, fileList: audioFileList, selectedFile: selectedFile });
    }, [audioFileList, selectedFile]);

    useEffect(() => {
        onAudioFileChange(mediaContentValue);
    }, [mediaContentValue])

    useEffect(()=>{
        setMediaContent(content);
        setAudioFileList(content.fileList);
        setSelectedFile(content.selectedFile);
    },[content]);
    return (
        <div className={style.use_recorded_audio_wrapper}>
            <div {...getRootProps({ className: `dropzone` })}>
                <div className={`${style.heading} d-flex align-items-center justify-content-center`}>
                    <input {...getInputProps()} />
                    <span><img src={UploadIcon} alt="" /></span>
                    <span>Drop the Audio File or <span>Browse</span> </span>
                </div>
            </div>

            <ul className={style.list_method}>
                <li>Unique name(not already in the list)</li>
                <li>8 kHz sampling rate, 16 bit PCM, Mono</li>
                <li>Less than 2 MB</li>
                <li>Ethical content</li>
            </ul>
            {audioFileList.length > 0 && <ul className={style.audio_list}>
                {
                    audioFileList.map((item: any, index: any) => {
                        return (<li key={index}>
                            <input type="radio" name="useRadio" id={index} checked={item.name == selectedFile ? true : false} onClick={() => selectCheckboxHandler(item.name)} />
                            <label htmlFor={index} className='d-flex align-items-center justify-content-between'>
                                <span className={`${style.label_area} d-flex align-items-center`}>
                                    <span className={style.check}></span>
                                    <span><img src={MicIcon} alt="" /></span>
                                    <span>{item.name}</span>
                                </span>
                                <span style={{ cursor: 'pointer' }} ><img src={DeleteIcon} alt="" onClick={() => deleteAudioFile(index)} /></span>
                            </label>
                        </li>)
                    })

                }
            </ul>}
        </div>
    )
}

export default UseAudio