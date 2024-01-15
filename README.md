# 🛜 Internet Speed Checker

This is a [typescript](https://www.typescriptlang.org/) project created by [`Abolade Greatness`](https://github.com/thegrtnx) helping you check a user internet upload and download speed in real-time.

## 🔧 Installation

```bash
npm i internet-speed-checker

```

I'll provide support for other packages with time. Happy to collaborate with anyone. 🤝

## 😍 Features

- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- Use download or upload speed component as a standalone
- Typescript supported

## The gist

```jsx
import React, { useEffect, useState } from "react";
import speedChecker from "internet-speed-checker";

function App() {
	const [uploadSpeed, setUploadSpeed] = useState("");
	const [downloadSpeed, setDownloadSpeed] = useState("");

	useEffect(() => {
		const download = setInterval(() => {
			const formattedDownloadSpeedString = speedChecker.getFormattedDownloadSpeed();

			setDownloadSpeed(formattedDownloadSpeedString);
		}, 1000);

		const upload = setInterval(() => {
			const formattedUploadSpeedString = speedChecker.getFormattedUploadSpeed();

			setUploadSpeed(formattedUploadSpeedString);
		}, 1000);

		// Cleanup the interval when the component is unmounted
		return () => {
			clearInterval(download);
			clearInterval(upload);
		};
	}, []); // Empty dependency array to run the effect only once on mount

	return (
		<div>
			<p>Download Speed: {downloadSpeed}</p>
			<p>Upload Speed: {uploadSpeed}</p>
		</div>
	);
}
```

```tsx
import React from "react";
import speedChecker from "internet-speed-checker";

function App() {
	useEffect(() => {
		const download = setInterval(() => {
			const formattedDownloadSpeedString = speedChecker.getFormattedDownloadSpeed();

			setDownloadSpeed(formattedDownloadSpeedString);
		}, 1000);

		const upload = setInterval(() => {
			const formattedUploadSpeedString = speedChecker.getFormattedUploadSpeed();

			setUploadSpeed(formattedUploadSpeedString);
		}, 1000);

		// Cleanup the interval when the component is unmounted
		return () => {
			clearInterval(download);
			clearInterval(upload);
		};
	}, []); // Empty dependency array to run the effect only once on mount

	return (
		<div>
			<p>Download Speed: {downloadSpeed}</p>
			<p>Upload Speed: {uploadSpeed}</p>
		</div>
	);
}
```

## 🚀 Demo

[A demo is worth a thousand words](https://speed.thegrtnx.com.ng)

## 🤝 Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [twitter](https://twitter.com/thegrtnx) and [Linkedin](https://www.linkedin.com/in/thegrtnx). My pseudo is [thegrtnx].

## 🤐 License

Licensed under MIT
