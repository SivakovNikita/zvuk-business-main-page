interface AudioTrack {
  name: string;
  duration: string;
  preload: string;
}

class Track implements AudioTrack {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.preload = 'none';
  }

  setTime() {}
  nextTrack() {}
  prevTrack() {}
  currentTime() {}
  play() {}
  pause() {}
}
