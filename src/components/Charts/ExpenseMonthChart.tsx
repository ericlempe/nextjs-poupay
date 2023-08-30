'use client'
import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'

interface chartProps {
  values: Array<number>
  expenses: Array<string>
}

export default class ExpenseMonthChart extends Component<chartProps> {
  constructor(props: chartProps) {
    super(props)

    this.state = {
      series: props.values,
      options: {
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
          formatter: function (val, opts) {
            return `<span class="text-xs text-muted-foreground">${val}</span>`
          },
        },
        labels: props.expenses,
      },
    }
  }

  render() {
    return (
      <div id="chart" className="">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={'100%'}
        />
      </div>
    )
  }
}
