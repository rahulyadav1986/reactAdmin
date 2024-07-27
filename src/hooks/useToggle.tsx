import { useState } from "react"

const useToggle = (defaultValue: any) => {
    const [currentValue, setCurrentValue] = useState(defaultValue)
    const toggleValue = (newValue: any) =>{
        setCurrentValue((value: any) => (typeof newValue === 'boolean' ? newValue : !value))
    }
  return [currentValue, toggleValue]
}

export default useToggle