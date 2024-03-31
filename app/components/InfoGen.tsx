'use client'
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const VulnChart = () => {
    const datos = [15, 1, 6]
    Chart.register();
    return (
        <div>
            <Bar
                data={{
                    labels: ["Pendiente", "En Curso", "Finalizadas"],
                    datasets: [
                        {
                            label: "Cantidad de tareas",
                            data: datos,
                            backgroundColor: ["gray", "gray", "gray"],
                            borderColor: "gray",
                            borderWidth: 5
                        },
                    ]
                }}
                height={300}
                width={500}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
};
export default VulnChart;
