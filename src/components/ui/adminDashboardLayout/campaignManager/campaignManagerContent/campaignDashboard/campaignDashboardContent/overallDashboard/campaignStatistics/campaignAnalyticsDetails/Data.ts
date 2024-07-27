export const CampaignStatisticsData = {
    totalCampaigns: "09",
    live: "03",
    completed: "05",
    onhold: "00",
    chartDataOption:{
        color: ['#4E545F', '#9D5BAD', '#67AD5B'],
        tooltip: {},
        legend: false,
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Campaign Analytics Chart',
                type: 'pie',
                radius: [0, 60],
                center: ['50%', '50%'],
                height: "130px",
                itemStyle: {
                borderRadius: 0
                },
                data: [
                { value: 25, name: 'SMS 25%' },
                { value: 31, name: 'Voice 31%' },
                { value: 44, name: 'WhatsApp 44%' },
                ]
            }
        ]
    }
}