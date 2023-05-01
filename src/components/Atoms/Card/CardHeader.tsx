import { CardHeader as MUICardHeader, CardHeaderProps as MUICardHeaderProps } from '@mui/material'
import styled from 'styled-components';

export type CardHeaderProps = MUICardHeaderProps;

export const CardHeader = styled(MUICardHeader)<CardHeaderProps> `
  padding: 8px;
`

