Chart.defaults.color = '#fff'

const printCharts = () => {
    /*fetchCoastersData('https://coasters-api.herokuapp.com','https://coasters-api.herokuapp.com/country/Spain')
    .then(([allCoasters, nationalCoasters]) => {
            console.log(allCoasters, nationalCoasters)
    })   */
    renderModelsChart()
}
const renderModelsChart = () => {

    const labels = [
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ];

    const data = {
        labels: labels,
        datasets: [{
            /*data: ['244.723.536,03','347.500.534,51', 20,30],*/
            data: [100,200,150, 220,280,133,128],
            borderColor: getDataColors(),
            backgroundColor: getDataColors(40)
            
            //borderColor: ['red', 'green', 'blue'],
            //backgroundColor: ['blue', 'green', 'red']
        }]    
    }
    const options = {
        plugins: {
            legend: { position: 'left'}//pone las barras a la izquierda
        }
    }

    new Chart('modelsChart',{type: 'line', data, options})//crea el tipo de grafico
}

printCharts()


  
  
   /* const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };*/
  /*
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
  */


  