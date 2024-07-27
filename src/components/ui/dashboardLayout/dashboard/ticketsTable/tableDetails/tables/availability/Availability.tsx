import {useContext} from 'react'
import style from './style.module.scss'
import CameraIcon from "/assets/dashboard/status/camera.svg"
import SelectCampaignIcon from "/assets/dashboard/selectCampaign.svg"
import VerticalDotsIcon from "/assets/dashboard/vertical_dots.svg"
import {  AvailablityPop, CampaignStatusPop } from './availablityPop/AvailablityPop'
import { ContextHeader } from '../../../../../../../../contexts/headerContext'

const Availability = ({index}:any) => {
  const AvailabilityToggleContext = useContext(ContextHeader)
  return ( 
    <div className={`${style.available_main_wrapper} available_main_wrapper`}>
      {
        AvailabilityToggleContext.visibleStatus && 
        <div className={style.available_button_wrap}>
          <div className={`${style.availability_wrapper} availability_wrapper`} onClick={()=>AvailabilityToggleContext.handleStatusSupervisorToggle(index)}>
              <div className={`${style.inner_area} inner_area d-flex align-items-center justify-content-between`}>
                <span className={`${style.bell} bell d-flex align-items-center`}>
                      <img src={AvailabilityToggleContext.statusValue.icon} alt="" />
                      {AvailabilityToggleContext.statusValue.label} 
                  </span>
                  <span><img src={VerticalDotsIcon} alt="" /></span>    
                  <span className={style.time}>{(AvailabilityToggleContext.statusTime > 0)?("0" +(Math.floor(AvailabilityToggleContext.statusTime/3600))).slice(-2):"00"}:{(AvailabilityToggleContext.statusTime > 0)?("0"+(Math.floor((AvailabilityToggleContext.statusTime%3600)/60))).slice(-2):"00"}:{(AvailabilityToggleContext.statusTime > 0)?("0"+(Math.floor(AvailabilityToggleContext.statusTime%60))).slice(-2):"00"}</span>
              </div>
          </div>
          {
            AvailabilityToggleContext.statusDrop === index &&
            <AvailablityPop />
          }
      </div>
      }
      
      

      {
        AvailabilityToggleContext.onCampaignClick &&
        <div className={`${style.availablity_campaign_wrapper} ${style.button_two} d-flex availablity_campaign_wrapper `}>
          <div className={style.available_button_wrap}>
            <div className={`${style.availability_wrapper} availability_wrapper`}  onClick={()=>AvailabilityToggleContext.handleStatusSupervisorToggle(index)}>
              <div className={`${style.inner_area} inner_area d-flex align-items-center justify-content-between`}>
                  <span className={`${style.bell} bell d-flex align-items-center`}>
                      <img src={CameraIcon} alt="" />
                      {AvailabilityToggleContext.statusCampaignValue}
                  </span>
                  <span><img src={VerticalDotsIcon} alt="" /></span>
                  <span className={style.time}>{(AvailabilityToggleContext.statusTime > 0)?("0" +(Math.floor(AvailabilityToggleContext.statusTime/3600))).slice(-2):"00"}:{(AvailabilityToggleContext.statusTime > 0)?("0"+(Math.floor((AvailabilityToggleContext.statusTime%3600)/60))).slice(-2):"00"}:{(AvailabilityToggleContext.statusTime > 0)?("0"+(Math.floor(AvailabilityToggleContext.statusTime%60))).slice(-2):"00"}</span>
              </div>
            </div>
            {
              AvailabilityToggleContext.statusDrop &&
              <AvailablityPop />
            }
          </div>
          <div className={style.available_button_wrap}>
            <div className={`${style.availability_wrapper} ${style.button_campaign} availability_wrapper`} onClick={AvailabilityToggleContext.handleCampaignToggle}>
              <div className={`${style.inner_area} inner_area d-flex align-items-center justify-content-between`}>
                  <span className={`${style.bell} bell d-flex align-items-center`}>
                      {AvailabilityToggleContext.selectCampaignValue}
                  </span>
                  <span><img src={SelectCampaignIcon} alt="" /></span>
              </div>
            </div>
            {
              AvailabilityToggleContext.selectCampaignDrop &&
              <CampaignStatusPop />
            }
          </div>
        </div>
      }
      
      
      

    </div>
  )
}

export default Availability