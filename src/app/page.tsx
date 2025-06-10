'use client';

import { motion } from 'framer-motion';
import { useGroceryStore } from '@/store/groceryStore';
import { Card } from '@/components/ui/Card';
import { InventoryChart } from '@/components/analytics/InventoryChart';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const items = useGroceryStore((state) => state.items);
  const shoppingList = useGroceryStore((state) => state.shoppingList);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  const totalItems = items.length;
  const lowStockItems = items.filter(item => item.status === 'low-stock').length;
  const shoppingListItems = shoppingList.filter(item => !item.completed).length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-semibold text-gray-900"
      >
        Dashboard
      </motion.h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants}>
          <Card>
            <h3 className="text-sm font-medium text-gray-500">Total Items</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{totalItems}</p>
            <p className="mt-2 text-sm text-green-600">Active inventory items</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <h3 className="text-sm font-medium text-gray-500">Low Stock Items</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{lowStockItems}</p>
            <p className="mt-2 text-sm text-red-600">Needs attention</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <h3 className="text-sm font-medium text-gray-500">Shopping List Items</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{shoppingListItems}</p>
            <p className="mt-2 text-sm text-blue-600">Ready to shop</p>
          </Card>
        </motion.div>
      </div>

      {/* Analytics Chart */}
      <motion.div variants={itemVariants}>
        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Inventory Analytics</h2>
          <InventoryChart />
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants}>
        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${item.status === 'in-stock' ? 'bg-green-500' :
                      item.status === 'low-stock' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                  <span className="text-sm text-gray-600">
                    {item.name} - {item.quantity} units
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(item.lastUpdated).toLocaleDateString()}
                </span>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Add New Item
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Shopping List
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
