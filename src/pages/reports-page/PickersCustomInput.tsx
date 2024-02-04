// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import TextField from '@mui/material/TextField'

interface PickerProps {
  label?: string
  readOnly?: boolean
  InputProps?: any
}

const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  // ** Props
  const { label, readOnly } = props

  return (
    <TextField
      label={label || ''}
      size='small'
      fullWidth
      inputRef={ref}
      {...props}
      {...(readOnly && { inputProps: { readOnly: true } })}
    />
  )
})

export default PickersComponent
