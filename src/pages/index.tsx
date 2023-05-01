import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { TRecipe, TFilterOption } from '../api/types'
import { fetchRecipiesList } from '../api/actions'
import { PageLayout } from '@/src/components/Templates/pageLayout'
import { SearchBar } from '@/src/components/Molecules/SearchBar'
import { FilterSelect } from '@/src/components/Molecules/FilterSelect'
import { 
    Card, CardActions,
    CardActionArea, 
    CardContent, 
    CardHeader
} from '@/src/components/Atoms/Card'
import { Stack, Paper } from '@mui/material'
import { useQuery } from 'react-query';
import Loader from '@/src/components/Atoms/Loader';

function Home() {

  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredObjects, setFilteredObjects] = useState<TRecipe[]>([])

  const { isLoading, data: recipes  } = useQuery("recipes", fetchRecipiesList)

  const filterOptions: TFilterOption[] = [
    {
        name: 'All categories',
        value: ''
    },
    ...(recipes ? recipes.map((recipe) => ({ name: recipe.name, value: recipe.name })): [])
  ]
  useEffect(() => {
    const filteredObjects: any = recipes? recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter === '' || recipe.name === filter)
    ): [];
    
    setFilteredObjects(filteredObjects)
      
  }, [searchTerm, filter, recipes])

  return (
    <PageLayout>
        <Paper sx={{margin: 5, padding: '24px'}}>
        {
            !isLoading && (
                <>
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
                </>
            )
        }
        { isLoading && <Loader/> }
        
        </Paper>
    </PageLayout>
  )
}

export default Home;