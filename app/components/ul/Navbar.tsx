"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ButtonDestructive } from "./buttoncn"
import Image from "next/image"

const components: { title: string; href: string}[] = [
  {
    title: "Electrical Works",
    href: "/electrical-services",
   
  },
  {
    title: "Engineering",
    href: "/Engineering",
    
  },
  {
    title: "Plumbing",
    href: "/plumbing-services",
   
  },
  {
    title: "HVAC",
    href: "/hvac-services",

  },
  {
    title: "CCTV & MORE",
    href: "/cctv-more",
  
  },

]

export function NavigationMenuDemo() {
  return (
    <div className="grid grid-cols-1 bg-white   md:grid-cols-3 gap-[20rem] justify-center items-center mx-h-[4rem] mx-auto mx-[2rem] md:mx-[2rem]">
        <div className="relative w-48 h-[8.4rem] ">
        <Image
          src="/mechanical/logo.jpg" // Path to your logo
          alt="Company Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
        <div>
        <NavigationMenu className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] md:pl-[12rem]">
      <NavigationMenuList>
        


      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[400px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                 </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" className="bg-blue roundend-6" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
        </div>
        <div className="flex justify-end">
  <Link
    href="/meeting"
    className="
      py-2
      px-6
      text-lg
      text-black
      bg-yellow-400
      rounded-lg
      border-2
      border-yellow-500
      shadow-md
      transition-transform
      transform
      hover:scale-105
      hover:bg-yellow-500
      hover:shadow-lg
      focus:ring-2
      focus:ring-yellow-300
      focus:outline-none
      duration-200
    "
  >
   +27 68 815 1646
  </Link>
</div>
    
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
