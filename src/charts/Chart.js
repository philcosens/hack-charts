import React from 'react';
import CanvasJSReact from '../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Chart extends React.Component {
	render() {
		var dpArray = [
			{ label: "Apple", y: 10 },
			{ label: "Orange", y: 15 },
			{ label: "Banana", y: 25, indexLabel: "Yellow" },
			{ label: "Mango", y: 30 },
			{ label: "Grape", y: 28 }
		];

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Chart in React"
			},
			data: [{
				//type: "column",
				type: "doughnut",
				dataPoints: dpArray,
			}]
		}

		return (
			<div>
				<CanvasJSChart options={options}
				/* onRef = {ref => this.chart = ref} */
				/>
			</div>
		);
	}
}

export default Chart;
