// 所有颜色的平均值为主色调
export function calculateMainColor(rgbas) {
	// 用来收集单元格子的主色调 rgba
	const mainColors = [];
	for (let colors of rgbas) {
		let r = 0,
			g = 0,
			b = 0,
			a = 0;
		for (let color of colors) {
			// 累加
			r += color[0];
			g += color[1];
			b += color[2];
			a += color[3];
		}
		mainColors.push([
			Math.round(r / colors.length), // 取平均值
			Math.round(g / colors.length), // 取平均值
			Math.round(b / colors.length), // 取平均值
			Math.round(a / colors.length) // 取平均值
		]);
	}
	return mainColors;
}

// 计算图片的主色调
export function getAverageColor(url) {
	return new Promise(resolve => {
		// 创建一个 20 * 20的canvas画板
		// 理论上这里宽高可以自己定，但是越大，色彩会越精准
		const composeCanvas = document.createElement('canvas');
		const composeCtx = composeCanvas.getContext('2d');
		composeCanvas.width = 1000;
		composeCanvas.height = 1000;

		// 创建img对象
		const img = new Image();
		img.src = url;
		img.onload = function () {
			const scale = composeCanvas.height / composeCanvas.height;
			img.height *= scale;
			img.width *= scale;

			// 将img画到临时canvas画板
			composeCtx.drawImage(
				img,
				0,
				0,
				composeCanvas.width,
				composeCanvas.height
			);
			// 获取颜色信息data
			const { data } = composeCtx.getImageData(
				0,
				0,
				composeCanvas.width,
				composeCanvas.height
			);

			// 累加  r，g，b，a
			let r = 0,
				g = 0,
				b = 0,
				a = 0;
			for (let i = 0; i < data.length; i += 4) {
				r += data[i];
				g += data[i + 1];
				b += data[i + 2];
				a += data[i + 3];
			}
			resolve({
				// 主色调
				rgba: [
					Math.round(r / (data.length / 4)), // 取平均值
					Math.round(g / (data.length / 4)), // 取平均值
					Math.round(b / (data.length / 4)), // 取平均值
					Math.round(a / (data.length / 4)) // 取平均值
				],
				url
			});
		};
	});
}

export function generateBlobURL(file) {
	return window.URL.createObjectURL(file);
}
