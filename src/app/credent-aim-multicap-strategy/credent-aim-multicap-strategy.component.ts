import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from "ng-apexcharts";
import { Router } from '@angular/router';
import jquery from 'jquery';


export type ChartOptions = {
	series: ApexNonAxisChartSeries;
	chart: ApexChart;
	responsive: ApexResponsive[];
	labels: any;
};


@Component({
	selector: 'app-credent-aim-multicap-strategy',
	templateUrl: './credent-aim-multicap-strategy.component.html',
	styleUrls: ['./credent-aim-multicap-strategy.component.css']
})
export class CredentAimMulticapStrategyComponent {
	//   chartOptions = {
	// 	  animationEnabled: true,
	// 	  title:{

	// 	  },
	// 	  data: [{
	// 		type: "doughnut",
	// 		yValueFormatString: "#,###.##'%'",
	// 		indexLabel: "{name}",
	// 		dataPoints: [ 
	// 		  { y: 20, name: "Cash" }, 
	//       { y: 28, name: "Large-cap" },
	//       { y: 22, name: " Mid-cap" },
	//       { y: 30, name: "Small-cap" },
	//  		]
	// 	  }]
	// 	}
	constructor(private router: Router) { }
	chartOptions = {

		animationEnabled: true,
		title: {
			text: "Credent AIM Multi cap Strategy"
		},
		axisX: {
			//   labelAngle: -90,
			gridThickness: 0,
			tickLength: 0,
			lineThickness: 0,

		},
		axisY: {
			//   title: "billion of barrels"
			gridThickness: 0,
			tickLength: 0,
			lineThickness: 0,
		},
		axisY2: {
			//   title: "million barrels/day"
			gridThickness: 0,
			tickLength: 0,
			lineThickness: 0,
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: function (e: any) {
				if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				}
				else {
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [{
			color: "#4f71be",
			type: "column",

			//   name: "Proven Oil Reserves (bn)",
			//   legendText: "Proven Oil Reserves",
			showInLegend: true,
			dataPoints: [
				{ label: "1 Month", y: 9.15 },
				{ label: "3 Month", y: 10.2 },
				{ label: "Since inception", y: 5.23 },
			]
		}, {
			color: "#a1ab43",
			type: "column",


			//   name: "Oil Production (million/day)",
			//   legendText: "Oil Production",
			//   axisYType: "secondary",
			gridThickness: 0,
			tickLength: 0,
			lineThickness: 0,
			showInLegend: true,

			dataPoints: [
				{ label: "1 Month", y: 11.15 },
				{ label: "3 Month", y: 6.2 },
				{ label: "Since inception", y: 10.23 },

			]
		}]
	}


	ngOnInit(): void {
		jquery(".webinarPopup").addClass("show")
		jquery("body").addClass("overlay")
	}

	toggleModal() {
		jquery(".webinarPopup").removeClass("show")
	}

}





