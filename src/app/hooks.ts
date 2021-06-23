import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>(); //used to dispatch actions to reducers
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //used to get state from redux store
