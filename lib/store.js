import create from "zustand";

const useStore = create((set, get) => ({
  items: {
    pizzas: [],
  },
  addItem: (item) =>
    set((state) => ({
      items: {
        pizzas: [...state.items.pizzas, item],
      },
    })),
  delete: (item) =>
    set((state) => ({
      items: {
        pizzas: [...state.items.pizzas.filter((pizza) => pizza.id !== item.id)],
      },
    })),
  reset: () =>
    set(() => ({
      items: {
        pizzas: [],
      },
    })),
}));

export default useStore;
