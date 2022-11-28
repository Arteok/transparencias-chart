/*const enableEventHandlers = coasters => {

    document.querySelector('#featuresOptions').onchange = e => {

        const { value: property, text: label } = e.target.selectedOptions[0]

        const newData = coasters.map(coaster => coaster[property])

        updateChartData('featuresChart', newData, label)
    }
}*/
/*
const enableEventHandlers = coasters => {

    document.querySelector('#featuresOptions').onchange = e => {

        //const { value: property, text: label } = e.target.selectedOptions[0]
        console.log(e.target.selectedOptions[0]);
        const labels = ['RECTORADO','INSTITUTOS'];
        if (e.target.selectedOptions[0]=== "2022")
        {
            const newData = [ 573942394.87 , 536342160.29];
        }
        else if (e.target.selectedOptions[0]=== "2021")
        {
            const newData = [ 647276882.73 , 764794794.51];
        }

       // const newData = coasters.map(coaster => coaster[property])

        updateChartData('featuresChart', newData, label)
    }
}*/