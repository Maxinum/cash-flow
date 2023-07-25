import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

const PieChart = () => {
    const transactions = useSelector((state) => state.transactions);
    console.log(transactions)
    const expenseData = useMemo(() => {
        const expensesMap = {};

        transactions.forEach((transaction) => {
            const { category, sum } = transaction;
            if (expensesMap[category]) {
                expensesMap[category] += sum;
            } else {
                expensesMap[category] = sum;
            }
        });
        const pieData = Object.entries(expensesMap).map(([category, sum]) => ({
            name: category,
            y: sum,
        }));
        console.log(pieData)
        return pieData;
    }, [transactions]);

    const options = {
        chart: {
            type: "donut",
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
        labels: expenseData.map((data) => data.name),
    };

    return (
        <div id="chart">
            <ReactApexChart options={options} series={expenseData.map((data) => data.y)} type="donut" />
        </div>
    );
};

export default PieChart;
