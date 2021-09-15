import './App.css';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import notiBlack from './image/notification-black.png';
import notiRed from './image/notification-red.png';
import Popup from './components/Popup'



interface State {
    data: Array<String>,
    show: boolean,
    notification: boolean
}




function App() {
  const state = useSelector((state: State) => state)
  const [input, setInput] = React.useState('')


  const dispatch = useDispatch()

  React.useEffect(() => {
    if(!state.show && state.notification) {
      setTimeout(()=>{
        dispatch({type:'NOTIFICATION-RED', payload: false})
        dispatch({type:'SHOW_POPUP', payload: true})
      }, 7000)
    }else
    if(state.show && !state.notification){
      setTimeout(()=>{
        dispatch({type:'NOTIFICATION-RED', payload: true})
      }, 2000)
    }
  }, [state.show])

  const addNewEvent = () =>{
    dispatch({type: 'ADD_EVENT', payload: input})
    setInput('')
  }



  //add sound
  // const audio = new Audio('./sound/dilink.mp3')
  // audio.load()
  
  // audio.play()
  // console.log(audio.autoplay=true)
  
 

  return (
    <div className="App">
      <div className="App-header">
        <div><h1>Notification Task</h1></div>
        <div>
          <img src={ state.notification ? notiBlack : notiRed} className={state.notification ? 'image-notification' : 'image-rotate'}></img>
          <div className={state.show?'popup-show':'popup-hidden'}>
            <Popup {...state}/>
          </div>
        </div>
      </div>
      <div className='add_event'>
        <input onChange={(e)=>setInput(e.target.value)} value={input}></input>
        <button onClick={()=>addNewEvent()}>Add new event</button>
      </div>
    </div>
  );
}

export default App;
