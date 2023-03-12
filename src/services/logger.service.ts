import { ErrorInfo } from "react";

class LoggerService {
	static logError(error: Error, errorInfo: ErrorInfo): void {
		console.error(`[ERROR BOUNDARY]: ${error.toString()}`);
		console.error(errorInfo.componentStack);
	}
}

export default LoggerService;