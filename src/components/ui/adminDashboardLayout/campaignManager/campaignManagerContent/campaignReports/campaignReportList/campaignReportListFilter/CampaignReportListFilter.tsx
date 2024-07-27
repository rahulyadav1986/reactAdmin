import { useContext } from 'react'
import style from './style.module.scss'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/down.svg"
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
import { CardCampaignData } from './Data'
import useOutside from '../../../../../../../../hooks/useOutside'
const CampaignReportListFilter = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  const [drop, setDrop, ref] = useOutside(false)
  return (
    <div className={style.campaign_report_list_wrapper}>
        <div className={style.filter_area}>
            <div className={style.filter_portion}>
                <label htmlFor="">Campaign <span>*</span></label>
                {/* <div className={` ${style.drop_down_area} ${contextCampaignManager.filterTextHighlighted && style.highlighted} d-flex align-items-center justify-content-between`} onClick={contextCampaignManager.handleCampaignReportCardCampaignFilterDrop}>
                    <span>{contextCampaignManager.cardCampaignValue}</span> 
                    <img src={DownArrow} alt="" />
                </div>
                {
                    contextCampaignManager.campaignReportCardCampaignFilterDrop &&
                    <ul className={style.filter_pop_wrapper}>
                        {
                            CardCampaignData.map((item)=>{
                                return(
                                    <li key={item.id} onClick={contextCampaignManager.handleCampaignReportCardCampaignFilterSelect}>{item.label}</li>
                                )
                            })
                        }
                    </ul>
                } */}
                <div ref={ref}>
                    <div className={` ${style.drop_down_area} ${contextCampaignManager.filterTextHighlighted && style.highlighted} d-flex align-items-center justify-content-between`} onClick={()=>setDrop(!drop)}>
                        <span>{contextCampaignManager.cardCampaignValue}</span> 
                        <img src={DownArrow} alt="" />
                    </div>
                    {
                        drop &&
                        <ul className={style.filter_pop_wrapper}>
                            {
                                CardCampaignData.map((item)=>{
                                    return(
                                        <li key={item.id} onClick={contextCampaignManager.handleCampaignReportCardCampaignFilterSelect}><span onClick={()=>setDrop(false)}>{item.label}</span> </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            </div>
            <div className={style.save_report_button}>Save Report As</div>
        </div>
        
    </div>
  )
}

export default CampaignReportListFilter