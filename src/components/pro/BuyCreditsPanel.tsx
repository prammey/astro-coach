"use client";

// Lets a Pro student who has used every AI grade buy more: type how many
// (5 to 50), see the price update, and pay on Stripe's checkout page.
//
// The price and limits shown here come from the public config, but the
// server re-checks everything. Credits are added only once Stripe confirms
// the payment — the dashboard shows them a moment after returning here.

import { useState } from "react";
import { ApiError, startCreditCheckout } from "@/lib/pro/client";
import { PUBLIC_PRO_CONFIG } from "@/lib/pro/public-config";

const { creditPriceCents, minCreditPurchase, maxCreditPurchase } = PUBLIC_PRO_CONFIG;

/// "$3.00" for 300 cents.
function formatUsd(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function BuyCreditsPanel() {
  const [quantityText, setQuantityText] = useState("20");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const quantity = Number(quantityText);
  const valid = Number.isInteger(quantity) && quantity >= minCreditPurchase && quantity <= maxCreditPurchase;

  async function buy() {
    if (!valid) return;
    setBusy(true);
    setError(null);
    try {
      await startCreditCheckout(quantity);
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.message : "Could not open checkout. Please try again.");
      setBusy(false);
    }
  }

  return (
    <section id="buy-credits" className="scroll-mt-24 rounded-xl border-[3px] border-ink bg-white p-5 text-navy shadow-brutal">
      <h2 className="text-xl font-extrabold">Buy extra AI grades</h2>
      <p className="mt-1 text-sm text-navy/70">
        {formatUsd(creditPriceCents)} per credit, {minCreditPurchase}–{maxCreditPurchase} at a time. Extra credits
        never expire and are used after your monthly ones.
      </p>

      <div className="mt-4 flex flex-wrap items-end gap-3">
        <label className="text-sm font-bold">
          Credits
          <input
            type="number"
            inputMode="numeric"
            min={minCreditPurchase}
            max={maxCreditPurchase}
            step={1}
            value={quantityText}
            onChange={(event) => setQuantityText(event.target.value)}
            className="mt-1 block w-28 rounded-lg border-[3px] border-ink px-3 py-2 text-lg font-extrabold focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
          />
        </label>
        <button
          type="button"
          onClick={buy}
          disabled={!valid || busy}
          className="rounded-lg border-[3px] border-ink bg-yellow px-5 py-2.5 font-extrabold shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? "Opening checkout…" : valid ? `Buy ${quantity} for ${formatUsd(quantity * creditPriceCents)}` : "Buy credits"}
        </button>
      </div>

      {!valid && quantityText !== "" && (
        <p className="mt-2 text-sm font-semibold text-danger">
          Choose a whole number from {minCreditPurchase} to {maxCreditPurchase}.
        </p>
      )}
      {error && (
        <p role="alert" className="mt-2 text-sm font-semibold text-danger">
          {error}
        </p>
      )}
    </section>
  );
}
