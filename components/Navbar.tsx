import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

export const Navbar = () => {
  return (
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div /* className='flex justify-between m-2' */>
                <UserButton />
                <SignOutButton/>
              </div>
            </SignedIn>
          </header>  )
}
