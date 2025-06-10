import { useMemo } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

// Mock sales data for demonstration
const salesData = [
    { month: 'Jan', sales: 1200, profit: 400 },
    { month: 'Feb', sales: 2100, profit: 800 },
    { month: 'Mar', sales: 800, profit: 200 },
    { month: 'Apr', sales: 1600, profit: 600 },
    { month: 'May', sales: 900, profit: 300 },
    { month: 'Jun', sales: 1700, profit: 700 },
    { month: 'Jul', sales: 1400, profit: 500 },
    { month: 'Aug', sales: 2000, profit: 900 },
    { month: 'Sep', sales: 1100, profit: 350 },
    { month: 'Oct', sales: 1800, profit: 750 },
    { month: 'Nov', sales: 1500, profit: 600 },
    { month: 'Dec', sales: 2200, profit: 950 },
];

export function InventoryChart() {
    // In a real app, you would fetch or compute this data
    // For now, we use the mock salesData above

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#059669" name="Sales" />
                    <Bar dataKey="profit" fill="#3B82F6" name="Profit" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
} 