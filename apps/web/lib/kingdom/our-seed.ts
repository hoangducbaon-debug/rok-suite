// Our private seed roster — the 8 kingdoms grouped together for KvK3 in our
// bracket. Used by the /kingdom/our-seed page (trend, combat composition)
// and by the Combat checker in Kingdom Stats to scope its calculations to
// just our seed instead of the full current pool.

export const OUR_SEED_KDS = [
 4061,
] as const;

export type OurSeedKd = (typeof OUR_SEED_KDS)[number];

export const OUR_SEED_SET: ReadonlySet<number> = new Set(OUR_SEED_KDS);

export function isInOurSeed(kingdomId: number): boolean {
  return OUR_SEED_SET.has(kingdomId);
}
