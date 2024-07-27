import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
type ContentProps ={
    children: ReactNode;
}
export const ContextAdminDashboard = createContext({
    advertisement: true,
    handleAdvertisement: (_id:any)=>{},

    buildBotOpenPop: false,
    handleBuildBotOpenPop: (_id:any)=>{},
    handleCloseBotPop: ()=>{},

    buildBotPopFirstStep: true,
    handleBuildBotPopFirstStep: (_id:any)=>{},

    buildBotPopSecondStep: false,
    handleBuildBotPopSecondStep: (_id:any)=>{},
    handleBackBuildPopfromSecond: ()=>{},

    buildBotPopThirdStep: false,
    handleBuildBotPopThirdStep: (_id:any)=>{},
    handleBackBuildPopfromThird: ()=>{},

    buildBotPopFourthStep: false,
    handleBuildBotPopFourthStep: (_id:any)=>{},
    handleBackBuildPopfromFourth: ()=>{},

    buildBotPopFifthStep: false,
    handleBuildBotPopFifthStep: (_id:any)=>{},
    handleBackBuildPopfromFifth: ()=>{},

    handleGetStarted: (_id:any)=>{}

    

});

export const AdminDashboardContext = (props: ContentProps)=> {
    
   const [advertisement, setAdvertisement] = useState(true)
   const handleAdvertisement = (id:any)=>[
        setAdvertisement(id)
   ]

   const [buildBotOpenPop, setBuildBotOpenPop] = useState(false)
   const handleBuildBotOpenPop = (id:any)=>{
    setBuildBotOpenPop(id)
   }
   const handleCloseBotPop = ()=>{
    setBuildBotOpenPop(false)
    setBuildBotPopFirstStep(true)
    setBuildBotPopSecondStep(false)
    setBuildBotPopThirdStep(false)
    setBuildBotPopFourthStep(false)
    setBuildBotPopFifthStep(false)
   }

   const [buildBotPopFirstStep, setBuildBotPopFirstStep] = useState(true)
   const handleBuildBotPopFirstStep = (id:any)=>{
    setBuildBotPopFirstStep(id)
    setBuildBotPopSecondStep(true)
   }
   

   const [buildBotPopSecondStep, setBuildBotPopSecondStep] = useState(false)
   const handleBuildBotPopSecondStep = (id:any)=>{
    setBuildBotPopSecondStep(id)
   }
   const handleBackBuildPopfromSecond = ()=>{
    setBuildBotPopFirstStep(true)
    setBuildBotPopSecondStep(false)
   }


   const [buildBotPopThirdStep, setBuildBotPopThirdStep] = useState(false)
   const handleBuildBotPopThirdStep = (id:any)=>{
    setBuildBotPopThirdStep(id)
    setBuildBotPopSecondStep(false)
   }
   const handleBackBuildPopfromThird = ()=>{
    setBuildBotPopSecondStep(true)
    setBuildBotPopThirdStep(false)
   }


   const [buildBotPopFourthStep, setBuildBotPopFourthStep] = useState(false)
   const handleBuildBotPopFourthStep = (id:any)=>{
    setBuildBotPopFourthStep(id)
    setBuildBotPopThirdStep(false)
   }
   const handleBackBuildPopfromFourth = ()=>{
    setBuildBotPopThirdStep(true)
    setBuildBotPopFourthStep(false)
   }


   const [buildBotPopFifthStep, setBuildBotPopFifthStep] = useState(false)
   const handleBuildBotPopFifthStep = (id:any)=>{
    setBuildBotPopFifthStep(id)
    setBuildBotPopFourthStep(false)
   }
   const handleBackBuildPopfromFifth = ()=>{
    setBuildBotPopFourthStep(true)
    setBuildBotPopFifthStep(false)
   }

   const navigate = useNavigate()
   const handleGetStarted = (id:any)=>{
    navigate(id)
   }

   
    
    return (
        <ContextAdminDashboard.Provider value={{
            advertisement,
            handleAdvertisement,

            buildBotOpenPop,
            handleBuildBotOpenPop,
            handleCloseBotPop,

            buildBotPopFirstStep,
            handleBuildBotPopFirstStep,

            buildBotPopSecondStep,
            handleBuildBotPopSecondStep,
            handleBackBuildPopfromSecond,

            buildBotPopThirdStep,
            handleBuildBotPopThirdStep,
            handleBackBuildPopfromThird,

            buildBotPopFourthStep,
            handleBuildBotPopFourthStep,
            handleBackBuildPopfromFourth,

            buildBotPopFifthStep,
            handleBuildBotPopFifthStep,
            handleBackBuildPopfromFifth,

            handleGetStarted

            
        }}>
            {props.children}
        </ContextAdminDashboard.Provider>
    );
}


