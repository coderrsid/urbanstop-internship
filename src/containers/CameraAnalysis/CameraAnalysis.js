import React, { Component } from 'react';
import './CameraAnalysis.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default class CameraAnalysis extends Component {

    componentDidMount() {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0;

        chart.paddingRight = 30;
        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

        chart.data = [
            {
                name: "John Doe",
                fromDate: "2018-01-01 09:30",
                toDate: "2018-01-01 10:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "John Doe",
                fromDate: "2018-01-01 10:00",
                toDate: "2018-01-01 10:30",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "John Doe",
                fromDate: "2018-01-01 10:30",
                toDate: "2018-01-01 11:00",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "John Doe",
                fromDate: "2018-01-01 11:00",
                toDate: "2018-01-01 11:30",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "John Doe",
                fromDate: "2018-01-01 11:30",
                toDate: "2018-01-01 12:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "John Doe",
                fromDate: "2018-01-01 12:00",
                toDate: "2018-01-01 12:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "John Doe",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "John Doe",
                fromDate: "2018-01-01 13:00",
                toDate: "2018-01-01 13:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "John Doe",
                fromDate: "2018-01-01 14:30",
                toDate: "2018-01-01 15:00",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Mark Doe",
                fromDate: "2018-01-01 11:30",
                toDate: "2018-01-01 12:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Mark Doe",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "Mark Doe",
                fromDate: "2018-01-01 13:00",
                toDate: "2018-01-01 13:30",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Mark Doe",
                fromDate: "2018-01-01 13:30",
                toDate: "2018-01-01 14:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Mark Doe",
                fromDate: "2018-01-01 14:30",
                toDate: "2018-01-01 15:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Mark Doe",
                fromDate: "2018-01-01 15:00",
                toDate: "2018-01-01 15:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Mark Doe",
                fromDate: "2018-01-01 16:30",
                toDate: "2018-01-01 17:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Mark Doe",
                fromDate: "2018-01-01 17:00",
                toDate: "2018-01-01 17:30",
                color: "rgb(187, 238, 237)"
            },

            {
                name: "Perry Doo",
                fromDate: "2018-01-01 12:00",
                toDate: "2018-01-01 12:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Perry Doo",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Berry Doe",
                fromDate: "2018-01-01 14:00",
                toDate: "2018-01-01 14:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Berry Doe",
                fromDate: "2018-01-01 14:30",
                toDate: "2018-01-01 15:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Berry Doe",
                fromDate: "2018-01-01 15:00",
                toDate: "2018-01-01 15:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Berry Doe",
                fromDate: "2018-01-01 15:30",
                toDate: "2018-01-01 16:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Berry Doe",
                fromDate: "2018-01-01 16:00",
                toDate: "2018-01-01 16:30",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Berry Doe",
                fromDate: "2018-01-01 16:30",
                toDate: "2018-01-01 17:00",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Berry Doe",
                fromDate: "2018-01-01 17:00",
                toDate: "2018-01-01 17:30",
                color: "rgb(25, 95, 94)"
            },
            {
                name: "Berry Doe",
                fromDate: "2018-01-01 17:30",
                toDate: "2018-01-01 18:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 09:00",
                toDate: "2018-01-01 09:30",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 09:30",
                toDate: "2018-01-01 10:00",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 10:00",
                toDate: "2018-01-01 10:30",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 10:30",
                toDate: "2018-01-01 11:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 11:00",
                toDate: "2018-01-01 11:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 11:30",
                toDate: "2018-01-01 12:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 12:00",
                toDate: "2018-01-01 12:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 14:00",
                toDate: "2018-01-01 14:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Denver Doe",
                fromDate: "2018-01-01 14:30",
                toDate: "2018-01-01 15:00",
                color: "rgb(85, 210, 208)"
            },

            {
                name: "Perry Doe",
                fromDate: "2018-01-01 09:00",
                toDate: "2018-01-01 09:30",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 09:30",
                toDate: "2018-01-01 10:00",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 10:00",
                toDate: "2018-01-01 10:30",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 10:30",
                toDate: "2018-01-01 11:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 11:00",
                toDate: "2018-01-01 11:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 11:30",
                toDate: "2018-01-01 12:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 12:00",
                toDate: "2018-01-01 12:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 14:00",
                toDate: "2018-01-01 14:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Perry Doe",
                fromDate: "2018-01-01 14:30",
                toDate: "2018-01-01 15:00",
                color: "rgb(85, 210, 208)"
            },

            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 09:00",
                toDate: "2018-01-01 09:30",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 09:30",
                toDate: "2018-01-01 10:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 11:00",
                toDate: "2018-01-01 11:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 11:30",
                toDate: "2018-01-01 12:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 12:00",
                toDate: "2018-01-01 12:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 13:00",
                toDate: "2018-01-01 13:30",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 13:30",
                toDate: "2018-01-01 14:00",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "Arthur Doe",
                fromDate: "2018-01-01 14:00",
                toDate: "2018-01-01 14:30",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 10:00",
                toDate: "2018-01-01 10:30",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 10:30",
                toDate: "2018-01-01 11:00",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 11:00",
                toDate: "2018-01-01 11:30",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 11:30",
                toDate: "2018-01-01 12:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 12:00",
                toDate: "2018-01-01 12:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 13:00",
                toDate: "2018-01-01 13:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 13:30",
                toDate: "2018-01-01 14:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 15:00",
                toDate: "2018-01-01 15:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Drake Doe",
                fromDate: "2018-01-01 15:30",
                toDate: "2018-01-01 16:00",
                color: "rgb(78, 192, 190)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 11:30",
                toDate: "2018-01-01 12:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 12:00",
                toDate: "2018-01-01 12:30",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 13:00",
                toDate: "2018-01-01 13:30",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 13:30",
                toDate: "2018-01-01 14:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 14:00",
                toDate: "2018-01-01 14:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 14:30",
                toDate: "2018-01-01 15:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 15:00",
                toDate: "2018-01-01 15:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 16:30",
                toDate: "2018-01-01 17:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Mike Doe",
                fromDate: "2018-01-01 17:00",
                toDate: "2018-01-01 17:30",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 09:00",
                toDate: "2018-01-01 09:30",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 09:30",
                toDate: "2018-01-01 10:00",
                color: "rgb(27, 105, 104)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 10:00",
                toDate: "2018-01-01 10:30",
                color: "rgb(85, 210, 208)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 10:30",
                toDate: "2018-01-01 11:00",
                color: "rgb(14, 44, 43)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 11:00",
                toDate: "2018-01-01 11:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 11:30",
                toDate: "2018-01-01 12:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 12:30",
                toDate: "2018-01-01 13:00",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 14:00",
                toDate: "2018-01-01 14:30",
                color: "rgb(187, 238, 237)"
            },
            {
                name: "Harvy Doe",
                fromDate: "2018-01-01 14:30",
                toDate: "2018-01-01 15:00",
                color: "rgb(85, 210, 208)"
            },
        ];

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        chart.fontSize = 10;
        chart.fontColor = "lightgray";
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.autoGridCount = false;
        categoryAxis.renderer.minGridDistance = 9;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;


        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
        dateAxis.renderer.minGridDistance = 50;
        dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
        dateAxis.max = new Date(2018, 0, 1, 19, 30, 0, 0).getTime();
        dateAxis.strictMinMax = true;
        dateAxis.renderer.tooltipLocation = 0;
        dateAxis.renderer.grid.template.disabled = true;

        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.columns.template.width = am4core.percent(80);
        series1.columns.template.tooltipText = "{name}: {openDateX} - {dateX}";

        series1.dataFields.openDateX = "fromDate";
        series1.dataFields.dateX = "toDate";
        series1.dataFields.categoryY = "name";
        series1.columns.template.propertyFields.fill = "color";
        series1.columns.template.propertyFields.stroke = "color";
        series1.columns.template.strokeOpacity = 1;

    }

    render() {
        return (
            <div className="camera">
                <h3>Camera Analysis</h3>
                <div id="chartdiv" style={{ width: "100%", height: "90%" }}></div>
            </div>
        )
    }
}
