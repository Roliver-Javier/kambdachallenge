import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps } from '@mui/material/Select';
import { Stack, StackProps } from '@mui/material'

type TOption = {
    value: any;
    name: string;
}
export type TFilterSelect = {
    label: string;
    options: TOption[]
}

export type FilterSelectProps = StackProps & SelectProps & TFilterSelect;
export const FilterSelect = (props: FilterSelectProps) => {
  return (
    <Stack sx={props.sx}>
        <FormControl fullWidth>
            <InputLabel id="filter-select-label">{props.label}</InputLabel>
            <Select
                labelId="filter-select-label"
                id="filter-select"
                value={props.value}
                label="Filter"
                onChange={props.onChange}
                >
                {
                    props.options.map((option, index)=>(
                        <MenuItem  key={index} value={option.value}>{option.name}</MenuItem>
                    ))
                }
            </Select>
    </FormControl>
   </Stack>
  )
}