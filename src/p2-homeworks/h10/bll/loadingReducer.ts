export type loadingStateType = {
    isLoading: boolean
}
type LoadingAT = {
    type: 'SHOW-LOADING'
    isLoading: boolean
}

const initState: loadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingAT): loadingStateType => { // fix any
    switch (action.type) {
        case 'SHOW-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingAT => ({type: 'SHOW-LOADING', isLoading}) // fix any