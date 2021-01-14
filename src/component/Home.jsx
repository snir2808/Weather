import React, {useState, useEffect} from 'react'
import Header from './Header'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


export default function Home(props) {
    var datetoday = []
    var daysTemp = []
    var telAvivTemp = 0
    const [inputVal, setInputVal] = useState('')
    const [input, setInput] = useState('')
    const [dayName, setDayName] = useState([])
    const [temp, setTemp] = useState(0)
    const [dayTemp, setDayTemp] = useState([])
    const [text, setText] = useState('')
    const [favBut, setFavBut] = useState('Add To')

    let defaultTelAviv =() =>{ 
     fetch(`https://dataservice.accuweather.com/currentconditions/v1/215854?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG`, {
        })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(alert('Something went wrong'));
      }
    })
    .then((jsonObject) => {
        setTemp(jsonObject[0].Temperature.Metric.Value)
        telAvivTemp = jsonObject[0].Temperature.Metric.Value
        setText(jsonObject[0].WeatherText)
       
    return jsonObject;
    });

     fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG&metric=true`, {
        })
    .then((response) => {
    return response.json();
    })
    .then((jsonObject) => {
        daysTemp = [jsonObject.DailyForecasts[0].Temperature.Maximum.Value,jsonObject.DailyForecasts[1].Temperature.Maximum.Value,jsonObject.DailyForecasts[2].Temperature.Maximum.Value,jsonObject.DailyForecasts[3].Temperature.Maximum.Value,jsonObject.DailyForecasts[4].Temperature.Maximum.Value,]
         datetoday = [jsonObject.DailyForecasts[0].Date.slice(0, 10),jsonObject.DailyForecasts[1].Date.slice(0, 10),jsonObject.DailyForecasts[2].Date.slice(0, 10),jsonObject.DailyForecasts[3].Date.slice(0, 10),jsonObject.DailyForecasts[4].Date.slice(0, 10)]
        for(let i = 0; i< datetoday.length;i++){
            datetoday[i].toString()
            datetoday[i] = new Date(datetoday[i])
            datetoday[i]= datetoday[i].getDay()

            switch (datetoday[i]) {
                case 0:
                    datetoday[i] = "Sun";
                    break;
                  case 1:
                    datetoday[i] = "Mon";
                    break;
                  case 2:
                    datetoday[i] = "Tue";
                    break;
                  case 3:
                    datetoday[i] = "Wed";
                    break;
                  case 4:
                    datetoday[i] = "Thu";
                    break;
                  case 5:
                    datetoday[i] = "Fri";
                    break;
                  case  6:
                    datetoday[i] = "Sat";
                }
        }
        setDayName(datetoday)
        setDayTemp(daysTemp)
        
    return jsonObject;
    });
    }
    useEffect(
        defaultTelAviv
        ,[]);
      let checkFav = (e) =>{
          let val = e.target.value
          setInput(val)
          val = val.toLowerCase()
          val = val.replace(/\s/g,'')
        setInputVal(val)
        props.arr.map(item =>{
            console.log(item.name)
            if(val === item.name){
                setFavBut('Remov From')
            }else{
                setFavBut('Add To')
            }
        })
      }
      let addToList = () => {
          if(favBut == 'Add To'){
            props.add(inputVal,input)
          }else{
              props.delete(inputVal)
          }
      }
      let telAvivFunc = () =>{
        props.telAviv(temp)
      }
    return (
        <div>
            <Header telAvivCallFunc = {telAvivFunc}/>
            <Input onChange={checkFav} type="text"/><br/>
            <p>TelAviv<br/>{temp}C</p>
            <Button onClick={addToList}>{favBut} Favorites</Button>
            <h3>{text}</h3>
            <div className='div_flex'>
                <p className='p_day'>{dayName[0]}<br/>{dayTemp[0]}C</p>
                <p className='p_day'>{dayName[1]}<br/>{dayTemp[1]}C</p>
                <p className='p_day'>{dayName[2]}<br/>{dayTemp[2]}C</p>
                <p className='p_day'>{dayName[3]}<br/>{dayTemp[3]}C</p>
                <p className='p_day'>{dayName[4]}<br/>{dayTemp[4]}C</p>
            </div>
        </div>
    )
}
