// ** MUI Imports
import Grid from '@mui/material/Grid'
import ChartjsLineChart from 'src/views/charts/ChartjsLineChart'
import { useTheme } from '@mui/material/styles'

// ** Third Party Styles Import
import 'chart.js/auto'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CardWidgetsSalesCountry from 'src/views/widgets/CardWidgetsSalesCountry'
import CrmOrganicSessions from 'src/views/charts/CrmOrganicSessions'
import AnalyticsCongratulations from 'src/@core/components/AnalyticsCongratulations'

const Home = () => {
  const theme = useTheme()

  // Vars
  const whiteColor = '#fff'
  const lineChartYellow = '#d4e157'
  const lineChartPrimary = '#787EFF'
  const lineChartWarning = '#ff9800'
  const borderColor = theme.palette.divider
  const labelColor = theme.palette.text.disabled
  const legendColor = theme.palette.text.secondary

  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={8}>
        <AnalyticsCongratulations />
      </Grid>
      <Grid item xs={6} md={2}>
        <CardStatsVertical
          stats='₪130.4k'
          color='success'
          trendNumber='+38%'
          title='Total Invoices'
          chipText='Last Six Month'
          icon={<Icon icon='mdi:currency-usd' />}
        />
      </Grid>
      <Grid item xs={6} md={2}>
        <CardStatsVertical
          stats='78.5K'
          color='warning'
          trendNumber='+10%'
          title='Total Patients Checked'
          chipText='Last Six Month'
          icon={<Icon icon='mdi:person' />}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardWidgetsSalesCountry />
      </Grid>
      <Grid item xs={12} md={6}>
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
    </Grid>
  )
}

export default Home
