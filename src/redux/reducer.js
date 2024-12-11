import { FETCH_EVENTS } from './actionTypes'; 

const initialState = {
  loading: true,
  events: [], 
  error: null,
};


const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
     
      if (action.payload.error) {
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          events: [],
        };
      }

     
      return {
        ...state,
        loading: false,
        events: action.payload.events || [],
        error: null,
      };
    default:
      return state;
  }
};

export default eventsReducer;
