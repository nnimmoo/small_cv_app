// actions.js
export const setTimelineData = (data) => ({
    type: 'SET_TIMELINE_DATA',
    payload: data,
  });
  
  export const setLoading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading,
  });
  
  export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error,
  });
  
  // reducers.js
  const initialState = {
    timelineData: [],
    loading: true,
    error: null,
  };
  
  export const timelineReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TIMELINE_DATA':
        return { ...state, timelineData: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  