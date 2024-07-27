import style from './style.module.scss'
import Loader from "/assets/dashboard/main_dashboard/admin/campaignManager/list/spinner.svg"

const CampaignSublistDataLoader = () => {
  const LodareData = [
    { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }, { id: "8" },{ id: "9" },{ id: "10" },{ id: "11" },{ id: "12" },{ id: "13" }
  ]
  return (
    <>
      <div className={style.campaign_report_area_wrapper} style={{'position' : 'relative'}}>
        <div className={style.table_responsive_wrap}>
          <table className={`${style.ticketTable}`}>
            <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Contacted</th>
                  <th>Contacted date & Time</th>
                  <th>USER DISPOSITION</th>
                  <th>SYSTEM DISPOSITION</th>
                  <th colSpan={2}>Notes</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className={style.main_loader_area}>
          {
            LodareData.map((itemLoader)=>{
              return(
                 <LoaderStrip key={itemLoader.id} />
              )
            })
          }
          <div className={style.main_loader_wrap}>
            <span><img src={Loader} alt="" /></span>
            <p>Please wait while importing contacts from xls file </p>
            <h6>Cancel</h6>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default CampaignSublistDataLoader

export const LoaderStrip = ()=>{
  return(
      <ul className={style.loader_strip}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  )
}