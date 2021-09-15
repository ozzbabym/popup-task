


const initialState = {
    data: [
        'Унылая пора! Очей очарованье!',
        'Приятна мне твоя прощальная краса —',
        'Люблю я пышное природы увяданье,',
        'В багрец и в золото одетые леса,',
        'В их сенях ветра шум и свежее дыханье,',
        'И мглой волнистою покрыты небеса,',
        'И редкий солнца луч, и первые морозы,',
        'И отдаленные седой зимы угрозы.',
        'Унылая пора! Очей очарованье!',
        'Приятна мне твоя прощальная краса —',
        'Люблю я пышное природы увяданье,',
        'В багрец и в золото одетые леса,',
        'В их сенях ветра шум и свежее дыханье,',
        'И мглой волнистою покрыты небеса,',
        'И редкий солнца луч, и первые морозы,',
        'И отдаленные седой зимы угрозы.'
    ],
    notification: true,
    show: false
}
interface Init {
    data: Array<String>
    notification: boolean
    show: boolean
}
interface Action {
    type: String
    payload: Boolean
}

export const reducerText = (state: Init = initialState, action: Action): any => {
    switch (action.type) {
        case 'NOTIFICATION-RED':{
            return {...state, notification: action.payload}
        }
        
        case 'SHOW_POPUP':{
            return {...state, show: action.payload}
        }
        case 'ADD_EVENT':{
            return {...state, data: [...state.data, action.payload]}
        }
    
        default:{
            return {...state}
        }
            
    }

}

