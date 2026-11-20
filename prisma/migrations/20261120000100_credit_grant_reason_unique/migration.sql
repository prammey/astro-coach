-- One credit grant per reason. A purchase's reason is
-- "stripe-checkout:<session id>", so the database itself now guarantees a
-- checkout can never grant credits twice, even if two webhook deliveries
-- raced. Grants with no reason (NULL) are unaffected: Postgres allows any
-- number of NULLs in a unique index.
--
-- If this fails with "could not create unique index", a duplicate grant
-- already exists. Find it with:
--   SELECT reason, count(*) FROM "CreditGrant"
--   WHERE reason IS NOT NULL GROUP BY reason HAVING count(*) > 1;

-- CreateIndex
CREATE UNIQUE INDEX "CreditGrant_reason_key" ON "CreditGrant"("reason");
