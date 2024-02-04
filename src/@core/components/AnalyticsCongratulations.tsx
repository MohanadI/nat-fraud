// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'


const AnalyticsCongratulations = () => {

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={8}>
            <Typography variant='h5' sx={{ mb: 4.5 }}>
              Welcome{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                Nat Health
              </Box>
            </Typography>
            <Typography variant='body2'>
              You have done{' '}
              <Box component='span' sx={{ fontWeight: 600 }}>
                12
              </Box>{' '}
              😎 more Reports today.
            </Typography>
            <Typography sx={{ mb: 4.5 }} variant='body2'>
              Check your new ready reports and get the most out of your data.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AnalyticsCongratulations
