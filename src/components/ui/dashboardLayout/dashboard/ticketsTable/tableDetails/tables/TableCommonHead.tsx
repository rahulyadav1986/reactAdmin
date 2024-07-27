import { useLocation } from 'react-router-dom'
import { AdminCommonTableColumn, AgentCommonTableColumn, SupervisorCommonTableColumn } from './Data'
import style from './style.module.scss'

const TableCommonHead = () => {
  const location = useLocation()
  const AgentLocation = location.pathname.indexOf('/agent')>=0
  const SupervisorLocation = location.pathname.indexOf('/supervisor')>=0
  const AdminLocation = location.pathname.indexOf('/admin')>=0
  return (
    <thead>
        <tr>
            <td>
                <div className={style.checkbox}>
                    <input type="checkbox" name="thead_check" id="thead_check" />
                    <label htmlFor=""><span></span></label>
                </div>
            </td>
            {
                AgentLocation ?
                    <>
                        {
                            AgentCommonTableColumn.map((item,i)=>{
                                return(
                                    <>
                                        <td key={i}>{item.label}</td>
                                    </>
                                )
                            })
                        }
                        <td colSpan={2}></td>
                    </>
                 :
                SupervisorLocation ?
                    <>
                        {
                            SupervisorCommonTableColumn.map((item,i)=>{
                                return(
                                    <>
                                        <td key={i}>{item.label}</td>
                                    </>
                                )
                            })
                        }
                        <td colSpan={2}></td>
                    </>
                 :
                AdminLocation ?
                    <>
                        {
                            AdminCommonTableColumn.map((item,i)=>{
                                return(
                                    <>
                                        <td key={i}>{item.label}</td>
                                    </>
                                )
                            })
                        }
                    </>
                : null
            }
        </tr>
    </thead>
  )
}

export default TableCommonHead