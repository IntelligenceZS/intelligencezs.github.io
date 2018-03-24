$(function () {
    // getMorris('line', 'line_chart');
    // getMorris('bar', 'bar_chart');
    getMorris('area', 'area_chart');
    getMorris('donut', 'donut_chart_france');
    getMorris('donut', 'donut_chart_italy');
    getMorris('donut', 'donut_chart_portugal');
});


function getMorris(type, element) {
    if (type === 'line') {
        Morris.Line({
            element: element,
            data: [{
                'period': '2026',
                'france': 70113234,
                'italy': 63285932,
                'portugal': 8181165
            },{
                'period': '2025',
                'france': 69784932,
                'italy': 62958400,
                'portugal': 8504090
            },{
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
            ykeys: ['france', 'italy','portugal'],
            labels: ['France', 'Italy','Portugal'],
            lineColors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)','rgb(0, 212, 3)'],
            lineWidth: 3
        });
    } else if (type === 'bar') {
        Morris.Bar({
            element: element,
            data: [{
                x: '2011 Q1',
                y: 3,
                z: 2,
                a: 3
            }, {
                    x: '2011 Q2',
                    y: 2,
                    z: null,
                    a: 1
                }, {
                    x: '2011 Q3',
                    y: 0,
                    z: 2,
                    a: 4
                }, {
                    x: '2011 Q4',
                    y: 2,
                    z: 4,
                    a: 3
                }],
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            labels: ['Y', 'Z', 'A'],
            barColors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(0, 150, 136)'],
        });
    } else if (type === 'area') {
        Morris.Area({
            element: element,
            data: [{
                period: '2010 Q1',
                iphone: 2666,
                ipad: null,
                itouch: 2647
            }, {
                    period: '2010 Q2',
                    iphone: 2778,
                    ipad: 2294,
                    itouch: 2441
                }, {
                    period: '2010 Q3',
                    iphone: 4912,
                    ipad: 1969,
                    itouch: 2501
                }, {
                    period: '2010 Q4',
                    iphone: 3767,
                    ipad: 3597,
                    itouch: 5689
                }, {
                    period: '2011 Q1',
                    iphone: 6810,
                    ipad: 1914,
                    itouch: 2293
                }, {
                    period: '2011 Q2',
                    iphone: 5670,
                    ipad: 4293,
                    itouch: 1881
                }, {
                    period: '2011 Q3',
                    iphone: 4820,
                    ipad: 3795,
                    itouch: 1588
                }, {
                    period: '2011 Q4',
                    iphone: 15073,
                    ipad: 5967,
                    itouch: 5175
                }, {
                    period: '2012 Q1',
                    iphone: 10687,
                    ipad: 4460,
                    itouch: 2028
                }, {
                    period: '2012 Q2',
                    iphone: 8432,
                    ipad: 5713,
                    itouch: 1791
                }],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 2,
            hideHover: 'auto',
            lineColors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(0, 150, 136)']
        });
    } else if (type === 'donut') {
        if(element=='donut_chart_france'){
            Morris.Donut({
                element: element,
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
        }
        else if(element=='donut_chart_italy'){
            Morris.Donut({
                element: element,
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
        }
        else if(element=='donut_chart_portugal'){
            Morris.Donut({
                element: element,
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
                },{
                    label: 'Other Wines',
                    value: 85.9
                }],
                colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)','rgb(112, 0, 150)'],
                formatter: function (y) {
                    return y + '%'
                }
            });
        }
    }
}