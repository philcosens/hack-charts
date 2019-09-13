import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../canvasjs.react';
import axios from 'axios';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];

class ChartNew extends React.Component {
	render() {
		/* Area of Very Dissatisfied customers */
		const csArray = [
			{ label: "Extremely satisfied", y: 60 },
			{ label: "Satisfied", y: 15 },
			{ label: "Indifferent", y: 5 },
			{ label: "Dissatisfied", y: 5 },
			{ label: "Extremely dissatisfied", y: 15 }
		];

		const getPositiveFeedback = () => {
			var results = csArray.filter(obj => {
				return obj.label === 'Satisfied'
			});
			console.log(results.y);
			return results.y;


		}
		const getSatisfiedCustPercent = csArray
			.filter(({ label }) => label === 'Extremely satisfied' || label === 'Satisfied')
			.reduce((acc, val) => acc + val.y, 0);

		console.log('Array : ', csArray.find(x => x.label === 'Satisfied'));

		console.log('getSatisfiedCust% : ', getSatisfiedCustPercent);

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Customer Satisfaction"
			},
			axisX: {
				valueFormatString: "D MMM"
			},
			axisY: {
				title: "Price",
				includeZero: false,
				prefix: "$"
			},
			subtitles: [{
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				//type: "column",
				//type: "doughnut",
				type: "candlestick",
				showInLegend: true,
				yValueFormatString: "$##0.00",
				xValueType: "dateTime",
				dataPoints: dataPoints //csArray,
			}]
		}

		return (
			<div class="candleStickChart">
				<CanvasJSChart options={options}
					onRef={ref => this.chart = ref}
				/>
			</div>
		);
	}
	componentDidMount() {
		var chart = this.chart;

		//const hook = () => {
		axios
			.get('stock.json')
			.then(resp => {
				const responseData = resp.data;
				console.log('resp : ', responseData);
				responseData.map((item) => {
					dataPoints.push({
						x: item.x,
						y: item.y
					});
				})

				console.log(dataPoints);
				chart.render();
			})
		//}
		//useEffect(hook, []);

	}
}

export default ChartNew;
