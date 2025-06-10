export default function ShoppingList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Shopping List</h1>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Add Item to List
                </button>
            </div>

            {/* Shopping List Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Produce Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Produce</h2>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                Organic Bananas (6)
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                Fresh Spinach (1 bag)
                            </label>
                        </div>
                    </div>
                </div>

                {/* Dairy Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Dairy</h2>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                Whole Milk (1 gallon)
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                Greek Yogurt (2 containers)
                            </label>
                        </div>
                    </div>
                </div>

                {/* Pantry Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Pantry</h2>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                Olive Oil (1 bottle)
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                Pasta (2 boxes)
                            </label>
                        </div>
                    </div>
                </div>

                {/* Meat Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Meat</h2>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                Chicken Breast (2 lbs)
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 text-sm text-gray-700">
                                Ground Beef (1 lb)
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shopping List Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">Shopping List Summary</h3>
                        <p className="text-sm text-gray-500 mt-1">8 items remaining</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Clear Completed
                    </button>
                </div>
            </div>
        </div>
    );
} 