import { searchByMerchantId } from './searchService';
import { FETCH_EVENTS } from './actionTypes'; 


const fetchEvents = (data) => ({
  type: FETCH_EVENTS,
  payload: data,
});


export const fetchEventsData = (merchantId) => {
  return async (dispatch) => {
    try { 
      const data = await searchByMerchantId(merchantId); 
      dispatch(fetchEvents({ loading: false, events: data }));
    } catch (error) {
      dispatch(fetchEvents({ loading: false, error: error.message })); 
    }
  };
};
