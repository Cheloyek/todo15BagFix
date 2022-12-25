import {AppActionsType, setError, setStatus} from "../app/app-reducer";
import {Dispatch} from "redux";

export const handleServerNetworkError = (dispatch: Dispatch<AppActionsType>, error: string) => {
    dispatch(setError(error))
    dispatch(setStatus('failed'))
}