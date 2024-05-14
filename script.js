async function fetchRandomTikTokVideo() {
    try {
        const response = await fetch('/api/tiktok');
        const data = await response.json();
        if (data && data.items && data.items.length > 0) {
            const videoUrl = data.items[0].video.playAddr;
            const caption = data.items[0].desc;
            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = `
                <h2>Random TikTok Video</h2>
                <p>Caption: ${caption}</p>
                <video width="400" controls>
                    <source src="${videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            throw new Error('No videos found');
        }
    } catch (error) {
        console.error('Error fetching TikTok video:', error);
    }
}
