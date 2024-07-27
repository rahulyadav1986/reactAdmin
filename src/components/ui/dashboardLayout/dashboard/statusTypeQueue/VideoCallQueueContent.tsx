import style from './style.module.scss'
import QueueUser from '/assets/dashboard/queue_user.svg'
import ScrollContainer from 'react-indiana-drag-scroll'
const VideoCallQueueContent = () => {
    
    
  return (
    <>
        <ScrollContainer className="scroll-container">
            <div className={`${style.video_call_wrapper} d-flex video_call_wrapper`} >
                <div className={style.inbound_wrap}>
                    <ul className={`${style.head_area_wrapper} d-flex`}>
                        <li className={style.skill}>
                            Skill
                        </li>
                        <li className={style.type_wrap}>
                            <strong>Inbound</strong>
                            <ul className={style.bound_type}>
                                <li>Staffed</li>
                                <li>Available</li>
                                <li>Queue</li>
                                <li>Active</li>
                                <li>Abandoned</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={`${style.content_area_wrapper} d-flex`}>
                        <li className={style.skill}>
                            <ul className={style.details}>
                                <li>Phone calls</li>
                                <li>Web chat</li>
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
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={style.outbound_wrap}>
                    <ul className={`${style.head_area_wrapper} d-flex`}>
                        <li className={style.skill}>
                            Campaign
                        </li>
                        <li className={style.type_wrap}>
                            <strong>Outbound</strong>
                            <ul className={style.bound_type}>
                                <li>Staffed</li>
                                <li>Available</li>
                                <li>Queue</li>
                                <li>Active</li>
                                <li>Abandoned</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={`${style.content_area_wrapper} d-flex`}>
                        <li className={style.skill}>
                            <ul className={style.details}>
                                <li>Campaign 1</li>
                                <li>Campaign 2</li>
                                <li>Campaign 3</li>
                                <li>Campaign 4</li>
                                <li>Campaign 5</li>
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
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </ScrollContainer>
      </>
  )
}

export default VideoCallQueueContent