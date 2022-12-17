import React, {useContext} from 'react';

export const AuthContext = React.createContext();

export const SetFoodContext = React.createContext();
export const GetFoodContext = React.createContext();

export function useFoodState() {
  const state = useContext(GetFoodContext);
  return state;
}
  
export function useFoodDispatch(){
  const dispatch = useContext(SetFoodContext);
  return dispatch;
}