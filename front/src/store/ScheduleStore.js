import { create } from 'zustand'

export const useScheduleStore = create((set) => ({

  busyHours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 19, 20, 21, 22, 23, 24],
  setBusyHours: (newBusyHours) =>  set((state) => ({busyHours : newBusyHours})),
 
  selectedHours : [],
  setSelectedHours: (newSelectedHours) =>  set((state) => ({selectedHours : newSelectedHours})),

  selectedInterval: 60,
  setSelectedInterval: (newSelectedInterval) =>  set((state) => ({selectedInterval : newSelectedInterval}))


}))