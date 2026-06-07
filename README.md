# PRODJET Waitlist

Waitlist registration app for PRODJET. Users can sign up as a Student, Brand, or College.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## How it works

1. User selects their type on the home page (Student / Brand / College)
2. Gets taken to a form with fields based on their type
3. Submits the form
4. Backend validates and saves to a local JSON file
5. Success popup shows waitlist number and referral code

## API

`POST /api/waitlist/register`

Validates the request, checks for duplicate emails, saves user, returns waitlist number and referral code.

## Notes

- User data is saved in `data/users.json` (auto created on first submission)
- `data/` folder is in `.gitignore` so it won't be pushed to GitHub