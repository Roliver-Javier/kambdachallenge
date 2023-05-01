import { fetchRecipiesList, fetchTips } from '@/src/api/actions'
import { TBackLink } from '@/src/components/Molecules/MenuBar/MenuBar';
import { PageLayout } from '@/src/components/Templates/pageLayout';
import { Typography, Stack, Card, CardContent, Paper } from '@mui/material';
import { useQuery } from 'react-query';
import Loader from '@/src/components/Atoms/Loader';

type TipsProps = {
  recipeId: string;
}

function Tips({ recipeId }: TipsProps) {
 
  const { isLoading, data: tips  } = useQuery(["tips",recipeId], () => fetchTips(recipeId))
  const Section = ({caption, text }: { caption: string, text: string | number }) => (
      <Stack flexDirection="row" alignItems="center" gap="10px">
        <Typography variant="caption" fontWeight="bold"> {caption}: </Typography>
        <Typography variant="body1">{text}</Typography>
      </Stack>
  )
  const handleGoBack = (): TBackLink => ({
    href:"/recipe/[slug]",
    as: `/recipe/${recipeId}`,
    text: 'Go Back to Recipe'
  })
 
  return (
    <PageLayout backLink={handleGoBack()}>
      <Paper sx={{margin: 5, padding: '24px'}}>
        {
          !isLoading && tips && (
            <>
              <Typography variant="h5">Tips</Typography>
              {
                tips.map((tip, index)=>(
                  <Card key={index} sx={{ marginBottom: "20px" }}>
                    <CardContent>
                      <Section caption='Author' text={tip.author_name || 'Anonimous'}/>
                      <Section caption='Description' text={tip.tip_body}/>
                      <Section caption='Total Votes: ' text={tip.upvotes_total}/>
                    </CardContent>
                  </Card>
                  
                ))
              }
            </>
          )
        }
        { isLoading && <Loader/> }
      </Paper>
      
    </PageLayout>
  )
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      recipeId: params.id,
    }
  }
}

export async function getStaticPaths() {
  // Fetch all objects from the backend API
  // const response = await fetch('/api/objects')

  const recipes = await fetchRecipiesList()
  
  const paths = recipes.map(recipe => ({ params: { id: `${recipe.id}` }}));

  return {
    paths,
    fallback: false
  }
}

export default Tips