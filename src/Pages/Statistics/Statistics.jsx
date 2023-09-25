import  { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const CONSTANT_VALUE = 12; // Constant value
const LOCAL_STORAGE_KEY = 'donation'; // Key for storing the changing value in localStorage

const COLORS = ['#FF444A', '#00C49F']; // Colors for the two segments

export default class Statistics extends PureComponent {
  constructor(props) {
    super(props);

    // Initialize the state with the changing value from localStorage (if it exists)
    this.state = {
      changingValue: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
    };
  }

  render() {
    // Calculate the degrees for the constant and changing values
    const changingValueLength = this.state.changingValue ? this.state.changingValue.length : 0;
    const constantValueDegree = ((CONSTANT_VALUE - changingValueLength) * 30).toFixed(2);
    const changingValueDegree = (changingValueLength * 30).toFixed(2);

    // Create the data array for the pie chart with updated labels
    const data = [
      { name: 'Total Donation', value: parseFloat(constantValueDegree) },
      { name: 'Your Donation', value: parseFloat(changingValueDegree) },
    ];

    return (
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
