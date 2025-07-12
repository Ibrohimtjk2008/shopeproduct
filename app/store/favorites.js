// store/favorites.js
import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: [],
  addFavorite: (item) =>
    set((state) => ({
      favorites: [...state.favorites, item],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
}));
