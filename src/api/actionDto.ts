
type TRating = {
    score: number;
    count_negative: number;
    count_positive: number;
}

type TInstruction = {
    position: number,
    display_text: string;
    temperature?: string,
    id: number
}

export type TRecipe = {
    id: number;
    name: string;
    thumbnail_url: string;
    user_ratings: TRating;
    instructions: TInstruction[];
}

export type TNutrition = {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
    sugar: number;
    fiber: number;
}
export type TTips = {
    author_name: string,
    tip_body: string;
    upvotes_total: number;
}

export type GetRecepiesResponse = {
    results: TRecipe[]
  }

export type GetTipsResponse = {
    results: TTips[]
  }
