'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface chartProps {
  values: Array<number>
  expenses: Array<string>
}

export default function ExpenseMonthChart(props: chartProps) {
  const options: ApexOptions = {
    series: props.values,
    chart: {
      width: '100%',
      type: 'pie',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      position: 'left',
      offsetX: -35,
      formatter: function (val: string) {
        return `<span class="text-xs text-muted-foreground">${val}</span>`
      },
    },
    labels: props.expenses,
  }

  return (
    <div id="chart" className="">
      {typeof window !== 'undefined' && (
        <ReactApexChart
          options={options}
          series={options.series}
          type="donut"
          height={'100%'}
        />
      )}
    </div>
  )
}
