export default function Aspirations() {
  return (
    <div className="mx-auto max-w-3xl space-y-16">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Aspirations & Future Focus.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          While my day-to-day involves taming massive e-commerce databases, my
          long-term goal is to bridge the gap between commercial software
          architecture and bleeding-edge scientific exploration.
        </p>
      </header>

      <div className="prose prose-zinc mt-8 leading-relaxed text-zinc-700">
        <h3>The Quantum Leap</h3>
        <p>
          I believe we are on the precipice of a computational revolution. My
          goal is to transition my expertise in classical distributed systems
          into the realm of quantum computing, preparing software architectures
          for a post-classical hardware world.
        </p>

        <h3>Space and Sustainability</h3>
        <p>
          The challenges of off-world habitation and orbital data centers
          fascinate me. I am actively researching how the ultra-efficient
          thermal and power management systems required for space travel can be
          applied to build profoundly sustainable, zero-emission data centers
          here on Earth.
        </p>

        <h3>Ethical AI Governance</h3>
        <p>
          As we build systems capable of processing millions of data points a
          second, the ethical implications scale just as fast. I aspire to
          contribute to open-source frameworks that ensure AI and machine
          learning models are transparent, equitable, and safely governed.
        </p>
      </div>
    </div>
  );
}
