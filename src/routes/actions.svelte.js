export function lazyLoad(node) {
    function loadImage(node, path, errorCallback) {;
        const img = new Image();
        img.src = path;
    
        return new Promise((resolve, reject) => {
            img.onload = () => {
                if (node.tagName === "IMG") {
                    node.src = img.src;
                } else {
                    node.style.backgroundImage = `url(${img.src})`;
                }
                resolve(img.src);
            }
    
            img.onerror = (err) => {
                errorCallback();
                reject(`${err} imgPath: ${img.src}`);
            }
        })
    }

    $effect(() => {
        let retry = 0;
        
        loadImage(node, node.getAttribute("data-src"), () => {
            if (retry < 3) {
                retry++;
                loadImage(node, node.getAttribute("data-src"), () => {
                    console.error(`Failed to load image ${node.getAttribute("data-src")}`);
                });
            } else {
                console.error(`Failed to load image ${node.getAttribute("data-src")}`);
            }
        });
    })
}