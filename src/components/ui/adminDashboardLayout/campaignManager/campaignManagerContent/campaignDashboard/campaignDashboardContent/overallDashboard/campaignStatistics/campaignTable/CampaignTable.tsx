import { CapiagnTableData } from './Data'
import style from './style.module.scss'

const CampaignTable = () => {
  const CampaignTableStatus = CapiagnTableData.map((tableItem)=>{
    return(
      <tr key={tableItem.id}>
        <td>{tableItem.name}</td>
        <td>{tableItem.contacted}</td>
        <td>{tableItem.failed}</td>
        <td>{tableItem.dnc}</td>
        <td>{tableItem.maxAttampts}</td>
      </tr>
    )
  })
  return (
    <>
      <div className={style.campaign_table_wrapper}>
        <table>
          <thead>
            <tr>
              <th>CAMPAIGN</th>
              <th>CONTACTED</th>
              <th>FAILED</th>
              <th>DNC</th>
              <th>MAXIMUM ATTEPMTS</th>
            </tr>
          </thead>
          <tbody>
            { CampaignTableStatus }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CampaignTable