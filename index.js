const video = document.getElementById("Video");
const Btn = document.getElementById("Btn");
const BtnOffVideo = document.getElementById("BtnOffVideo");
const BtnOffAudio = document.getElementById("BtnOffAudio");
let stream;

const permission = {
  video: true,
  audio: true,
};

async function startMedia() {
  const userMedia = await navigator.mediaDevices.getUserMedia(permission);
  video.srcObject = userMedia;
  stream = userMedia;
}

function stopVideo() {
  if (stream) {
    const videoTracks = stream.getVideoTracks();
    videoTracks.forEach((track) => track.stop());
    // videoTracks[0].stop();
  }
}

function stopAudio() {
  if (stream) {
    const audioTracks = stream.getAudioTracks();
    audioTracks.forEach((Track) => Track.stop());
  }
}

Btn.addEventListener("click", startMedia);
