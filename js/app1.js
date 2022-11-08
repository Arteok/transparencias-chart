Chart.defaults.color = '#fff';
Chart.defaults.borderColor = '#444';
Chart.defaults.width = 300 
const printCharts = () => {
 
    gastoxDependenciaChart();
}
const gastoxDependenciaChart = () => {

    const labels = ['RECTORADO','INSTITUTOS'];
    const data = {
        labels: labels,
        datasets: [{
            data: [ 573942394.87 , 536342160.29],
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }

    const options = {
        plugins: {
            legend: { position: 'left' }
        }
    }
    new Chart('doughnutChart',{type: 'doughnut', data, options})//crea el tipo de grafico
}
printCharts();




  
  



  