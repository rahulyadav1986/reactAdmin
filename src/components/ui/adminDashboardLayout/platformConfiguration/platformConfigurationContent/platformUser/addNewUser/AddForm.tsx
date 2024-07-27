import style from './style.module.scss'
import DownArrowIcon from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
import useToggle from '../../../../../../../hooks/useToggle'
import { useState } from 'react'
import Calendar from 'react-calendar'
import useOutside from '../../../../../../../hooks/useOutside'
const AddForm = ({addUserTab}:any) => {
    const Data = [
        {
            id: "1",
            label:"Rahul Yadav"
        },
        {
            id: "2",
            label:"Trisha Paul"
        },
        {
            id: "3",
            label:"Ariyam Mukherjee"
        },
        {
            id: "4",
            label:"Saugat Saha"
        }
    ]
    // const [reportingDrop, toggleReportionDrop] = useToggle(false)
    const [reportingDropValue, setRepotingDropValue] = useState("Search reporting person")
    const [reportData, setReportData] = useState(Data)  
    const [searchItem, setSearchItem] = useState('')
    // const handleToggleReportionDrop = ()=>{
    //     toggleReportionDrop(!reportingDrop)
    //     toggleRoleDrop(false)
    // }
    const handleRepotingDropValue = (e:any)=>{
        setRepotingDropValue(e.target.textContent)
        // toggleReportionDrop(false)
        setSearchItem('')
        setReportData(Data)
        setDropReporting(false)
    }
    const handleInputChange = (e: { target: { value: any } }) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
        const filteredItems:any = Data.filter((user) =>
            user.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setReportData(filteredItems);

    }


    // const [roleDrop, toggleRoleDrop] = useToggle(false)
    const [roleDropValue, setRoleDropValue] = useState("Select Role")
    // const handleToggleRoleDrop = ()=>{
    //     toggleRoleDrop(!roleDrop)
    //     toggleReportionDrop(false)
    // }
    const handleRoleDrop = (e:any)=>{
        setRoleDropValue(e.target.textContent)
        // toggleRoleDrop(false)
        setDropRole(false)
    }

    const [joiningDateCalendarPop, toggleJoiningDateCalendarPop] = useToggle(false)

   

    const [dropReportion, setDropReporting, refReporting] = useOutside(false)
    const [dropRole, setDropRole, refRole] = useOutside(false)
    

  return (
    <>
        <div className={`${style.form_area} ${addUserTab === 0 ? style.display : style.none}`}>
            <h2>Basic Information</h2>
            <div className={style.form_control_area}>
                <div className={style.portion}>
                    <label htmlFor="email">Email <span className='red'>*</span></label>
                    <input type="email" name="" id="email" placeholder='Enter your email' className={style.form_control} />
                </div>
                <div className={style.portion}>
                    <label htmlFor="UserFirstName">First Name <span className='red'>*</span></label>
                    <input type="text" name="" id="UserFirstName" placeholder='User First Name' className={style.form_control} />
                </div>
                <div className={style.portion}>
                    <label htmlFor="UserLastName">Last Name <span className='red'>*</span></label>
                    <input type="text" name="" id="UserLastName" placeholder='User Last Name' className={style.form_control} />
                </div>
                <div className={style.portion}>
                    <label htmlFor="Officialcontactnumber">Work Number</label>
                    <input type="text" name="" id="Officialcontactnumber" placeholder='Official contact number' className={style.form_control} />
                </div>
                <div className={style.portion}>
                    <label htmlFor="MobileNumber">Mobile Number</label>
                    <input type="text" name="" id="MobileNumber" placeholder='Personal mobile number' className={style.form_control} />
                </div>
                <div className={style.portion}>
                    <label htmlFor="DateofJoining">Date of Joining</label>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={toggleJoiningDateCalendarPop}>
                        <span>Select DOJ</span>
                        <span><img src={DownArrowIcon} alt="" /></span>
                    </div>                    
                    {
                        joiningDateCalendarPop && 
                        <div className={`${style.drop_area} ${style.cal}`}>
                            <Calendar  />
                        </div>
                    }                    
                </div>
            </div>
        </div>
        <div className={`${style.form_area} ${addUserTab === 1 ? style.display : style.none}`}>
            <h2>Reporting & Role</h2>
            <div className={style.form_control_area}>
                <div className={style.portion}>
                    <label htmlFor="Reporting To">Reporting To <span className="red">*</span></label>
                    {/* <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={handleToggleReportionDrop}>
                        <span>{reportingDropValue}</span>
                        <span><img src={DownArrowIcon} alt="" /></span>
                    </div>
                    {
                        reportingDrop && 
                        <div className={style.drop_area}>
                            <div className={`${style.search_area} d-flex align-items-center`}>
                                <img src="/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg" alt="" />
                                <input type="text" name="" id="" value={searchItem} placeholder='Search reporting person' onChange={handleInputChange} />
                            </div>
                            <ul>
                                {
                                    reportData.map((item)=>{
                                        return(
                                            <li onClick={handleRepotingDropValue}>{item.label}</li>
                                        )
                                    })
                                }
                                
                            </ul>
                            
                        </div>
                    } */}

                    <div ref={refReporting}>
                        <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={()=>setDropReporting(!dropReportion)}>
                            <span>{reportingDropValue}</span>
                            <span><img src={DownArrowIcon} alt="" /></span>
                        </div>
                        {
                            dropReportion && 
                            <div className={style.drop_area}>
                                <div className={`${style.search_area} d-flex align-items-center`}>
                                    <img src="/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg" alt="" />
                                    <input type="text" name="" id="" value={searchItem} placeholder='Search reporting person' onChange={handleInputChange} />
                                </div>
                                <ul>
                                    {
                                        reportData.map((item)=>{
                                            return(
                                                <li onClick={handleRepotingDropValue}>{item.label}</li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                                
                            </div>
                        }
                    </div>
                    
                    
                </div>

                <div className={style.portion}>
                    <label htmlFor="Reporting To">Reporting To <span className="red">*</span></label>
                    {/* <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={handleToggleRoleDrop}>
                        <span>{roleDropValue}</span>
                        <span><img src={DownArrowIcon} alt="" /></span>
                    </div>
                    {
                        roleDrop && 
                        <div className={style.drop_area}>
                            <ul>
                                <li onClick={handleRoleDrop}>Role 1</li>
                                <li onClick={handleRoleDrop}>Role 2</li>
                                <li onClick={handleRoleDrop}>Role 3</li>
                            </ul>
                            
                        </div>
                    } */}

                    <div ref={refRole}>

                        <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={()=>setDropRole(!dropRole)}>
                            <span>{roleDropValue}</span>
                            <span><img src={DownArrowIcon} alt="" /></span>
                        </div>
                        {
                            dropRole && 
                            <div className={style.drop_area}>
                                <ul>
                                    <li onClick={handleRoleDrop}>Role 1</li>
                                    <li onClick={handleRoleDrop}>Role 2</li>
                                    <li onClick={handleRoleDrop}>Role 3</li>
                                </ul>
                                
                            </div>
                        }

                    </div>
                    
                    
                </div>
            </div>
        </div>
        <div className={`${style.form_area} ${addUserTab === 2 ? style.display : style.none}`}>
            <h2>Account</h2>
            <div className={style.form_control_area}>
                <div className={style.portion}>
                    <label htmlFor="Username">Username <span className='red'>*</span></label>
                    <input type="text" name="" id="Username" placeholder='email or alphanumeric' className={style.form_control} />
                </div>
                <div className={style.portion}>
                    <label htmlFor="SetPassword">Set Password <span className='red'>*</span></label>
                    <input type="text" name="" id="SetPassword" placeholder='8 digit alphanumeric password' className={style.form_control} />
                </div>
            </div>
        </div>
        <div className={`${style.form_area} ${addUserTab === 3 ? style.display : style.none}`}>
            <h2>Contact</h2>
            <div className={style.form_control_area}>
                <div className={style.portion}>
                    <label htmlFor="Username">Username <span className='red'>*</span></label>
                    <input type="text" name="" id="Username" placeholder='email or alphanumeric' className={style.form_control} />
                </div>
                <div className={style.portion}>
                    <label htmlFor="SetPassword">Set Password <span className='red'>*</span></label>
                    <input type="text" name="" id="SetPassword" placeholder='8 digit alphanumeric password' className={style.form_control} />
                </div>
            </div>
        </div>

        
    </>
    
  )
}

export default AddForm