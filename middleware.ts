import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'; 

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)','/'])
const isAdminRoutes = createRouteMatcher(['/admin(.*)']);

/*   // Admin route authorization
  if (adminRoutes(req)) {
    if (userRole !== 'admin') {
      console.warn(`Unauthorized admin access attempt by ${userId}`);
      return NextResponse.redirect(
        new URL('/unauthorized?code=403', req.url)
      );
    }
  } */

export default clerkMiddleware(async (auth, req) => {
    // Authenticate all protected routes
    if (!isPublicRoute(req)) { //protect those routes which arent in the array
        await auth.protect()

        // Get user metadata

        // Authorize admin routes
        if (isAdminRoutes(req)) {
            if (!(await auth()).has({ role: 'org:admin' })) {
                return Response.redirect(new URL('/unauthorized', req.url));
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
