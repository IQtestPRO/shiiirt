import { expect, test } from "@playwright/test";

test("core storefront flow sends cart to WhatsApp", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Brasil 2026: a principal chegou" })).toBeVisible();
  const cookieButton = page.getByRole("button", { name: "Entendi" });
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }

  const menuButton = page.getByRole("button", { name: /abrir menu/i });
  if (await menuButton.isVisible()) {
    await menuButton.click();
    await expect(page.getByRole("link", { name: "Brasileirão" }).first()).toBeVisible();
    await page.locator("aside").getByRole("button", { name: "Fechar menu" }).click();
  } else {
    await expect(page.getByRole("navigation", { name: "Menu principal" }).getByRole("link", { name: "Brasileirão" })).toBeVisible();
  }

  await page.locator('input[placeholder="Buscar camisas, clubes, seleções..."]:visible').first().fill("Brasil II");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/busca\?q=Brasil%20II/);

  await page.getByRole("button", { name: /espiar/i }).first().click();
  const dialog = page.getByRole("dialog").first();
  await expect(dialog).toBeVisible();
  await dialog.getByRole("button", { name: "M", exact: true }).click();
  await dialog.getByRole("button", { name: "Com personalização" }).click();
  await dialog.getByPlaceholder("Ex.: GABRIEL").fill("ARTHUR");
  await dialog.getByPlaceholder("10").fill("10");
  await dialog.getByRole("button", { name: /adicionar ao carrinho/i }).click();

  await expect(page.getByRole("heading", { name: "Meu carrinho" })).toBeVisible();
  const checkout = page.getByRole("link", { name: /finalizar pelo whatsapp/i });
  await expect(checkout).toHaveAttribute("href", /wa\.me\/5500000000000\?text=/);
  await expect(checkout).toHaveAttribute("href", /ARTHUR/);
});
