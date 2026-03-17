export const demoAccounts = [
  {
    label: "Individual Demo",
    email: "individual@phishlens.ai",
    password: "phishlens123",
    tier: "Individual",
  },
  {
    label: "SMB Demo",
    email: "smb@phishlens.ai",
    password: "phishlens123",
    tier: "Business",
  },
  {
    label: "Enterprise Demo",
    email: "enterprise@phishlens.ai",
    password: "phishlens123",
    tier: "Enterprise",
  },
];

const STORAGE_KEY = "phishlens_user";

export function getUser() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function setUser(user) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearUser() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function authenticate(email, password) {
  const account = demoAccounts.find(
    (acc) => acc.email === email && acc.password === password
  );
  if (!account) return null;
  const user = { email: account.email, tier: account.tier };
  setUser(user);
  return user;
}
