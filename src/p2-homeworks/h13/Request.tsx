import React, {useEffect, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestsAPI} from './requests-api';
import {AxiosError} from 'axios';
import s from './Request.module.css'
import spinner from '../h10/spinner.svg'


const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [request, setRequest] = useState<boolean>(false)
    const [data, setData] = useState<string>('response will be here')

    useEffect(() => {
        if (request) {
            const fetchData = async () => {
                try {
                    const result = await RequestsAPI.sendStatus(checked)
                    setData(`${result.data.errorText}, ${result.data.info}`)
                } catch (error) {
                    if (error instanceof AxiosError) {
                        console.log({...error});
                        console.log(error.response ? error.response.data.errorText : error.message);
                        setData(`${error.response?.data.errorText}, ${error.response?.data.info}`)
                    }
                } finally {
                    setRequest(false)
                }
            }
            fetchData()
        }
    }, [request])

    const sendStatus = () => {
        setRequest(true)
    }

    return (
        <div className={s.container}>
            <div className={s.content}>{request ? <img src={spinner} alt="preloader"/> :
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}>{data}</SuperCheckbox>}
            </div>
            <SuperButton onClick={sendStatus} disabled={request}>send</SuperButton>

        </div>
    );
};

export default Request;