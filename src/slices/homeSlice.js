import { createSlice } from "@reduxjs/toolkit";
// example slice
const initialState = {
  data: ["Hello"],
  error: ""
}

const homeSlice = createSlice({
  initialState: initialState,
  name: "home",
  reducers: {
    addString: (state, { payload }) => {
      const isString = typeof(payload) === "string";
      const isEmpty = payload === ""
      if (isString && !isEmpty) {
        console.log(payload)
        state.data.push(payload)
      } else if (!isString) {
        state.error = "You can insert only text"
      } else {
        state.error = "Field is empty"
      }
    },
    cleanMessage: (state) => {
      state.error = ""
    }
  }
})

export default homeSlice.reducer

export const { addString, cleanMessage } = homeSlice.actions