import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highcharts-gantt";
import HighchartsReact from "highcharts-react-official";

const options = {
    series: [{
        data: [{
            start: Date.UTC(2014, 10, 18),
            end: Date.UTC(2014, 10, 25)
        }, {
            start: Date.UTC(2014, 10, 27),
            end: Date.UTC(2014, 10, 29)
        }]
    }]
}

function GanttChartDemo() {
    return (
        <div><br /><br />
            <h2 style={{ textAlign: 'center' }}>Gantt Demo</h2><br /><br />
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'ganttChart'}
                options={options}
            />
        </div>
    );
}

export default GanttChartDemo;