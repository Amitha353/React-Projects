import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HC_map from 'highcharts/modules/map'
import HighchartsReact from 'highcharts-react-official'

// init the module
HC_map(Highcharts)

// instead of import + init you could use require as:
// require('highcharts/modules/map')(Highcharts)
// the same applies to any other Highcharts module

const options = {
    title: {
        text: 'My map chart'
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
              { y: 216.4, color: '#BF0B23'}, 194.1, 95.6, 54.4]
    }]
}

function HighMapsDemo() {
    return (
        <div><br /><br />
            <h2 style={{ textAlign: 'center' }}>HighMaps Demo</h2><br /><br />
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'mapChart'}
                options={options}
            />
        </div>
    );
}

export default HighMapsDemo;