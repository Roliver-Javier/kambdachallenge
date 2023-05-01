import React, { ReactNode } from 'react'
import { AppBar, Typography } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'

import styled from 'styled-components'

const Bar = styled(AppBar).attrs(()=>({
  position: "static"
}))`
  width: 100%;
`

export type TBackLink = {
  href: string;
  as: string;
  text: string;
}

export type MenuBarProps = {
   title: string;
   backLink?: TBackLink;
}
export const MenuBar = ({ title, backLink }: MenuBarProps) => (
    <Bar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>{title}</Typography>
          {backLink && (
            <Link 
              {...backLink}
              style={{ 
                fontWeight: 'bold', 
                color: '#fff', 
                textDecoration: 'none'}}>
              {backLink.text}
          </Link>
          )}
        </Toolbar>
        
    </Bar>
)
