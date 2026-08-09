import { create } from 'zustand'

let nextId = 1

const useNotificationStore = create((set) => ({
  notifications: [],

  addNotification: (message, type = 'info', duration = 4000) => {
    const id = nextId++
    set((state) => ({
      notifications: [...state.notifications, { id, message, type }],
    }))
    if (duration > 0) {
      setTimeout(() => {
        useNotificationStore.getState().removeNotification(id)
      }, duration)
    }
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }))
  },
}))

export default useNotificationStore
