export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  result?: string;
};

export function TestimonialGrid({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="px-4 py-14" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="testimonials-title" className="text-3xl font-bold text-slate-950">Prova social com contexto</h2>
        {/* Depoimentos com resultado e cargo são mais persuasivos que elogios genéricos. */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-lg border border-slate-200 bg-white p-5">
              {item.result ? <p className="mb-4 text-sm font-bold text-emerald-700">{item.result}</p> : null}
              <blockquote className="text-base leading-7 text-slate-700">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-950">{item.name}{item.role ? <span className="block font-normal text-slate-500">{item.role}</span> : null}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialGridExample() {
  return <TestimonialGrid testimonials={[{ quote: "A página ficou mais clara e os leads passaram a chegar com contexto.", name: "Marina Alves", role: "Head de Growth", result: "+22% em leads" }, { quote: "O checkout ficou mais simples de explicar para clientes mobile.", name: "João Lima", role: "E-commerce Manager" }, { quote: "Agora sabemos quais CTAs funcionam por canal.", name: "Renata Costa", role: "CMO" }]} />;
}
