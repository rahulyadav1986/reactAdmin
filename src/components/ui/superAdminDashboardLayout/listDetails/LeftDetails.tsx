
import moment  from "moment";
import style from "./style.module.scss"
import UserFormAvatar from "/assets/dashboard/main_dashboard/superAdmin/userFormAvatar.png";

const LeftDetails = ({item, type,editUserFromList}:any) => {
    let tzInfo = moment(item.createdDateTime)
  return (
    <div className={style.left_details}>
        <div className={style.avatar_back}>
            <img src={(item.imageBase64 != "")?item.imageBase64:UserFormAvatar} alt="" />
        </div>
        <div className={style.left_info_details}>
            <h1>{item.companyName}</h1>
            <span className={style.tag}>{type}</span>
            <ul className={style.contact_list_wrapper}>
                <li className='d-flex align-items-center'>
                    <span className={style.icon}>
                        <img src="/assets/interactionCenter/profileCard/c1.svg" alt="" />
                    </span>
                    <span className={`${style.text_area} d-flex flex-column`}>
                        <span className={style.label}>CONTACT EMAIL</span>
                        <span className={style.value}>{item.contactPersonEmail != ""?item.contactPersonEmail:" --- "}</span>
                    </span>
                </li>
                <li className='d-flex align-items-center'>
                    <span className={style.icon}>
                        <img src="/assets/interactionCenter/profileCard/c2.svg" alt="" />
                    </span>
                    <span className={`${style.text_area} d-flex flex-column`}>
                        <span className={style.label}>CONTACT NO</span>
                        <span className={style.value}>{item.contactPersonPhoneNumber != ""?item.contactPersonPhoneNumber:" --- "}</span>
                    </span>
                </li>
                <li className='d-flex align-items-center'>
                    <span className={style.icon}>
                        <img src="/assets/interactionCenter/profileCard/c2.svg" alt="" />
                    </span>
                    <span className={`${style.text_area} d-flex flex-column`}>
                        <span className={style.label}>CONTACT PERSON</span>
                        <span className={style.value}>{item.contactPerson != ""?item.contactPerson:" --- "}</span>
                    </span>
                </li>
                <li className='d-flex align-items-center'>
                    <span className={style.icon}>
                        <img src="/assets/interactionCenter/profileCard/map.svg" alt="" />
                    </span>
                    <span className={`${style.text_area} d-flex flex-column`}>
                        <span className={style.label}>Address</span>
                        <span className={style.value}>{item.address != ""? item.address:" --- "}</span>
                    </span>
                </li>
            </ul>
            <ul className={`${style.contact_list_wrapper} ${style.status}`}>
                <li className='d-flex align-items-center'>
                    <span className={`${style.text_area} d-flex flex-column`}>
                        <span className={style.label}>TIMEZONE</span>
                        <span className={style.value}>
                            ({tzInfo.utcOffset() > 0 ? `+${tzInfo.utcOffset()}`: tzInfo.utcOffset()})
                            {Intl.DateTimeFormat().resolvedOptions().timeZone}
                        </span>
                    </span>
                </li>
                <li className='d-flex align-items-center'>
                    <span className={`${style.text_area} d-flex flex-column`}>
                        <span className={style.label}>ONBOARDED ON</span>
                        <span className={style.value}>{tzInfo.toLocaleString()}</span>
                    </span>
                </li>
                <li className='d-flex align-items-center'>
                    <span className={`${style.text_area} d-flex flex-column`}>
                        <span className={style.label}>License Expires on</span>
                        <span className={style.value}>{item.lienceExpire}</span>
                    </span>
                </li>
                <li className='d-flex align-items-center'>
                    <span className={`${style.text_area} d-flex flex-column`}>
                        <span className={style.label}>PREFERRED LANGUAGE</span>
                        <span className={style.value}>{item.prefferdLanguage}</span>
                    </span>
                </li>
            </ul>
            
            <div className={`${style.button_wrapper}`}>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>editUserFromList(type,item)}>Edit {(type == 'company')?'Company':'Reseller'}</div>
                <div className={`${style.button} d-flex align-items-center justify-content-center`}>Archive {(type == 'company')?'Company':'Reseller'}</div>
            </div>
        </div>
    </div>
    
  )
}

export default LeftDetails