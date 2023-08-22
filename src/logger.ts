function log(message: string, level: string, color: string): void {
  console.log(
    `%c${level}%c: ${message}`,
    `color: ${color}; font-weight: bold;`,
    "color: inherit; font-weight: normal",
  );
}

export function info(message: string): void {
  log(message, "info", "blue");
}

export function warn(message: string): void {
  log(message, "warn", "orange");
}

export function error(message: string): void {
  log(message, "error", "red");
}

export default { info, warn, error };
