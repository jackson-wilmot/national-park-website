export function typewriter(node, { speed = 1.5 }) {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent.split("").reverse().join("");
	const duration = text.length / (speed * 0.01);
    
	return {
        delay: 400,
		duration,
		tick: (t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i).split("").reverse().join("");
            if (t === 1) {
                node.classList.add("finished");
                setTimeout(() => {
                    node.classList.add("active");
                }, 1);
                
            }
		}
	};
}