// Replace null values with your public details. Never put private information here.
export const profile = { name: 'Khandker Shathil', role: 'Junior Software Developer', email: 'kajs.sjak@gmail.com' as string | null, phone: '+15709910349' as string | null, github: 'https://github.com/khandker-shathil' as string | null, linkedin: null as string | null, resume: '/resume.pdf' as string | null, photo: '/image.png' as string | null };
export const projects = [
  {
    slug: 'project-one',
    name: 'Digital Life Lessons',
    caption: 'A community for sharing experiences and preserving personal wisdom.',
    status: 'Assignment 10', number: '01', theme: 'sage',
    description: 'Digital Life Lessons is a full-stack platform where people turn personal experiences into lessons others can learn from. Members can create and manage public or private lessons, browse by keyword, category, and emotional tone, and engage through likes, favorites, comments, and reports. The application includes personal dashboards, author profiles, image uploads, social sharing, and a print-friendly PDF export. Stripe subscriptions unlock premium lessons, while administrators can manage users, moderate reported content, and select featured lessons. A Next.js frontend connects to an Express API backed by MongoDB, with Better Auth handling email/password and Google sign-in.',
    stack: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'Express.js', 'MongoDB', 'Better Auth', 'Stripe'],
    live: 'https://p-hero-a10.vercel.app/' as string | null,
    github: 'https://github.com/khandker-shathil/p-hero-a10' as string | null,
    image: 'project1.png' as string | null,
    challenges: 'Key technical challenges addressed in the implementation include keeping authentication consistent between Next.js and Express, enforcing public/private and free/premium lesson permissions on the server, and linking payments to the correct account. The frontend proxies API requests to keep browser cookies on one origin. Checkout activation verifies account ownership, payment completion, the configured price, and subscription status before granting premium access; webhooks keep that access aligned with subscription changes. Image uploads also validate file types and sizes and compress supported images before upload.',
    improvements: 'Potential next steps include a Stripe customer portal for self-service subscription management, draft autosaving for longer lessons, and end-to-end tests covering sign-in, checkout, premium access, and moderation. These are suggested improvements rather than completed features.'
  },
  {
    slug: 'project-two',
    name: 'MediQueue',
    caption: 'Discover tutors, book available sessions, and manage your learning.',
    status: 'Assignment 9', number: '02', theme: 'peach',
    description: 'MediQueue is a full-stack tutor-booking application that helps students find tutors and manage sessions in one place. Visitors can browse and filter tutor listings and view profiles with subjects, pricing, institutions, and available slots. Signed-in users can book or cancel sessions, manage their own tutor listings, and update their profiles. Protected account pages and admin tools support separate user and administrator workflows. The current implementation uses Next.js App Router pages and API routes with MongoDB, Better Auth for email/password and Google sign-in, and a responsive Tailwind CSS and HeroUI interface.',
    stack: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'HeroUI', 'MongoDB', 'Better Auth'],
    live: 'https://p-hero-a9.vercel.app/' as string | null,
    github: 'https://github.com/khandker-shathil/p-hero-a9' as string | null,
    image: '/project2.png' as string | null,
    challenges: 'Key technical challenges addressed in the implementation include keeping tutor availability consistent during bookings and cancellations, protecting account and admin routes, and passing MongoDB data safely to client components. Booking creation conditionally decrements a slot only when capacity remains and restores it if the booking insert fails. Cancellation checks ownership and confirmed status before restoring availability, with rollback handling if that update fails. Tutor records are serialized before crossing the server/client boundary.',
    improvements: 'Potential next steps include date-and-time-based scheduling, booking reminders, direct profile and tutor photo uploads, and MongoDB transactions to strengthen consistency across booking and slot updates. Automated tests for simultaneous bookings and repeated cancellations would help validate those workflows. These are suggested improvements rather than completed features.'
  },
  { slug: 'next-project', name: 'What comes next', caption: 'Room for the next idea.', status: 'Planned project', number: '03', theme: 'lavender', description: 'A place for a future project as I continue learning full stack development. This project has not been added yet.', stack: [] as string[], live: null as string | null, github: null as string | null, image: null as string | null, challenges: 'To be documented during development.', improvements: 'Project scope and plans are still to come.' }
];
