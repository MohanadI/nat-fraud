import { useState } from 'react'
import Link from 'next/link'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

// ** Styles
import 'react-datepicker/dist/react-datepicker.css'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { DataGridRowType } from 'src/@fake-db/types'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbar'

import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Box, Button, Divider, Drawer, IconButton, Menu, MenuItem, Select, Stack, TextField, Tooltip } from '@mui/material'
import Chip from 'src/@core/components/mui/chip'
import ActionsMenu from './ActionsMenu'
import Icon from 'src/@core/components/icon'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
// ** Custom Component Imports
import CustomInput from './PickersCustomInput'

interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const rows = [
  {
    id: 1,
    full_name: "Report 6574",
    filters: ["19/12/2023", "Arab Hospital"],
    result: [20, 30, 50],
  }];

const ReportsPage = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) => {
  // ** States
  const [data, setData] = useState<DataGridRowType[]>(rows)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')
  const [filteredData, setFilteredData] = useState<DataGridRowType[]>([])
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [date, setDate] = useState<DateType>(new Date())

  const statusObj: StatusObj = {
    1: { title: 'current', color: 'primary' },
    2: { title: 'professional', color: 'success' },
    3: { title: 'rejected', color: 'error' },
    4: { title: 'resigned', color: 'warning' },
    5: { title: 'applied', color: 'info' }
  }

  const escapeRegExp = (value: string) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }

  const columns: GridColDef[] = [
    {
      flex: 0.125,
      field: 'id',
      minWidth: 80,
      headerName: 'Id',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.id}
        </Typography>
      )
    },
    {
      flex: 0.275,
      minWidth: 290,
      field: 'full_name',
      headerName: 'Name',
      renderCell: (params: GridRenderCellParams) => {
        const { row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href='/report-details'>{row.full_name}</Link>
          </Box>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 110,
      field: 'filters',
      headerName: 'Filters',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            {params.row.filters.map((item: any) => {
              return <Chip label='Outlined' variant='outlined' />
            })}
          </>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 140,
      field: 'result',
      headerName: 'Result',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <div
            className='grid-result-chart '
            style={{
              display: 'flex',
              height: '10px',
              width: '100%',
              maxWidth: '200px',
              borderRadius: '30px',
              overflow: 'hidden'
            }}
          >
            <Tooltip title={`Fraud: ${params.row.result[0]}%`} placement='top'>
              <div
                className='grid-result-fraud'
                style={{ width: params.row.result[0] + '%', background: 'red', height: '100%' }}
              ></div>
            </Tooltip>

            <Tooltip title={`Waste: ${params.row.result[1]}%`} placement='top'>
              <div
                className='grid-result-waste'
                style={{ width: params.row.result[1] + '%', background: 'yellow', height: '100%' }}
              ></div>
            </Tooltip>
            <Tooltip title={`Normal: ${params.row.result[2]}%`} placement='top'>
              <div
                className='grid-result-normal'
                style={{ width: params.row.result[2] + '%', background: 'green', height: '100%' }}
              ></div>
            </Tooltip>
          </div>
        )
      }
    },
    {
      flex: 0.125,
      minWidth: 140,
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            <IconButton>
              <Icon icon='mdi:pencil' fontSize={20} />
            </IconButton>
            <IconButton>
              <Icon icon='mdi:reload' fontSize={20} />
            </IconButton>
            <ActionsMenu></ActionsMenu>
          </>
        )
      }
    }
  ]

  const handleSearch = (searchValue: string) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows = data.filter(row => {
      return Object.keys(row).some(field => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    } else {
      setFilteredData([])
    }
  }

  return (
    <Grid container spacing={6}>
      <Drawer
        anchor={'right'}
        open={openDrawer}
        onClose={(event: React.KeyboardEvent | React.MouseEvent) => setOpenDrawer(false)}
      >
        <Box sx={{ width: 400, p: 4 }}>
          <Typography component='h3' variant='body1' sx={{ mb: 4, fontWeight: 'bold', fontSize: 18 }}>
            Create New Report
          </Typography>
          <Box sx={{ mb: 4 }}>
            <Typography>Report Title</Typography>
            <TextField size='small' fullWidth />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>Date</Typography>
            <DatePicker
              selected={date}
              id='basic-input'
              popperPlacement={popperPlacement}
              onChange={(date: Date) => setDate(date)}
              placeholderText='Click to select a date'
              customInput={<CustomInput />}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>Provider</Typography>
            <Select
              label='Age'
              size='small'
              fullWidth
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue=''
            >
              <MenuItem value={10}>Jawwal</MenuItem>
              <MenuItem value={20}>Oreedo</MenuItem>
              <MenuItem value={30}>PS Bank</MenuItem>
            </Select>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>Policy ID</Typography>
            <TextField size='small' fullWidth />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>Claim Payment Type</Typography>
            <Select
              label='Age'
              size='small'
              fullWidth
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue=''
            >
              <MenuItem value={10}>Cash</MenuItem>
              <MenuItem value={20}>Cheque</MenuItem>
              <MenuItem value={30}>Credit Card</MenuItem>
              <MenuItem value={30}>Online Banking</MenuItem>
            </Select>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>Doctor</Typography>
            <TextField size='small' fullWidth />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>City</Typography>
            <Select
              label='Age'
              size='small'
              fullWidth
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue=''
            >
              <MenuItem value={10}>Nablus</MenuItem>
              <MenuItem value={20}>Hebron</MenuItem>
              <MenuItem value={30}>Ramallah</MenuItem>
            </Select>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>HCP Type</Typography>
            <Select
              label='Age'
              size='small'
              fullWidth
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue=''
            >
              <MenuItem value={10}>Doctor</MenuItem>
              <MenuItem value={20}>Lab</MenuItem>
              <MenuItem value={30}>Medical Service Center</MenuItem>
              <MenuItem value={30}>Pharmacy</MenuItem>
              <MenuItem value={30}>Rad</MenuItem>
            </Select>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>Type</Typography>
            <Select
              label='Age'
              size='small'
              fullWidth
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue=''
            >
              <MenuItem value={10}>Chronic</MenuItem>
              <MenuItem value={20}>Dental</MenuItem>
              <MenuItem value={30}>Maternity</MenuItem>
              <MenuItem value={30}>Optical</MenuItem>
              <MenuItem value={30}>Regular</MenuItem>
            </Select>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography>Dependance</Typography>
            <Select
              label='Age'
              size='small'
              fullWidth
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue=''
            >
              <MenuItem value={10}>HOF</MenuItem>
              <MenuItem value={20}>Child</MenuItem>
              <MenuItem value={30}>Parent</MenuItem>
              <MenuItem value={30}>Spouse</MenuItem>
            </Select>
          </Box>
          <Divider />
          <Button fullWidth size='medium' type='submit' variant='contained' sx={{ mb: 5.25 }}>
            Create Report
          </Button>
        </Box>

        {/* Report title Date Range Provider Policy ID Claim Payment Type ( Cash, Cheque, Credit Card, Debit Card, Online
        Banking, Mobile Banking, etc.) Doctor City HCP Type ( Doctor, Lab, Medical Service Center, Pharmacy, Rad ) Type
        ( Chronic, Dental, Maternity, Optical, Regular ) Dependance ( HOF, Child, Parent, Spouse ) */}
      </Drawer>
      <Grid item xs={12}>
        <Card>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <CardHeader title='Reports' />
            <Button
              variant='contained'
              sx={{ marginRight: 5 }}
              onClick={(event: React.KeyboardEvent | React.MouseEvent) => setOpenDrawer(true)}
            >
              New Report
            </Button>
          </Stack>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Effortlessly manage custom fraud detection reports, each capturing specific filters for analyzing
              transactions. Create and explore reports to uncover fraud and non-fraud patterns in your data.
            </Typography>
            <DataGrid
              autoHeight
              columns={columns}
              pageSizeOptions={[7, 10, 25, 50]}
              paginationModel={paginationModel}
              slots={{ toolbar: QuickSearchToolbar }}
              onPaginationModelChange={setPaginationModel}
              rows={filteredData.length ? filteredData : data}
              slotProps={{
                baseButton: {
                  variant: 'outlined'
                },
                toolbar: {
                  value: searchText,
                  clearSearch: () => handleSearch(''),
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
                }
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ReportsPage
