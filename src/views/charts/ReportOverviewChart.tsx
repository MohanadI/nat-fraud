// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

interface SaleDataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

const salesData: SaleDataType[] = [
  {
    stats: '8,458',
    color: 'primary',
    title: 'Patients',
    icon: <Icon icon='mdi:account-outline' />
  },
  {
    stats: '123',
    color: 'warning',
    title: 'Doctors',
    icon: (
      <Icon
        icon='healthicons:doctor'
      />
    )
  },
  {
    color: 'info',
    stats: '42k',
    title: 'Transactions',
    icon: <Icon icon='mdi:trending-up' />
  }
]

const renderStats = () => {
  return salesData.map((sale: SaleDataType, index: number) => (
    <Grid item xs={12} sm={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' variant='rounded' color={sale.color} sx={{ mr: 4 }}>
          {sale.icon}
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            {sale.stats}
          </Typography>
          <Typography variant='caption'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const ReportOverviewChart = () => {
  return (
    <Card>
      <CardHeader
        sx={{ pb: 3.25 }}
        title='Report Overview'
        titleTypographyProps={{ variant: 'h6' }}
        subheader={
          <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'success.main' } }}>
            <Typography variant='subtitle2' sx={{ color: 'success.main' }}>
              18% less Fraud than Average
            </Typography>
            <Icon icon='mdi:chevron-up' fontSize={20} />
          </Box>
        }
      />
      <CardContent>
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ReportOverviewChart
