import { ReactNode, createContext, useState,  } from "react";
import { useLocation, useNavigate } from "react-router-dom";
type ContentProps ={
    children: ReactNode;
}



export const ContextHeader = createContext({
    callToggle: false,
    handleCallToggle: ()=>{},
    hamToggle: false,
    handleHamburgerToggle: ()=>{},
    // searchToggle: false,
    // handleSearchToggle: ()=>{},
    profileDrop: false,
    handleProfilePopToggle: ()=>{},
    statusDrop: false,
    handleStatusToggle: ()=>{},
    handleStatusItem: (_e:any)=>{},
    statusValue: {icon:"",label:"Please Select",id:""},
    visibleStatus: true,
    selectCampaignDrop: false,
    handleCampaignToggle: (_e:any)=>{},
    statusCampaignValue: "",
    selectCampaignValue: "",
    onCampaignClick: false,
    handleOnCampaignClick: (_e:any)=>{},
    // globalRef: null,



    // globalChat: false,
    // handleGlobalChatToggle: (_id:any)=>{},

   
   // handleLoadingGoodAvailablity: ()=>{},
    statusTime:0,
    handleTimer:(_method:any = 'start')=>{},
    handleLogout: ()=>{},
    adminMainMenu: false,
    handleAdminMainMenuToggle:(_id:any)=>{},
    adminMenuStatusValue: {id:"",label:"Overview",tagline:""},
    handleAdminMenuStatus: (_item:any) =>{},
    navigateFromCampaign:"",
    handleNavigateFromCampaign:(_item:any)=>{},







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
    handleGlobalChatToggle: (_id:any)=>{},

    handleDefaultOverlay: ()=>{},

    handleStatusSupervisorToggle: (_id:any)=>{}
});


