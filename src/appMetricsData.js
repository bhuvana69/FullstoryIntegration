export const appMetricsData = {
    type: "line",
    data: {
        labels: ["IDUI Details Tab", "Timeline Tab","Quality Summary Tab", "Transcript Tab", "Audit Tab", "Playback Area", "Participant Details"],
        datasets: [
            {
                label: "Number of Visits",
                data: [10, 20, 30, 40, 50, 60, 70],
                backgroundColor: "rgba(54,73,93,.5)",
                borderColor: "#36495d",
                borderWidth: 3
            },
            {
                label: "No of Console errors in the page",
                data: [5, 10, 15, 20, 25, 30, 35],
                backgroundColor: "rgba(71, 183,132,.5)",
                borderColor: "#47b784",
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        lineTension: 1,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                        padding: 25
                    }
                }
            ]
        }
    }
};

export default appMetricsData;