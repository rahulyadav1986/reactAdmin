import { useEffect, useRef, useState } from "react"

const useOutside = (defaultValue: any) => {
    const [dropOpen, setDropOpen] = useState(defaultValue)
    const menuRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let handler = (e:any)=>{
            if(!menuRef.current?.contains(e.target)){
                setDropOpen(false);
            }      
        }

        document.addEventListener("mousedown", handler);
        

        return() =>{
            document.removeEventListener("mousedown", handler);
        }

    });
  return [dropOpen, setDropOpen, menuRef]
}

export default useOutside