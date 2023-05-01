import { Card as MUICard, CardProps as MUICardProps } from '@mui/material'
import styled from 'styled-components'
export type CardProps = MUICardProps;

export const Card = styled(MUICard)<CardProps> `
  border: 1px solid #666;
  width: 300px;
`

