import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const ReportDetails = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Report-1312344' />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={3}>
                Filters
              </Grid>
              <Grid item xs={9}>
                Results
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ReportDetails