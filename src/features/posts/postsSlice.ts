import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string 
}

interface Posts extends Array<Post>{}

type CurrentDisplayState = {
  all: Posts,
  currentPage: number
}

let initialState: CurrentDisplayState = {
  all: [],
  currentPage: 1
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts (state, action: PayloadAction<Posts>) {
      state.all = action.payload
    },

    setCurrentPage (state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    }
  }
})

export const {
  setPosts,
  setCurrentPage
} = postsSlice.actions

export default postsSlice.reducer
