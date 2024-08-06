const sleep = ms => new Promise(r => setTimeout(r, ms = 2000));
const tryCount = 0;

const removeParentVideo = async () => {
    if (tryCount >= 3) return;

    const h3s = [].slice.call(document.querySelectorAll('h3'));
    const relatedVideos = h3s.find((h3) => h3.innerText === 'Related posts');

    if (!relatedVideos) {
        await sleep(2000);
        tryCount++;
        await removeParentVideo();
    }

    relatedVideos.parentElement.remove();
}

(async () => {
    await sleep(2000);
    await removeParentVideo();
})();