<br /><br />

<p align="center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB-EbJVMxRYtNz1i4dn7jOVSfHq-002oe4w&s" alt="X Logo" width="70" />
</p>

<h3 align="center"><b>X Clone</b></h3>
<p align="center"><b>Rich feature React TypeScript clone of X</b></p>

- This is a clone of X/Twitter's main application in React/TypeScript. It is just the front end client code and makes use of the database/authentication toolset from Firebase for simplicity of development.
- My focus with this project is to learn a myriad of practical app development, React and testing skills and I will attempt to build it without a tutorial and just seek out documentation for tools being used and also web dev concepts. Any useful findings will be added to this readme document. I can potentially post about my learnings in my blog as well.

# Feature Goals
- Posting
- User interaction (likes, replies, shares, views) 
- User Authentication / (maybe use O Auth as well?)
- File uploading / Video sharing
- Paid Premium Subscription (Stripe Integration)
- Account Search
- Infinite Scroll

# Key Learning Goals
- Global State Management and flow when involving async fetch requests (e.g Auth)
- Patterns to integrate payment integrations
- Vitest component testing (experiment with TDD) and mocking
- Implementation of MVP architecture. (explore use of Custom Hooks/Context Providers for encapsulation of presenter logic?)
- Attempt to create testable modules with dependency injection

# Installation
*Clone the Repository*
```bash
git clone git@github.com:daveanthonyc/X-Clone.git
```

*Install dependencies*
```bash
npm install
```

*Run development server*
```bash
npm run dev
```
