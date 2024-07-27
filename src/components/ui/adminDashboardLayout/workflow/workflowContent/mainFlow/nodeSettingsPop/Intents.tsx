
import style from './style.module.scss'
import EditIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/pencil.svg"
import DeleteIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/dustbin.svg"
import AddCreateIntent from './AddCreateIntent'
import { useContext } from 'react'
import { ContextWorkflow } from '../../../../../../../contexts/workflowContext'

const Intents = ({ intents,onIntentDelete }: any) => {
    const contextWorkFlow = useContext(ContextWorkflow);
    // const [intentList,setIntentList] = useState(new Array());
    // useEffect(()=>{
    //     console.log("update intents",intents);
    //     let intentList:any = [];
    //     contextWorkFlow.showIntentValue.map((el:any,index)=>{
    //         if(intents.indexOf(el.id) >= 0)
    //         {intents
    //             intentList.push(el);
    //         }
    //         if(index == contextWorkFlow.showIntentValue.length - 1)
    //         {
    //             setIntentList(intentList);
    //         }
    //     });
    // },[intents,contextWorkFlow.showIntentValue]);
    return (
        <div className={style.intents_wrapper}>
            {/* <h3>Attach Intent</h3> */}
            {
                intents.length > 0 &&
                <ul className={style.intents_list_wrap}>
                    {
                        intents.map((item:any, index:any) => {
                            return (
                                <li className='d-flex align-items-center justify-content-between' key={index}>
                                    <span className={style.intent_name}>{item.name}</span>
                                    <span className='d-flex align-items-center'>
                                        <span className={`${style.intent_tag} d-flex align-items-center flex-wrap`}>
                                            {
                                                item.utterances.map((el:any)=>{
                                                    return (<span>{el}</span>);
                                                })
                                            }
                                            {/* <span>Yeah</span>
                                            <span>yuo</span>
                                            <span>yoh</span> */}
                                        </span>
                                        <span className={`${style.action_icon} d-flex align-items-center`}>
                                            <span onClick={()=>contextWorkFlow.handleEditIntentFromNode(item,contextWorkFlow.selectedNodeForSetting.id)}><img src={EditIcon} alt="" /></span>
                                            <span onClick={()=>onIntentDelete(item.id)}><img src={DeleteIcon} alt="" /></span>
                                        </span>
                                    </span>
                                </li>
                            );
                        })
                    }

                </ul>
            }

            <AddCreateIntent />
        </div>
    )
}

export default Intents