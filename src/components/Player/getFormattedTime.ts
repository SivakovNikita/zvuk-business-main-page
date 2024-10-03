const getFormattedTime = (currentTrackDuration: number) => {
  const minutes = Math.floor(currentTrackDuration / 60);
  const seconds = Math.floor(currentTrackDuration % 60);
  const min = `${minutes.toString().padStart(2, '0')}`;
  const sec = `${seconds.toString().padStart(2, '0')}`;
  const formattedTime = { min, sec };

  return formattedTime;
};

export default getFormattedTime;
