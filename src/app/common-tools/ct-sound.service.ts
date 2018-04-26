import { Injectable } from '@angular/core';

@Injectable()
export class CtSoundService {

  constructor() { }

  playSound(soundFile: string) {

    if (!soundFile) {
      return;
    }

    let elemAudio = document.createElement('audio');
    let elemSourceWav = document.createElement('source');
    elemSourceWav.src = soundFile + '.wav';
    let elemSourceMp3 = document.createElement('source');
    elemSourceMp3.src = soundFile + '.mp3';
    elemAudio.appendChild(elemSourceWav);
    elemAudio.appendChild(elemSourceMp3);
    document.body.appendChild(elemAudio);

    elemAudio.play();

    elemAudio.onended = (event: Event) => {
      document.body.removeChild(elemAudio);
    };

  }
}

/*

  <audio controls id="audiostuff" style="display:none">
      <source src="sounds/Gong-sound.mp3" type="audio/mpeg">
      <source src="sounds/Gong-sound.wav" type="audio/wav"> 
      Your browser does not support the audio element.
  </audio>

  */