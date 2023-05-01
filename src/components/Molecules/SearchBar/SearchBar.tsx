import * as React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { Stack, StackProps } from '@mui/material'

const Search = styled(Stack)`
    position: relative;
    border-radius: ${({theme})=> theme.shape.borderRadius};
    marginLeft: 0;
    background-color: ${({theme})=> theme.palette.grey[200] };
    width: 100%;
    border-right: 3px solid ${({theme})=> theme.palette.grey[300] };
    border-bottom: 3px solid ${({theme})=> theme.palette.grey[300] };
`;

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: '15px 50px',
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));

export type SearchBarProps = StackProps & InputBaseProps;

export const SearchBar = (props : SearchBarProps) => (
    <Search sx={{...props.sx}}>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase 
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange= {props.onChange}
            value={props.value}
        />
    </Search>
)
