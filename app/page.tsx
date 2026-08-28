export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">VisionForge AI</h1>

        <div className="flex gap-6">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-32 px-6">
        <h1 className="text-6xl font-bold mb-6">
          Build Smarter With AI
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Generate content, images, ideas and productivity workflows
          using the power of Artificial Intelligence.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#pricing"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Start Free
          </a>

          <a
            href="#features"
            className="px-6 py-3 rounded-xl border border-gray-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="grid md:grid-cols-3 gap-6 px-8 py-20"
      >
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            AI Text Generator
          </h2>
          <p className="text-gray-400">
            Create blogs, captions and articles instantly.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            AI Image Creator
          </h2>
          <p className="text-gray-400">
            Generate stunning AI images in seconds.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            AI Assistant
          </h2>
          <p className="text-gray-400">
            Automate tasks and get instant answers.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-24 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-12">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="text-4xl mt-4">₹0</p>
            <p className="text-gray-400 mt-2">
              Basic AI access
            </p>
          </div>

          <div className="bg-blue-600 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-4xl mt-4">₹499</p>
            <p className="mt-2">
              Advanced AI features
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-4xl mt-4">Custom</p>
            <p className="text-gray-400 mt-2">
              For businesses
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-8">
          Ready to build with AI? Get in touch.
        </p>

        <a
          href="mailto:muskanrn01@gmail.com"
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          Send Email
        </a>
      </section>
    </main>
  );
}