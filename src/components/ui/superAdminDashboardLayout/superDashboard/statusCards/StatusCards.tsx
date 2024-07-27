
import { useLocation } from 'react-router-dom'
import OwnedCompaniesCard from './OwnedCompaniesCard'
import ResellersCard from './ResellersCard'
import ResellersCompaniesCard from './ResellersCompaniesCard'

import style from './style.module.scss'

const StatusCards = () => {
  const location = useLocation()
  const ResellerAdminLocation = location.pathname.indexOf('/reseller-admin')>=0
  return (
    <>
        <div className={`${style.status_cards_wrapper} ${ResellerAdminLocation && style.reseller } `}>
            <OwnedCompaniesCard />
            {
              ResellerAdminLocation ? null : 
              <>
                <ResellersCard />
                <ResellersCompaniesCard />
              </>
              
            }
            
        </div>
    </>
  )
}

export default StatusCards