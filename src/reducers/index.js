
const songsReducer = () => {
  return [
    {title: 'No scrubs', duration: '4:05'},
    {title: 'Pumped up kicks', duration: '3:50'},
    {title: 'Serenata sin mariachis', duration: '3:45'},
    {title: 'Aftergold', duration: '4:45'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (ation.type === 'SONG_SELECTED') {
    return action.payload;
  };

  return selectedSong;
};