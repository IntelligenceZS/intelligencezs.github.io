$(function () {
    //Widgets count
    $('.count-to').countTo();

    //Sales count to
    $('.sales-count-to').countTo({
        formatter: function (value, options) {
            return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ' ').replace('.', ',');
        }
    });
var label = ['Astringency','Heat','Persistence','Smell','Taste','Texture','Touch'];
var france_label_values = [5, 25, 20, 10, 10, 15, 15];
var italy_label_values = [8, 8, 5, 15, 44, 12, 8];
var portugal_label_values = [12,15,8,30,15,12,8];
    initRealTimeChart();
    initDonutChart();
    initSparkline();
    initPieChart(label,france_label_values,italy_label_values,portugal_label_values);
    initAreaChart();
    initLineChart();
    initBarChart();
});

var realtime = 'on';
function initRealTimeChart() {
    //Real time ==========================================================================================
    var plot = $.plot('#real_time_chart', [getRandomData()], {
        series: {
            shadowSize: 0,
            color: 'rgb(0, 188, 212)'
        },
        grid: {
            borderColor: '#f3f3f3',
            borderWidth: 1,
            tickColor: '#f3f3f3'
        },
        lines: {
            fill: true
        },
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            min: 0,
            max: 100
        }
    });

    function updateRealTime() {
        plot.setData([getRandomData()]);
        plot.draw();

        var timeout;
        if (realtime === 'on') {
            timeout = setTimeout(updateRealTime, 320);
        } else {
            clearTimeout(timeout);
        }
    }

    updateRealTime();

    $('#realtime').on('change', function () {
        realtime = this.checked ? 'on' : 'off';
        updateRealTime();
    });
    //====================================================================================================
}

function initSparkline() {
    $(".sparkline").each(function () {
        var $this = $(this);
        $this.sparkline('html', $this.data());
    });
}

