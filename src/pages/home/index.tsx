// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ChartjsLineChart from 'src/views/charts/ChartjsLineChart'
import { useTheme } from '@mui/material/styles'

// ** Third Party Styles Import
import 'chart.js/auto'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CardWidgetsSalesCountry from 'src/views/widgets/CardWidgetsSalesCountry'
import CrmOrganicSessions from 'src/views/charts/CrmOrganicSessions'
import TableColumns from 'src/views/data-grid/TableColumns'
// ** Custom Component Import

const Home = () => {


  const theme = useTheme()

  // Vars
  const whiteColor = '#fff'
  const yellowColor = '#ffe802'
  const primaryColor = '#836af9'
  const areaChartBlue = '#2c9aff'
  const barChartYellow = '#ffcf5c'
  const polarChartGrey = '#4f5d70'
  const polarChartInfo = '#299aff'
  const lineChartYellow = '#d4e157'
  const polarChartGreen = '#28dac6'
  const lineChartPrimary = '#787EFF'
  const lineChartWarning = '#ff9800'
  const horizontalBarInfo = '#26c6da'
  const polarChartWarning = '#ff8131'
  const scatterChartGreen = '#28c76f'
  const warningColorShade = '#ffbd1f'
  const areaChartBlueLight = '#84d0ff'
  const areaChartGreyLight = '#edf1f4'
  const scatterChartWarning = '#ff9f43'
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary


  return (
    <Grid container spacing={6}>
      <Grid item xs={2}>
        <CardStatsVertical
          stats='₪13.4k'
          color='success'
          trendNumber='+38%'
          title='Total Sales'
          chipText='Last Six Month'
          icon={<Icon icon='mdi:currency-usd' />}
        />

      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWidgetsSalesCountry />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <CardStatsVertical
          stats='155k'
          color='primary'
          trendNumber='+22%'
          title='Total Orders'
          chipText='Last 4 Month'
          icon={<Icon icon='mdi:cart-plus' />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CrmOrganicSessions />
      </Grid>
      <Grid item xs={12}>
        <ChartjsLineChart
          white={whiteColor}
          labelColor={labelColor}
          success={lineChartYellow}
          borderColor={borderColor}
          legendColor={legendColor}
          primary={lineChartPrimary}
          warning={lineChartWarning}
        />
      </Grid>
      <Grid item xs={12}>
        <TableColumns />
      </Grid>
    </Grid>
  )
}

export default Home
