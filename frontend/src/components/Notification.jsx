import useNotificationStore from '../store/notificationStore'

const typeStyles = {
  success: 'bg-green-600',
  error: 'bg-red-600',
  warning: 'bg-yellow-500',
  info: 'bg-blue-600',
}

const typeIcons = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
}

function Notification() {
  const { notifications, removeNotification } = useNotificationStore()

  if (!notifications.length) return null

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      {notifications.map(({ id, message, type }) => (
        <div
          key={id}
          className={`${typeStyles[type] || typeStyles.info} text-white flex items-start gap-3 px-4 py-3 rounded-lg shadow-lg min-w-64 max-w-sm animate-fadeIn`}
        >
          <span className="text-lg">{typeIcons[type] || typeIcons.info}</span>
          <p className="flex-1 text-sm">{message}</p>
          <button
            onClick={() => removeNotification(id)}
            className="ml-2 opacity-75 hover:opacity-100 transition"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

export default Notification
