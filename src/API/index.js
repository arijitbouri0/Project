import axios from 'axios';

const API_URL = 'https://66dc5edc47d749b72acb6d54.mockapi.io/api/orders';

export const fetchOrders = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};
