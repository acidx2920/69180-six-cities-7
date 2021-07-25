import {store} from 'react-notifications-component';

const NotificationSettings = {
  TITLE: 'Error',
  DEFAULT_MESSAGE: 'Unknown error has occured.',
  TYPE: 'danger',
  POSITION: 'bottom-center',
  DURATION: 5000,
};

export const showError = (error) => {
  store.addNotification({
    title: NotificationSettings.TITLE,
    message: typeof error === 'string' ? error : NotificationSettings.DEFAULT_MESSAGE,
    type: NotificationSettings.TYPE,
    container: NotificationSettings.POSITION,
    dismiss: {
      duration: NotificationSettings.DURATION,
    },
  });
};
