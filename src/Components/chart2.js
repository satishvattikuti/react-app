import {
    Chart,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';
import React from 'react';

const seriesData = [[1, 1, 10], [2, 2, 20], [3, 3, 30]];

const ChartContainer2 = () => (
    <Chart>
        <ChartSeries>
            <ChartSeriesItem data={seriesData} type="bubble" />
        </ChartSeries>
    </Chart>
);

export default ChartContainer2;