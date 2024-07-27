import { useContext } from 'react'
import style from './style.module.scss'
import { ContextWorkFlowInsight } from '../../../../../../../contexts/workFlowInsightContext'
import AddIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/add.svg"
import TrashIcon from "/assets/dashboard/main_dashboard/admin/insights/trash.svg"
import EditIcon from "/assets/dashboard/main_dashboard/admin/insights/pencil.svg"
import { ContextWorkflow } from '../../../../../../../contexts/workflowContext'
const ViewIntents = () => {
const contentWorkFlowIntent = useContext(ContextWorkFlowInsight)
  const contextWorkFlow =  useContext(ContextWorkflow);
 
  return (
    <div className={style.view_intent_wrapper}>
        <div className={style.intent_header_wrapper}>
            <ul className={style.bedcrumb}>
                <li className={style.main} onClick={()=>contentWorkFlowIntent.handleViewIntent(false)}>Workflows</li>
                <li>Intents</li>
            </ul>
        </div>
        <div className={style.intent_table_main_wrapper}>
          <div className={style.intent_table_wrapper}>
            <div className={`${style.intents_table_header} d-flex align-items-center justify-content-between`}>
              <h2>All Intents</h2>
              <div className={`${style.new_workflow_button } d-flex align-items-center justify-content-center`} onClick={()=>contextWorkFlow.handleCreateIntent(true)}>
                  <span><img src={AddIcon} alt="" /></span> New Intent
              </div>
            </div>
            <div className={style.main_table_wrapper}>
              <table>
                <thead>
                  <tr>
                    <th className={style.check}>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="thead_check" id="thead_check" />
                            <label htmlFor="thead_check"><span></span></label>
                        </div>
                    </th>
                    <th>INTENT NAME</th>
                    <th>CREATED ON</th>
                    <th># of UTTERANCES</th>
                    <th className={style.lastUpdate}>Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    contextWorkFlow.showIntentValue.map((item:any,i)=>{
                      const current = new Date();
                      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
                      const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
                      return(
                        <tr key={item.id}>
                          <td>
                              <div className={style.checkbox}>
                                  <input type="checkbox" name="thead_check" id="1" />
                                  <label htmlFor="1"><span></span></label>
                              </div>
                          </td>
                          <td>{item.name}</td>
                          <td>{date}</td>
                          <td>{item.utterances.join(",")}</td>
                          <td className='d-flex align-items-center justify-content-between'>
                          {date}, {time}
                            <div className={`${style.action_icons} d-flex align-items-center`}>
                              <span><img src={EditIcon} alt="" onClick={()=>contextWorkFlow.handleEditIntent(i)} /></span>
                              <span><img src={TrashIcon} alt="" onClick={()=>contextWorkFlow.handleRemoveIntent(i)} /></span>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                 
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        
    </div>
  )
}

export default ViewIntents