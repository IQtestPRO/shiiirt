import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const STORE = "Mundo das Importadas";
const ROOT = process.cwd();
const productsPath = path.join(ROOT, "data", "products.json");
const manifestPath = path.join(ROOT, "docs", "asset-rights", "asset-manifest.json");
const sourceLogPath = path.join(ROOT, "docs", "asset-rights", "source-log.csv");
const publicRoot = path.join(ROOT, "public", "assets", "products");

const assetMap = {
  "ct-001": {
    sourcePage:
      "https://www.territoriodascamisas.com.br/produtos/copa-do-mundo-camisa-brasil-ii-copa-do-mundo-2026-torcedor-masculina-azul-pronta-entrega/",
    status: "reference_public_page_noncommercial",
    images: [
      [
        "front",
        "https://acdn-us.mitiendanube.com/stores/006/483/329/products/1-3cb98540969290c6b417712661961091-1024-1024.webp"
      ],
      [
        "back",
        "https://acdn-us.mitiendanube.com/stores/006/483/329/products/2-d04f4821e2e72c268f17712661960849-1024-1024.webp"
      ],
      [
        "detail",
        "https://acdn-us.mitiendanube.com/stores/006/483/329/products/3-5c79b06fe0f7d95af417712661962833-1024-1024.webp"
      ]
    ]
  },
  "ct-002": {
    sourcePage: "https://www.netshoes.com.br/p/camisa-brasil-nike-i-202627-fa-masculina-SGL-052E-046",
    status: "alternate_public_page_noncommercial_official_retail_reference",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-brasil-nike-i-202627-fa-masculina/46/SGL-052E-046/SGL-052E-046_zoom1.jpg?ts=1776337483&ims=1088x"
      ],
      [
        "back",
        "https://static.netshoes.com.br/produtos/camisa-brasil-nike-i-202627-fa-masculina/46/SGL-052E-046/SGL-052E-046_zoom2.jpg?ts=1776337483&ims=1088x"
      ]
    ]
  },
  "ct-003": {
    sourcePage:
      "https://www.territoriodascamisas.com.br/produtos/camisa-flamengo-i-25-26-torcedor-adidas-masculina-pronta-entrega/",
    status: "reference_public_page_noncommercial",
    images: [
      [
        "front",
        "https://acdn-us.mitiendanube.com/stores/006/483/329/products/flamengo-camisa-pronta-entrega-7-05ebcb9654dd4ea73417610241789852-1024-1024.webp"
      ]
    ]
  },
  "ct-004": {
    sourcePage: "https://www.netshoes.com.br/p/camisa-flamengo-ii-2526-sn-torcedor-adidas-feminina-FBA-3567-014",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-flamengo-ii-2526-sn-torcedor-adidas-feminina/14/FBA-3567-014/FBA-3567-014_zoom1.jpg?ts=1778038257&ims=1088x"
      ],
      [
        "back",
        "https://static.netshoes.com.br/produtos/camisa-flamengo-ii-2526-sn-torcedor-adidas-feminina/14/FBA-3567-014/FBA-3567-014_zoom2.jpg?ts=1778038257"
      ]
    ]
  },
  "ct-005": {
    sourcePage:
      "https://www.territoriodascamisas.com.br/produtos/camisa-sao-paulo-iii-25-26-torcedor-new-balance-masculina-preta-comemorativa-pronta-entrega/",
    status: "reference_public_page_noncommercial",
    images: [
      [
        "front",
        "https://acdn-us.mitiendanube.com/stores/006/483/329/products/camisa-sao-paulo-preta-nova-comemorativa-2025-1-208fe81703b6a635e617610228393197-1024-1024.webp"
      ]
    ]
  },
  "ct-006": {
    sourcePage: "https://www.netshoes.com.br/p/camisa-sao-paulo-i-2526-torcedor-new-balance-feminina-39V-1637-024",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-sao-paulo-i-2526-torcedor-new-balance-feminina/24/39V-1637-024/39V-1637-024_zoom1.jpg?ts=1777628349&ims=1088x"
      ],
      [
        "back",
        "https://static.netshoes.com.br/produtos/camisa-sao-paulo-i-2526-torcedor-new-balance-feminina/24/39V-1637-024/39V-1637-024_zoom2.jpg?ts=1777628349"
      ]
    ]
  },
  "ct-007": {
    sourcePage: "https://www.netshoes.com.br/p/camisa-palmeiras-i-2526-sn-torcedor-puma-feminina-PI3-5671-060",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-palmeiras-i-2526-sn-torcedor-puma-feminina/60/PI3-5671-060/PI3-5671-060_zoom1.jpg?ts=1776743341&ims=1088x"
      ],
      [
        "back",
        "https://static.netshoes.com.br/produtos/camisa-palmeiras-i-2526-sn-torcedor-puma-feminina/60/PI3-5671-060/PI3-5671-060_zoom2.jpg?ts=1776743341"
      ]
    ]
  },
  "ct-008": {
    sourcePage:
      "https://www.netshoes.com.br/p/camisa-nike-corinthians-i-202526-torcedora-pro-feminina-SGL-0181-028",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-i-202526-torcedora-pro-feminina/28/SGL-0181-028/SGL-0181-028_zoom1.jpg?ts=1773313237&ims=1088x"
      ],
      [
        "back",
        "https://static.netshoes.com.br/produtos/camisa-nike-corinthians-i-202526-torcedora-pro-feminina/28/SGL-0181-028/SGL-0181-028_zoom2.jpg?ts=1773313237"
      ]
    ]
  },
  "ct-009": {
    sourcePage: "https://www.netshoes.com.br/p/camisa-fluminense-i-2526-torcedor-umbro-feminina-2IB-1495-789",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-fluminense-i-2526-torcedor-umbro-feminina/89/2IB-1495-789/2IB-1495-789_zoom1.jpg?ts=1773286885&ims=1088x"
      ],
      [
        "back",
        "https://static.netshoes.com.br/produtos/camisa-fluminense-i-2526-torcedor-umbro-feminina/89/2IB-1495-789/2IB-1495-789_zoom2.jpg?ts=1773286885"
      ]
    ]
  },
  "ct-010": {
    sourcePage:
      "https://www.territoriodascamisas.com.br/produtos/camisa-gremio-i-tricolor-25-26-sem-patrocinio-torcedor-masculino-pronta-entrega/",
    status: "reference_public_page_noncommercial",
    images: [
      [
        "front",
        "https://acdn-us.mitiendanube.com/stores/006/483/329/products/camisa-gremio-tricolor-2025-2-2c7df6ae960eec3d8517606763561062-1024-1024.webp"
      ]
    ]
  },
  "ct-011": {
    sourcePage: "https://www.netshoes.com.br/p/kit-infantil-internacional-2627-sn-torcedor-adidas-FBA-83IE-016",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/kit-infantil-internacional-2627-sn-torcedor-adidas/16/FBA-83IE-016/FBA-83IE-016_zoom1.jpg?ts=1777530128&ims=1088x"
      ]
    ]
  },
  "ct-012": {
    sourcePage:
      "https://www.territoriodascamisas.com.br/produtos/camisa-napoli-i-24-25-torcedor-ea7-masculina-azul-com-detalhes-em-branco-pronta-entrega/",
    status: "reference_public_page_noncommercial",
    images: [
      [
        "front",
        "https://acdn-us.mitiendanube.com/stores/006/483/329/products/photoroom_000_20240720_022358-a9b54644369d0477dd17214531245402-1024-1024-41f6615c9872acdf8a17690565202794-1024-1024.jpeg"
      ]
    ]
  },
  "ct-013": {
    sourcePage:
      "https://www.territoriodascamisas.com.br/produtos/camisa-real-madrid-iii-25-26-torcedor-adidas-masculina-azul-pronta-entrega-9wpeh/",
    status: "reference_public_page_noncommercial",
    images: [
      [
        "front",
        "https://acdn-us.mitiendanube.com/stores/006/483/329/products/real-1-5364e08f79c1b959a217630899167399-1024-1024.webp"
      ]
    ]
  },
  "ct-014": {
    sourcePage: "https://www.netshoes.com.br/p/camisa-barcelona-nike-i-202526-torcedor-pro-masculina-SGL-03M3-066",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-barcelona-nike-i-202526-torcedor-pro-masculina/66/SGL-03M3-066/SGL-03M3-066_zoom1.jpg?ts=1777471381&ims=1088x"
      ]
    ]
  },
  "ct-015": {
    sourcePage:
      "https://www.netshoes.com.br/p/camisa-manchester-city-home-2526-sn-torcedor-puma-masculina-PI3-73PQ-008",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-manchester-city-home-2526-sn-torcedor-puma-masculina/08/PI3-73PQ-008/PI3-73PQ-008_zoom1.jpg?ts=1778037084&ims=1088x"
      ]
    ]
  },
  "ct-017": {
    sourcePage:
      "https://www.netshoes.com.br/p/camisa-nike-paris-saintgermain-i-202526-torcedor-pro-masculina-SGL-03AR-008",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-nike-paris-saint-germain-i-202526-torcedor-pro-masculina/08/SGL-03AR-008/SGL-03AR-008_zoom1.jpg?ts=1773028794&ims=1088x"
      ],
      [
        "back",
        "https://static.netshoes.com.br/produtos/camisa-nike-paris-saint-germain-i-202526-torcedor-pro-masculina/08/SGL-03AR-008/SGL-03AR-008_zoom2.jpg?ts=1773028794"
      ]
    ]
  },
  "ct-018": {
    sourcePage:
      "https://www.netshoes.com.br/p/camisa-selecao-argentina-home-torcedor-2026-sn-adidas-masculina-FBA-825C-014",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-selecao-argentina-home-torcedor-2026-sn-adidas-masculina/14/FBA-825C-014/FBA-825C-014_zoom1.jpg?ts=1778038606&ims=1088x"
      ]
    ]
  },
  "ct-019": {
    sourcePage: "https://www.centauro.com.br/camisa-selecao-do-japao-i-25-26-torcedor-adidas-masculina-9972OT.html",
    status: "alternate_public_page_noncommercial",
    images: [["front", "https://imgcentauro-a.akamaihd.net/1024x1024/9972OT05A13.jpg"]]
  },
  "ct-020": {
    sourcePage:
      "https://www.netshoes.com.br/p/camisa-alhilal-saudi-kidsuper-2526-jogador-puma-masculina-PI3-73QQ-008",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-al-hilal-saudi-kidsuper-2526-jogador-puma-masculina/08/PI3-73QQ-008/PI3-73QQ-008_zoom1.jpg?ts=1777173793&ims=1088x"
      ]
    ]
  },
  "ct-021": {
    sourcePage:
      "https://www.netshoes.com.br/p/camisa-alnassr-home-2526-n-7-cristiano-ronaldo-torcedor-adidas-masculina-FBA-7822-030",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-al-nassr-home-2526-n-7-cristiano-ronaldo-torcedor-adidas-masculina/30/FBA-7822-030/FBA-7822-030_zoom1.jpg?ts=1776399738&ims=1088x"
      ]
    ]
  },
  "ct-022": {
    sourcePage:
      "https://www.netshoes.com.br/p/camisa-inter-miami-infantil-home-2526-sn-torcedor-adidas-FBA-3617-018",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-inter-miami-infantil-home-2526-sn-torcedor-adidas/18/FBA-3617-018/FBA-3617-018_zoom1.jpg?ts=1777355798&ims=1088x"
      ]
    ]
  },
  "ct-023": {
    sourcePage:
      "https://www.netshoes.com.br/p/camisa-selecao-portugal-home-2526-sn-torcedor-puma-masculina-PI3-5546-016",
    status: "alternate_public_page_noncommercial",
    images: [
      [
        "front",
        "https://static.netshoes.com.br/produtos/camisa-selecao-portugal-home-2526-sn-torcedor-puma-masculina/16/PI3-5546-016/PI3-5546-016_zoom1.jpg?ts=1776400765&ims=1088x"
      ],
      [
        "back",
        "https://static.netshoes.com.br/produtos/camisa-selecao-portugal-home-2526-sn-torcedor-puma-masculina/16/PI3-5546-016/PI3-5546-016_zoom2.jpg?ts=1776400765"
      ]
    ]
  }
};

