'use client'
import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'

interface chartProps {
  values: Array<number>
}

interface monthsProps {
  id: number
  name: string
}

const months: Array<monthsProps> = [
  {
    id: 1,
    name: 'January',
  },
  {
    id: 2,
    name: 'February',
  },
  {
    id: 3,
    name: 'March',
  },
  {
    id: 4,
    name: 'April',
  },
  {
    id: 5,
    name: 'May',
  },
  {
    id: 6,
    name: 'June',
  },
  {
    id: 7,
    name: 'July',
  },
  {
    id: 8,
    name: 'August',
  },
  {
    id: 9,
    name: 'September',
  },
  {
    id: 10,
    name: 'October',
  },
  {
    id: 11,
    name: 'November',
  },
  {
    id: 12,
    name: 'December',
  },
]

export default class PaymentYearChart extends Component<chartProps> {
  constructor(props: chartProps) {
    super(props)

    function getMonth(index: number) {
      const indexMonth = months.findIndex((row) => row.id === index + 1)
      return indexMonth !== -1 ? months[indexMonth] : ''
    }

    this.state = {
      series: [
        {
          name: 'Net Profit',
          data: props.values,
        },
      ],
      options: {
        chart: {
          type: 'bar',
          height: '100%',
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          custom: function ({ series, seriesIndex, dataPointIndex }) {
            const monthLabel = getMonth(dataPointIndex)
            return `<div class="flex flex-col space-y-2 bg-card items-center justify-center p-6 text-primary">
                    <p class="text-sm font-medium leading-none">${monthLabel.name}</>
                    <p class="text-sm text-muted-foreground">$${series[seriesIndex][dataPointIndex]}</>
                </div>`
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '70%',
            endingShape: 'rounded',
          },
        },
        colors: ['#22c55e'],
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      },
    }
  }

  render() {
    return (
      <div id="chart" className="">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={'100%'}
        />
      </div>
    )
  }
}
