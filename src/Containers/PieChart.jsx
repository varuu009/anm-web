import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart = ({ data }) => { 
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const lightColors = [
        "#F08080", "#FF6A6A", "#40E0D0", "#7FFFD4", "#4682B4", "#5F9EA0", "#8A2BE2", "#A9A9A9",
        "#FF1493", "#DAA520", "#A52A2A", "#8B4513", "#FF6347", "#B22222", "#228B22", "#6A5ACD",
        "#32CD32", "#FFD700", "#F4A300", "#BDB76B", "#A0522D", "#9932CC", "#800080", "#D2691E",
        "#D2B48C", "#DDA0DD", "#8B0000", "#800000", "#B8860B", "#FF6347", "#B3B3B3", "#A2A2A2"
    ];



    useEffect(() => {
        chartInstance.current = echarts.init(chartRef.current);

        const pieOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            legend: {
                orient: 'horizontal',
                top: '80%',
                left: 'center',
                data: data.map(item => item.event), // Use 'event' as the name for the legend
            },
            series: [
                {
                    name: 'Event Count',
                    type: 'pie',
                    radius: ['25%', '60%'],
                    center: ['50%', '40%'],
                    data: data.map((item, index) => ({
                        value: item.count, // Use 'count' as the value for the pie chart
                        name: item.event, // Use 'event' as the name for each segment
                        itemStyle: { color: lightColors[index % lightColors.length] },
                    })),
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        };

        chartInstance.current.setOption(pieOption);

        // Resize the chart on window resize
        window.addEventListener('resize', () => {
            chartInstance.current.resize();
        });

        return () => {
            chartInstance.current.dispose();
            window.removeEventListener('resize', () => {
                chartInstance.current.resize();
            });
        };
    }, [data]); // Re-run when 'data' changes

    return (
        <div>
            <div
                ref={chartRef}
                style={{
                    width: '100%',
                    height: '500px',
                    display: 'flex',
                    justifyContent: "center",
                    // backgroundColor: "#f6f9fd"
                }}
            />
        </div>
    );
};

export default PieChart;
