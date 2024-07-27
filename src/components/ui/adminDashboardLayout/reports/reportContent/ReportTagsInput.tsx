import { useEffect, useState } from 'react'
import style from "./style.module.scss"
import SearchIcon from "/assets/dashboard/main_dashboard/admin/reports/searchIcon.svg"

const ReportTagsInput = ({placeholder}:any) => {
    const [tags, setTags] = useState(new Array());
    const handleKeyDown = (e:any)=>{
        if(e.key !== 'Enter' && e.key !== 'Tab') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value]);
        e.target.value = ''
    }
    useEffect(()=>{
      handleKeyDown(tags);
    },[tags]);
    function removeTag(index:any){
        setTags(tags.filter((_el:any,i:any) => i !== index))
    }
  return (
    <div className={style.tags_input_container}>
        { tags.map((tag:any, index:any) => (
            <div className={style.tag_item} key={index}>
                <span className={style.text}>{tag}</span>
                <span className={style.close} onClick={() => removeTag(index)}>&times;</span>
            </div>
        )) }
        <input onKeyDown={handleKeyDown} type="text" name="" className={style.tags_input} placeholder={placeholder} />
        <span className={style.search_icon}><img src={SearchIcon} alt="" /></span>
    </div>
  )
}

export default ReportTagsInput