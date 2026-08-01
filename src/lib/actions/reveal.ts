import { animate, inView } from 'motion';

type RevealOptions = {
	delay?: number;
	direction?: 'up' | 'left' | 'right';
	distance?: number;
};

export function reveal(node: HTMLElement, options: RevealOptions | number = {}) {
	const config = typeof options === 'number' ? { delay: options } : options;
	const { delay = 0, direction = 'up', distance = 72 } = config;
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reducedMotion) return { destroy() {} };

	const offset = {
		up: { x: 0, y: distance },
		left: { x: -distance, y: 0 },
		right: { x: distance, y: 0 }
	}[direction];

	node.style.opacity = '0';
	node.style.filter = 'blur(10px)';
	node.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0) scale(.96)`;

	const stop = inView(
		node,
		() => {
			animate(
				node,
				{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' },
				{ duration: 0.85, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }
			);
		},
		{ amount: 0.18, margin: '0px 0px -40px 0px' }
	);

	return { destroy: stop };
}
