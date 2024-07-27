import { useCallback, useEffect, useState } from 'react'
import style from './style.module.scss'
import DropIcon from "/assets/dashboard/main_dashboard/admin/workflow/down.svg"
//import { ContextWorkflow } from '../../../../../../../contexts/workflowContext'
import useOutside from '../../../../../../../hooks/useOutside'
const WebHooks = ({ nodeInfo, onWebhookDetailsChange }: any) => {
  //console.log("node info",nodeInfo);
 // const contextWebHook = useContext(ContextWorkflow);
  const hookUrlData = ["GET", "POST", "PUT", "DELETE"];
  const [webhookInfo, setWebhookInfo] = useState(nodeInfo.data.webhookDetails);
  const formDataHandler = useCallback(() => {
    if (Object.keys(webhookInfo).length > 0) {
      return { name: ((webhookInfo.name != undefined) ? webhookInfo.name : ""), method: ((webhookInfo.method != undefined) ? webhookInfo.method : "GET"), url: ((webhookInfo.url != undefined) ? webhookInfo.url : ""), type: ((webhookInfo.type != undefined) ? webhookInfo.type : "api_key"), timeout: ((webhookInfo.timeout != undefined) ? webhookInfo.timeout : ""), description: ((webhookInfo.description != undefined) ? webhookInfo.description : "") }
    }
    else {
      return { name: "", method: "GET", url: "", type: "api_key", timeout: "", description: "" }
    }
  }, [webhookInfo]);
  const [formData, setFormData] = useState(formDataHandler);
  const onFormValueChange = useCallback((event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("form data", formData);
  }, [formData]);

  const onMethodSelect = useCallback((item: any) => {
    setFormData({ ...formData, method: item });
  }, [formData]);


  const saveWebhook = useCallback(() => {
    onWebhookDetailsChange(formData);
  }, [formData, onWebhookDetailsChange]);

  useEffect(() => {
    setWebhookInfo(nodeInfo.data.webhookDetails);
  }, [nodeInfo]);
  useEffect(() => {
    setFormData(formDataHandler);
  }, [webhookInfo]);
  const [dropWebhookUrl,setDropWebhookUrl, refDropWebhookUrl] = useOutside(false)
  return (
    <div className={style.webhooks_wrapper}>
      <h2 onClick={saveWebhook}>{Object.keys(webhookInfo).length > 0 ? 'Update' : 'Add'} Web Hook</h2>
      <div className={style.add_area}>
        <div className={style.form_control_wrap}>
          <label htmlFor="Web_hook_name">Web hook name</label>
          <input type="text" name="name" placeholder='Enter web hook name' className={style.form_control} value={formData.name} onChange={onFormValueChange} />
        </div>
        <div className={style.form_control_wrap}>
          <label htmlFor="url">URL</label>
          <div className={`${style.url_area} d-flex`}>
            <input type="text" name="url" value={formData.url} className={style.form_control} onChange={onFormValueChange} />
            <div ref={refDropWebhookUrl}>
              <div className={style.drop_area_web} onClick={() => setDropWebhookUrl(!dropWebhookUrl)}>
                <span>{formData.method}</span>
                <span><img src={DropIcon} alt="" /></span>
              </div>
              {
                dropWebhookUrl &&
                  <ul className={style.drop_action_area}>
                    {
                      hookUrlData.map((item, i) => {
                        return (
                          <li key={i} onClick={() => setDropWebhookUrl(false)}> <span onClick={() => onMethodSelect(item)}>{item}</span> </li>
                        )
                      })
                    }

                  </ul>
              }
            </div>
            
            
            

          </div>
        </div>
        <div className={style.form_control_wrap}>
          <label htmlFor="type">Type</label>
          <select name="type" id="Type" className={style.form_control} value={formData.type} onChange={onFormValueChange}>
            <option value="api_key">API Key</option>
          </select>
        </div>
        <div className={style.form_control_wrap}>
          <label htmlFor="Timeout">Timeout</label>
          <input type="no" name="timeout" id="Timeout" placeholder='10 Seconds' className={style.form_control} value={formData.timeout} onChange={onFormValueChange} />
        </div>
        <div className={`${style.form_control_wrap} ${style.textarea}`}>
          <label htmlFor="Description">Description</label>
          <textarea name="description" placeholder='Welcome node that greets the customer' className={`${style.form_control} `} value={formData.description} onChange={onFormValueChange} />
        </div>
      </div>
    </div>
  )
}

export default WebHooks