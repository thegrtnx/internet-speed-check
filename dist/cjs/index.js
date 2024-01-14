"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InternetSpeedChecker {
    downloadSpeed = 0;
    uploadSpeed = 0;
    unit = "bps"; // Initial unit is bps
    convertSpeed(speed) {
        if (speed === null || speed === 0) {
            return { value: 0, unit: "bps" };
        }
        if (speed > 1e9) {
            return { value: speed / 1e9, unit: "Gbps" };
        }
        else if (speed > 1e6) {
            return { value: speed / 1e6, unit: "Mbps" };
        }
        else if (speed > 1e3) {
            return { value: speed / 1e3, unit: "Kbps" };
        }
        else {
            return { value: speed, unit: "bps" };
        }
    }
    async measureDownloadSpeed() {
        const url = "https://www.cloudflare.com/cdn-cgi/trace";
        const startTime = new Date().getTime();
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const reader = response.body?.getReader();
            if (!reader) {
                throw new Error("ReadableStream not supported.");
            }
            let totalBytes = 0;
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                totalBytes += value?.length || 0;
            }
            const endTime = new Date().getTime();
            const durationInSeconds = (endTime - startTime) / 1000;
            const speedBytesPerSecond = totalBytes / durationInSeconds;
            this.downloadSpeed = speedBytesPerSecond;
        }
        catch (error) {
            this.downloadSpeed = 0; // Set to 0 if there's an error (no connection)
            if (error instanceof Error) {
                console.error("Error measuring download speed:", error.message);
            }
            else {
                console.error("Unknown error type:", error);
            }
        }
    }
    async measureUploadSpeed() {
        const uploadData = new Array(1024 * 1024).fill("a").join("");
        const url = "https://httpbin.org/post";
        const startTime = new Date().getTime();
        try {
            const response = await fetch(url, {
                method: "POST",
                body: uploadData,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const endTime = new Date().getTime();
            const durationInSeconds = (endTime - startTime) / 1000;
            const speedBytesPerSecond = uploadData.length / durationInSeconds;
            this.uploadSpeed = speedBytesPerSecond;
        }
        catch (error) {
            this.uploadSpeed = 0; // Set to 0 if there's an error (no connection)
            if (error instanceof Error) {
                console.error("Error measuring upload speed:", error.message);
            }
            else {
                console.error("Unknown error type:", error);
            }
        }
    }
    startSpeedCheck() {
        setInterval(() => {
            this.measureDownloadSpeed();
            this.measureUploadSpeed();
            this.displaySpeeds();
        }, 1000);
    }
    displaySpeeds() {
        const formattedDownloadSpeed = `${this.convertSpeed(this.downloadSpeed).value.toFixed(2)} ${this.convertSpeed(this.downloadSpeed).unit}`;
        const formattedUploadSpeed = `${this.convertSpeed(this.uploadSpeed).value.toFixed(2)} ${this.convertSpeed(this.uploadSpeed).unit}`;
        console.log(`Download Speed: ${formattedDownloadSpeed}`);
        console.log(`Upload Speed: ${formattedUploadSpeed}`);
    }
    getFormattedDownloadSpeed() {
        return `${this.convertSpeed(this.downloadSpeed).value.toFixed(2)} ${this.convertSpeed(this.downloadSpeed).unit}`;
    }
    getFormattedUploadSpeed() {
        return `${this.convertSpeed(this.uploadSpeed).value.toFixed(2)} ${this.convertSpeed(this.uploadSpeed).unit}`;
    }
}
const speedChecker = new InternetSpeedChecker();
speedChecker.startSpeedCheck();
exports.default = InternetSpeedChecker;
