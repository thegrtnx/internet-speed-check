declare class InternetSpeedChecker {
    private downloadSpeed;
    private uploadSpeed;
    private unit;
    private convertSpeed;
    private measureDownloadSpeed;
    private measureUploadSpeed;
    getFormattedDownloadSpeed(): string;
    getFormattedUploadSpeed(): string;
    startSpeedCheck(): void;
}
declare const speedChecker: InternetSpeedChecker;
export default speedChecker;
