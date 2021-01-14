import React, {useState} from 'react'
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import Header from './component/Header'



import './App.css';
import Favorites from './component/Favorites';
import Home from './component/Home';
function App() {
  const history = useHistory()
  const [favArr,setFavArr] = useState([{disName:'tel aviv', name:'telaviv', temp:'25'}])
  // const [key, setKey] = useState ()

  let favDefTelAviv = (temp) => {
    let arr = favArr
    arr[0].temp = temp
    setFavArr(arr)
  }

  let addFav = (inputVal, input) =>{
    var key
    if(input.indexOf(' ') >= 0){
      let val = input.split(" ")
      console.log(`${input}`,val,inputVal)
    fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG&q=${val[0]}%20${val[1]}`, {
      })
      .then((response) => {
      return response.json();
      })
      .then((jsonObject) => {
        console.log(jsonObject)
        key = jsonObject[0].Key
      return jsonObject;
      })
  } 
  else{

  fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG&q=${inputVal}`, {
    })
    .then((response) => {
    return response.json();
     })
    .then((jsonObject) => {
      key = jsonObject[0].Key
            return jsonObject;
    });
    }
  setTimeout(() => {
    getInfoApi(key,inputVal,input)
  }, 1000);
  }
  let getInfoApi = (key,inputVal,input) => {
    fetch(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG`, {
    })
    .then((response) => {
      console.log(response)
      return response.json();

})
    .then((jsonObject) => {
      console.log(jsonObject)
      setFavArr([...favArr,{disName: input, name:inputVal,temp:jsonObject[0].Temperature.Metric.Value}])
      return jsonObject;
});
  }
  let deleteFav = (inputVal) =>{
    let arr = favArr
    setFavArr(arr.filter((value)=>{
      if(value.name == inputVal){
        return false
      }else {
        return true
      }
    }))
  }
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path ='/' component={()=>{return<Home telAviv = {favDefTelAviv} arr ={favArr} delete ={deleteFav} add = {addFav}/>}}/>
        <Route path ='/Favorites' component={()=>{return<Favorites arr ={favArr}/>}}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
