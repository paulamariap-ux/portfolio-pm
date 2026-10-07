"use client"

import { useState } from "react"
import {
  Home,
  ClipboardList,
  Target,
  ShoppingBasket,
  Search,
  Plus,
  Star,
  ChevronDown,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const sidebarItems = [
  { icon: Home, label: "Home", active: false, href: "/" },
  { icon: ClipboardList, label: "Orders", active: false, href: "/" },
  { icon: Target, label: "Nutrition", active: false, href: "/" },
  { icon: ShoppingBasket, label: "Groceries", active: true, href: "/groceries", isNew: true },
]

const filterTabs = [
  { name: "Produce", hasDropdown: false },
  { name: "Dairy & Eggs", hasDropdown: false },
  { name: "Meat & Seafood", hasDropdown: false },
  { name: "Bakery", hasDropdown: false },
  { name: "Pantry", hasDropdown: false },
  { name: "Frozen", hasDropdown: false },
  { name: "Beverages", hasDropdown: false },
  { name: "Snacks", hasDropdown: false },
  { name: "Household", hasDropdown: false },
  { name: "Personal Care", hasDropdown: false },
]

const groceryProducts = [
  {
    name: "Organic Chipotle Salsa",
    description: "with Roasted Tomatoes & Jalapeños",
    brand: "Casa Verde",
    brandAvatar: "CV",
    rating: 4.62,
    calories: "45 cal/serving",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
  },
  {
    name: "Cold-Pressed Orange Juice",
    description: "100% Fresh Squeezed",
    brand: "Sunrise Organics",
    brandAvatar: "SO",
    rating: 4.66,
    calories: "110 cal",
    price: "$5.49",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
  },
  {
    name: "Organic Mixed Berries",
    description: "Strawberries, Blueberries & Raspberries",
    brand: "Farm Fresh",
    brandAvatar: "FF",
    rating: 4.70,
    calories: "85 cal",
    tag: "organic",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
  },
  {
    name: "Honey-Dijon Vinaigrette",
    description: "with Extra Virgin Olive Oil",
    brand: "Artisan Kitchen",
    brandAvatar: "AK",
    rating: 4.62,
    calories: "120 cal/serving",
    price: "$7.49",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=400&fit=crop",
  },
  {
    name: "Organic Avocado Oil",
    description: "Cold-Pressed & Unrefined",
    brand: "Green Gold",
    brandAvatar: "GG",
    rating: 4.85,
    calories: "124 cal/tbsp",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
  },
  {
    name: "Sparkling Lemon Water",
    description: "with Natural Minerals",
    brand: "Pure Springs",
    brandAvatar: "PS",
    rating: 4.45,
    calories: "0 cal",
    price: "$3.99",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=400&fit=crop",
  },
  {
    name: "Sriracha Hot Sauce",
    description: "Authentic Thai Recipe",
    brand: "Bangkok Fire",
    brandAvatar: "BF",
    rating: 4.72,
    calories: "5 cal/tsp",
    tag: "spicy",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=400&h=400&fit=crop",
  },
  {
    name: "Fresh Organic Bananas",
    description: "Perfectly Ripe & Sweet",
    brand: "Tropical Farms",
    brandAvatar: "TF",
    rating: 4.55,
    calories: "105 cal/banana",
    price: "$2.99/lb",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
  },
]

export default function GroceriesPage() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-50 flex h-full w-[72px] flex-col items-center bg-[#1a1a1a] py-4">
        {/* Logo */}
        <Link href="/" className="mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2L2 16L16 30L30 16L16 2Z"
              fill="#D4A853"
              stroke="#D4A853"
              strokeWidth="2"
            />
            <path
              d="M10 16L16 10L22 16L16 22L10 16Z"
              fill="#1a1a1a"
            />
          </svg>
        </Link>

        {/* Navigation Items */}
        <nav className="flex flex-1 flex-col items-center gap-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex flex-col items-center gap-1 rounded-lg p-2 transition-colors ${
                item.active
                  ? "bg-[#2a2a2a] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="relative">
                <item.icon className="h-5 w-5" />
                {item.isNew && (
                  <span className="absolute -right-1 -top-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                )}
              </div>
              <span className="text-[10px]">{item.label}</span>
            </Link>
          ))}

          {/* UnityPass */}
          <Link href="/" className="flex flex-col items-center gap-1 rounded-lg p-2 text-gray-400 hover:text-white">
            <span className="text-sm font-bold">up</span>
            <span className="text-[10px]">unitypass</span>
          </Link>
        </nav>

        {/* Account */}
        <div className="mt-auto">
          <button className="flex flex-col items-center gap-1 rounded-lg p-2 text-gray-400 hover:text-white">
            <Avatar className="h-8 w-8 border-2 border-teal-500">
              <AvatarFallback className="bg-teal-600 text-xs text-white">
                MS
              </AvatarFallback>
            </Avatar>
            <span className="text-[10px]">Account</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[72px] flex-1 pb-20">
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between bg-[#1a1a1a] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-wider text-white">COOK</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2L2 16L16 30L30 16L16 2Z"
                fill="#D4A853"
                stroke="#D4A853"
                strokeWidth="2"
              />
              <path
                d="M10 16L16 10L22 16L16 22L10 16Z"
                fill="#1a1a1a"
              />
            </svg>
            <span className="text-lg font-bold tracking-wider text-white">UNITY</span>
            <span className="ml-2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-medium text-white">
              Groceries
            </span>
          </div>

          <button className="flex items-center gap-2 text-white hover:text-gray-300">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm">Need help?</span>
          </button>
        </header>

        {/* Delivery Info */}
        <div className="flex items-center justify-center gap-4 bg-[#1a1a1a] px-6 py-4">
          <div className="flex items-center gap-3 rounded-full bg-[#2a2a2a] px-4 py-2">
            <div>
              <p className="text-sm font-medium text-white">Delivery on Tuesday, Mar 24</p>
              <p className="text-xs text-gray-400">ZIP code 10510</p>
            </div>
            <Button variant="secondary" size="sm" className="rounded-full bg-white text-black hover:bg-gray-100">
              Change
            </Button>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-[#2a2a2a] px-4 py-2">
            <div>
              <p className="text-sm font-medium text-white">Add to your meal delivery</p>
              <p className="text-xs text-gray-400">Free shipping with meals</p>
            </div>
            <Button variant="secondary" size="sm" className="rounded-full bg-white text-black hover:bg-gray-100">
              Change
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4 border-b border-gray-200 px-6 py-4">
          {filterTabs.map((tab, index) => (
            <button
              key={tab.name}
              className={`flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                index === 0
                  ? "bg-[#1a1a1a] text-white"
                  : "border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {tab.name}
              {tab.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-2">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search groceries, brands and more..."
              className="w-64 border-none bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-6 p-6">
          {groceryProducts.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square bg-gray-50 p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>

                <div className="mt-3 flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-amber-100 text-[10px] text-amber-700">
                      {product.brandAvatar}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600">by {product.brand}</span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <Star className="h-4 w-4 fill-current text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">·</span>
                  <span>{product.calories}</span>
                  {product.tag && (
                    <>
                      <span className="text-gray-400">·</span>
                      <span className="text-orange-500">{product.tag}</span>
                    </>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <button
                    onClick={addToCart}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 transition-colors hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-[72px] right-0 z-50 flex items-center justify-end gap-4 border-t border-gray-200 bg-white px-6 py-4">
        <span className="text-sm text-gray-600">{cartCount} Items</span>
        <button className="text-sm font-medium text-gray-900 underline hover:text-gray-700">
          View cart
        </button>
        <Button className="rounded-full bg-gray-300 px-8 py-2 text-gray-500" disabled={cartCount === 0}>
          Continue
        </Button>
      </div>
    </div>
  )
}
