import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Box, Button, Chip, Divider, IconButton, MenuItem, Select, TextField, Tooltip } from '@mui/material'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { useEffect, useState } from 'react'
import { PredictionRowType } from 'src/@fake-db/types'
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbar'

import CustomInput from '../reports-page/PickersCustomInput'
import ReportOverviewChart from 'src/views/charts/ReportOverviewChart'
import CrmOrganicSessions from 'src/views/charts/CrmOrganicSessions'

// sample data for rows

const rows = [
  {
    id: 21233,
    sub_id: '12312344683',
    visit_id: '978987987',
    visit_date: '20/01/2024',
    status: 'Fraud'
  },
  {
    id: 38456,
    sub_id: '65789012345',
    visit_id: '456789012',
    visit_date: '15/02/2024',
    status: 'Normal'
  },
  {
    id: 59218,
    sub_id: '78901234567',
    visit_id: '123456789',
    visit_date: '10/03/2024',
    status: 'Waste'
  },
  {
    id: 77345,
    sub_id: '23456789012',
    visit_id: '890123456',
    visit_date: '25/04/2024',
    status: 'Fraud'
  },
  {
    id: 90123,
    sub_id: '34567890123',
    visit_id: '567890123',
    visit_date: '05/05/2024',
    status: 'Normal'
  },
  {
    id: 11234,
    sub_id: '45678901234',
    visit_id: '234567890',
    visit_date: '18/06/2024',
    status: 'Waste'
  },
  {
    id: 25678,
    sub_id: '56789012345',
    visit_id: '901234567',
    visit_date: '30/07/2024',
    status: 'Fraud'
  },
  {
    id: 33456,
    sub_id: '67890123456',
    visit_id: '678901234',
    visit_date: '12/08/2024',
    status: 'Normal'
  },
  {
    id: 49876,
    sub_id: '78901234567',
    visit_id: '345678901',
    visit_date: '23/09/2024',
    status: 'Waste'
  },
  {
    id: 55555,
    sub_id: '89012345678',
    visit_id: '012345678',
    visit_date: '07/10/2024',
    status: 'Fraud'
  }
]

