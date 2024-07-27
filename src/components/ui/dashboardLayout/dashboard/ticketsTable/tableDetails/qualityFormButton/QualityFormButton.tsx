import { useContext } from 'react'
import style from './style.module.scss'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'

const QualityFormButton = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  return (
    <div className={`${style.quality_form_button} d-flex align-items-center justify-content-center`} onClick={()=>tablePopupContext.handleQualityFormPopup(true)}>Quality Form</div>
  )
}

export default QualityFormButton