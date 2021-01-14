import React, {useState, useEffect} from 'react'
import Header from './Header'

export default function Favorites(props) {
    const [style, setStyle] = useState({fontSize: '35px', color: 'black'})
    return (
        <div>
            <Header/>
        <div className='div_flex'>
        {props.arr.map(item =>{
            if(item.disName == 'tel aviv'){
                return <p style={style} className='p_day' >{item.disName}<br/>{item.temp}C</p>
            }else{
                return <p className='p_day'>{item.disName}<br/>{item.temp}C</p>
            }
           })}
        </div>

        </div>
    )
}
