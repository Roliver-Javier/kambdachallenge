
import { GetRecepiesResponse, GetTipsResponse, TRecipe, TTips } from "./types";
import axios from 'axios';



const headers = {
  'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
  'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }



const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`

export const fetchRecipiesList = async (): Promise<TRecipe[]> => {
    try {
        const response = await axios.get<GetRecepiesResponse>(
            `${API_URL}/recipes/list`, { headers, params: { from: '0', size: '25' } }
            )
        return response.data.results;
      } catch (error) {
        console.error(error);
        return [];
      }
}
export const fetchRecipeDetail = async (id: string): Promise<TRecipe | null> => {
  try {
      const response = await axios.get(
          `${API_URL}/recipes/get-more-info`, { headers, params: { id } }
          )
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
}

export const fetchTips = async (id: string): Promise<TTips[]> => {
  try {
      const response = await axios.get<GetTipsResponse>(
          `${API_URL}/tips/list`, { headers, params: { id, from: '0', size: '5' } }
          )
      return response.data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
}