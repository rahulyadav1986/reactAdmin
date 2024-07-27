import style from './style.module.scss'
import ToolsIcon from "/assets/dashboard/main_dashboard/admin/workflow/tools.svg"
import ModuleIcons from "/assets/dashboard/main_dashboard/admin/workflow/modules.svg"
export const ToolBox = () => {
  return (
    <div className={style.toolbox_area_wrapper}>
        <ul className='d-flex align-items-center'>
            <li>
                <span className={`${style.icon} ${style.tools} d-flex align-items-center justify-content-center`}>
                    <img src={ToolsIcon} alt="" />
                </span>                
                <span className={style.label}>TOOLS</span>
            </li>
            <li>
                <span className={`${style.icon} ${style.modules}  d-flex align-items-center justify-content-center`}>
                    <img src={ModuleIcons} alt="" />
                </span>
                <span className={style.label}>MODULES</span>
            </li>
        </ul>
    </div>
    
  )
}
