
import { ReactNode, createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
type ContentProps ={
    children: ReactNode;
}
export const ContextDataBaseConnection = createContext({
    databaseConnection: false,
    handleConnection: ()=>{},
    handleSignout: ()=>{}
   
});

export const DataBaseConnectionContext = (props: ContentProps)=> {
    
    const [databaseConnection, setDatabaseConnection] = useState(false)
    const location = useLocation()
    const currentLocation = location.pathname.indexOf('/agent')>=0
    const handleConnection = ()=>{
        setDatabaseConnection(false)
    }
    
    useEffect(() => {
        const delay = setTimeout(() => {
            setDatabaseConnection(true)
          console.log(databaseConnection)
        }, 3000);
        return () => clearTimeout(delay);
    }, []);

    const navigate = useNavigate();
    const handleSignout = ()=>{
        navigate(`${currentLocation ? '/agent' : '/supervisor'}/signin`)
    }
    
    return (
        <ContextDataBaseConnection.Provider value={{
            databaseConnection,
            handleConnection,
            handleSignout
        }}>
            {props.children}
        </ContextDataBaseConnection.Provider>
    );
}