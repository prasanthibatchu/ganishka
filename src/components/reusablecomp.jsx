import { TextField } from '@mui/material'
import React from 'react'
export const ReusableTextField=(props)=>{
    return <TextField label={props.label} name={props.name} value={props.val} error={props.error} onChange={props.change}>

    </TextField>
}