import  { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const totalCard = 12; 
const localStorageName = 'donation'; 

const colors = ['#FF444A', '#00C49F']; 

export default class Statistics extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      changingValue: JSON.parse(localStorage.getItem(localStorageName)) || [],
    };
  }

  render() {
    
    const changingValueLength = this.state.changingValue ? this.state.changingValue.length : 0;
    const constantValueDegree = ((totalCard - changingValueLength) * 30).toFixed(2);
    const changingValueDegree = (changingValueLength * 30).toFixed(2);

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
              label={(entry) => `${entry.name} ${(entry.percent * 100).toFixed(2)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
