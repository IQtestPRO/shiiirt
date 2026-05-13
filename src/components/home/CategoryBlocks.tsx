import Link from "next/link";

const blocks = [
  {
    href: "/categoria/brasileirao",
    label: "Nacionais",
    image: "/assets/nacional2.png"
  },
  {
    href: "/categoria/europa",
    label: "Europeus",
    image: "/assets/jerse.png"
  },
  {
    href: "/categoria/femininas",
    label: "Femininas",
    image: "/assets/fem.png"
  }
];

export function CategoryBlocks() {
  return (
    <section className="bg-brand-paper">
      <div className="container-wide py-14 md:py-20">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {blocks.map((block) => (
            <Link
              key={block.href}
              href={block.href}
              className="group relative block overflow-hidden rounded-2xl bg-brand-ink"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={block.image}
                  alt={`Categoria ${block.label}`}
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
