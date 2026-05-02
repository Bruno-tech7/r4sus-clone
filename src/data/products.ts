export interface Product {
  slug: string
  name: string
  price: string
  description: string
  tag: string
  details: string
}

export const products: Product[] = [
  {
    slug: 'bus-stop',
    name: 'Bus Stop',
    price: '3,500–10,000 €',
    description: 'Elegant upcycled blade shelters for public transport. Aerodynamic curves provide natural rain protection.',
    tag: 'B2G',
    details: 'Our bus stop shelters are crafted from decommissioned wind turbine blades, preserving their aerodynamic profile to create naturally rain-resistant structures. Each shelter is unique, shaped by the original blade geometry. Built to withstand decades of weather exposure without maintenance. Available in custom lengths from 3m to 12m.',
  },
  {
    slug: 'outdoor-park-bench',
    name: 'Outdoor Park Bench',
    price: '350–1,000 €',
    description: 'Durable seating made from blade cross-sections. Weather-resistant and maintenance-free for decades.',
    tag: 'B2G / B2C',
    details: "Each bench is cut from the cross-section of a turbine blade, retaining the composite material's incredible strength-to-weight ratio. UV-resistant, waterproof, and graffiti-resistant surface. No painting or sealing required — ever. Available in single-seat and multi-seat configurations.",
  },
  {
    slug: 'garden-shed-roof',
    name: 'Garden Shed Roof',
    price: 'Price TBD',
    description: "Lightweight, weather-resistant roofing panels. The blade's composite structure offers superior insulation.",
    tag: 'Coming soon',
    details: 'Roofing panels made from flattened blade sections offer exceptional insulation and weather resistance. The composite material provides superior thermal performance compared to traditional roofing. Lightweight yet incredibly strong — designed to last 50+ years.',
  },
  {
    slug: 'bookshelf',
    name: 'Bookshelf',
    price: 'Price TBD',
    description: 'Indoor furniture with unique curved blade aesthetic. Each piece is one-of-a-kind due to blade geometry.',
    tag: 'Coming soon',
    details: 'Transform your interior with a statement piece of sustainable design. Each bookshelf preserves the elegant curves of the original blade, creating a functional sculpture. The composite material is lightweight yet extremely rigid — perfect for heavy book collections.',
  },
  {
    slug: 'plant-pot',
    name: 'Plant Pot',
    price: 'Price TBD',
    description: 'Decorative planters cut from blade segments. UV-resistant composite lasts a lifetime outdoors.',
    tag: 'Coming soon',
    details: 'Decorative planters carved from blade segments bring industrial elegance to any garden or patio. The composite material is naturally resistant to UV, frost, and water damage. Each pot has a unique shape determined by its position on the original blade.',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
