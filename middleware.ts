import { clerkClient,clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';
//import { auth } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)','/'])
const isAdminRoutes = createRouteMatcher(['/admin(.*)']);


export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth()

  if (!userId && !isPublicRoute(req)) {
    // Add custom logic to run before redirecting
    return redirectToSignIn()
  }else if(userId && !isPublicRoute(req)){
    const client=await clerkClient()
    const user = await client.users.getUser(userId)
    const role = user.publicMetadata?.role;
    //console.log(user.publicMetadata)

    // Authorize admin routes
    if (isAdminRoutes(req)) {
        if (role !== 'admin') {
            console.warn(`Unauthorized admin access attempt by ${userId}`);
            return NextResponse.redirect(
              new URL('/unauthorized?code=403', req.url)
            );
        }
    } 
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
