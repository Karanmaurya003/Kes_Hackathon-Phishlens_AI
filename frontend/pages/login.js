import { useState } from "react";
import Head from "next/head";
import { authenticate, demoAccounts } from "../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = authenticate(email, password);
    if (!user) {
      setError("Invalid credentials. Try a demo account below.");
      return;
    }
    window.location.href = "/dashboard";
  };

  const handleDemo = (account) => {
    const user = authenticate(account.email, account.password);
    if (user) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Head>
        <title>Login · PHISHLENS AI</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mx-auto max-w-4xl px-6 py-16 grid gap-8 md:grid-cols-2 items-start">
        <div className="glass rounded-3xl p-6 shadow-glow">
          <h1 className="text-3xl font-display mb-4">Welcome back</h1>
          <p className="text-sm text-ink/70 mb-6">
            Log in to access the full PHISHLENS AI dashboard.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm uppercase tracking-wide">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white p-3"
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label className="text-sm uppercase tracking-wide">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white p-3"
                placeholder="••••••••"
                required
              />
            </div>
            {error && <div className="text-sm text-flare">{error}</div>}
            <button className="w-full rounded-xl bg-ocean px-4 py-3 text-white font-semibold hover:bg-ink transition">
              Log in
            </button>
          </form>
          <div className="mt-4 text-sm">
            New here? <a href="/signup" className="text-ocean">Create an account</a>
          </div>
        </div>

        <div className="glass rounded-3xl p-6 shadow-glow">
          <h2 className="text-xl font-display mb-4">Demo Accounts</h2>
          <div className="space-y-3 text-sm">
            {demoAccounts.map((account) => (
              <button
                key={account.email}
                onClick={() => handleDemo(account)}
                className="w-full rounded-xl border border-ink/10 bg-white p-4 text-left hover:bg-ink/5"
              >
                <div className="font-semibold">{account.label}</div>
                <div className="text-ink/60">{account.email}</div>
                <div className="text-ink/60">Tier: {account.tier}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
