'use client'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

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

export default function PaymentYearChart(props: chartProps) {
  function getMonthName(index: number): string {
    const indexMonth = months.findIndex((row) => row.id === index + 1)
    return indexMonth !== -1 ? months[indexMonth].name : ''
  }

  const options: ApexOptions = {
    series: [
      {
        name: 'Net Profit',
        data: props.values,
      },
    ],
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
        return `<div class="flex flex-col space-y-2 bg-card items-center justify-center p-6 text-primary">
                <p class="text-sm font-medium leading-none">${getMonthName(
                  dataPointIndex,
                )}</>
                <p class="text-sm text-muted-foreground">$${
                  series[seriesIndex][dataPointIndex]
                }</>
            </div>`
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 3,
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
  }
  return (
    <div id="chart" className="">
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={'100%'}
      />
    </div>
  )
}
