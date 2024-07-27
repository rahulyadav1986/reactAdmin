import { useCallback, useState } from 'react';
import style from './style.module.scss'

const ChooseTemplate = ({ handleChooseTemplatePopup,onTemplateSelect }: any) => {
    const [templateList] = useState(["🎉🎉 Huge savings on [Product/Service] at [Company Name]’s sale until [Month] end. See our latest offers at [Location] on [Address]. Shop now! 😀😀", "🎈🎈 Huge savings on [Product/Service] at [Company Name]’s sale until [Month] end. See our latest offers at [Location] on [Address]. Shop now! Shop now! 🎈🎈", "🎉🎉 Exclusive offer alert! Get [Discount] off on [Product/Service] at [Company Name]. Limited time only. Visit us at [Location] on [Address]. Don’t miss out! 😀😀", "🎈🎈 Save this spring with [Company Name]! Seasonal sale on. [Discount] off [Product/Service] until [Month] end. Visit [Location] on [Address]. Shop now! 🎈🎈"]);

    const templateSelectHandler = useCallback((id:number)=>{
        onTemplateSelect(templateList[id]);
        handleChooseTemplatePopup(false);
    },[templateList,handleChooseTemplatePopup,onTemplateSelect]);
    const copyTextHandler = (id:number)=>{
        navigator.clipboard.writeText(templateList[id]);
    }
    return (
        <div className={`${style.choose_template_wrapper} d-flex align-items-center justify-content-center`}>
            <div className="overlay" onClick={() => handleChooseTemplatePopup(false)}></div>
            <div className={style.main_wrapper}>
                <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                    <h3>Choose Template</h3>
                    <span className={style.Cross} onClick={() => handleChooseTemplatePopup(false)}>
                        <img src="/assets/dashboard/main_dashboard/admin/reports/reportCross.svg" alt="" />
                    </span>
                </div>
                <div className={style.ready_made_template_area}>
                    <ul className={style.list}>
                        {
                            templateList.map((template,index) => {
                                return (

                                    <li key={index}>
                                        <p>{template}</p>
                                        <div className={`${style.buttonGroup} d-flex align-items-center`}>
                                            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>templateSelectHandler(index)}>Select</div>
                                            <div className={`${style.button} ${style.copy} d-flex align-items-center justify-content-center`}onClick={()=>copyTextHandler(index)}>Copy Text</div>
                                        </div>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChooseTemplate