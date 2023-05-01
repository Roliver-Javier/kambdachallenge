import { fetchRecipeDetail, fetchRecipiesList } from '@/src/api/actions'
import { PageLayout } from '@/src/components/Templates/pageLayout';
import { Paper, Typography, Stack } from '@mui/material';
import { useQuery } from 'react-query'
import Link from 'next/link'
import Loader from '@/src/components/Atoms/Loader';

type TRecipeProps = {
  recipeId: string,
}
function Recipe({recipeId}: TRecipeProps) {
  const { isLoading, data: recipe  } = useQuery(["recipe",recipeId], () => fetchRecipeDetail(recipeId))
  return (
    <PageLayout backLink={{
      href:"/",
      as:"/",
      text: 'Go Back to Recipes'
    }}>
      <Paper sx={{margin: 5, padding: '24px'}}>
        { !isLoading && recipe && (
          <>
            <Stack flexDirection="row">
              <Typography variant="h5" sx={{width: "90%"}}>{recipe.name}</Typography>
            </Stack>
           
            <Stack>
              <Stack flexDirection="row" alignItems="center" justifyContent="space-between" gap="10px">
                <Typography variant="subtitle1">Instructions</Typography>
                <Link href="/tips/[id]" as={`/tips/${recipe.id}`}>
                  <Typography variant="button"> See tips</Typography>
                </Link>
              </Stack>
              <ol>
                {recipe?.instructions.map((instruction, index: number) => (
                  <li key={index}>
                      {instruction.display_text}
                  </li>
                ))}
              </ol>
            </Stack>
          </>
        )}

      { isLoading && <Loader/> }
            
      </Paper>
    </PageLayout>
  )
}

export async function getStaticProps({ params}: any) {
  return {
    props: {
      recipeId: params.slug,
    }
  }
}

export async function getStaticPaths() {

  const recipes = await fetchRecipiesList()
  
  const paths = recipes.map(recipe => ({ params: { slug: `${recipe.id}` }}));

  return {
    paths,
    fallback: false
  }
}

export default Recipe
