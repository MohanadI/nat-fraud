import { useEffect, useState } from 'react'

// ** Custom Imports
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import CustomInput from './PickersCustomInput'
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** MUI Imports
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Data Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

export const ScheduleReport = ({
  popperPlacement,
  open,
  onClose
}: {
  popperPlacement: ReactDatePickerProps['popperPlacement']
  open: boolean
  onClose: () => void
}) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [date, setDate] = useState<DateType>(new Date())

  const [value, setValue] = useState<string>('Daily');
  const [customValue, setCustomValue] = useState<string>('Day')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

   const handleCustomChange = (event: SelectChangeEvent) => {
     setCustomValue(event.target.value as string)
   }

  useEffect(() => {
    setOpenDrawer(open)
  }, [open])

  return (
    <Drawer
      anchor={'right'}
      open={openDrawer}
      onClose={(event: React.KeyboardEvent | React.MouseEvent) => {
        setOpenDrawer(false)
        onClose()
      }}
    >
      <Box sx={{ width: 750, p: 5 }}>
        <PerfectScrollbar>
          <Box sx={{ width: '100%' }}>
            <Typography
              component='h3'
              variant='body1'
              sx={{ mb: 2, fontWeight: 'bold', color: '#6e197c', fontSize: 20 }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  verticalAlign: 'middle',
                  marginRight: '5px'
                }}
                width='1em'
                height='1em'
                viewBox='0 0 2048 2048'
              >
                <path
                  fill='#6e197c'
                  d='M256 1536h768v128H128V128h256V0h128v128h896V0h128v128h256v896h-128V640H256zm0-1280v256h1408V256h-128v128h-128V256H512v128H384V256zm1792 896v384h-384v-128h190q-45-60-112-94t-142-34q-59 0-111 20t-95 55t-70 85t-38 107l-127-22q14-81 54-149t98-118t133-78t156-28q91 0 174 35t146 102v-137zm-448 768q58 0 111-20t95-55t70-85t38-107l127 22q-14 81-54 149t-98 118t-133 78t-156 28q-91 0-174-35t-146-102v137h-128v-384h384v128h-190q45 60 112 94t142 34'
                ></path>
              </svg>
              Schedule Your Report
            </Typography>
            <Typography component='p' variant='body1' sx={{ mb: 4, fontWeight: 'light', fontSize: 14 }}>
              You can use this screen to generate a report occurring on a specific date or repeating based on your
              needs.
            </Typography>
            <Divider />
            <Box sx={{ mb: 4, mt: 5 }}>
              <TextField
                fullWidth
                label='Report Title'
                size='small'
                placeholder='Monthly Report for Jawwal Users'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4zm10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1l-2.1-2.1l1-1c.1-.1.2-.2.4-.2m0 3.9L14.1 23H12v-2.1l6.1-6.1z'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Report Description'
                size='small'
                multiline
                minRows={3}
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                placeholder='This report will contain all the information about the users of the Jawwal policy and the associated claims.'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13V4H6v16h12V9zM6 4v5zv16z'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Divider />
            <Typography
              component='h4'
              variant='body1'
              sx={{ mb: 4, mt: 4, fontWeight: 'bold', color: '#333333', fontSize: 17 }}
            >
              Filters
            </Typography>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Subscriber ID'
                size='small'
                placeholder='P123456789'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='black'
                          d='M13.07 10.41a5 5 0 0 0 0-5.82A3.39 3.39 0 0 1 15 4a3.5 3.5 0 0 1 0 7a3.39 3.39 0 0 1-1.93-.59M5.5 7.5A3.5 3.5 0 1 1 9 11a3.5 3.5 0 0 1-3.5-3.5m2 0A1.5 1.5 0 1 0 9 6a1.5 1.5 0 0 0-1.5 1.5M16 17v2H2v-2s0-4 7-4s7 4 7 4m-2 0c-.14-.78-1.33-2-5-2s-4.93 1.31-5 2m11.95-4A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4Z'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='HOF ID'
                size='small'
                placeholder='T123456789'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='m6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <DatePicker
                selected={date}
                id='basic-input'
                popperPlacement={popperPlacement}
                onChange={(date: Date) => setDate(date)}
                placeholderText='Click to select a date'
                customInput={
                  <CustomInput
                    label='Data From Date'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M9 10H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14z'
                            ></path>
                          </svg>
                        </InputAdornment>
                      )
                    }}
                  />
                }
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <DatePicker
                selected={date}
                id='basic-input-2'
                popperPlacement={popperPlacement}
                onChange={(date: Date) => setDate(date)}
                placeholderText='Click to select a date'
                customInput={
                  <CustomInput
                    label='Data To Date'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M9 10H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14z'
                            ></path>
                          </svg>
                        </InputAdornment>
                      )
                    }}
                  />
                }
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Provider'
                size='small'
                placeholder='PR123456789'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 48 48'>
                        <path
                          fill='currentColor'
                          fillRule='evenodd'
                          d='M6 7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm25 25a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1zm-.609-3.023l-3.184-3.184l-1.414 1.414l3.184 3.184zm-8.714-8.714l3.977 3.977l-1.414 1.415l-3.977-3.978v4.218h-2v-7.632h7.632v2z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Policy ID'
                size='small'
                placeholder='P123456789'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 2.125-.725 4.088T17.2 18.65l-3.2-3.2q-.45.275-.962.413T12 16q-1.65 0-2.825-1.175T8 12q0-1.65 1.175-2.825T12 8q1.65 0 2.825 1.175T16 12q0 .55-.137 1.063t-.413.987l1.5 1.5q.5-1.025.775-2.15T18 11.1V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3q.65-.2 1.238-.512t1.162-.738l1.4 1.4q-.825.675-1.787 1.175T12 22m0-8q.825 0 1.413-.587T14 12q0-.825-.587-1.412T12 10q-.825 0-1.412.588T10 12q0 .825.588 1.413T12 14m.2-1.925'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Claim Payment Type'
                size='small'
                placeholder='Cash, Check, Credit Card, etc.'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M20 8H4V6h16m0 12H4v-6h16m0-8H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='HCP Name'
                size='small'
                placeholder='H123456789'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.63-.27-1.36-.27-2 .02V5H5v13.26l1-.66l3 2l.86-.6zm2-1.47L18 13.83l2.03 2.04L13.9 22h-2.04zm9.85-5.77l-.98.98l-2.04-2.04l.98-.98l.01-.01l.01-.01c.17-.16.43-.17.62-.04c.03.01.06.04.08.06l1.32 1.32c.2.2.2.53 0 .72M17 9V7H7v2zm-2 4v-2H7v2z'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='City'
                size='small'
                placeholder='Ramallah, Jenin, Nablus, etc.'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-8.95 5H1v-2h2.05C3.5 6.83 6.83 3.5 11 3.05V1h2v2.05c4.17.45 7.5 3.78 7.95 7.95H23v2h-2.05c-.45 4.17-3.78 7.5-7.95 7.95V23h-2v-2.05C6.83 20.5 3.5 17.17 3.05 13M12 5a7 7 0 0 0-7 7a7 7 0 0 0 7 7a7 7 0 0 0 7-7a7 7 0 0 0-7-7'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='HCP Type'
                size='small'
                placeholder='Doctor, Lab, Medical Service Center, etc.'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M17 20.41L18.41 19L15 15.59L13.59 17M7.5 8H11v5.59L5.59 19L7 20.41l6-6V8h3.5L12 3.5'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Divider />
            <Typography
              component='h4'
              variant='body1'
              sx={{ mb: 4, mt: 4, fontWeight: 'bold', color: '#333333', fontSize: 17 }}
            >
              Repeat Conditions
            </Typography>
            <Box sx={{ mb: 4 }}>
              <DatePicker
                selected={date}
                id='starting-date'
                popperPlacement={popperPlacement}
                onChange={(date: Date) => setDate(date)}
                placeholderText='Select start date'
                customInput={
                  <CustomInput
                    label='Starting From'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M9 10H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14z'
                            ></path>
                          </svg>
                        </InputAdornment>
                      )
                    }}
                  />
                }
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-multiple-checkbox-label'>Repeat</InputLabel>
                <Select
                  size='small'
                  label='Repeat'
                  value={value}
                  onChange={handleChange}
                  id='demo-multiple-checkbox'
                  labelId='demo-multiple-checkbox-label'
                  startAdornment={
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2z'
                        ></path>
                      </svg>
                    </InputAdornment>
                  }
                >
                  <MenuItem value={'Daily'}>Daily</MenuItem>
                  <MenuItem value={'Weekly'}>Weekly</MenuItem>
                  <MenuItem value={'Monthly'}>Monthly</MenuItem>
                  <MenuItem value={'Yearly'}>Yearly</MenuItem>
                  <MenuItem value={'Custom'}>Custom</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {value === 'Custom' && (
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      label='Repeat Every'
                      size='small'
                      placeholder='1, 2'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                              <path
                                fill='currentColor'
                                d='M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m-3-3h6v-2h-4v-2h2q.825 0 1.413-.587T15 11V9q0-.825-.587-1.412T13 7H9v2h4v2h-2q-.825 0-1.412.588T9 13z'
                              ></path>
                            </svg>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <FormControl fullWidth>
                      <InputLabel id='demo-multiple-checkbox-label'>Repeat</InputLabel>
                      <Select
                        size='small'
                        label='Repeat'
                        value={customValue}
                        onChange={handleCustomChange}
                        id='demo-multiple-checkbox'
                        labelId='demo-multiple-checkbox-label'
                        startAdornment={
                          <InputAdornment position='start'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                              <path
                                fill='currentColor'
                                d='M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2z'
                              ></path>
                            </svg>
                          </InputAdornment>
                        }
                      >
                        <MenuItem value={'Day'}>Day</MenuItem>
                        <MenuItem value={'Week'}>Week</MenuItem>
                        <MenuItem value={'Month'}>Month</MenuItem>
                        <MenuItem value={'Year'}>Year</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <DatePicker
                  selected={date}
                  id='end-date'
                  popperPlacement={popperPlacement}
                  onChange={(date: Date) => setDate(date)}
                  placeholderText='Select end date'
                  customInput={
                    <CustomInput
                      label='End Date'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                              <path
                                fill='currentColor'
                                d='M9 10H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14z'
                              ></path>
                            </svg>
                          </InputAdornment>
                        )
                      }}
                    />
                  }
                />
              </Box>
            )}
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Repeat For'
                size='small'
                placeholder='10 times, 5 times , etc. ( Keep empty for unlimited repeat)'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h7V6zm16 12V6h-1.24c.24.54.19 1.07.19 1.13c-.07.67-.54 1.37-.71 1.62l-2.33 2.55l3.32-.02l.01 1.22l-5.2-.03l-.04-1s3.05-3.23 3.2-3.52c.14-.28.71-1.95-.7-1.95c-1.23.05-1.09 1.3-1.09 1.3l-1.54.01s.01-.66.38-1.31H13v12h2.58l-.01-.86l.97-.01s.91-.16.92-1.05c.04-1-.81-1-.96-1c-.13 0-1.07.05-1.07.87h-1.52s.04-2.06 2.59-2.06c2.6 0 2.46 2.02 2.46 2.02s.04 1.25-1.11 1.72l.52.37zM8.92 16h-1.5v-5.8l-1.8.56V9.53l3.14-1.12h.16z'
                        ></path>
                      </svg>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <FormControlLabel
                label='Send Email Notification When Report Is Ready'
                control={<Checkbox defaultChecked name='basic-checked' />}
              />
            </Box>
            <Button variant='contained' color='primary' sx={{ mt: 4, mb: 4 }}>
              Save
            </Button>
          </Box>
        </PerfectScrollbar>
      </Box>
    </Drawer>
  )
}
