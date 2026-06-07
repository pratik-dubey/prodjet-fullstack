# PRODJET Waitlist

Waitlist registration app for PRODJET.

## Stack

- Next.js 15, TypeScript, Tailwind CSS

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — select your role (Student / Brand / College)
- `/form?type=STUDENT` — fill details and submit

## API

`POST /api/waitlist/register` — validates and saves user, returns waitlist number and referral code.

Data is stored in memory array according to requirements mentioned.