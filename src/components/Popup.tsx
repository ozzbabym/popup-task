import React from 'react'
import './Popup.css'
import {useDispatch} from 'react-redux'


interface Data {
    data: Array<String>
}

interface TextReducer {
    data: string[]
    notification: boolean
    show: boolean
}


function Popup(props: Data) {
    const dispatch = useDispatch()
    const [notificationArr, setNotificationArr] = React.useState(true)


    const clickExit = () => {
        dispatch({type: 'SHOW_POPUP', payload: false})
    }
    const fiveMessageEnd = () => {
        let data = props.data
        let arrNew = []
        for(let i = data.length-5; i <  data.length; i++) {
            arrNew.push(data[i])
        }
        return arrNew
    }

    const showMore = () => {
        if(notificationArr) {
            let data = props.data
            let arrNew = []
            for(let i = data.length-5; i <  data.length; i++) {
                arrNew.push(data[i])
            }
            return arrNew
        }else {
            let data = props.data
            let arrNew = []
            for(let i = 0; i <  data.length; i++) {
                arrNew.push(data[i])
            }
            return arrNew
        }
    }

    return (
        <div className='Popup'>
            <div onClick={clickExit} className='exit'>x</div>

            <ul>
                {showMore().map((item, i)=> <li key={i}>{item}</li>)}
            </ul>
            <div onClick={()=>setNotificationArr(!notificationArr)} className='show-more'>{notificationArr?'Показать еще':'Убрать'}</div>
        </div>
    )
}

export default Popup
