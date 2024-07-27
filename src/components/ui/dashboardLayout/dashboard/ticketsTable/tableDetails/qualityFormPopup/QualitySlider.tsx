import { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
const QualitySlider = ({ws}:any) => {
    const [sliderHorizontal, setSliderHorizontal] = useState(ws)
    const handleChangeHorizontal = (value:any) => {
        setSliderHorizontal(value)
    }
    const horizontalLabels = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
    }
  const format = (value:any) => value
  return (
    <Slider
        min={0}
        max={5}
        value={sliderHorizontal}
        labels={horizontalLabels}
        format={format}
        // handleLabel={sliderHorizontal}
        onChange={handleChangeHorizontal}
    />
  )
}

export default QualitySlider