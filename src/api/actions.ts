
import { GetRecepiesResponse, GetTipsResponse, TRecipe, TTips } from "./actionDto";
import axios from 'axios';



const headers = {
  'X-RapidAPI-Key': '8614af7b39mshc8d1d2165688e1dp1408cdjsndbe44aae29b7',
  'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }



const API_URL = 'https://tasty.p.rapidapi.com';

export const fetchRecipiesList = async (): Promise<TRecipe[]> => {
    try {
        const response = await axios.get<GetRecepiesResponse>(
            `${API_URL}/recipes/list`, { headers, params: { from: '0', size: '5' } }
            )
        return response.data.results;
      } catch (error) {
        console.error(error);
        return [];
      }
}
export const fetchRecipieDetail = async (id: string): Promise<TRecipe[]> => {
  try {
      const response = await axios.get(
          `${API_URL}/recipes/get-more-info`, { headers, params: { id } }
          )
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
}

export const fetchTips = async (id: string): Promise<TTips[] | null> => {
  try {
      const response = await axios.get<GetTipsResponse>(
          `${API_URL}/tips/list`, { headers, params: { id, from: '0', size: '5' } }
          )
      return response.data.results;
    } catch (error) {
      console.error(error);
      return null;
    }
}