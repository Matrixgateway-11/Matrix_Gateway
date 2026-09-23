import {
  CreditCard, Link2, LayoutTemplate, ArrowRightLeft,
  Wallet, RefreshCw, GitBranch, FileText, Smartphone,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface ProductItem {
  label: string
  href: string
  description: string
  icon: LucideIcon
  category: string
}

export const productGroups = [
  {
    category: 'Payments',
    items: [
      { label: 'Payment Gateway', href: '/payment-gateway', description: 'Accept payments via cards, UPI, wallets & more', icon: CreditCard },
      { label: 'Payment Links', href: '/payment-links', description: 'Share payment links without a website', icon: Link2 },
      { label: 'Payment Pages', href: '/payment-pages', description: 'Custom-branded payment collection pages', icon: LayoutTemplate },
      { label: 'UPI', href: '/upi', description: 'Native UPI payment experiences', icon: Smartphone },
    ],
  },
  {
    category: 'Money Movement',
    items: [
      { label: 'Payouts', href: '/payouts', description: 'Send money to vendors, customers & partners', icon: ArrowRightLeft },
      { label: 'Wallets', href: '/wallets', description: 'Manage digital balances and payment flows', icon: Wallet },
      { label: 'Route', href: '/route', description: 'Intelligent payment routing & distribution', icon: GitBranch },
    ],
  },
  {
    category: 'Business Automation',
    items: [
      { label: 'Subscriptions', href: '/subscriptions', description: 'Automated recurring billing & plans', icon: RefreshCw },
      { label: 'Invoice', href: '/invoice', description: 'Digital invoicing & payment collection', icon: FileText },
    ],
  },
]

export const mainNavItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Partner', href: '/partner' },
  { label: 'Developers', href: '/developers' },
  { label: 'Contact', href: '/contact' },
]
