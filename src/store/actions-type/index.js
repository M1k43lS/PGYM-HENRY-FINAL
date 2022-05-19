//data by pgym reducer
const CREATE_ACTIVITY = "CREATE_ACTIVITY";
const GET_ALL_TRAINERS = "GET_ALL_TRAINERS";
const GET_ALL_USERS = "GET_ALL_USERS";
const GET_ALL_ORDERS = "GET_ALL_ORDERS";
const GET_ALL_DAYS_AND_HOURS = "GET_ALL_DAYS_AND_HOURS";
const REQUEST_POST = "REQUEST_POST";
const RECEIVED_POST = "RECEIVED_POST";
const GET_ID_USER = "GET_ID_USER";
const GET_ALL_ORDERS_BY_USER = "GET_ALL_ORDERS_BY_USER";
const GET_ORDERLINE_BY_ORDER_ID = "GET_ORDERLINE_BY_ORDER_ID";
export const SET_ORDER_STATUS = "SET_ORDER_STATUS";
//-----------------

//data by review reducer
const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
const CREATE_REVIEW = "CREATE_REVIEW";
const GET_REVIEWS_BY_USER = "GET_REVIEWS_BY_USER";
//-----------------

//Data by login reducer
const USER_IS_ADMIN = "USER_IS_ADMIN";
const LOGIN_WITH_GOOGLE = "LOGIN_WITH_GOOGLE";
const LOGIN_WITH_GITHUB = "LOGIN_WITH_GITHUB";
const REQUEST_USER_LOGIN = "REQUEST_USER_LOGIN";
const RECEIVED_USER_LOGIN = "RECEIVED_USER_LOGIN";
const VALIDATE_USER_IS_LOGGED = "VALIDATE_USER_IS_LOGGED";
const REGISTER_USER_WITH_EMAIL_AND_PASS = "REGISTER_USER_WITH_EMAIL_AND_PASS";
const SIGN_IN_USER = "SIGN_IN_USER";
const USER_SIGN_OUT = "USER_SIGN_OUT";
//-----------------

// SHOPPING CART
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const TOTAL_CART = "TOTAL_CART";
export const SET_DISCOUNT = "SET_DISCOUNT";
// END SHOPPING CART

//ORDER LINE
export const ADD_ORDER_LINE = "ADD_ORDER_LINE";


//PERFIL USUARIO
const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";
const CREATE_USER = "CREATE_USER"
const GET_USERS = "GET USERS";
const GET_USER_BY_UID = "GET_USER_BY_UID";
const EDIT_USER = "EDIT_USER";


//DESCUENTOS
export const GET_DESCUENTO = "GET_DESCUENTO";
export const ADD_DESCUENTO = "ADD_DESCUENTO";
export const MOD_DESCUENTO = "MOD_DESCUENTO";
export const GET_ALL_DESCUENTOS = "GET_ALL_DESCUENTOS";

//-----------------



export {
  CREATE_ACTIVITY,
  REQUEST_POST,
  RECEIVED_POST,
  GET_ALL_TRAINERS,
  REGISTER_USER_WITH_EMAIL_AND_PASS,
  VALIDATE_USER_IS_LOGGED,
  LOGIN_WITH_GOOGLE,
  SIGN_IN_USER,
  USER_SIGN_OUT,
  CREATE_REVIEW,
  GET_ALL_USERS,
  GET_ALL_REVIEWS,
  USER_IS_ADMIN,
  GET_REVIEWS_BY_USER,
  REQUEST_USER_LOGIN,
  RECEIVED_USER_LOGIN,
  LOGIN_WITH_GITHUB,
  GET_ID_USER,
  GET_ALL_ORDERS,
  GET_ALL_DAYS_AND_HOURS,
  GET_USER_BY_EMAIL,
  CREATE_USER,
  GET_USERS,
  GET_USER_BY_UID,
  EDIT_USER,
  GET_ALL_ORDERS_BY_USER,
  GET_ORDERLINE_BY_ORDER_ID
};