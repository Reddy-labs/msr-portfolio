import Link from 'next/link';

export default function Experience() {
  const workExperience = [
    {
      id: 1,
      role: 'Software Development Engineer II',
      company: 'Optmyzr',
      date: '09/2023 — Present',
      description:
        'Designed and implemented scalable microservices architecture, reducing system downtime by 30%. Developed an AI-driven recommendation engine using Generative AI & statistical modeling to optimize product group structures for shopping ads. Led system refactoring using Hexagonal Architecture and optimized APIs to cut response times by 50%.',
    },
    {
      id: 2,
      role: 'Software Development Engineer I',
      company: 'Optmyzr',
      date: '07/2021 — 09/2023',
      description:
        'Developed and deployed new features to enhance client usability and efficiency. Engineered a custom System Notifier to track automation issues and provide suggested fixes, which successfully reduced manual debugging time by 40%. Led critical software maintenance efforts across internal systems.',
    },
    {
      id: 3,
      role: 'Software Development Engineer Intern',
      company: 'Optmyzr',
      date: '05/2020 — 07/2021',
      description:
        'Implemented a dynamic scaling system to ensure efficient resource allocation under high traffic conditions. Developed an automated testing framework that increased code coverage and system stability, while assisting in the creation of internal monitoring tools.',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Auto-Scaling Process Handler',
      tech: 'C# • Redis',
      description:
        'Developed an auto-scaling system improving server performance during high-traffic loads. Ensured 99.9% uptime, preventing outages and optimizing resource utilization.',
    },
    {
      id: 2,
      title: 'System Notifier for Automated Issue Detection',
      tech: 'System Architecture',
      description:
        'Designed and developed a real-time notifier to detect application issues and provide suggested fixes. Reduced manual debugging time by 50% and improved system reliability.',
    },
    {
      id: 3,
      title: 'Plant Disease Detector',
      tech: 'Python • Flask • Machine Learning (SVM)',
      description:
        'Built a machine learning model to detect plant diseases via image recognition. Used Flask & Python to create a seamless API for data processing.',
    },
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-16">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Experience & Architecture.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          I build high-throughput, highly scalable systems. Currently, I'm
          focused on solving complex data management challenges in the
          e-commerce space using microservices, event-driven architectures, and
          AI.
        </p>
      </header>

      {/* CAREER TIMELINE */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Career Timeline
        </h2>

        <div className="space-y-10">
          {workExperience.map((job) => (
            <div
              key={job.id}
              className="relative border-l border-zinc-200 pl-6 transition-all hover:border-zinc-400"
            >
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-zinc-200 border-2 border-white"></div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {job.role}
                  </h3>
                  <time className="text-sm font-medium text-zinc-500 mt-1 sm:mt-0">
                    {job.date}
                  </time>
                </div>
                <p className="font-medium text-blue-600">{job.company}</p>
                <p className="text-sm leading-relaxed text-zinc-600 mt-4">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="space-y-8 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 p-6 bg-white transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <h3 className="font-semibold text-zinc-900">{project.title}</h3>
                <p className="text-xs font-medium text-blue-600 mt-1">
                  {project.tech}
                </p>
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="space-y-8 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Core Competencies & Explorations
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6 bg-white transition-shadow hover:shadow-md">
            <h3 className="font-semibold text-zinc-900">
              System Design & Architecture
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Passionate about designing resilient, distributed systems that can
              handle extreme scale without compromising on latency or developer
              experience.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6 bg-white transition-shadow hover:shadow-md">
            <h3 className="font-semibold text-zinc-900">
              Quantum Computing & Space Tech
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              Actively exploring the intersection of quantum algorithms and
              orbital technologies. I study how next-generation computing will
              solve current physical constraints.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
