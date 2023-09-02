'use client'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

interface chartProps {
  total: number
  paid: number
}

export default function GoalChart(props: chartProps) {
  const percent = Math.round((props.paid / props.total) * 100)
  // const remain = props.paid - props.total
  const text = ''

  const options: ApexOptions = {
    series: [percent],
    chart: {
      height: '100%',
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#1c1917', // cor do fundo da barra
          strokeWidth: '67%',
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: 0,
            show: true,
            color: '#FFFFFF', // Cor do texto do meio
            fontSize: '14px',
          },
          value: {
            fontSize: '42px',
            show: true,
          },
        },
      },
    },
    fill: {
      colors: ['#22c55e'],
    },
    stroke: {
      lineCap: 'round',
    },
    labels: [text],
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="radialBar"
        height={300}
      />
    </div>
  )
}
