# Marine Incident Reporting System

A web application for the Directorate General of Shipping,India (DGS) to manage, track marine casualties and incidents. This system provides a secure platform for maritime stakeholders to submit, view, and manage incident reports with detailed casualty information.

## 🚢 Project Overview

The Marine Incident Reporting System is designed to streamline the reporting process for marine casualties and incidents in Indian waters and beyond. It serves as the official platform for maritime stakeholders to submit detailed incident reports, track casualties, and maintain comprehensive records for regulatory compliance.

### Key Features

- **Multi-role Access**: Separate interfaces for users (report submission) and administrators (report management)
- **Comprehensive Reporting**: Detailed forms for incident classification, vessel information, and casualty details
- **Real-time Dashboard**: Interactive dashboards for viewing and managing reports
- **Secure Authentication**: Clerk-based authentication system
- **Data Validation**: Robust form validation using Zod schemas
- **Responsive Design**: Modern UI built with Tailwind CSS

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Vercel-ready

### Project Structure

```
marine-report/
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin dashboard pages
│   ├── api/                      # API routes
│   ├── user/                     # User dashboard pages
│   └── layout.tsx               # Root layout
├── components/                   # Reusable UI components
├── lib/                         # Utility functions
├── prisma/                      # Database schema and migrations
├── types.ts                     # TypeScript type definitions
└── middleware.ts                # Clerk authentication middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marine-report
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/marine_report"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Core Functionality

### User Features

- **Report Submission**: Comprehensive form for submitting marine incident reports
- **Dashboard**: View and manage submitted reports
- **Report Editing**: Update existing reports
- **Casualty Management**: Add detailed casualty information for each incident

### Admin Features

- **Report Management**: View all submitted reports
- **Data Filtering**: Filter reports by various criteria
- **Report Review**: Detailed view of individual reports
- **System Administration**: Manage user access and system settings

### Data Models

#### Report Schema
- **Vessel Information**: Ship name, IMO number, flag, type, registration
- **Incident Details**: Date, location, classification, severity
- **Technical Specifications**: Deadweight, draft, cargo type, bunkers
- **Contact Information**: DPA, technical manager, agency details
- **Consequences**: Deaths, injuries, environmental impact
- **Media**: Support documents and images

#### Casualty Schema
- **Personal Information**: Name, nationality, residential address
- **Demographics**: Age, gender, marital status, education
- **Maritime Credentials**: CDC, passport, COC, INDOS numbers
- **Incident Details**: Status, sub-category, medical information
- **Next of Kin**: Emergency contact information

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Database Management

```bash
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma db seed   # Seed database with sample data
npx prisma studio    # Open Prisma Studio
```

### Code Structure

- **Type Safety**: Comprehensive TypeScript types and Zod schemas
- **Form Validation**: Client and server-side validation
- **Error Handling**: Graceful error handling throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🚢 Maritime Compliance

This system is designed to comply with international maritime reporting standards and Indian maritime regulations. It captures:

- **SOLAS Requirements**: Safety of Life at Sea compliance
- **IMO Guidelines**: International Maritime Organization standards
- **Indian Maritime Laws**: Directorate General of Shipping regulations
- **Environmental Impact**: Oil pollution and environmental damage tracking

## 🔒 Security Features

- **Authentication**: Secure user authentication via Clerk
- **Authorization**: Role-based access control
- **Data Validation**: Input sanitization and validation
- **Audit Trail**: Comprehensive logging of report changes

## 📊 Reporting Categories

The system handles various types of marine incidents:

- **Personnel Related**: Deaths, injuries, sickness, desertion
- **Fire & Explosion**: Onboard fires and explosions
- **Collision**: Vessel collisions and groundings
- **Environmental**: Oil spills and pollution incidents
- **Technical**: Equipment failures and structural issues

## 🌐 Deployment

### Vercel Deployment

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables

Ensure all required environment variables are set in your deployment platform:

- `DATABASE_URL`: PostgreSQL connection string
- `CLERK_SECRET_KEY`: Clerk secret key
- `CLERK_PUBLISHABLE_KEY`: Clerk publishable key
<<<<<<< HEAD
=======




>>>>>>> test/deploy
