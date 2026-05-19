const rows = [
  { label: "S = P", comprimento: "69 – 71", largura: "53 – 55", altura: "162 – 170", peso: "50 – 62" },
  { label: "M = M", comprimento: "71 – 73", largura: "55 – 57", altura: "170 – 176", peso: "62 – 78" },
  { label: "L = G", comprimento: "73 – 75", largura: "57 – 58", altura: "176 – 182", peso: "78 – 83" },
  { label: "XL = GG", comprimento: "75 – 78", largura: "58 – 60", altura: "182 – 190", peso: "83 – 90" },
  { label: "XXL = XG", comprimento: "78 – 81", largura: "60 – 62", altura: "190 – 195", peso: "90 – 97" },
  { label: "XXL = 2XG", comprimento: "81 – 83", largura: "62 – 64", altura: "192 – 197", peso: "97 – 104" }
];

export function SizeChartTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-separate border-spacing-0 overflow-hidden rounded-xl ring-1 ring-neutral-200">
        <thead>
          <tr className="bg-brand-ink text-brand-paper">
            <th className="font-poppins px-3 py-3 text-left text-[10.5px] font-bold uppercase tracking-[0.16em]">
              Tamanho
            </th>
            <th className="font-poppins px-3 py-3 text-center text-[10.5px] font-bold uppercase tracking-[0.16em]">
              Comprimento
            </th>
            <th className="font-poppins px-3 py-3 text-center text-[10.5px] font-bold uppercase tracking-[0.16em]">
              Largura
            </th>
            <th className="font-poppins px-3 py-3 text-center text-[10.5px] font-bold uppercase tracking-[0.16em]">
              Altura (cm)
            </th>
            <th className="font-poppins px-3 py-3 text-center text-[10.5px] font-bold uppercase tracking-[0.16em]">
              Peso (kg)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.label} className={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
              <td className="font-poppins border-t border-neutral-100 px-3 py-3 text-left text-[12.5px] font-bold text-brand-ink">
                {row.label}
              </td>
              <td className="font-poppins tabular border-t border-neutral-100 px-3 py-3 text-center text-[12.5px] text-neutral-700">
                {row.comprimento}
              </td>
              <td className="font-poppins tabular border-t border-neutral-100 px-3 py-3 text-center text-[12.5px] text-neutral-700">
                {row.largura}
              </td>
              <td className="font-poppins tabular border-t border-neutral-100 px-3 py-3 text-center text-[12.5px] text-neutral-700">
                {row.altura}
              </td>
              <td className="font-poppins tabular border-t border-neutral-100 px-3 py-3 text-center text-[12.5px] text-neutral-700">
                {row.peso}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
