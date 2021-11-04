export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}

export enum ProductsActionsTypes{
  GET_ALL_PRODUCTS="[Product] To Get All products",
  GET_SELECTED_PRODUCTS="[Product] To GET Selected products",
  GET_AVAILABLE_PRODUCTS="[Product] To Get Available products",
  SEARCH_PRODUCTS="[Product] To Search products",
  NEW_PRODUCTS="[Product] New products",
  SELECT_PRODUCTS="[Product] Select products",
  EDIT_PRODUCTS="[Product] Edit products",
  DELETE_PRODUCTS="[Product] delete products",
  PRODUCTS_ADDED="[Product]  product added",
  PRODUCTS_UPDATED="[Product] product updated",
}

export interface ActionEvent{
  type:ProductsActionsTypes,
    payload?:any
}
