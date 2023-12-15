const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to the video element, then play
async function selectMediaStream() {
    try {
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
         videoElement.srcObject = mediaStream;
         videoElement.onloadedmetadata = () => {
            videoElement.play();
         }
    } catch (error) {
        // Catch our errors
        console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});

selectMediaStream();