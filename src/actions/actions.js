import {
    SCREEN_SIZE,
    SHOW_HEADER,
    ADMIN_LOGGED_IN,
    CITIZENS
  } from "./actionTypes";
  
  export const ScreenSize = size => ({
    type: SCREEN_SIZE,
    payload: size
  });
     
  export const ShowHeader = show => ({
    type: SHOW_HEADER,
    payload: show
  });

  export const AdminLoggedIn = (token) => ({
    type: ADMIN_LOGGED_IN,
    payload: token
  })
  
  export const Citizens = (citizensList) => ({
    type: CITIZENS,
    payload: citizensList
  })
  
  