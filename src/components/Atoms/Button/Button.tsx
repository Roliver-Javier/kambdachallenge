import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material'
import styled from 'styled-components'
export type ButtonProps = MUIButtonProps;

export const Button = styled(MUIButton)<ButtonProps> `
  border: 1px solid #666;
  border-right: 4px solid #666;
`

