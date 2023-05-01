import { CardContent as MUICardContent, CardContentProps as MUICardContentProps } from '@mui/material'
import styled from 'styled-components';

export type CardContentProps = MUICardContentProps;

export const CardContent = styled(MUICardContent)<CardContentProps> `
  padding: 8px;
`