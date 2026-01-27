import { useParams } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <main className="container-custom py-10">
        <h1 className="text-2xl font-poppins font-semibold">Service Not Found</h1>
        <p className="mt-2 text-white/70">Please go back and choose a valid service.</p>
      </main>
    );
  }

  return (
    <main className="container-custom py-10">
      <h1 className="text-3xl font-poppins font-semibold">{service.title}</h1>
      <p className="mt-2 text-white/80">{service.desc}</p>

      {/* Process */}
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: "Discovery", desc: "Understand goals, scope, and constraints" },
          { title: "Build", desc: "Implement, iterate and test" },
          { title: "Launch", desc: "Deploy and handoff with docs" },
        ].map((step, i) => (
          <div key={i} className="card-glass p-6">
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-[#94A3B8] mt-1">{step.desc}</p>
          </div>
        ))}
      </section>

      {/* Deliverables & Tech */}
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="card-glass p-6">
          <h3 className="font-semibold">Deliverables</h3>
          <ul className="mt-2 text-white/80 list-disc list-inside">
            <li>Production-ready build</li>
            <li>Source code repository</li>
            <li>Setup & handoff docs</li>
          </ul>
        </div>
        <div className="card-glass p-6">
          <h3 className="font-semibold">Tech Stack</h3>
          <p className="mt-2 text-white/80">{service.tools?.join(", ")}</p>
        </div>
      </section>

      <div className="mt-10">
        <a href="/contact" className="btn-primary">Contact to Get Quote</a>
      </div>
    </main>
  );
}
