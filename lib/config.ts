export type Client = {
  slug: string
  name: string
  tag: string
  adAccountId: string
  payout: number
  state: string
  color: string
}

export const CLIENTS: Client[] = [
  {
    slug: "jorge",
    name: "Jorge",
    tag: "va leads - jorge",
    adAccountId: "1423143898800903",
    payout: 750,
    state: "Virginia",
    color: "#2563eb",
  },
  {
    slug: "fernando",
    name: "Fernando",
    tag: "md leads - fernando",
    adAccountId: "795631173072316",
    payout: 500,
    state: "Maryland",
    color: "#16a34a",
  },
  {
    slug: "danelly",
    name: "Danelly",
    tag: "nc leads - danelly",
    adAccountId: "1482791790226418",
    payout: 750,
    state: "North Carolina",
    color: "#9333ea",
  },
  {
    slug: "ay",
    name: "A&Y",
    tag: "sc leads - a&y",
    adAccountId: "751411627703795",
    payout: 750,
    state: "South Carolina",
    color: "#ea580c",
  },
]