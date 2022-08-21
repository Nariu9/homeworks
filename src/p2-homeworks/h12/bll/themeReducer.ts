export type ThemeType = 'dark' | 'red' | 'some' | 'blue'

type initStateType = {
    theme: ThemeType
}

type ActionType = {
    type: 'CHANGE-THEME'
    payload: {
        theme: ThemeType
    }
}

const initState: initStateType = {
    theme: 'dark'
};

export const themeReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME':
            return {...state, ...action.payload}
        default:
            return state;
    }
};

export const changeThemeC = (newTheme: ThemeType): ActionType => ({type: 'CHANGE-THEME', payload: {theme: newTheme}}); // fix any