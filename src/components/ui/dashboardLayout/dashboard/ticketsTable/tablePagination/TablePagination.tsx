
import style from './style.module.scss'
import LeftArrow from "/assets/interactionCenter/arr_left.svg"
import RightArrow from "/assets/interactionCenter/arr_right.svg"

const TablePagination = () => {
  
  return (
    <div className={`${style.table_pagination_wrapper} d-flex align-items-center justify-content-end`}>
        <select name="" id="" >
          <option value="10">Rows per page: 10</option>
          <option value="20">Rows per page: 20</option>
          <option value="50">Rows per page: 50</option>
          <option value="100">Rows per page: 100</option>
          <option value="200">Rows per page: 200</option>
          <option value="500">Rows per page: 500</option>
          <option value="1000">Rows per page: 1000</option>
        </select>
        <div className='d-flex align-items-center'>
          <span className={style.no}>1-100</span>
          <div className={`${style.arrows} d-flex align-items-center`}>
             <span><img src={LeftArrow} alt="" /></span>
             <span><img src={RightArrow} alt="" /></span>
          </div>
        </div>
    </div>
  )
}

export default TablePagination