function extensionFromUrl(url) {
  const clean = new URL(url).pathname.toLowerCase();
  const ext = path.extname(clean).replace(".", "");
  return ext || "jpg";
}

function makeFileName(product, view, ext) {
  return `${product.id}__${product.slug}__${view}__public-reference__v1.${ext}`;
}

async function download(url, filePath, sourcePage) {
  const response = await fetch(url, {
    headers: {
      accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      referer: sourcePage,
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(filePath, buffer);
  return {
    bytes: buffer.length,
    sha256: createHash("sha256").update(buffer).digest("hex")
  };
}

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

const products = JSON.parse(await readFile(productsPath, "utf8"));
const priorManifest = JSON.parse(await readFile(manifestPath, "utf8"));
const preservedManifest = priorManifest.filter((entry) => !assetMap[entry.productId]);
const manifest = [...preservedManifest];
const sourceRows = [
  "productId,slug,assetPath,sourceUrl,sourcePage,licenseStatus,notes"
];

const updated = [];
const failed = [];

for (const product of products) {
  const entry = assetMap[product.id];
  if (!entry) {
    continue;
  }

  const productDir = path.join(publicRoot, product.id);
  await mkdir(productDir, { recursive: true });
  const localImages = [];

  for (const [view, url] of entry.images) {
    const ext = extensionFromUrl(url);
    const fileName = makeFileName(product, view, ext);
    const filePath = path.join(productDir, fileName);
    const publicPath = `/assets/products/${product.id}/${fileName}`;

    try {
      const { bytes, sha256 } = await download(url, filePath, entry.sourcePage);
      localImages.push(publicPath);
      manifest.push({
        productId: product.id,
        slug: product.slug,
        storeName: STORE,
        view,
        assetPath: publicPath,
        originalSourceUrl: url,
        sourcePage: entry.sourcePage,
        sourceType: entry.status.startsWith("reference") ? "reference_store_public_product_page" : "alternate_public_product_page",
        licenseStatus: entry.status,
        allowedUse: "local_noncommercial_prototype_only_user_assumed_risk",
        containsLogos: true,
        altText: `${product.name} - imagem ${view}`,
        bytes,
        sha256,
        importedAt: new Date().toISOString()
      });
      sourceRows.push(
        [
          product.id,
          product.slug,
          publicPath,
          url,
          entry.sourcePage,
          entry.status,
          "Asset publico baixado para prototipo local sem fins comerciais; revisar licenca antes de uso comercial."
        ]
          .map(csvEscape)
          .join(",")
      );
    } catch (error) {
      failed.push({ productId: product.id, view, url, error: error.message });
    }
  }

  if (localImages.length > 0) {
    product.images = localImages;
    updated.push(product.id);
  }
}

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
await writeFile(sourceLogPath, `${sourceRows.join("\n")}\n`);

console.log(`Updated products: ${updated.length}`);
console.log(updated.join(", "));
if (failed.length > 0) {
  console.log("Failed downloads:");
  for (const item of failed) {
    console.log(`${item.productId} ${item.view}: ${item.error} (${item.url})`);
  }
  process.exitCode = 1;
}
