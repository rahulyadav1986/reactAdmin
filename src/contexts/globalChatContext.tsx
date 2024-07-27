import { ReactNode, createContext, useState  } from "react";
type ContentProps ={
    children: ReactNode;
}

export const ContextGlobalChat = createContext({
  defaultChat: true,
  addNewChat: false,
  addNewGroup: false,
  newchat: false,
  checkGroup: new Array(),
  newChatGroup: false,
  globalChat:false,

  handleAddChat: (_id:any)=>{},
  handleBackChat: (_id:any)=>{},
  handleAddGroup: (_id:any)=>{},
  handleBackGroup: (_id:any)=>{},
  handleAddNewChat: (_id:any)=>{},
  handleBackNewChat: ()=>{},
  handleCheckGroup: (_id:any,_isChecked:any)=>{},
  handleChatGroup: (_id:any)=>{},
  handleBackGroupChat: ()=>{},
  handleGlobalChatToggle: (_id:any)=>{}
});


export const GlobalChatContext = (props: ContentProps)=> {
    const [defaultChat, setDefaultChat] = useState(true)
    const [addNewChat, setAddNewChat] =useState(false)
    const [addNewGroup, setAddNewGroup] =useState(false)
    const [newchat, setNewChat] =useState(false)
    const [checkGroup, setCheckGroup] = useState<string[]>([])
    const [newChatGroup, setNewChatGroup] = useState(false)

    const [globalChat, setGlobalChat] = useState(false)
    const handleGlobalChatToggle = (id:any)=>{
      setGlobalChat(id)
      if(id===true){
        setDefaultChat(true)
        setAddNewChat(false)
        setAddNewGroup(false)
        setNewChat(false)
        setNewChatGroup(false)
        
      }else{
        setDefaultChat(false)
        setAddNewChat(false)
        setAddNewGroup(false)
        setNewChat(false)
        setNewChatGroup(false)
      }
      
      
      console.log(id)
  }
    

    const handleAddChat = (id:any)=>{
        setAddNewChat(id)
        setDefaultChat(false)
      }
    
      const handleBackChat = (id:any)=>{
        setAddNewChat(false)
        setDefaultChat(id)
      }
    
      const handleAddGroup = (id:any)=>{
        setAddNewChat(false)
        setAddNewGroup(id);
        setCheckGroup([]);
      }
    
      const handleBackGroup = (id:any)=>{
        setAddNewGroup(false)
        setAddNewChat(id)
      }
    
      const handleAddNewChat = (id:any)=>{
        setNewChat(id)
        setAddNewChat(false)
        setDefaultChat(false)
        setGlobalChat(true)
        console.log("working...")
      }
    
      const handleBackNewChat= ()=>{
        setDefaultChat(true)
        setNewChat(false)
      }

      const handleCheckGroup = (item:any,isChecked:boolean)=>{
        console.log("is checked",isChecked);
        if(isChecked)
        {
          console.log("check group",checkGroup,isChecked);

          setCheckGroup((el)=>[...el,item]);
        }
        else
        { 
          console.log("check group",checkGroup);
          // removing item
          setCheckGroup((itemArr)=>{
            let memberIndex:any = itemArr.findIndex((el:any)=>el.id == item.id);
            let arr = itemArr;
            if(memberIndex >= 0){
              console.log(memberIndex);
              arr.splice(memberIndex, 1);
              return [...itemArr,...arr];
            }
            else
            {
              return itemArr;
            }
            
          });

          console.log("check group after deletion",checkGroup,checkGroup.length);
          
        }
        
        //console.log("selected member",item)
      }

      const handleChatGroup = (id:any)=>{
        setNewChatGroup(id)
        setAddNewGroup(false)
      }

      const handleBackGroupChat = ()=>{
        setNewChatGroup(false)
        setAddNewGroup(true)
      }

      

    return (
        <ContextGlobalChat.Provider value={{
          defaultChat,
          addNewChat,
          addNewGroup,
          newchat,
          checkGroup,
          newChatGroup,
          globalChat,
          handleAddChat,
          handleBackChat,
          handleAddGroup,
          handleBackGroup,
          handleAddNewChat,
          handleBackNewChat,
          handleCheckGroup,
          handleChatGroup,
          handleBackGroupChat,
          handleGlobalChatToggle
        }}>
            {props.children}
        </ContextGlobalChat.Provider>
    );
}