import { useState } from 'react'
import Link from 'next/link'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { DataGridRowType } from 'src/@fake-db/types'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import QuickSearchToolbar from 'src/views/table/data-grid/QuickSearchToolbar'

import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Box, Button, Drawer, Stack } from '@mui/material'

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
    avatar: '8.png',
    full_name: "Korrie O'Crevy",
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    start_date: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 2
  }];

const ReportsPage = () => {

  // ** States
  const [data, setData] = useState<DataGridRowType[]>(rows)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('')
  const [filteredData, setFilteredData] = useState<DataGridRowType[]>([])
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })



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
      flex: 0.275,
      minWidth: 290,
      field: 'full_name',
      headerName: 'Name',
      renderCell: (params: GridRenderCellParams) => {
        const { row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href='/report-details'>
              {row.full_name}
            </Link>

          </Box>
        )
      }
    },
    {
      flex: 0.2,
      type: 'date',
      minWidth: 120,
      headerName: 'Date',
      field: 'start_date',
      valueGetter: params => new Date(params.value),
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.start_date}
        </Typography>
      )
    },
    {
      flex: 0.2,
      minWidth: 110,
      field: 'salary',
      headerName: 'Salary',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.salary}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'age',
      minWidth: 80,
      headerName: 'Age',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.2,
      minWidth: 140,
      field: 'status',
      headerName: 'Status',
      renderCell: (params: GridRenderCellParams) => {
        const status = statusObj[params.row.status]

        return (
          <CustomChip
            size='small'
            skin='light'
            color={status.color}
            label={status.title}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
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
        test
      </Drawer>
      <Grid item xs={12}>
        <Card>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <CardHeader title='Reports' />
            <Button variant='contained'
              sx={{ marginRight: 5 }}
              onClick={(event: React.KeyboardEvent | React.MouseEvent) => setOpenDrawer(true)}>New Report</Button>
          </Stack>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Effortlessly manage custom fraud detection reports, each capturing specific filters for analyzing transactions. Create and explore reports to uncover fraud and non-fraud patterns in your data.</Typography>
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
