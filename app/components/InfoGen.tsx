'use client'
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const VulnChart = async () => {

    interface Info {
        tareasFinalizadas: number,
        tareasEnCurso: number,
        tareasPendientes: number
    }

    const info = await fetch('http://localhost:9000/api/informeG')
        .then(response => response.json())
        .then(data => { let temp: Info = data; return temp })
        .then(data => {
            const informe = [data.tareasPendientes, data.tareasEnCurso, data.tareasFinalizadas];
            return informe;
        })

    Chart.register();
    return (
        <div>
            <Bar
                data={{
                    labels: ["Pendiente", "En Curso", "Finalizadas"],
                    datasets: [
                        {
                            label: "Cantidad de tareas",
                            data: info,
                            backgroundColor: [
                                'rgba(101, 184, 166, 0.8)',
                                'rgba(45, 96, 115, 0.8)',
                                'rgba(7, 47, 84, 0.8)'
                            ],
                            borderColor: "gray",
                            borderWidth: 2,
                            hoverBackgroundColor: [
                            'rgba(157, 237, 220, 0.7)',
                            'rgba(151, 210, 232, 0.7)',
                            'rgba(76, 163, 245, 0.7)'
                        ]
                        },
                    ]
                }}
                height={500}
                width={500}
                options={{
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                        x: {
                            grid: {
                                offset: true
                            }
                        }
                    },
                }}
            />
        </div>
    );
};
export default VulnChart;
