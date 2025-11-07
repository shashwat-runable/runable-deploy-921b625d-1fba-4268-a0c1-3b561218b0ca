import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0D0F12" }}>
      <nav className="sticky top-0 z-50 border-b" style={{ 
        background: "#13161B", 
        borderColor: "#2A313A" 
      }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <span 
                className="text-xl font-bold tracking-tight"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#E6EAF0" 
                }}
              >
                Welcome
              </span>
            </div>
            <Button
              className="rounded-full px-6 h-11 font-medium"
              style={{
                background: "#2A2F36",
                color: "#FFFFFF",
                border: "1px solid #2A313A",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 
              className="mb-8 text-7xl font-extrabold leading-none tracking-tight sm:text-8xl lg:text-9xl"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: "linear-gradient(135deg, #FF5E9E 0%, #A78BFA 25%, #60A5FA 60%, #A7F3D0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "0.95",
                letterSpacing: "-0.02em"
              }}
            >
              Build Something Beautiful
            </h1>
            
            <p 
              className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#A1A8B3",
                lineHeight: "1.65"
              }}
            >
              A modern platform designed to help you create, innovate, and bring your ideas to life with powerful tools and seamless experiences.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative h-12 rounded-full px-8 text-base font-medium transition-all"
                style={{
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "2px solid #22C55E",
                  fontFamily: "'Inter', sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#22C55E";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div 
                className="group rounded-3xl p-8 transition-all duration-300"
                style={{
                  background: "#1A1F27",
                  border: "1px solid #2A313A"
                }}
              >
                <div 
                  className="mb-6 inline-flex rounded-2xl p-4"
                  style={{ background: "#22C55E" }}
                >
                  <Sparkles className="h-6 w-6" style={{ color: "#FFFFFF" }} />
                </div>
                <h3 
                  className="mb-3 text-xl font-bold"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#E6EAF0"
                  }}
                >
                  Powerful Features
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#A1A8B3",
                    lineHeight: "1.65"
                  }}
                >
                  Everything you need to build and launch your next big idea, with tools designed for modern development.
                </p>
              </div>

              <div 
                className="group rounded-3xl p-8 transition-all duration-300"
                style={{
                  background: "#1A1F27",
                  border: "1px solid #2A313A"
                }}
              >
                <div 
                  className="mb-6 inline-flex rounded-2xl p-4"
                  style={{ background: "#F59E0B" }}
                >
                  <Zap className="h-6 w-6" style={{ color: "#FFFFFF" }} />
                </div>
                <h3 
                  className="mb-3 text-xl font-bold"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#E6EAF0"
                  }}
                >
                  Lightning Fast
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#A1A8B3",
                    lineHeight: "1.65"
                  }}
                >
                  Built for speed and performance, ensuring your applications run smoothly and efficiently at scale.
                </p>
              </div>

              <div 
                className="group rounded-3xl p-8 transition-all duration-300 sm:col-span-2 lg:col-span-1"
                style={{
                  background: "#1A1F27",
                  border: "1px solid #2A313A"
                }}
              >
                <div 
                  className="mb-6 inline-flex rounded-2xl p-4"
                  style={{ background: "#22C55E" }}
                >
                  <Shield className="h-6 w-6" style={{ color: "#FFFFFF" }} />
                </div>
                <h3 
                  className="mb-3 text-xl font-bold"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#E6EAF0"
                  }}
                >
                  Secure & Reliable
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#A1A8B3",
                    lineHeight: "1.65"
                  }}
                >
                  Enterprise-grade security and reliability baked in, so you can focus on building great experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div 
            className="mx-auto max-w-4xl rounded-3xl p-12 text-center sm:p-16"
            style={{
              background: "#1A1F27",
              border: "1px solid #2A313A"
            }}
          >
            <h2 
              className="mb-4 text-4xl font-bold sm:text-5xl"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#E6EAF0",
                letterSpacing: "-0.015em"
              }}
            >
              Ready to Get Started?
            </h2>
            <p 
              className="mx-auto mb-8 max-w-2xl text-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#A1A8B3",
                lineHeight: "1.65"
              }}
            >
              Join thousands of creators building amazing products. Start your journey today and see what's possible.
            </p>
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-medium transition-all"
              style={{
                background: "transparent",
                color: "#FFFFFF",
                border: "2px solid #22C55E",
                fontFamily: "'Inter', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#22C55E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Start Building Now
            </Button>
          </div>
        </section>
      </main>

      <footer 
        className="border-t px-6 py-12 lg:px-8"
        style={{
          borderColor: "#2A313A"
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p 
            className="text-center text-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#7B8392"
            }}
          >
            © 2025 Welcome. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
