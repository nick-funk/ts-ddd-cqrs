const AUTH_KEY = "ts-ddd-cqrs:accessToken"

export const storeAuthToken = (token: string) => {
  // it would be better to store this in an httpOnly
  // cookie, but this will do for the demo
  localStorage.setItem(AUTH_KEY, token);
};

export const retrieveAuthToken = (): string | null => {
  // it would be better to store this in an httpOnly
  // cookie, but this will do for the demo
  return localStorage.getItem(AUTH_KEY);
};
