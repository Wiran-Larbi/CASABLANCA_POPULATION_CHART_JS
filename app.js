const ctx = document.getElementById("chart").getContext('2d');
const gradientBg = ctx.createLinearGradient(0, 0, 0, 400);
gradientBg.addColorStop(0, 'rgba(58, 123, 213, 1)');
gradientBg.addColorStop(1, 'rgba(0, 210, 255, 0.3)');

console.log(gradientBg);
const labels =  ['2014',
                 '2015',
                 '2016',
                 '2017',
                 '2018',
                 '2019',
                 '2020',
                 '2021',
                 '2022',
                 '2023',
                 '2024',
                 '2025',
                 '2026',
                 '2027',
                 '2028',
                 '2029',
                 '2030'];

const datasets = [{
                    data: [
                       3350912,
                       3390864,
                       3429522,
                       3466623,
                       3501911,
                       3535127,
                       3566020,
                       3594352,
                       3619934,
                       3642656,
                       3662436,
                       3679225,
                       3692944,
                       3703467,
                       3710639,
                       3714320,
                       3714360	
                    ],
                    label: "Population in Casablanca(MA)",
                    fill: true,
                    backgroundColor: gradientBg,
                    borderColor: "rgba(58, 123, 213, .6)",
                    tension: 0.3,
                    pointBackgroundColor: "rgba(255,255,255,1)",

}];
const data = {
    labels: labels,
    datasets: datasets,
}
const options = {
    responsive: true,
    radius: 4,
    hoverRadius: 8,
    hitRadius: 30,

    scales: {
        y: {
            ticks: {
                callback: function(value,index){
                    return value + "P"
             },
            },
            
        },
    },
    animation: {
        onComplete: () => {
            delayed = true;
        },
         delay: (context) => {
           let delay = 0;
            if(context.type === "data" && context.mode === "default"){
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
         },
    },
}
const config = {
      type: 'line',
      data: data,
      options: options,
}

// const Chart = new Chart(ctx,{
//            type: 'line',
//            data: {
//                labels: labels,
//                datasets: datasets,
//            },
//            options: options
// });




// let massPopChart = new Chart(ctx, {
//     type: 'radar',
//     data: {
//         labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
//         datasets: [{
//             label: 'Population',
//             data: [
//                 3350912,
//                 3390864,
//                 3429522,
//                 3466623,
//                 3501911,
//                 3535127,
//                 3566020,
//                 3594352,
//                 3619934,
//                 3642656,
//                 3662436,
//                 3679225,
//                 3692944,
//                 3703467,
//                 3710639,
//                 3714320,
//                 3714360	
//             ],
//             backgroundColor:[
//                 // 'rgba(255, 99, 132, 0.6)',
//                 // 'rgba(54, 162, 235, 0.6)',
//                 //  'rgba(255, 206, 86, 0.6)',
//                 //  'rgba(75, 192, 192, 0.6)',
//                     'rgba(153, 102, 1255, 0.6)'
//                 // 'rgba(255, 159, 64, 0.6)'
//                 // 'rgba(255, 99, 132, 0.6)'
//             ]
//         }]
//     },
//     options: {}
// });



// const ctx = document.getElementById("myChart").getContext('2d');
// const xyValues = [
//     {x:50, y:7},
//     {x:60, y:8},
//     {x:70, y:8},
//     {x:80, y:9},
//     {x:90, y:9},
//     {x:100, y:9},
//     {x:110, y:10},
//     {x:120, y:11},
//     {x:130, y:14},
//     {x:140, y:14},
//     {x:150, y:15}
// ];

// const chart = new Chart(ctx, {
//        type: "scatter",
//        data: {
//         datasets: [{
//             pointRadius: 4,
//             pointBackgroundColor: "rgba(0,0,255,1)",
//             data: xyValues
//         }]
//        },
//        options: {...}
// })

    // const myChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             y:{
    //                 beginAtZero: true
    //             }
    //         }
    //     }
        
    // });


const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
            //  [{
            //     label: '# of Votes',
            //     data: [12, 19, 3, 5, 2, 3],
                // backgroundColor: [
                //     'rgba(255, 99, 132, 0.2)',
                //     'rgba(54, 162, 235, 0.2)',
                //     'rgba(255, 206, 86, 0.2)',
                //     'rgba(75, 192, 192, 0.2)',
                //     'rgba(153, 102, 255, 0.2)',
                //     'rgba(255, 159, 64, 0.2)'
                // ],
                // borderColor: [
                //     'rgba(255, 99, 132, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(255, 206, 86, 1)',
                //     'rgba(75, 192, 192, 1)',
                //     'rgba(153, 102, 255, 1)',
                //     'rgba(255, 159, 64, 1)'
                // ],
                // borderWidth: 1
            // }]
        },
        options: options
        // {
        //     scales: {
        //         y: {
        //             beginAtZero: true
        //         }
        //     }
        // }
});