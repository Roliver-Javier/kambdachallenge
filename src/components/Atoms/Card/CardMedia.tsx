import { CardMedia as MUICardMedia, CardMediaProps as MUICardMediaProps } from '@mui/material'
import styled from 'styled-components';

export type CardMediaProps = MUICardMediaProps;
export const CardMedia = styled(MUICardMedia)<CardMediaProps> ``;
