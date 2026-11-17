export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const BASE_URL = import.meta.env.VITE_API_URL ?? window.location.origin;

export async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(new URL(path, BASE_URL));

  if (!response.ok) {
    throw new ApiError(response.status, `Erreur ${response.status} sur ${path}`);
  }

  return (await response.json()) as T;
}