import { useState, useEffect } from 'react'
import style from './style.module.scss'
import SearchIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/search.svg"
const TagSearchInput = ({skills,onChangeSkills, placeholder, width}:any)=>{
    const [tags, setTags] = useState(new Array());
    const handleKeyDown = (e:any)=>{
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value]);
        onChangeSkills([...skills,value]);
        e.target.value = ''
    }
    // useEffect(()=>{
    //     onChangeUtterance(tags);
    // },[tags]);
    useEffect(()=>{
        setTags(skills);
    },[skills]);
    function removeTag(index:any){
        setTags(tags.filter((_el:any,i:any) => i !== index))
    }
    

    return (
        <div className={style.tags_input_container} style={{'width': `${width}`}}>
            { tags.map((tag:any, index:any) => (
                <div className={style.tag_item} key={index}>
                    <span className={style.text}>{tag}</span>
                    <span className={style.close} onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" name="utterances" className={style.tags_input} placeholder={placeholder} />
            <img src={SearchIcon} alt="" />
        </div>
    )
}

export default TagSearchInput