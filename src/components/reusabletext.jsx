import React from 'react'
import { TextField } from '@mui/material'


export const ReusableText=(props)=>{
    return(
        <TextField name={props.name} value={props.val} error={props.err} onChange={props.change}/>
    )
}