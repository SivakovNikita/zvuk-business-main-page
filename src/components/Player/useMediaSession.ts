import { useEffect } from 'react';

export interface MediaSessionProps {
  track: {
    title?: string;
    artist?: string;
    artwork?: MediaImage[];
    next?: boolean;
    prev?: boolean;
  };

  onPlay?: (...args: any[]) => any;
  onPause?: (...args: any[]) => any;
  onPreviousTrack?: (...args: any[]) => any;
  onNextTrack?: (...args: any[]) => any;
}

const useMediaSession = (props: MediaSessionProps) => {
  const { track, onPlay, onPause, onPreviousTrack, onNextTrack } = props;
  console.log('useMediaSession');

  useEffect(() => {
    if ('mediaSession' in navigator) {
      const { mediaSession } = navigator;

      mediaSession.metadata = new MediaMetadata({
        title: track.title || '',
        artist: track.artist || '',
        artwork: track.artwork || [],
      });
      console.log(track.next);
      const events: { action: MediaSessionAction; handler: MediaSessionActionHandler | null }[] = [
        {
          action: 'play',
          handler: onPlay || null,
        },
        {
          action: 'pause',
          handler: onPause || null,
        },
        {
          action: 'previoustrack',
          handler: track.prev && onPreviousTrack ? onPreviousTrack : null,
        },
        {
          action: 'nexttrack',
          handler: track.next && onNextTrack ? onNextTrack : null,
        },
      ];

      events.forEach((event) => {
        try {
          mediaSession.setActionHandler(event.action, event.handler);
        } catch (error) {
          console.log(error.name);
        }
      });

      return () => {
        events.forEach((event) => {
          try {
            mediaSession.setActionHandler(event.action, null);
          } catch (error) {
            console.log(error.name);
          }
        });
      };
    }
  }, [track, onPlay, onPause, onPreviousTrack, onNextTrack]);
};

export default useMediaSession;
