import { configureStore } from '@reduxjs/toolkit';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.error('Could not save state', e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Could not load state', e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
  },
  preloadedState: persistedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));
