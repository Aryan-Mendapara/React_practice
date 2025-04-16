import { createStore } from "react-redux"
import { CountReducer } from "./Reducer/CountReducer"


export const store = createStore(CountReducer)