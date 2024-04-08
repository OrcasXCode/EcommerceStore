import React, { useEffect, useState } from 'react'
import { CheckCircle, ChevronDown, ChevronUp, Menu, Star, X } from 'lucide-react'
import globe from "../../assets/globe.png"
import offers from "../../assets/offers.png"
import {toast,Toaster} from "react-hot-toast"

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'Blogs',
    href: '#',
  },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [sellerEmail,setSellerEmail]=useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  

  return (

<div class="flex flex-col min-h-[100dvh]">
  <main class="flex-1">
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div class="space-y-3">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Spring Fashion
          </h1>
          <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The latest trends in fashion. Find your style with our collection of spring essentials.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/5558233/pexels-photo-5558233.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          width="1270"
          height="600"
          alt="Hero"
          class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
        />
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">New Arrivals</h2>
          <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover the latest in fashion. Shop the newest arrivals from top brands.
          </p>
        </div>
        <div class="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 xl:gap-16">
          <div class="flex flex-col gap-1">
            <img
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F43%2F7f%2F437fd9e6fce85a924a7b1bb1eee6196e8523be93.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
              width="400"
              height="500"
              alt="Image"
              class="aspect-[4/5] overflow-hidden rounded-lg object-cover object-center"
            />
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">Blue Chambray Short Sleeve Shirt</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">$49.99</p>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfugg5dqnU_bCGgDjnwtqqpN_Y9gmX8cQZfPDW3gJEw&s"
              width="400"
              height="500"
              alt="Image"
              class="aspect-[4/5] overflow-hidden rounded-lg object-cover object-center"
            />
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">Striped Linen Blend Jumpsuit</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">$79.99</p>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <img
              src="https://emprall.com/cdn/shop/products/Untitleddesign_27.png?v=1673339053&width=700"
              width="400"
              height="500"
              alt="Image"
              class="aspect-[4/5] overflow-hidden rounded-lg object-cover object-center"
            />
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">Floral Print Maxi Dress</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">$64.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-100">
      <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Summer Sale</h2>
          <p class="mx-auto max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Up to 50% off. Shop the best deals on summer fashion. Limited time only.
          </p>
        </div>
        <div class="grid w-full grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 md:gap-8">
          <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              src="data:image/webp;base64,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"
              width="250"
              height="125"
              alt="Image"
              class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrlTEOdubROUThbiSOZj1FvfAIuLOChsNhjxeEujuyg&s"
              width="250"
              height="125"
              alt="Image"
              class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2PkB2pNU0j8MMWzQXrCQwBhQ-3_NmZtfkWg5nuaWSnHl4tgz_E7VPghIS0l6S2gOSB8HOkh-EMH3-wtLZtVB_Ef0HuLN2cHILAmNem0g_0mwOYEnk-YSR1ew&usqp=CAc"
              width="250"
              height="125"
              alt="Image"
              class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div class="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPjHX5Kx-3L07BKDJJ6RwnPemvw2GFyMTlH_izSEZhRzGLOZcYlC99br32epFLmoZy2kFPO4L90EWPwJbjoyqd4hZT4cSGxyyPGNSuyinmnMetVcuF6-4RIw&usqp=CAc"
              width="250"
              height="125"
              alt="Image"
              class="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Summer Vibes</h2>
          <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Embrace the season with our collection of summer essentials. From beachwear to backyard BBQs, we've got
            you covered.
          </p>
        </div>
        <div class="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 xl:gap-16">
          <div class="flex flex-col gap-1">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTEG6Fxd892azstnpe5bZ3SVylVwSWjIpeQTwvCn-kvnAhGwWQyONDHxIWJHf1lAZiK3EPKHfo1MpKWe1XD-HBkFisn_rOZEXxIlHmoLoyiQY0oI1hYuFB8bA&usqp=CAc"
              width="400"
              height="500"
              alt="Image"
              class="aspect-[4/5] overflow-hidden rounded-lg object-cover object-center"
            />
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">BOMBay Set</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">$49.99</p>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCa8_p9fOflSPN768F-eb8xN1jmQ1yUGyVulRn9Kh5bwxnihP8tzzGH3wPi6pZT4uNWItzQXdNIeFCET7XqOTBheh8iVqHBODXJluWdu8X27x7mTQwRvnpyA&usqp=CAc"
              width="400"
              height="500"
              alt="Image"
              class="aspect-[4/5] overflow-hidden rounded-lg object-cover object-center"
            />
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">White Rib Knit</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">$79.99</p>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQh_-414oe-a4o1ymz-Df99m8pntxHSOxCI7sR0C4ZuDf0Y56fKuMc29fDD8TTGWLoXXJlAodgs9nghefDoFldNY-yKJJvgOlRg5NAZn01Ise5BxWsjbvuxks1g&usqp=CAc"
              width="400"
              height="500"
              alt="Image"
              class="aspect-[4/5] overflow-hidden rounded-lg object-cover object-center"
            />
            <div class="space-y-1">
              <h3 class="text-lg font-semibold">Almode</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">$64.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
  )
}
