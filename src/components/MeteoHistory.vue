<script>
    import { getForecast } from '@/services/forecastService'; 
    import VueApexCharts from 'vue3-apexcharts';

    async function getForecastAsync() {
        var history = await getForecast()       
        return history
    }            
         var history = await getForecastAsync()

        //sorting data
        let minTemps = []
        let maxTemps = []
        let dates = []

        for (let i = 0; i < 10; i++) {
            minTemps.push(history.weather[i].temp.min)
            maxTemps.push(history.weather[i].temp.max)
            dates.push(history.weather[i].date.toString())
            
        }
        
        export default {
            name: 'LineDiagram',
            components: {
                apexchart: VueApexCharts,
            },
            data: function() {
                return {
                    series: [
                        {
                            name: "min temperatures",
                            data: minTemps
                        },
                        {
                            name: "max temperatures",
                            data: maxTemps
                        }],
                        chartOptions: {
                            labels: dates
                        },
                        xaxis: {
                            categories: ['h', 'f','r', 'y', 'g','h', 'f','r', 'y', 'g']
                        },
                        stroke: {
                            curve: 'smooth',
                        }
                    }
                }
            }
        
</script>
<template>
    <apexchart width="380" type="line" :options="chartOptions" :series="series"></apexchart>
</template>





