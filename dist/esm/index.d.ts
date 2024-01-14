declare class InternetSpeedChecker {
    private downloadSpeed;
    private uploadSpeed;
    private unit;
    private convertSpeed;
    private measureDownloadSpeed;
    private measureUploadSpeed;
    startSpeedCheck(): void;
    private displaySpeeds;
    getFormattedDownloadSpeed(): string;
    getFormattedUploadSpeed(): string;
}
export default InternetSpeedChecker;