export const HeaderContext = (props: ContentProps)=> {
    const [callToggle, setCallToggle] = useState(false);    
    const [statusDrop, setStatusDrop] = useState(false);
    const [statusValue, setStatusValue] = useState({icon:"",label:"Please Select",id:""});
    const [visibleStatus, setVisibleStatus] = useState(true)
    


    const [selectCampaignDrop, setSelectCampaignDrop] = useState(false)
    const [statusCampaignValue, setStatusCampaignValue] = useState("Campaign")
    const [selectCampaignValue, setSelectCampaignValue] = useState("Select campaign")
    const [onCampaignClick, setOnCampaignClick] = useState(false);
    const [statusTime,setStatusTime] = useState(0);
    const [timerID,setTimerID] = useState(0);
    const [hamToggle, setHamToggle] = useState(false);
    // const [searchToggle, setSearchToggle] = useState(false);
    const [profileDrop, setProfileDrop] = useState(false);


    

    const handleCallToggle = () => {
        setCallToggle(!callToggle)
        setStatusDrop(false)
        setHamToggle(false)
        // setSearchToggle(false)
        setProfileDrop(false)
        setSelectCampaignDrop(false)
    };
    const handleStatusToggle = () => {
        setStatusDrop(!statusDrop)
        setCallToggle(false)
        // setHamToggle(false)
        // setSearchToggle(false)
        setProfileDrop(false)
        setSelectCampaignDrop(false)
    };
    const handleStatusSupervisorToggle = (id:any)=>{
      setStatusDrop(id)
    }
    const handleStatusItem = (item:any)=>{
        setStatusDrop(false)
        setStatusValue(item)
        setStatusCampaignValue(item.label)
        setVisibleStatus(true)
        setOnCampaignClick(false)
    }

    const handleCampaignToggle = (e:any)=>{
        setSelectCampaignDrop(!selectCampaignDrop)
        setSelectCampaignValue(e.target.textContent)
        setStatusDrop(false)
        setProfileDrop(false)
        setCallToggle(false)
    }

    const handleOnCampaignClick = (e:any)=>{
        setStatusCampaignValue(e.target.textContent)
        setOnCampaignClick(true)
        setVisibleStatus(false)
        setStatusDrop(false)
    }
    

    const handleHamburgerToggle = ()=>{
        setHamToggle(!hamToggle)
        console.log("clickd")
        setCallToggle(false)
        // setSearchToggle(false)
        setProfileDrop(false)
    }
    // const handleSearchToggle = ()=>{
    //     setSearchToggle(!searchToggle)
    //     setHamToggle(false)
    //     setCallToggle(false)
    //     setStatusDrop(false)
    //     setProfileDrop(false)
    // }
    const handleProfilePopToggle = ()=>{
        setProfileDrop(!profileDrop)
        setCallToggle(false)
        setStatusDrop(false)
        setHamToggle(false)
        setSelectCampaignDrop(false)
        // setSearchToggle(false)
        setAdminMainMenu(false)
    }

    const handleTimer = (method: any = "start") => {
        

        if (method == 'start') {
            let tID: any;
            let start = Date.now();
            // starting the timer -----
            setStatusTime(0);
            cancelAnimationFrame(timerID);
            // timer method ---
            const startTimer = () => {

                let interval = (Date.now() - start) / 1000;
                // console.log("timer interval", interval);
                if (interval > 1) {
                    interval = 1;
                    start = Date.now();
                    setStatusTime((el) => el + 1);
                }

                if (interval <= 1) {

                    // console.log("time", time);
                    tID = requestAnimationFrame(startTimer);
                    setTimerID(tID);
                }
            }
            // storing the ID for cancelling frame and initializing -----
            tID = requestAnimationFrame(startTimer);
            // console.log("timer ", tID);
            setTimerID(tID);
        }
    }

    // const handleTimer = (method:any = "start")=>{
    // console.log("timer ID",timerID);
    //   clearInterval(timerID);
    //   if(method == 'start')
    //   {
    //     setStatusTime(0);
    //     const tID:any =  setInterval(()=>{
    //       setStatusTime((el)=>el+1);
    //       },1000);
    //       console.log(tID);
    //     setTimerID(tID);
    //   }
    // }
    // const globalRef = useRef<HTMLDivElement>(null);

    // const globalRef= useRef<HTMLDivElement | undefined | null>(null);

    

    // const handleOutsideClick = (e:any)=>{
    //     console.log("called")
    //     if(globalRef.current != undefined && !globalRef.current.contains(e.target)){
    //         setCallToggle(false)
    //         setProfileDrop(false)
    //         setStatusDrop(false)
    //         setSelectCampaignDrop(false)
        
    //     }
    // }

    // useEffect(()=>{
    //     document.addEventListener("mousedown", handleOutsideClick)
    // })



    // const [globalChat, setGlobalChat] = useState(false)
    

    // const handleGlobalChatToggle = (id:any)=>{
    //     setGlobalChat(id)
    //     console.log(id)
    // }

    
    // const handleLoadingGoodAvailablity = ()=>{
    //     const data = {icon:"/assets/dashboard/status/check.png",label:"Availablity",id:"1"}
    //     setStatusValue(data)
    //     console.log(data)
        
    // }

    const location = useLocation()
    const currentLocation = location.pathname.indexOf('/agent')>=0
    const navigate = useNavigate()
    const handleLogout = ()=>{
        navigate(`${currentLocation ? '/agent': '/supervisor'}/signin`)
    }

    const [adminMainMenu, setAdminMainMenu] = useState(false)
    
    const handleAdminMainMenuToggle = ()=>{
        setAdminMainMenu(!adminMainMenu)
        setProfileDrop(false)
    }

    const [adminMenuStatusValue, setAdminMenuStatusValue] = useState({id:"",label:"Overview",tagline:""})
    const handleAdminMenuStatus = (item:any)=>{
        setAdminMenuStatusValue(item)
    }
    const [navigateFromCampaign,setNavaigateFromCampaign] = useState("");
    const handleNavigateFromCampaign = (item:any)=>{
        setNavaigateFromCampaign(item);
    }; 





    const [defaultChat, setDefaultChat] = useState(true)
    const [addNewChat, setAddNewChat] =useState(false)
    const [addNewGroup, setAddNewGroup] =useState(false)
    const [newchat, setNewChat] =useState(false)
    const [checkGroup, setCheckGroup] = useState<string[]>([])
    const [newChatGroup, setNewChatGroup] = useState(false)

    const [globalChat, setGlobalChat] = useState(false)
    const handleGlobalChatToggle = (id:any)=>{
      setGlobalChat(id)
      setCallToggle(false)
      setStatusDrop(false)
      setProfileDrop(false)
      setSelectCampaignDrop(false)
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


      const handleDefaultOverlay = ()=>{
        setCallToggle(false)
        setStatusDrop(false)
        setProfileDrop(false)
        setSelectCampaignDrop(false)

        setAdminMainMenu(false)
      }





      
    

    return (
        <ContextHeader.Provider value={{
            callToggle,
            handleCallToggle,
            hamToggle,
            handleHamburgerToggle,
            // searchToggle,
            // handleSearchToggle,
            profileDrop,
            handleProfilePopToggle,
            statusDrop,
            handleStatusToggle,
            handleStatusItem,
            statusValue,
            visibleStatus,
            selectCampaignDrop,
            handleCampaignToggle,
            statusCampaignValue,
            selectCampaignValue,
            onCampaignClick,
            handleOnCampaignClick,
            // globalRef,

            
            // globalChat,
            // handleGlobalChatToggle,
            
            //handleLoadingGoodAvailablity,
            statusTime,
            handleTimer,
            handleLogout,
            adminMainMenu,
            handleAdminMainMenuToggle,
            adminMenuStatusValue,
            handleAdminMenuStatus,
            navigateFromCampaign,
            handleNavigateFromCampaign,



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
            handleGlobalChatToggle,


            handleDefaultOverlay,

            handleStatusSupervisorToggle
        }}>
            {props.children}
        </ContextHeader.Provider>
    );
}