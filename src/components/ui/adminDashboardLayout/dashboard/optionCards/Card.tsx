import style from './style.module.scss'
type OptionCardProps = {
    item: any
}
const Card = (props: OptionCardProps) => {
  return (
    <div key={props.item.id} className={style.card}>
        <div className={style.icon}><img src={`/assets/dashboard/main_dashboard/admin/optionCards/${props.item.icon}`} alt="" /></div>
        {
            props.item.labelType === 'text' ? <h2>{props.item.label}</h2> : props.item.labelType === 'html' ? <h2 dangerouslySetInnerHTML={{__html:props.item.label}} /> : null
        }
        <p>{props.item.description}</p>
    </div>
    
  )
}

export default Card