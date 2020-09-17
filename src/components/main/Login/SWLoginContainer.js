import React, { useState } from 'react';
import { SWLoginPresentation } from './SWLoginPresentation';
import { useFormFields } from '../../reusable/hooks/useFormFields';
import { validation } from '../../../common/validationUtils';
import { dummyLoginApi } from '../../../common/api';
import { SW_ROUTE_URL } from '../../../common/constants';
import { USER_ACTION_TYPE } from '../../../common/actionTypes';
import history from '../../../common/history';
import { Authentication } from '../../../common/authenticate';
const intialState = {
  data: {},
  error: {},
  validation: { username: validation.required, password: validation.required },
};
export const SWLoginContainer = () => {
  const [loginError, setState] = useState(false);
  const [fields, onChange, reset] = useFormFields(intialState);
  const onLoginClick = () => {
    const { data } = fields;
    const validateArray = Object.entries(intialState.validation);
    const updatedError = { ...fields.error };
    let errorOnForm = false;
    validateArray.forEach(([key, validate]) => {
      const errorInField = validate(data[key]);
      updatedError[key] = errorInField;
      if (errorInField) {
        errorOnForm = true;
      }
    });
    reset({ ...fields, error: updatedError });
    !errorOnForm && callLoginApi(fields.data);
  };

  const callLoginApi = async (data) => {
    try {
      const response = await dummyLoginApi(data);
      Authentication.setUser(response);
      // dispatch({ type: USER_ACTION_TYPE, payload: { user: response } });
      history.push(SW_ROUTE_URL.DASHBOARD);
    } catch (error) {
      setState(true);
    }
  };
  return (
    <SWLoginPresentation
      loginError={loginError}
      onChange={onChange}
      {...fields}
      onLoginClick={onLoginClick}
    />
  );
};
