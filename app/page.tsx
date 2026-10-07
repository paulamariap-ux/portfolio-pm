"use client"

import { useState } from "react"
import {
  Home,
  ClipboardList,
  Target,
  ShoppingCart,
  Search,
  Heart,
  Plus,
  Star,
  ChevronRight,
  Globe,
  Minus,
  ShoppingBasket,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const sidebarItems = [
  { icon: Home, label: "Home", active: true, href: "/" },
  { icon: ClipboardList, label: "Orders", active: false, href: "/" },
  { icon: Target, label: "Nutrition", active: false, href: "/" },
  { icon: ShoppingBasket, label: "Groceries", active: false, isNew: true, href: "/groceries" },
]

const categories = [
  { name: "Meals", icon: "🍽️" },
  { name: "Breakfast", icon: "🍳" },
  { name: "Sides", icon: "🥗" },
  { name: "Proteins only", icon: "🥩" },
  { name: "Treats", icon: "🍰" },
  { name: "Snacks", icon: "🍿" },
]

const cuisines = [
  { name: "Full Menu", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Add & Save", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Latin American", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Mix & Match", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Fine Dining", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Italian", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Kids & Families", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "GLP-1 Balance", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Casual Fare", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Fitness Fuel", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Plant Powered", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Morning Essentials", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
  { name: "Asian", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u59tooS6yoU76WnLkvgacvTMuk0Uzy.png" },
]

const meals = [
  {
    name: "Peruvian Chicken Fried Rice (Arroz",
    price: "$14.23",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    badge: "Buy 1 Get 1 Free",
  },
  {
    name: "Tofu Bibimbap",
    price: "$14.23",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400&h=300&fit=crop",
    badge: "Buy 1 Get 1 Free",
  },
  {
    name: "Mexican Chicken Bowl",
    price: "$14.23",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    badge: "Buy 1 Get 1 Free",
  },
  {
    name: "Pan-Fried Gochujang Tofu",
    price: "$14.23",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    badge: "Buy 1 Get 1 Free",
    quantity: 8,
  },
  {
    name: "Herb-Marinated Chicken Breast with",
    price: "$14.23",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
    badge: "Buy 1 Get 1 Free",
  },
  {
    name: "Chicken & Brown Rice Burrito Bowl",
    price: "$14.23",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=400&h=300&fit=crop",
    badge: "Buy 1 Get 1 Free",
  },
]

export default function CookUnityHomepage() {
  const [activeCategory, setActiveCategory] = useState("Meals")

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-50 flex h-full w-[72px] flex-col items-center bg-[#1a1a1a] py-4">
        {/* Logo */}
        <div className="mb-6">
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
        </div>

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
          <button className="flex flex-col items-center gap-1 rounded-lg p-2 text-gray-400 hover:text-white">
            <span className="text-sm font-bold">up</span>
            <span className="text-[10px]">unitypass</span>
          </button>
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
      <main className="ml-[72px] flex-1">
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between bg-[#1a1a1a] px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-[#2a2a2a] px-4 py-2">
              <span className="text-sm text-white">Mon, Mar. 23</span>
              <ChevronRight className="h-4 w-4 rotate-90 text-gray-400" />
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-400">
              1413 Newton Street, Austin, 7...
            </span>
          </div>

          <div className="relative flex-1 max-w-md mx-8">
            <Input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border-0 bg-white pl-4 pr-10 text-black"
            />
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-500" />
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-[#2a2a2a] p-2">
              <Globe className="h-5 w-5 text-white" />
            </button>
            <span className="text-sm text-white">Good to go!</span>
            <Button className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-black hover:bg-amber-400">
              <ShoppingCart className="h-4 w-4" />
              View cart
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                9
              </span>
            </Button>
          </div>
        </header>

        {/* Cart Reminder Banner */}
        <div className="flex flex-col items-center bg-[#f5f5f5] py-8">
          <div className="mb-2 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-white bg-amber-200"
                />
              ))}
            </div>
            <span className="ml-2 rounded-full bg-[#2a2a2a] px-2 py-1 text-xs text-white">
              +5
            </span>
          </div>
          <h2 className="mb-1 text-lg font-semibold text-[#1a1a1a]">
            {"Great picks! Now lock 'em in"}
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            {"Confirm your meals now—you won't be charged and can still make changes until Thu, 12 PM ET."}
          </p>
          <Button className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-white hover:bg-[#2a2a2a]">
            <ShoppingCart className="h-4 w-4" />
            Review Cart
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                  activeCategory === category.name
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cuisine Filters */}
        <div className="flex items-center gap-6 overflow-x-auto px-6 py-6">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine.name}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <span className="text-2xl">🍽️</span>
                </div>
              </div>
              <span className="whitespace-nowrap text-xs text-gray-700">
                {cuisine.name}
              </span>
            </button>
          ))}
          <button className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200">
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Promo Section */}
        <div className="bg-gray-50 px-6 py-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Buy One, Get One Free!</h3>
            <button className="text-sm text-gray-600 hover:text-gray-900">
              See more
            </button>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {meals.map((meal, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="relative">
                  <Image
                    src={meal.image}
                    alt={meal.name}
                    width={200}
                    height={150}
                    className="h-32 w-full object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-[10px] font-medium text-white">
                    🎁 {meal.badge}
                  </span>
                  <div className="absolute right-2 top-2 h-8 w-8 rounded-full bg-amber-100">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-amber-200 text-xs">
                        👨‍🍳
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <button className="text-gray-400 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </button>
                    {meal.quantity ? (
                      <div className="flex items-center gap-2">
                        <button className="rounded-full bg-gray-100 p-1">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium">
                          {meal.quantity}
                        </span>
                        <button className="rounded-full bg-gray-100 p-1">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <button className="rounded-full bg-gray-100 p-1">
                        <Plus className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <div className="mb-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current text-yellow-400" />
                    <span className="text-xs text-gray-600">{meal.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Add meal for {meal.price}
                  </p>
                  <p className="truncate text-sm font-medium">{meal.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="mt-4 flex justify-end">
            <button className="rounded-full border border-gray-200 p-2">
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
