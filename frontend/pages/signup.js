import { useState } from "react";
import Head from "next/head";
import { setUser } from "../utils/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [tier, setTier] = useState("Individual");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ email, tier, company });
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Head>
        <title>Sign Up · PHISHLENS AI</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="glass rounded-3xl p-6 shadow-glow">
          <h1 className="text-3xl font-display mb-4">Create your account</h1>
          <p className="text-sm text-ink/70 mb-6">
            Get started with PHISHLENS AI in minutes.
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
              <label className="text-sm uppercase tracking-wide">Company</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white p-3"
                placeholder="Organization name"
              />
            </div>
            <div>
              <label className="text-sm uppercase tracking-wide">Plan</label>
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value)}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white p-3"
              >
                <option>Individual</option>
                <option>Business</option>
                <option>Enterprise</option>
              </select>
            </div>
            <button className="w-full rounded-xl bg-ocean px-4 py-3 text-white font-semibold hover:bg-ink transition">
              Create account
            </button>
          </form>
          <div className="mt-4 text-sm">
            Already have an account? <a href="/login" className="text-ocean">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
