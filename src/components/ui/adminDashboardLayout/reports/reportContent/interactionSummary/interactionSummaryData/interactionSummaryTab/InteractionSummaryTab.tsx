import { useContext } from 'react';
import style from './style.module.scss';
import { ContextReport } from '../../../../../../../../contexts/reportContext';

const InteractionSummaryTab = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <>
      <div className={style.tab_area}>
        <ul className={`${style.tab_button_area} d-flex align-items-center`}>
          <li className={`${contextFilterReport.summaryTab === 0 ? style.active : null}`} onClick={()=>contextFilterReport.handleSummaryTab(0)}>Data View </li>
          <li className={`${contextFilterReport.summaryTab === 1 ? style.active : null}`} onClick={()=>contextFilterReport.handleSummaryTab(1)}>Graphical View</li>
        </ul>
        {
          contextFilterReport.summaryTab === 1 ? 
          <p className={style.note}>Note: Visuals shown here are representation purpose and these will be rendered dynamically based on the data </p> : null
        }
      </div>
      
    </>
    
  );
};

export default InteractionSummaryTab;
