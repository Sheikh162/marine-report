// app/page.tsx
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
      <div className="max-w-3xl flex flex-col items-center gap-8">
        <Image
          src="https://www.dgshipping.gov.in/App_Themes/standard/images/logo.png"
          alt="Directorate General of Shipping Logo"
          width={100}
          height={100}
          className="rounded-lg"
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Directorate General of Shipping
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Welcome to the official Marine Incident Reporting System. Submit, track,
          and review maritime casualties with ease.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <SignedOut>
            <SignInButton>
              <Button>Report an incident</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </main>
  );
}
