import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface GroceryItem {
    id: string;
    name: string;
    category: string;
    quantity: number;
    status: 'in-stock' | 'low-stock' | 'out-of-stock';
    lastUpdated: string;
    price?: number;
}

export interface ShoppingListItem {
    id: string;
    itemId: string;
    name: string;
    category: string;
    quantity: number;
    completed: boolean;
}

interface GroceryStore {
    items: GroceryItem[];
    shoppingList: ShoppingListItem[];
    addItem: (item: Omit<GroceryItem, 'id' | 'lastUpdated'>) => void;
    updateItem: (id: string, updates: Partial<GroceryItem>) => void;
    deleteItem: (id: string) => void;
    addToShoppingList: (item: Omit<ShoppingListItem, 'id'>) => void;
    removeFromShoppingList: (id: string) => void;
    toggleShoppingItem: (id: string) => void;
    clearCompletedItems: () => void;
}

export const useGroceryStore = create<GroceryStore>()(
    persist(
        (set) => ({
            items: [],
            shoppingList: [],

            addItem: (item) => set((state) => ({
                items: [...state.items, {
                    ...item,
                    id: crypto.randomUUID(),
                    lastUpdated: new Date().toISOString(),
                }],
            })),

            updateItem: (id, updates) => set((state) => ({
                items: state.items.map((item) =>
                    item.id === id
                        ? { ...item, ...updates, lastUpdated: new Date().toISOString() }
                        : item
                ),
            })),

            deleteItem: (id) => set((state) => ({
                items: state.items.filter((item) => item.id !== id),
            })),

            addToShoppingList: (item) => set((state) => ({
                shoppingList: [...state.shoppingList, { ...item, id: crypto.randomUUID() }],
            })),

            removeFromShoppingList: (id) => set((state) => ({
                shoppingList: state.shoppingList.filter((item) => item.id !== id),
            })),

            toggleShoppingItem: (id) => set((state) => ({
                shoppingList: state.shoppingList.map((item) =>
                    item.id === id ? { ...item, completed: !item.completed } : item
                ),
            })),

            clearCompletedItems: () => set((state) => ({
                shoppingList: state.shoppingList.filter((item) => !item.completed),
            })),
        }),
        {
            name: 'grocery-storage',
        }
    )
); 