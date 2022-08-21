import axios from 'axios';

export const RequestsAPI ={
    sendStatus (success:boolean) {
        return axios.post<SendStatusResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
}

export type SendStatusResponseType = {
	errorText: string;
	info: string;
	yourBody: {
        success: boolean;
    }
	yourQuery: {}
}
