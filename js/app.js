Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

const printCharts = () => {
 
    evolucionGastoChart();
}
const evolucionGastoChart = () => {

    const labels = ['2016','2017','2018','2019','2020','2021','2022'];
    

    const data = {
        labels: labels,
        datasets: [{            
            data: [ 244723536.03 , 347500534.51 , 474177336.83, 702075438.61 , 950338438.19 , 1412071677.24 , 1110284555.16],
            tension: .5,//es para suavizar el grafico
            borderColor: getDataColors()[1],
            backgroundColor: getDataColors(20)[1],
            fill: true,//para que tenga color de fondo
            pointBorderWidth: 5,
            pointBorderColor: getDataColors()                
        }]    
    }
    const options = {
      plugins: {
          legend: { display: false }
      }
  }

    new Chart('lineChart',{type: 'line', data, options})//crea el tipo de grafico
}
printCharts();




  
  



  