'use client'

import {
  SignedOut,
  SignedIn,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-blue-700">
{/*           DGS Reporting Portal
 */}          <Image
                src="https://www.dgshipping.gov.in/App_Themes/standard/images/logo.png"
                alt="DGS Logo"
                width={30}
                height={30}
                className="rounded-lg"
                priority
              /> 
{/*                       <Image
                        src="https://www.dgshipping.gov.in/App_Themes/standard/images/logo.png" // Replace with your actual logo
                        alt="DGS Logo"
                        width={100}
                        height={100}
                        className="rounded-lg"
                        priority
                      /> */}
        </Link>

        <nav className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 text-white rounded-lg font-medium text-sm sm:text-base px-4 py-2 hover:bg-blue-700 transition">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonPopoverCard:
                    'shadow-lg border border-gray-200 rounded-xl',
                },
              }}
            />
            <SignOutButton>
              <button className="text-sm sm:text-base px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition">
                Sign Out
              </button>
            </SignOutButton>
          </SignedIn>
        </nav>
      </div>
    </header>
  )
}
