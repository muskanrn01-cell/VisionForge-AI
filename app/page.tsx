export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">VisionForge AI</h1>
        <button className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-6xl font-bold mb-6">
          Build The Future With AI
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          VisionForge AI helps you generate content, images, ideas and
          productivity workflows using the power of Artificial Intelligence.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-blue-600">
            Start Free
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-600">
            Learn More
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-8 pb-20">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            AI Text Generator
          </h2>
          <p className="text-gray-400">
            Create blogs, captions, articles and content instantly.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            AI Image Creator
          </h2>
          <p className="text-gray-400">
            Generate unique images using powerful AI models.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">
            AI Assistant
          </h2>
          <p className="text-gray-400">
            Get smart answers and automate daily tasks.
          </p>
        </div>
      </section>
    </main>
  );
}