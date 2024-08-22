const getFormattedTime = (currentTrackDuration) => {
  const minutes = Math.floor(currentTrackDuration / 60);
  const seconds = Math.floor(currentTrackDuration % 60);
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return formattedTime;
};

export default getFormattedTime;
