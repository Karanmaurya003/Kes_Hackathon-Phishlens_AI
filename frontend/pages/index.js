import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import PreventionPanel from "../components/PreventionPanel";
import NewsList from "../components/NewsList";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function Home() {
  const [news, setNews] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${API_BASE}/news`);
        setNews(res.data.items || []);
        setLastUpdated(res.data.last_updated || null);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Head>
        <title>PHISHLENS AI Dashboard</title>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="mx-auto max-w-6xl px-6 pt-12 pb-6">
        <div className="flex flex-col gap-4">
          <span className="uppercase text-xs tracking-[0.3em] text-ink/60">
            Explainable Multi-Layer Phishing Detection
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-ink">
            PHISHLENS AI
          </h1>
          <p className="max-w-2xl text-ink/70">
            Multi-signal phishing defense combining URL intelligence, NLP detection,
            domain metadata, and explainable AI insights. Built to educate and protect
            communities from modern phishing attacks.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/login"
              className="rounded-xl bg-ocean px-5 py-3 text-white font-semibold hover:bg-ink transition"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="rounded-xl border border-ink/20 px-5 py-3 font-semibold hover:bg-ink/5 transition"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 space-y-8">
        <section className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <PreventionPanel />
          <NewsList items={news} />
        </section>

        <section className="glass rounded-3xl p-6 shadow-glow">
          <h3 className="text-xl font-display mb-4">Why PHISHLENS AI</h3>
          <div className="grid gap-4 md:grid-cols-3 text-sm text-ink/80">
            <div>
              <div className="font-semibold">Explainable</div>
              <p>Understand why a message or URL is risky with SHAP insights.</p>
            </div>
            <div>
              <div className="font-semibold">Multi-layered</div>
              <p>Combine URL analysis, message NLP, and domain intel.</p>
            </div>
            <div>
              <div className="font-semibold">Actionable</div>
              <p>Get recommended defensive actions for each risk tier.</p>
            </div>
          </div>
        </section>
        {lastUpdated && (
          <div className="text-xs text-ink/60">
            News last updated: {lastUpdated}
          </div>
        )}
      </main>
    </div>
  );
}
