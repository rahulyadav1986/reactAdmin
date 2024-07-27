import { SetStateAction, useContext, useState } from 'react'
import AddForm from './AddForm'
import TabList from './TabList'
import style from './style.module.scss'
import { ContextPlatformConfiguration } from '../../../../../../../contexts/platformConfigurationContext'

const AddNewUser = () => {
  const [addUserTab, setAddUserTab] = useState(0)
  const handleAddUserTab = (id: SetStateAction<any>)=>{
      setAddUserTab(id)
  }
  const platFormConfig = useContext(ContextPlatformConfiguration)
  return (
    <div className={`${style.new_user_add_wrapper} d-flex justify-content-between `}>
      <AddForm addUserTab={addUserTab} />
      <TabList addUserTab={addUserTab} handleAddUserTab={handleAddUserTab} />
      <div className={`${style.button_area} d-flex align-items-center`}>
          <div className={style.button}>Save User</div>
          <div className={style.button} onClick={()=>platFormConfig.handleRecentAddUserList(false)}>Cancel</div>
      </div>
    </div>
  )
}

export default AddNewUser