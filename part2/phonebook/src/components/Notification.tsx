export const Notification = ({
  message,
  popupType,
}: {
  message: string;
  popupType: string;
}) => {
  if (message === null) {
    return null;
  }

  return <div className={popupType}>{message}</div>;
};
