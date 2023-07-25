import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const prepareChartData = (transactions) => {
    const dailySpending = {};

    transactions.forEach((transaction) => {
        const date = new Date(transaction.date).toDateString();
        if (dailySpending[date]) {
            dailySpending[date] += transaction.sum;
        } else {
            dailySpending[date] = transaction.sum;
        }
    });

    const dataPoints = {
        name: "Spending per Month",
        data: Object.values(dailySpending),
    };

    return [dataPoints];
};

const LineChart = () => {
    const transactions = useSelector((state) => state.transactions);
    const series = prepareChartData(transactions);

    const options = {
        chart: {
            type: 'area',
            stacked: false,
            height: 400,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        title: {
            text: 'Expenses by month',
            align: 'left'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Money'
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
    };

    return (
        <div >
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    );
};

export default LineChart;
