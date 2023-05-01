import { TRecipe } from '@/src/api/actionDto';
import { fetchRecipieDetail, fetchRecipiesList } from '@/src/api/actions'
import { PageLayout } from '@/src/components/Templates/pageLayout';
import { Paper, Typography, Stack } from '@mui/material';
import Link from 'next/link'

type TRecipeProps = {
  recipe: TRecipe,
}
function Recipe({recipe}: TRecipeProps) {

  return (
    <PageLayout backLink={{
      href:"/",
      as:"/",
      text: 'Go Back to Recipes'
    }}>
      <Paper sx={{padding: '10px 24px'}}>
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

            
      </Paper>
    </PageLayout>
  )
}

export async function getStaticProps({ params}: any) {

const recipe = await fetchRecipieDetail(params.slug)

  return {
    props: {
      recipe,
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
