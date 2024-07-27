import style from './style.module.scss'
import QueueUser from '/assets/dashboard/queue_user.svg'
const MessageQueueContent = () => {
  return (
        <>
            <ul className={`${style.head_area_wrapper} ${style.message_queue} d-flex`}>
                <li className={style.skill}>
                    Skill
                </li>
                <li className={style.type_wrap}>
                    <ul className={style.bound_type}>
                        <li>Staffed</li>
                        <li>Available</li>
                        <li>Queue</li>
                        <li>Active</li>
                        <li>Hold</li>
                        <li>Abandoned</li>
                        <li>Total</li>
                    </ul>
                </li>
            </ul>
            <ul className={`${style.content_area_wrapper} ${style.message_queue} d-flex`}>
                <li className={style.skill}>
                    <ul className={style.details}>
                        <li>email</li>
                        <li>DIY advanced...</li>
                        <li>Customer experience</li>
                        <li>Training & Learning</li>
                        <li>Skill 5</li>
                    </ul>
                </li>
                <li className={style.type_wrap}>
                    <ul className={style.bound_type}>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>1</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>5</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                    </ul>
                    <ul className={style.bound_type}>
                    <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>1</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>5</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                    </ul>
                    <ul className={style.bound_type}>
                    <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>1</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>5</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                    </ul>
                    <ul className={style.bound_type}>
                    <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>1</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>5</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                    </ul>
                    <ul className={style.bound_type}>
                    <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>1</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>5</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                        <li>
                            <span><img src={QueueUser} alt="" /></span>
                            <span>6</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
  )
}

export default MessageQueueContent