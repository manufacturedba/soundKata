function pitchToFrequency(pitch) {
  console.log('pitchToFrequency pitch parameter value = ' + pitch);
  var frequency = undefined;
  
  switch (pitch) {
    case 'A3': frequency = 220; break;
    case 'A#': frequency = 233; break;
    case 'B' : frequency = 247; break;
    case 'C' : frequency = 262; break; 
    case 'C#': frequency = 277; break;
    case 'D' : frequency = 294; break;
    case 'D#': frequency = 311; break;
    case 'E' : frequency = 330; break;
    case 'F' : frequency = 349; break; 
    case 'F#': frequency = 367; break;
    case 'G' : frequency = 392; break; 
    case 'G#': frequency = 415; break;
    case 'A4': frequency = 440; break;
  }
  
  console.log('pitchToFrequency frequency return value = ' + frequency); 
  return frequency;
}

function frequencyToPitch(frequency) {
  console.log('frequencyToPitch frequency parameter value = ' + frequency);
  var pitch = undefined;
  
  switch (frequency) {
    case 220: pitch = 'A3'; break;
    case 233: pitch = 'A#'; break;
    case 247: pitch = 'B'; break;
    case 262: pitch = 'C'; break; 
    case 277: pitch = 'C#'; break;
    case 294: pitch = 'D'; break;
    case 311: pitch = 'D#'; break;
    case 330: pitch = 'E'; break;
    case 349: pitch = 'F'; break; 
    case 367: pitch = 'F#'; break;
    case 392: pitch = 'G'; break; 
    case 415: pitch = 'G#'; break;
    case 440: pitch = 'A4'; break;
  }
  
  console.log('frequencyToPitch pitch return value = ' + pitch); 
  return pitch;
}
