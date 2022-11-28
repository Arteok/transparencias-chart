Chart.defaults.color = '#000';
Chart.defaults.borderColor = '#444';
Chart.defaults.font.size = 16;
let año = "2022";

function seleccionarAño() {
    let cbxGastoxDependencia = document.getElementById('cbxGastoxDependencia');
    año = cbxGastoxDependencia.value;

    const labels = ['RECTORADO', 'INSTITUTOS'];
    if (año === "2022") {
        valores = [573942394.87, 536342160.29];
    } else if (año == "2021") {
        valores = [647276882.73, 764794794.51];
    } else if (año === "2020") {
        valores = [426657037.22, 523681400.97];
    }


    const updateChartData = (chartId, data, label) => {
        const chart = Chart.getChart(chartId)
        //alert(año);
        chart.data.datasets[0].data = data
        chart.data.datasets[0].label = label
        chart.update()
    }
    updateChartData('doughnutChart', valores, labels)
}


const printCharts = () => {

    gastoxDependenciaChart();
}
const gastoxDependenciaChart = () => {

    let valores;
    const labels = ['RECTORADO', 'INSTITUTOS'];
    if (año === "2022") {
        valores = [573942394.87, 536342160.29];
    }

    const data = {
        labels: labels,
        datasets: [{
            data: valores,
            borderColor: getDataColors(),
            backgroundColor: getDataColors(40)
        }]
    }

    const options = {
        plugins: {
            legend: {
                position: 'left'
            }
        },
        layout: {
            padding: 1
        }

    }
    //Chart.destroy();
    new Chart('doughnutChart', {
        type: 'doughnut',
        data,
        options
    }) //crea el tipo de grafico
}
printCharts();