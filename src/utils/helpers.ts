export const getResponse = async <T>(response: Response, errorMessage: string): Promise<T> => {
  if (!response.ok) {
    throw new Error(`${errorMessage}: ${response.statusText}`);
  }
  return response.json() as Promise<T>;
};
