document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const firstPage = document.getElementById('firstPage');
    const secondPage = document.getElementById('secondPage');
    const actionButton = document.getElementById('actionButton');
    const returnButton = document.getElementById('returnButton');
    const videoPlayer = document.getElementById('videoPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    
    // Show second page when action button is clicked
    actionButton.addEventListener('click', function() {
        firstPage.classList.add('hidden');
        secondPage.classList.remove('hidden');
        
        // Try to play the video automatically (may be blocked by browser policies)
        try {
            videoPlayer.play();
        } catch (error) {
            console.log('Auto-play was prevented by the browser');
        }
    });
    
    // Return to first page
    returnButton.addEventListener('click', function() {
        secondPage.classList.add('hidden');
        firstPage.classList.remove('hidden');
        videoPlayer.pause();
    });
    
    // Play button
    playButton.addEventListener('click', function() {
        videoPlayer.play();
    });
    
    // Pause button
    pauseButton.addEventListener('click', function() {
        videoPlayer.pause();
    });
});