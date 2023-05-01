import React, { useState, useEffect, SyntheticEvent } from 'react';
import Link from 'next/link'
import { TRecipe } from '../../api/actionDto'
import { fetchRecipiesList } from '../../api/actions'
import { PageLayout } from '../../components/Templates/pageLayout'
import { SearchBar } from '../../components/Molecules/SearchBar'
import { FilterSelect } from '../../components/Molecules/FilterSelect'
import { Card, CardActions } from '../../components/Atoms/Card'
import { CardActionArea, CardContent, CardMedia, CardHeader} from '../../components/Atoms/Card'
import { Stack, Typography } from '@mui/material'

type IndexProps = {
  recipes: TRecipe[] 
}
function Home({ recipes }: IndexProps) {

  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredObjects, setFilteredObjects] = useState<TRecipe[]>([])
  const filterOptions = [
    {
        name: 'All categories',
        value: ''
    },
    ...recipes.map((recipe) => ({ name: recipe.name, value: recipe.name }))
  ]


  useEffect(() => {
    const filteredObjects: any = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter === '' || recipe.name === filter)
    );
        setFilteredObjects(filteredObjects)
      
  }, [searchTerm, filter, recipes])

  return (
    <PageLayout>
        <Stack flexDirection="row" mt="10px">
            <SearchBar 
                placeholder="Search objects..."
                value={searchTerm}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            />
            <FilterSelect 
                label="Filter" 
                options={filterOptions} 
                value={filter} 
                sx={{
                    width: '10%'
                }}
                onChange={(event: any) => setFilter(event.target.value)}
            />
        </Stack>

        <Stack flexDirection="row" flexWrap="wrap" gap="10px" mt="10px">
        {filteredObjects.map((recipe, index) => (
            <Card key={index}>
               
                <CardHeader> {recipe.name} </CardHeader>
                <CardContent> {recipe.name} </CardContent>
                <CardActionArea>
                    <CardActions>
                        <Link href="/recipe/[slug]" as={`/recipe/${recipe.id}`} style={{width: '100%'}}>See more</Link>
                    </CardActions>
                </CardActionArea>
            </Card>
        ))}
        </Stack>
    </PageLayout>
  )
}

export async function getStaticProps() {

  const recipes = await fetchRecipiesList()

  return {
    props: {
        recipes
    }
  }
}

export default Home