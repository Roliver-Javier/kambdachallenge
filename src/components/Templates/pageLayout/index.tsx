import React, { Suspense, ReactNode } from 'react'
import { Stack, Container, Typography } from '@mui/material'
import { MenuBar } from '../../Molecules/MenuBar'
import styled from 'styled-components'
import { TBackLink } from '../../Molecules/MenuBar/MenuBar'

const Banner = styled(Stack)`

` 

const Main = styled(Container)`
  padding: 10px 24px;
  width: 100%;
`

const Footer = styled(Stack)`
  position: absolute;
  bottom:0;
  width: 100%;
  height: 2.5rem;  
  text-align: center;
`

type TPageProps = {
  backLink?: TBackLink;
  children: ReactNode;
}

export const PageLayout = ({
    children,
    backLink,
  }: TPageProps) => {
  return (
    <Stack >
      <MenuBar title="Kambda Challenge" backLink={backLink} />
      <Banner></Banner>
      <Suspense fallback={<Typography variant='h6'>Loading...</Typography>}>
        <Main>
          {children}
        </Main>
      </Suspense>

      <Footer alignItems="center"><Typography>Copyright @ kambda 2023</Typography></Footer>
    </Stack>
  )
}