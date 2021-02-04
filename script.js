const videoElement = document.getElementById('video');
const button = document.getElementById('start-button');

// pregunta al usuario cual es el elemento a stremear, pasa el elemento video y lo reproduce
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener('click', async () => {
  // desabilita el boton
  button.disabled = true;
  // arranca picture in picture
  await videoElement.requestPictureInPicture();
  // resetea el boton
  button.disabled = false;
});

// al iniciar
selectMediaStream();
