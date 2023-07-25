import LineChart from './components/LineChart';
import classes from './Charts.module.css';
// import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const Charts = () => {
    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <div className={classes.line_chart}>
                    <LineChart />
                </div>
                <div className={classes.pie_chart}>
                    <PieChart />
                    {/* <BarChart /> */}
                </div>
            </div>
        </div>
    )
}

export default Charts;