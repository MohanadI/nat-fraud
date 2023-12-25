// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { Line } from 'react-chartjs-2'
import { ChartData, ChartOptions } from 'chart.js'

interface LineProps {
  white: string
  warning: string
  primary: string
  success: string
  labelColor: string
  borderColor: string
  legendColor: string
}

const ChartjsLineChart = (props: LineProps) => {
  // ** Props
  const { white, primary, success, warning, labelColor, borderColor, legendColor } = props

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          color: borderColor
        }
      },
      y: {
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100,
          color: labelColor
        },
        grid: {
          color: borderColor
        }
      }
    },
    plugins: {
      legend: {
        align: 'end',
        position: 'top',
        labels: {
          padding: 25,
          boxWidth: 10,
          color: legendColor,
          usePointStyle: true
        }
      }
    }
  }

  const data: ChartData<'line'> = {
    labels: ["13 Dec", "14 Dec", "15 Dec", "16 Dec", "17 Dec", "18 Dec", "19 Dec", "20 Dec", "21 Dec", "22 Dec", "23 Dec", "24 Dec", "25 Dec", "26 Dec", "27 Dec"],
    datasets: [
      {
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'Normal',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        borderColor: primary,
        backgroundColor: primary,
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: white,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: primary,
        data: [120, 150, 180, 270, 210, 160, 160, 202, 265, 210, 200, 190, 250, 230, 200]
      },
      {
        fill: false,
        tension: 0.5,
        label: 'Fraud',
        pointRadius: 1,
        pointHoverRadius: 5,
        pointStyle: 'circle',
        borderColor: warning,
        backgroundColor: warning,
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: white,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: warning,
        data: [10, 19, 21, 8, 30, 44, 17, 18, 14, 19, 12, 13, 14, 19, 11]
      },
      {
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'Waste',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        borderColor: success,
        backgroundColor: success,
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: white,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: success,
        data: [30, 33, 22, 55, 44, 33, 22, 14, 17, 20, 28, 30, 33, 24, 25]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title='Transactions Frequency' subheader='Including all Types' />
      <CardContent>
        <Line data={data} height={400} options={options} />
      </CardContent>
    </Card>
  )
}

export default ChartjsLineChart
