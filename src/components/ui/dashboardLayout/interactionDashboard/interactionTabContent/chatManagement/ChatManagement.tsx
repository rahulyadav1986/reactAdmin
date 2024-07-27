import ChatBox from './chatBox/ChatBox'
import ChatPrompt from './chatPromt/ChatPrompt'
import ChatTab from './chatTab/ChatTab'
import style from './style.module.scss'

function ChatManagement() {
  return (
    <div className={style.chat_management_wrapper}>
        <ChatTab />
        <div className={`${style.chat_box_wrapper} d-flex flex-column justify-content-between`}>
            <ChatBox />
            <ChatPrompt />
        </div>
        
    </div>
  )
}

export default ChatManagement