const ReportDetails = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) => {
  const [data, setData] = useState<PredictionRowType[]>([])
  const [date, setDate] = useState<DateType>(new Date())
  const [subscriberId, setSubscriberId] = useState<string>('')
  const [hofId, setHofId] = useState<string>('')
  const [provider, setProvider] = useState<string>('')
  const [policyId, setPolicyId] = useState<string>('')
  const [claimPaymentType, setClaimPaymentType] = useState<string>('')
  const [hcpName, setHcpName] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [hcpType, setHcpType] = useState<string>('')
  const [visitType, setVisitType] = useState<string>('')
  const [dependance, setDependance] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')

  const [filteredData, setFilteredData] = useState<PredictionRowType[]>([])
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const renderChip = (label: any) => (
    <Chip sx={{ mr: 1, mt: 1 }} label={label} avatar={<Icon icon='material-symbols:check' />} />
  )

  const escapeRegExp = (value: string) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }
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

  useEffect(() => {
    setData(rows);
    const queryParameters = new URLSearchParams(window.location.search)
    const reportId = queryParameters.get('id')
    if (reportId == '11' && localStorage.getItem('createReportFilters')) {
      const createReportFilters = JSON.parse(localStorage.getItem('createReportFilters')!)
      createReportFilters.date && setDate(new Date(createReportFilters.date))
      createReportFilters.subscriberId && setSubscriberId(createReportFilters.subscriberId)
      createReportFilters.hofId && setHofId(createReportFilters.hofId)
      createReportFilters.provider && setProvider(createReportFilters.provider)
      createReportFilters.policyId && setPolicyId(createReportFilters.policyId)
      createReportFilters.claimPaymentType && setClaimPaymentType(createReportFilters.claimPaymentType)
      createReportFilters.hcpName && setHcpName(createReportFilters.hcpName)
      createReportFilters.city && setCity(createReportFilters.city)
      createReportFilters.hcpType && setHcpType(createReportFilters.hcpType)
      createReportFilters.visitType && setVisitType(createReportFilters.visitType)
      createReportFilters.dependance && setDependance(createReportFilters.dependance)
    }
  }, [])

  const columns: GridColDef[] = [
    {
      flex: 0.125,
      field: 'id',
      minWidth: 80,
      headerName: 'Transaction Id'
    },
    {
      flex: 0.125,
      field: 'sub_id',
      minWidth: 80,
      headerName: 'Subscriber Id'
    },
    {
      flex: 0.125,
      field: 'visit_id',
      minWidth: 80,
      headerName: 'Visit Id'
    },
    {
      flex: 0.125,
      field: 'visit_date',
      minWidth: 80,
      headerName: 'Visit Date'
    },
    {
      flex: 0.125,
      field: 'status',
      minWidth: 80,
      headerName: 'Status',
      renderCell: (params: GridRenderCellParams) => {
        if (params.row.status === 'Fraud') {
          return <Chip label={params.row.status} color='error' variant='outlined' />
        }
        if (params.row.status === 'Normal') {
          return <Chip label={params.row.status} color='info' variant='outlined' />
        }
        if (params.row.status === 'Waste') {
          return <Chip label={params.row.status} color='warning' variant='outlined' />
        }
      }
    },
    {
      flex: 0.125,
      minWidth: 140,
      field: 'actions',
      headerName: 'Actions',
      renderCell: () => {
        return (
          <>
            <Tooltip title='Show Details'>
              <IconButton>
                <Icon icon='bx:detail' fontSize={20} />
              </IconButton>
            </Tooltip>

            <Tooltip title='Send Feedback'>
              <IconButton>
                <Icon icon='uil:feedback' fontSize={20} />
              </IconButton>
            </Tooltip>
          </>
        )
      }
    }
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Report-1312344' />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={3}>
                <Typography variant='h6'>Filters</Typography>
                <Divider />
                <Card sx={{ mt: 2 }}>
                  <CardContent>
                    <Box>
                      <Box sx={{ mb: 4 }}>
                        <Typography>Subscriber ID</Typography>
                        <TextField
                          value={subscriberId}
                          size='small'
                          fullWidth
                          onChange={event => setSubscriberId(event.target.value)}
                        />
                      </Box>
                      <Box sx={{ mb: 4 }}>
                        <Typography>HOF ID</Typography>
                        <TextField
                          size='small'
                          value={hofId}
                          fullWidth
                          onChange={event => setHofId(event.target.value)}
                        />
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
                          label='Provider'
                          size='small'
                          fullWidth
                          labelId='demo-simple-select-label'
                          id='demo-simple-select'
                          defaultValue=''
                          value={provider}
                          onChange={event => setProvider(event.target.value)}
                        >
                          <MenuItem value={10}>Jawwal</MenuItem>
                          <MenuItem value={20}>Oreedo</MenuItem>
                          <MenuItem value={30}>PS Bank</MenuItem>
                        </Select>
                      </Box>
                      <Box sx={{ mb: 4 }}>
                        <Typography>Policy ID</Typography>
                        <TextField
                          size='small'
                          value={policyId}
                          fullWidth
                          onChange={event => setPolicyId(event.target.value)}
                        />
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
                          value={claimPaymentType}
                          onChange={event => setClaimPaymentType(event.target.value)}
                        >
                          <MenuItem value={10}>Cash</MenuItem>
                          <MenuItem value={20}>Cheque</MenuItem>
                          <MenuItem value={30}>Credit Card</MenuItem>
                          <MenuItem value={30}>Online Banking</MenuItem>
                        </Select>
                      </Box>
                      <Box sx={{ mb: 4 }}>
                        <Typography>HCP Name</Typography>
                        <TextField
                          size='small'
                          value={hcpName}
                          fullWidth
                          onChange={event => setHcpName(event.target.value)}
                        />
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
                          value={city}
                          onChange={event => setCity(event.target.value)}
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
                          value={hcpType}
                          onChange={event => setHcpType(event.target.value)}
                        >
                          <MenuItem value={10}>Doctor</MenuItem>
                          <MenuItem value={20}>Lab</MenuItem>
                          <MenuItem value={30}>Medical Service Center</MenuItem>
                          <MenuItem value={30}>Pharmacy</MenuItem>
                          <MenuItem value={30}>Rad</MenuItem>
                        </Select>
                      </Box>
                      <Box sx={{ mb: 4 }}>
                        <Typography>Visits Type</Typography>
                        <Select
                          label='Age'
                          size='small'
                          fullWidth
                          labelId='demo-simple-select-label'
                          id='demo-simple-select'
                          defaultValue=''
                          value={visitType}
                          onChange={event => setVisitType(event.target.value)}
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
                          value={dependance}
                          onChange={event => setDependance(event.target.value)}
                        >
                          <MenuItem value={10}>HOF</MenuItem>
                          <MenuItem value={20}>Child</MenuItem>
                          <MenuItem value={30}>Parent</MenuItem>
                          <MenuItem value={30}>Spouse</MenuItem>
                        </Select>
                      </Box>
                      <Divider />
                      <Button fullWidth size='medium' type='submit' variant='contained' sx={{ mb: 5.25 }}>
                        Update Report
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={9}>
                <Typography variant='h6'>Results</Typography>
                <Divider />
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={8}>
                      <ReportOverviewChart />
                      <Card sx={{ mt: 4 }}>
                        <CardHeader sx={{ pb: 3.25 }} title='Report Filters' titleTypographyProps={{ variant: 'h6' }} />
                        <CardContent>
                          {renderChip('SUB ID: 1234123123')}
                          {renderChip('HOF ID: 54123123')}
                          {renderChip('DATE: 20/01/2024 - 30/01/2024')}
                          {renderChip('CPT: CASH')}
                          {renderChip('CITY: Hebron')}
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <CrmOrganicSessions />
                    </Grid>
                  </Grid>
                </Box>
                <Card sx={{ mt: 4 }}>
                  <CardHeader sx={{ pb: 3.25 }} title='Report Filters' titleTypographyProps={{ variant: 'h6' }} />
                  <CardContent>
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ReportDetails
