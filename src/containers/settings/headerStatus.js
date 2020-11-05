import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowHeader } from '../../actions/actions';

const HeaderStatus = (status) => {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(ShowHeader(status));}, []);
    return (
        <div>
            
        </div>
    );
};

export default HeaderStatus;