function initDonutChart() {
        Morris.Donut({
            element: 'donut_chart_france',
            data: [{
                label: 'Champagne',
                value: 11.0
            }, {
                label: 'Marsala Wine',
                value: 0.8
            }, {
                label: 'Moscatel de Setubal',
                value: 3.9
            }, {
                label: 'Sherry',
                value: 1.0
            }, {
                label: 'Other Wines',
                value: 83.3
            }],
            colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)', 'rgb(112, 0, 150)'],
            formatter: function (y) {
                return y + '%'
            }
        });

        Morris.Donut({
            element: 'donut_chart_italy',
            data: [{
                label: 'Champagne',
                value: 2.9
            }, {
                label: 'Marsala Wine',
                value: 8.9
            }, {
                label: 'Moscatel de Setubal',
                value: 2.8
            }, {
                label: 'Sherry',
                value: 2.8
            }, {
                label: 'Other Wines',
                value: 82.6
            }],
            colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)', 'rgb(112, 0, 150)'],
            formatter: function (y) {
                return y + '%'
            }
        });
    
        Morris.Donut({
            element: 'donut_chart_portugal',
            data: [{
                label: 'Champagne',
                value: 1.9
            }, {
                label: 'Marsala Wine',
                value: 0.6
            }, {
                label: 'Moscatel de Setubal',
                value: 9.4
            }, {
                label: 'Sherry',
                value: 2.3
            }, {
                label: 'Other Wines',
                value: 85.9
            }],
            colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)', 'rgb(112, 0, 150)'],
            formatter: function (y) {
                return y + '%'
            }
        });
        
        
    
}
function initPieChart(label,france_label_values,italy_label_values,portugal_label_values){
    var pieChartData = [], pieChartSeries = 7;
    var pieChartColors = ['#E91E63', '#03A9F4', '#FFC107', '#009688', '#700096', '#ef000b','#62f700'];


    for (var i = 0; i < pieChartSeries; i++) {
        pieChartData[i] = {
            label: label[i],
            data: italy_label_values[i],
            color: pieChartColors[i]
        }
    }
    $.plot('#pie_chart_italy', pieChartData, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3/4,
                    formatter: labelFormatter,
                    background: {
                        opacity: 0
                    }
                }
            }
        },
        legend: {
            show: false
        }
    });
    for (var i = 0; i < pieChartSeries; i++) {
        pieChartData[i] = {
            label: label[i],
            data: portugal_label_values[i],
            color: pieChartColors[i]
        }
    }
    $.plot('#pie_chart_portugal', pieChartData, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3 / 4,
                    formatter: labelFormatter,
                    background: {
                        opacity: 0
                    }
                }
            }
        },
        legend: {
            show: false
        }
    });
    for (var i = 0; i < pieChartSeries; i++) {
        pieChartData[i] = {
            label: label[i],
            data: france_label_values[i],
            color: pieChartColors[i]
        }
    }
    $.plot('#pie_chart_france', pieChartData, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 3 / 4,
                    formatter: labelFormatter,
                    background: {
                        opacity: 0
                    }
                }
            }
        },
        legend: {
            show: false
        }
    });
    function labelFormatter(label, series) {
        return '<div style="font-size:8pt; text-align:center; padding:2px; color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
    }
}
function  initAreaChart() {
    Morris.Line({
        element: 'area_chart_a',
        data: [{
            period: '0 to 1',
            brand_share: 5.2,
            brand_vol: -0.35,
        }, {
                period: '1 to 2',
                brand_share: 5.2,
                brand_vol: -0.25,
        }, {
                period: '2 to 3',
                brand_share: 5.2,
                brand_vol: -0.12,
        }, {
                period: '3 to 4',
                brand_share: 5.2,
                brand_vol: -0.05,
        }, {
                period: '4 to 5',
                brand_share: 5.3,
                brand_vol: 0.66,
        }, {
                period: '5 to 6',
                brand_share: 5.4,
                brand_vol: 1.57,
        }, {
                period: '6 to 7',
                brand_share: 5.4,
                brand_vol: 2.49,
        }, {
                period: '7 to 8',
                brand_share: 5.4,
                brand_vol: 3.21,
        }, {
                period: '8 to 9',
                brand_share: 5.5,
                brand_vol: 3.91,
        }, {
                period: '9 to 10',
                brand_share: 5.5,
                brand_vol: 4.02,
        }],
        xkey: 'period',
        parseTime:false,
        ykeys: ['brand_share', 'brand_vol'],
        labels: ['Expected Brand Share', 'Expected CAGR'],
        // pointSize: 2,
        // hideHover: 'auto',
        lineColors: ['rgb(0, 188, 212)', 'rgb(0, 150, 136)']
    });
    Morris.Line({
        element: 'area_chart_b',
        data: [{
            period: '0 to 1',
            brand_share: 4.9,
            brand_vol: -0.39,
        }, {
            period: '1 to 2',
            brand_share: 4.9,
            brand_vol: -0.27,
        }, {
            period: '2 to 3',
            brand_share: 4.9,
            brand_vol: -0.13,
        }, {
            period: '3 to 4',
            brand_share: 5.0,
            brand_vol: -0.06,
        }, {
            period: '4 to 5',
            brand_share: 5.1,
            brand_vol: 0.63,
        }, {
            period: '5 to 6',
            brand_share: 5.1,
            brand_vol: 1.50,
        }, {
            period: '6 to 7',
            brand_share: 5.2,
            brand_vol: 2.37,
        }, {
            period: '7 to 8',
            brand_share: 5.3,
            brand_vol: 3.06,
        }, {
            period: '8 to 9',
            brand_share: 5.4,
            brand_vol: 3.73,
        }, {
            period: '9 to 10',
            brand_share: 5.5,
            brand_vol: 3.83,
        }],
        xkey: 'period',
        parseTime: false,
        ykeys: ['brand_share', 'brand_vol'],
        labels: ['Expected Brand Share', 'Expected CAGR'],
        // pointSize: 2,
        // hideHover: 'auto',
        lineColors: ['rgb(0, 188, 212)', 'rgb(0, 150, 136)']
    });
    Morris.Line({
        element: 'area_chart_c',
        data: [{
            period: '0 to 1',
            brand_share: 4.9,
            brand_vol: -0.40,
        }, {
            period: '1 to 2',
            brand_share: 5.0,
            brand_vol: -0.29,
        }, {
            period: '2 to 3',
            brand_share: 5.0,
            brand_vol: -0.14,
        }, {
            period: '3 to 4',
            brand_share: 5.0,
            brand_vol: -0.06,
        }, {
            period: '4 to 5',
            brand_share: 5.1,
            brand_vol: 0.69,
        }, {
            period: '5 to 6',
            brand_share: 5.1,
            brand_vol: 1.65,
        }, {
            period: '6 to 7',
            brand_share: 5.2,
            brand_vol: 2.61,
        }, {
            period: '7 to 8',
            brand_share: 5.2,
            brand_vol: 3.36,
        }, {
            period: '8 to 9',
            brand_share: 5.2,
            brand_vol: 4.10,
        }, {
            period: '9 to 10',
            brand_share: 5.3,
            brand_vol: 4.21,
        }],
        xkey: 'period',
        parseTime: false,
        ykeys: ['brand_share', 'brand_vol'],
        labels: ['Expected Brand Share', 'Expected CAGR'],
        // pointSize: 2,
        // hideHover: 'auto',
        lineColors: ['rgb(0, 188, 212)', 'rgb(0, 150, 136)']
    });
    Morris.Line({
        element: 'area_chart_sp_a',
        data: [{
            period: '0 to 1',
            brand_share: 4.6,
            brand_vol: -1.10,
        }, {
            period: '1 to 2',
            brand_share: 4.8,
            brand_vol: -0.50,
        }, {
            period: '2 to 3',
            brand_share: 4.8,
            brand_vol: -0.06,
        }, {
            period: '3 to 4',
            brand_share: 4.8,
            brand_vol: -0.02,
        }, {
            period: '4 to 5',
            brand_share: 4.8,
            brand_vol: 0.55,
        }, {
            period: '5 to 6',
            brand_share: 4.8,
            brand_vol: 1.00,
        }, {
            period: '6 to 7',
            brand_share: 4.8,
            brand_vol: 2.12,
        }, {
            period: '7 to 8',
            brand_share: 4.9,
            brand_vol: 2.99,
        }, {
            period: '8 to 9',
            brand_share: 5.0,
            brand_vol: 3.72,
        }, {
            period: '9 to 10',
            brand_share: 5.1,
            brand_vol: 4.23,
        }],
        xkey: 'period',
        parseTime: false,
        ykeys: ['brand_share', 'brand_vol'],
        labels: ['Expected Brand Share', 'Expected CAGR'],
        // pointSize: 2,
        // hideHover: 'auto',
        lineColors: ['rgb(0, 188, 212)', 'rgb(0, 150, 136)']
    });
    Morris.Line({
        element: 'area_chart_sp_b',
        data: [{
            period: '0 to 1',
            brand_share: 4.6,
            brand_vol: -1.21,
        }, {
            period: '1 to 2',
            brand_share: 4.7,
            brand_vol: -0.55,
        }, {
            period: '2 to 3',
            brand_share: 4.7,
            brand_vol: -0.06,
        }, {
            period: '3 to 4',
            brand_share: 4.7,
            brand_vol: -0.02,
        }, {
            period: '4 to 5',
            brand_share: 4.8,
            brand_vol: 0.52,
        }, {
            period: '5 to 6',
            brand_share: 4.8,
            brand_vol: 0.96,
        }, {
            period: '6 to 7',
            brand_share: 4.8,
            brand_vol: 2.02,
        }, {
            period: '7 to 8',
            brand_share: 4.8,
            brand_vol: 2.85,
        }, {
            period: '8 to 9',
            brand_share: 4.8,
            brand_vol: 3.54,
        }, {
            period: '9 to 10',
            brand_share: 4.9,
            brand_vol: 4.03,
        }],
        xkey: 'period',
        parseTime: false,
        ykeys: ['brand_share', 'brand_vol'],
        labels: ['Expected Brand Share', 'Expected CAGR'],
        // pointSize: 2,
        // hideHover: 'auto',
        lineColors: ['rgb(0, 188, 212)', 'rgb(0, 150, 136)']
    });
    Morris.Line({
        element: 'area_chart_sp_c',
        data: [{
            period: '0 to 1',
            brand_share: 4.6,
            brand_vol: -1.27,
        }, {
            period: '1 to 2',
            brand_share: 4.7,
            brand_vol: -0.58,
        }, {
            period: '2 to 3',
            brand_share: 4.7,
            brand_vol: -0.07,
        }, {
            period: '3 to 4',
            brand_share: 4.7,
            brand_vol: -0.02,
        }, {
            period: '4 to 5',
            brand_share: 4.8,
            brand_vol: 0.58,
        }, {
            period: '5 to 6',
            brand_share: 4.9,
            brand_vol: 1.05,
        }, {
            period: '6 to 7',
            brand_share: 4.9,
            brand_vol: 2.22,
        }, {
            period: '7 to 8',
            brand_share: 4.9,
            brand_vol: 3.13,
        }, {
            period: '8 to 9',
            brand_share: 4.9,
            brand_vol: 3.90,
        }, {
            period: '9 to 10',
            brand_share: 4.9,
            brand_vol: 4.43,
        }],
        xkey: 'period',
        parseTime: false,
        ykeys: ['brand_share', 'brand_vol'],
        labels: ['Expected Brand Share', 'Expected CAGR'],
        // pointSize: 2,
        // hideHover: 'auto',
        lineColors: ['rgb(0, 188, 212)', 'rgb(0, 150, 136)']
    });
}
function initLineChart() {
    Morris.Line({
        element: 'line_chart',
        data: [{
            'period': '2026',
            'france': 70113234,
            'italy': 63285932,
            'portugal': 8181165
        }, {
            'period': '2025',
            'france': 69784932,
            'italy': 62958400,
            'portugal': 8504090
        }, {
            'period': '2024',
            'france': 69456630,
            'italy': 62638605,
            'portugal': 8798668
        }, {
            'period': '2023',
            'france': 69128328,
            'italy': 62326547,
            'portugal': 9066018
        }, {
            'period': '2022',
            'france': 68800026,
            'italy': 62022226,
            'portugal': 9307260
        }, {
            'period': '2021',
            'france': 68471724,
            'italy': 61725641,
            'portugal': 9523517
        }, {
            'period': '2020',
            'france': 68143422,
            'italy': 61436783,
            'portugal': 9715906
        }, {
            'period': '2019',
            'france': 67815120,
            'italy': 61155681,
            'portugal': 9885550
        }, {
            'period': '2018',
            'france': 67486818,
            'italy': 60882306,
            'portugal': 10033568
        }, {
            'period': '2017',
            'france': 67158516,
            'italy': 60616667,
            'portugal': 10161080
        }, {
            'period': '2016',
            'france': 66830214,
            'italy': 60358765,
            'portugal': 10269207
        }],
        xkey: 'period',
        ykeys: ['france', 'italy', 'portugal'],
        labels: ['France', 'Italy', 'Portugal'],
        lineColors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(0, 212, 3)'],
        lineWidth: 3
    });
}
function initBarChart() {
    Morris.Bar({
        element: 'bar_chart',
        data: [{
            x: '2013',
            y: 42.7,
            z: 36.2,
            a: 21.0,
            b: 45.9
        }, {
            x: '2014',
            y: 41.5,
            z: 33.6,
            a: 21.3,
            b: 45.2
        }, {
            x: '2015',
            y: 40.8,
            z: 33.8,
            a: 21.5,
            b: 46.3
        }],
        xkey: 'x',
        ykeys: ['y', 'z', 'a','b'],
        labels: ['France', 'Italy', 'Spain','Portugal'],
        barColors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(0, 150, 136)','rgb(239, 232, 11)'],
    });
}

var data = [], totalPoints = 110;
function getRandomData() {
    if (data.length > 0) data = data.slice(1);

    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + Math.random() * 10 - 5;
        if (y < 0) { y = 0; } else if (y > 100) { y = 100; }

        data.push(y);
    }

    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
    }

    return res;
}