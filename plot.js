Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Compare My Portfolio'
    },
    xAxis: {
        categories: [
            'Environment',
            'Social',
            'Governance',
            'Weighted Average'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Value'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Avg',
        data: [6,5,7,6]

    }, {
        name: 'My Portfolio',
        data: [10,3,8,7]

    }, {
      name: 'Gold Star Threshold',
      data: [9, 8, 10, 8]
    }
  ]
});
