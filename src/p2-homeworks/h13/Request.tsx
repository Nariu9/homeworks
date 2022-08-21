import React, {useEffect, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestsAPI} from './requests-api';
import {AxiosError} from 'axios';
import s from './Request.module.css'


const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [request, setRequest] = useState<boolean>(false)
    const [data, setData] = useState<string>('response will be here')

    useEffect(() => {
        if (request) {
            const fetchData = async () => {
                try {
                    const result = await RequestsAPI.sendStatus(checked)
                    setData(result.data.errorText)
                } catch (error) {
                    if (error instanceof AxiosError) {
                        console.log({...error});
                        console.log(error.response ? error.response.data.errorText : error.message);
                        setData(error.response?.data.errorText)
                    }
                }
            }
            fetchData()
            setRequest(false)
        }
    }, [request])

    const sendStatus = () => {
        setRequest(true)
    }

    return (
        <div className={s.container}>
            <SuperCheckbox checked={checked} onChangeChecked={setChecked}>{data}</SuperCheckbox>
            <SuperButton onClick={sendStatus}>send</SuperButton>

        </div>
    );
};

export default Request;