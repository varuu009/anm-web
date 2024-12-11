import apiInstance, { searchURL } from './baseAPI';


export const searchByMerchantId = async (merchantId) => {
  try {
    const response = await apiInstance.post(searchURL, {
      criteria: {
        searchBy: {
          merchantId: merchantId,
        },
      },
    });
    console.log(response.data,"response of searchByMerchantId")
    return response.data;
  } catch (error) {
    console.log("error",error)
    console.error('Error during API call:', error);
    throw error; 
  }
};
