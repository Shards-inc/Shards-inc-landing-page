import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Zap, Shield, Network, Code2, Cpu, Layers } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Sophisticated Technical Minimalism
 * - Asymmetric layouts with strategic whitespace
 * - Serif headlines with sans-serif body text
 * - Cyan accent color (#06b6d4) for technical vibrancy
 * - Layered architecture visualization
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between py-4 md:py-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif text-xl font-bold">Shards</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#portfolio"
              className="hidden md:block text-sm font-medium hover:text-accent transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#features"
              className="hidden md:block text-sm font-medium hover:text-accent transition-colors"
            >
              Features
            </a>
            <a
              href="https://github.com/shards-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              'url("https://private-us-east-1.manuscdn.com/sessionFile/3kEaBKMzFNNR3q68rHGhVz/sandbox/0awpUNrznXelhHiVrp61q0-img-1_1771629725000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM2tFYUJLTXpGTk5SM3E2OHJIR2hWei9zYW5kYm94LzBhd3BVTnJ6blhlbGhIaVZycDYxcTAtaW1nLTFfMTc3MTYyOTcyNTAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TRy9mRYDe11dFiEYhL4ziOao5VO0-l5sgXjErtXnSXeZJ~Zq8r0sPN6pOyXs3m9xkUDztee3iTCXu3rwBqFR6Aiu07dQ6gye-3X4qst2p2w9Yz49Qs1RE5YGnVXj6HQ0nKGhYH4QZoFrA0YkThtL0g5KqRPA0UM6WQNrvWNv-Phki~CmmFtLaXaJ8xO0d~jJzbssgc0PPM94TU5eH7WMwHBtwKx2u-C~QSJukUs-JijglzY~UXxs-yDB6qSWKU70AdCFfBOwpPq7bSawY4t0JO1e-5QVeNC9QTc60ALrEQ2hQU48xzJezqkGtSV2gl0LJDxXZrO3bmwk0Nx4xGkwNw__")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-label">Enterprise AI Foundation</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                Orchestrate Intelligence at Scale
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Shards provides enterprise-grade infrastructure for distributed AI systems. Multi-LLM orchestration, kernel-level oversight, and autonomous application layers—built for production.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/shards-foundation" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore on GitHub
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-accent">17</div>
                <p className="text-sm text-muted-foreground">Repositories</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">3</div>
                <p className="text-sm text-muted-foreground">Architecture Layers</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">49+</div>
                <p className="text-sm text-muted-foreground">MCP Connectors</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl" />
              <div className="absolute inset-4 border border-accent/30 rounded-xl" />
              <div className="absolute inset-8 border border-accent/20 rounded-lg" />
              <div className="absolute inset-12 flex items-center justify-center">
                <Layers className="w-16 h-16 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accent Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Architecture Overview */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="container space-y-16">
          <div className="max-w-2xl">
            <span className="text-label">Layered Architecture</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Three-Tier Intelligence Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Shards implements a sophisticated three-layer architecture that separates concerns and enables scalable autonomous systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kernel Layer */}
            <div className="card-elevated p-8 space-y-4 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold">Kernel Layer</h3>
              <p className="text-muted-foreground">
                Deterministic control planes and governance infrastructure. Oversight, integrity verification, and system-level orchestration.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Orchestration Layer */}
            <div className="card-elevated p-8 space-y-4 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold">Orchestration</h3>
              <p className="text-muted-foreground">
                Multi-LLM routing with weighted distribution. 12+ LLM families, intelligent fallback, and adaptive model selection.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Applications Layer */}
            <div className="card-elevated p-8 space-y-4 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold">Applications</h3>
              <p className="text-muted-foreground">
                Revenue engines, workflow hubs, and autonomous systems. Production-grade applications leveraging the infrastructure.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="container space-y-16">
          <div className="max-w-2xl">
            <span className="text-label">Project Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Production-Grade Repositories
            </h2>
            <p className="text-lg text-muted-foreground">
              17 repositories spanning orchestration, infrastructure, and autonomous applications. Each built with enterprise standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Featured Projects */}
            {[
              {
                name: "kernels",
                description: "Deterministic control planes with kernel-level oversight",
                stars: 3,
                category: "Infrastructure",
              },
              {
                name: "omni-llm-orchestrator",
                description: "12 LLM families with weighted routing and intelligent fallback",
                stars: 2,
                category: "Orchestration",
              },
              {
                name: "swarm-agent",
                description: "Distributed collaborative intelligence and multi-agent systems",
                stars: 2,
                category: "Agents",
              },
              {
                name: "shards-workflow-hub",
                description: "49 MCP connectors, 13 AI models, Stripe integration",
                stars: 2,
                category: "Applications",
              },
            ].map((project, idx) => (
              <a
                key={idx}
                href="https://github.com/shards-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated p-8 space-y-4 group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-bold group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-label">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all pt-2">
                  View Repository <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center pt-8">
            <a href="https://github.com/shards-foundation" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                View All 17 Repositories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-card/30">
        <div className="container space-y-16">
          <div className="max-w-2xl">
            <span className="text-label">Core Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Built from the ground up for production environments with sophisticated requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Kernel-Level Oversight",
                description: "Deterministic control planes with integrity verification and governance layers",
              },
              {
                icon: Network,
                title: "Multi-LLM Orchestration",
                description: "Intelligent routing across 12+ LLM families with weighted distribution and fallback",
              },
              {
                icon: Zap,
                title: "Autonomous Systems",
                description: "Distributed agents with collaborative intelligence and swarm coordination",
              },
              {
                icon: Code2,
                title: "MCP Integration",
                description: "49+ Model Context Protocol connectors for seamless third-party integration",
              },
              {
                icon: Layers,
                title: "Scalable Architecture",
                description: "Three-tier design separating kernel, orchestration, and application concerns",
              },
              {
                icon: Cpu,
                title: "Production Ready",
                description: "Enterprise standards for reliability, security, and performance monitoring",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Ready to Build with Shards?
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our repositories, documentation, and join the community of builders creating the next generation of AI infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/shards-foundation" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <Github className="mr-2 w-4 h-4" />
                Visit GitHub Organization
              </Button>
            </a>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="font-serif font-bold">Shards</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Enterprise AI foundation for distributed intelligence.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Examples</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/shards-foundation" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Discussions</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contributing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2026 Shards Foundation. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with precision for enterprise AI infrastructure.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
