import { useContext, useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
import UserFormAvatar from "/assets/dashboard/main_dashboard/superAdmin/userFormAvatar.png"
import { ContextSuperAdminDashboard } from '../../../../contexts/superAdminContext'
import { v4 as uuidv4 } from 'node-uuid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    companyName: string;
    description: string;
    contactPerson: string;
    contactPersonPhoneNumber: string;
    address: string;
    contactPersonEmail: string;
    username: string;
    maxUserLimit: number,
    renewalPeroid: string,
};

const CompanyForm = () => {
    const fileUploader: any = useRef();
    const [selectedImage, setSelectedImageURL] = useState("");
    const { handleAddResourcePage, addCompanyLS, editingResource, updateCompanyLS, companyUnderReseller, handleResellerDetails } = useContext(ContextSuperAdminDashboard)
    // console.log(editingResource);
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm<Inputs>();
    useEffect(() => {
        if (editingResource != null && editingResource.imageBase64 != "") {
            setSelectedImageURL(editingResource.imageBase64);
        }
        else {
            setSelectedImageURL("");
        }
    }, [editingResource]);
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        if (editingResource != null && editingResource.id != undefined) {
            updateCompanyLS({
                id: editingResource.id,
                companyName: data.companyName,
                description: data.description,
                contactPerson: data.contactPerson,
                contactPersonPhoneNumber: data.contactPersonPhoneNumber,
                contactPersonEmail: data.contactPersonEmail,
                address: data.address,
                username: data.username,
                maxUserLimit: data.maxUserLimit,
                renewalPeroid: data.renewalPeroid,
                imageBase64: selectedImage,
                // isActive: 1,
                // underReseller: companyUnderReseller,
                isArchived: false,
                //  createdDateTime: new Date()
            });
        }
        else {
            addCompanyLS({
                id: uuidv4(),
                companyName: data.companyName,
                description: data.description,
                contactPerson: data.contactPerson,
                contactPersonPhoneNumber: data.contactPersonPhoneNumber,
                contactPersonEmail: data.contactPersonEmail,
                address: data.address,
                username: data.username,
                maxUserLimit: data.maxUserLimit,
                renewalPeroid: data.renewalPeroid,
                imageBase64: selectedImage,
                // isActive: 1,
                underReseller: companyUnderReseller,
                createdDateTime: new Date(),
                isArchived: false
            });
        }
        // handleSideBarTab(1)
        handleAddResourcePage(false);
        if (companyUnderReseller != "") {
            handleResellerDetails(companyUnderReseller);

        }
    }
    const validateNotEmpty = (value: string) => {
        return value.trim() !== '' || 'Field is required';
    };
    const selectFile = () => {
        fileUploader.current.click();
    };
    const handleSelectedFile = (evt: any) => {
        //console.log(evt.target.value,Array.from(evt.target.files));
        const files: any = Array.from(evt.target.files);
        getBase64(files[0]).then((base64: any) => {
            // console.log(base64);
            setSelectedImageURL(base64);
        }).catch((e) => {
            console.log(e);
        });
    };
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
    return (
        <div className={style.user_form_wrapper}>
            <div className={`${style.main} d-flex`}>
                <span className={style.avatar_back} onClick={selectFile}>
                    <img src={(selectedImage != "") ? selectedImage : UserFormAvatar} alt="" />
                </span>
                <input type="file" id="file" ref={fileUploader} style={{ display: "none" }} onChange={handleSelectedFile} accept='image/*' />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.form_wrapper}>
                        <div className={style.section}>
                            <h2>Basic Company Information</h2>
                            <div className={style.form_field_area_wrapper}>
                                <div className={style.portion}>
                                    <label htmlFor="companyName">Company Name <span className='red'>*</span></label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        className={style.form_control} placeholder='Enter company name' defaultValue={editingResource != null ? editingResource.companyName : ""}
                                        {...register("companyName", {
                                            required: "Company name is required",
                                            validate: validateNotEmpty
                                        })}
                                    />

                                    {errors.companyName && (
                                        <span className={style.error}>{errors.companyName.message}</span>
                                    )}
                                </div>
                                <div className={style.portion}>
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        className={style.form_control}
                                        placeholder='Description about the company for better visibility'
                                        defaultValue={editingResource != null ? editingResource.description : ""}
                                        {...register("description", {

                                        })}></textarea>
                                    {errors.description && (
                                        <span className={style.error}>{errors.description.message}</span>
                                    )}
                                </div>
                                <div className={style.portion}>
                                    <label htmlFor="contactPerson">Contact Person</label>
                                    <input
                                        type="text"
                                        id="contactPerson"
                                        className={style.form_control}
                                        placeholder='Enter name of the person whom we contact'
                                        defaultValue={editingResource?.contactPerson}
                                        {...register("contactPerson", {

                                        })}
                                    />
                                    {errors.contactPerson && (
                                        <span className={style.error}>{errors.contactPerson.message}</span>
                                    )}
                                </div>
                                <div className={style.portion}>
                                    <label htmlFor="contactPersonPhoneNumber">Contact Person Phone Number</label>
                                    <input type="text"
                                        id="contactPersonPhoneNumber"
                                        className={style.form_control}
                                        placeholder='Enter phone number'
                                        maxLength={10}
                                        defaultValue={editingResource?.contactPersonPhoneNumber}
                                        {...register("contactPersonPhoneNumber", {
                                            // pattern: {
                                            //     value: /^[6-9][0-9]*$/,
                                            //     message: "phone no. is invalid"
                                            // },
                                            maxLength: {
                                                value: 10,
                                                message: "phone no. is invalid"
                                            },
                                            minLength: {
                                                value: 10,
                                                message: "phone no. is invalid"
                                            }
                                        })}
                                    />
                                    {errors.contactPersonPhoneNumber && (
                                        <span className={style.error}>{errors.contactPersonPhoneNumber.message}</span>
                                    )}
                                </div>
                                <div className={style.portion}>
                                    <label htmlFor="contactPersonEmail">Contact Person Email</label>
                                    <input
                                        type="text"
                                        id="contactPersonEmail"
                                        className={style.form_control}
                                        placeholder='Enter email'
                                        defaultValue={editingResource?.contactPersonEmail}
                                        {...register("contactPersonEmail", {
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Email is invalid",
                                            },
                                        })}
                                    />
                                    {errors.contactPersonEmail && (
                                        <span className={style.error}>{errors.contactPersonEmail.message}</span>
                                    )}
                                </div>
                                <div className={style.portion}>
                                    <label htmlFor="address">address</label>
                                    <textarea
                                        id="address"
                                        className={style.form_control}
                                        placeholder='enter Company address'
                                        defaultValue={editingResource?.address}
                                        {...register("address")}
                                    ></textarea>

                                    {errors.address && (
                                        <span className={style.error}>{errors.address.message}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={style.section}>
                            <h2>Default Admin Credentials</h2>
                            <div className={style.form_field_area_wrapper}>
                                <div className={style.portion}>
                                    <label htmlFor="username">Username <span className='red'>*</span></label>
                                    <input
                                        type="text" id="username" className={style.form_control} placeholder='Enter username' defaultValue={editingResource?.username}
                                        {...register("username", {
                                            required: 'Username is required',
                                            validate: validateNotEmpty

                                        })}
                                    />
                                    {errors.username && (
                                        <span className={style.error}>{errors.username.message}</span>
                                    )}
                                </div>
                                <p>A link will be shared with contact email mentioned above to set the passoword</p>
                                <p style={{ 'color': '#058DDA', 'marginTop': '16px', 'cursor': 'pointer' }}>Copy Platform Link</p>
                            </div>
                        </div>

                        <div className={style.section}>
                            <h2>Licensing & User Limits</h2>
                            <div className={style.form_field_area_wrapper}>
                                <div className={style.portion}>
                                    <label htmlFor="maxUserLimit">Max Users Limit</label>
                                    <input type="number" id="maxUserLimit" className={style.form_control} placeholder='500' defaultValue={editingResource?.maxUserLimit}
                                        {...register("maxUserLimit", {
                                            min: { value: 0, message: 'Value must be greater than 0' }
                                        })}
                                    />
                                </div>
                                <div className={style.portion}>
                                    <label htmlFor="renewalPeroid">Renewal Period</label>
                                    <input
                                        type="text"
                                        id="renewalPeroid"
                                        className={style.form_control} placeholder='2 Years' defaultValue={editingResource?.renewalPeroid}
                                        {...register("renewalPeroid")}
                                    />
                                    {errors.renewalPeroid && (
                                        <span className={style.error}>{errors.renewalPeroid.message}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={`${style.submit_button_wrapper} d-flex align-items-center`}>
                            <button type="submit" className={`${style.button} d-flex align-items-center justify-content-center`}>save</button>
                            <div className={`${style.button} ${style.cancel} d-flex align-items-center justify-content-center`} onClick={() => handleAddResourcePage(false)}>cancel</div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompanyForm