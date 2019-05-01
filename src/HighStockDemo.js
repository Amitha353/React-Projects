import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
        text: 'My stock chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
}

function HighStockDemo() {
    return (
        <div><br/><br/>
        <h2 style={{textAlign: 'center'}}>HighStock Demo</h2><br/><br/>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </div>
    );
}

export default HighStockDemo;