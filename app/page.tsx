import { SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-black px-6 sm:px-12 py-12 flex flex-col items-center justify-center font-sans">
      <main className="max-w-3xl text-center flex flex-col items-center gap-8">
        <Image
          src="https://www.dgshipping.gov.in/App_Themes/standard/images/logo.png" // Replace with your actual logo
          alt="Directorate General of Shipping Logo"
          width={100}
          height={100}
          className="rounded-lg"
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Directorate General of Shipping
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          Welcome to the official Marine Incident Reporting System. Submit, track,
          and review maritime casualties with ease.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <SignedOut>
            <SignInButton>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-100 font-medium text-sm sm:text-base px-6 py-3 rounded-full transition">
              Report an incident
            </button>
            </SignInButton>
          </SignedOut>

        </div>
      </main>

      <footer className="mt-16 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Directorate General of Shipping, Mumbai.
      </footer>
    </div>
  );
}
