import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import provinceService from './provinceService'

export const getProvince = createAsyncThunk(
  'province/get-province',
  async (thunkAPI) => {
    try {
      return await provinceService.getProvince()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getDistricts = createAsyncThunk(
  'province/get-districts',
  async (provinceId, thunkAPI) => {
    try {
      return await provinceService.getDistricts(provinceId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getWards = createAsyncThunk(
  'province/get-wards',
  async (districtId, thunkAPI) => {
    try {
      return await provinceService.getWards(districtId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const removeDistrict = createAction('remove-district')
export const removeWards = createAction('remove-wards')

const initialState = {
  provinces: [],
  districts: [],
  wards: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

const provinceSlice = createSlice({
  name: 'provinceAPI',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProvince.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProvince.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.provinces = action.payload
      })
      .addCase(getProvince.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(getDistricts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDistricts.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.districts = action.payload
      })
      .addCase(getDistricts.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(getWards.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getWards.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.wards = action.payload
      })
      .addCase(getWards.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(removeWards, (state) => {
        state.wards = initialState.wards
      })
      .addCase(removeDistrict, (state) => {
        state.districts = initialState.districts
        state.wards = initialState.wards
      })
  },
})

export default provinceSlice.reducer
