import type { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  Laptop,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Wallet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PakSpeed Deals | Cars, Phones & Laptops",
  description:
    "Discover certified cars, flagship smartphones, and premium laptops with nationwide delivery and financing across Pakistan.",
};

const featuredInventory = [
  {
    icon: Car,
    title: "Certified Cars",
    price: "Starting PKR 2.8M",
    highlights: [
      "Dealer-backed warranty & inspection",
      "Flexible bank financing from 12 months",
      "Registration & transfer handled for you",
    ],
  },
  {
    icon: Smartphone,
    title: "Flagship Smartphones",
    price: "Starting PKR 145K",
    highlights: [
      "Latest Samsung, iPhone & Google models",
      "Official PTA approvals & local warranty",
      "Trade-in upgrades every 6 months",
    ],
  },
  {
    icon: Laptop,
    title: "Performance Laptops",
    price: "Starting PKR 185K",
    highlights: [
      "Gaming, business & creator series",
      "Genuine Windows & Office bundles",
      "On-site setup for Karachi & Lahore",
    ],
  },
];

const servicePillars = [
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description:
      "Each product passes a 120-point inspection, backed by manufacturer warranties and our 7-day replacement promise.",
  },
  {
    icon: Wallet,
    title: "Smart Financing",
    description:
      "Approved partner banks and BNPL plans keep monthly payments manageable for individuals and businesses alike.",
  },
  {
    icon: Sparkles,
    title: "Upgrade Concierge",
    description:
      "Trade in old devices or cars and roll the value directly into your next purchase — nationwide pickup available.",
  },
];

const testimonials = [
  {
    name: "Arooj Khan",
    role: "Founder, Karachi Creative Labs",
    quote:
      "PakSpeed curated MacBook Pros for our design team and delivered within 48 hours. Hassle-free financing sealed the deal.",
  },
  {
    name: "Usman Siddiqui",
    role: "Islamabad",
    quote:
      "Their certified Corolla Altis was spotless and the transfer paperwork was handled end-to-end. Highly recommended!",
  },
  {
    name: "Hira Fatima",
    role: "Freelance Developer, Lahore",
    quote:
      "I upgrade my phone every year through their trade-in plan and always get official PTA-approved devices on time.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="absolute inset-y-0 right-[20%] -z-10 w-[540px] rounded-full bg-[conic-gradient(at_top,_#22d3ee,_#2563eb,_#7c3aed)] opacity-40 blur-3xl" />
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-28 md:pb-28 md:pt-32 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
              PakSpeed Deals — Nationwide
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Drive, connect, and create with Pakistan&apos;s premium marketplace.
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              Explore curated inventories of certified cars, flagship smartphones, and high-performance laptops. Transparent pricing, verified warranties, and personalized financing — all managed by a single trusted partner.
            </p>
            <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center">
              <Link
                href="#showroom"
                className="rounded-full bg-cyan-400 px-6 py-3 text-center text-base font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
              >
                Browse Featured Deals
              </Link>
              <Link
                href="tel:+923001112233"
                className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200"
              >
                <Phone className="h-4 w-4" />
                Hotline +92 300 111 2233
              </Link>
            </div>
            <dl className="grid gap-6 pt-4 sm:grid-cols-3">
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/60">Deliveries</dt>
                <dd className="text-2xl font-semibold">80+ cities</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/60">Inventory</dt>
                <dd className="text-2xl font-semibold">300+ listings</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.3em] text-white/60">Satisfaction</dt>
                <dd className="text-2xl font-semibold">4.9★ rating</dd>
              </div>
            </dl>
          </div>
          <div className="flex w-full flex-1 flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:max-w-md">
            <h2 className="text-lg font-semibold text-white">Seamless financing in 3 steps</h2>
            <ol className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 font-semibold text-slate-950">1</span>
                Share your CNIC and salary slip with our secure portal for instant pre-approval.
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 font-semibold text-slate-950">2</span>
                Choose a repayment plan from 12 to 36 months with partner banks and Islamic financing options.
              </li>
              <li className="flex gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 font-semibold text-slate-950">3</span>
                Receive doorstep delivery, with registration or device setup completed by our technicians.
              </li>
            </ol>
            <Link
              href="mailto:hello@pakspeed.pk"
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2 text-slate-900 transition hover:bg-white"
            >
              Request a financing callback
            </Link>
            <p className="text-sm text-white/60">
              Registered with SECP & FBR. Financing approvals subject to partner terms and credit checks.
            </p>
          </div>
        </section>
      </div>

      <section id="showroom" className="bg-slate-900/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Featured showroom collections</h2>
              <p className="mt-2 max-w-2xl text-lg text-white/70">
                Every listing is verified in our Karachi and Lahore hubs, complete with comprehensive reports, accessories, and after-sales support.
              </p>
            </div>
            <Link
              href="mailto:sales@pakspeed.pk"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Request Stock Sheet
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredInventory.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-8 shadow-2xl transition hover:border-cyan-400/60 hover:shadow-cyan-400/40"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-cyan-200">{item.price}</p>
                </div>
                <ul className="space-y-2 text-white/70">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://wa.me/923001112233"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  View current listings
                  <span aria-hidden className="text-xl leading-none">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-4">
              <span className="rounded-full bg-white/5 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Why customers choose us
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">Reliable service, real Pakistani market insight</h2>
              <p className="text-lg text-white/70">
                From sourcing to after-sales, our specialists deliver premium experiences tailored to local needs, taxation, and compliance requirements.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:col-span-2">
              {servicePillars.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
                  <pillar.icon className="h-8 w-8 text-cyan-200" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-white/70">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-8">
              <div className="flex items-center gap-3 text-cyan-200">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Visit our experience centres</span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold">Karachi & Lahore showrooms</h2>
              <p className="mt-3 text-white/70">
                Test-drive cars, get hands-on with devices, and speak with financing advisors. Walk-ins welcome with CNIC, or book a private session online.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4">
                  <h3 className="text-lg font-semibold text-white">Karachi</h3>
                  <p className="text-sm text-white/70">Shahrah-e-Faisal, Block 6 PECHS</p>
                  <p className="mt-2 text-sm text-white/50">Mon-Sat · 10am - 8pm</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <h3 className="text-lg font-semibold text-white">Lahore</h3>
                  <p className="text-sm text-white/70">M.M. Alam Road, Gulberg III</p>
                  <p className="mt-2 text-sm text-white/50">Tue-Sun · 11am - 9pm</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold sm:text-4xl">What clients say</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <figure
                    key={testimonial.name}
                    className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <blockquote className="text-white/80">“{testimonial.quote}”</blockquote>
                    <figcaption className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">
                      {testimonial.name}
                      <br />
                      <span className="text-[11px] font-semibold text-white/40">{testimonial.role}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-slate-950 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Ready to make your next upgrade?</h2>
            <p className="max-w-xl text-white/70">
              WhatsApp our concierge team for real-time stock videos, bank quotations, and trade-in evaluations tailored to your goals.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://wa.me/923001112233"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
            >
              Chat on WhatsApp
            </Link>
            <Link
              href="mailto:partnerships@pakspeed.pk"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Corporate partnerships
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 px-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PakSpeed Deals. Registered reseller in Pakistan.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-cyan-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-cyan-200">
              Terms of Service
            </Link>
            <Link href="mailto:support@pakspeed.pk" className="transition hover:text-cyan-200">
              support@pakspeed.pk
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
