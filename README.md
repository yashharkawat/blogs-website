# BlogSpace

A modern blogging platform built with React and Firebase, inspired by Medium.com. Write, read, and share stories with a community of curious minds.

## Features

- **Write & Publish** - Full-featured blog editor with draft support, image previews, and revision history
- **Discover Content** - Browse posts by topic, search by title/author/topic, and filter by date/likes/comments
- **Social Features** - Like posts, comment, follow authors, and save posts for later
- **Reading Lists** - Create and organize reading lists, share them with others
- **Drafts** - Save work-in-progress as drafts and publish when ready
- **Activity Log** - Track your reading, writing, and engagement history
- **User Profiles** - Customizable profiles with bio, view author pages
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, React Router v6 |
| State Management | Redux Toolkit, Redux Persist |
| Backend/Database | Firebase (Auth, Firestore) |
| Styling | CSS (custom, responsive) |
| Forms | Formik + Yup |
| Payments | Stripe |
| Deployment | Firebase Hosting |

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- A Firebase project with Firestore and Authentication enabled

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blogs-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable Email/Password authentication
   - Create a Firestore database
   - Update `src/config/firebase.js` with your Firebase config

4. Start the development server:
   ```bash
   npm start
   ```
   The app runs on [http://localhost:8000](http://localhost:8000).

### Payment Server (Optional)

To enable the payment/subscription feature:

```bash
cd server
npm install
# Add your Stripe secret key to server/.env
npm start
```

## Project Structure

```
src/
├── config/          # Firebase configuration
├── store/           # Redux store setup
├── actions/         # Redux actions
├── pages/           # Landing page
├── posts/
│   ├── display/     # Main feed page
│   ├── post/        # Post card, post details, post list
│   ├── createEditPost/  # Blog editor (create/edit)
│   ├── navbar/      # Navigation bar
│   ├── Topics/      # Topic browsing
│   ├── Drafts/      # Draft management
│   ├── saved/       # Saved posts
│   ├── Comment/     # Comment system
│   └── recommendations/ # Post recommendations
├── users/
│   ├── login/       # Login & Sign Up
│   └── profile/     # User profiles
├── Lists/           # Reading lists
├── Pay/             # Subscription plans
├── Payment/         # Stripe integration
└── RevisionHistory/ # Activity tracking
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 8000 |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Deployment

The project is configured for Firebase Hosting:

```bash
npm run build
firebase deploy
```

## License

This project is for educational purposes.
