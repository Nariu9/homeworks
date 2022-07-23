import {UserType} from "../HW8";

type ActionType = sortUpDownActionType | check18ActionType

type sortUpDownActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type check18ActionType = {
    type: 'check'
    payload: 18
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name.localeCompare(b.name))
                : action.payload === 'down'
                    ? [...state].sort((a, b) => a.name.localeCompare(b.name)).reverse()
                    : state;
        }
        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}