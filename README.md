# Apollo Client Study 2025

A React application demonstrating various Apollo Client features and patterns using TypeScript and Vite.

## Overview

This project showcases different implementation patterns for GraphQL queries using Apollo Client, including:
- Multiple Apollo Client instances
- Basic and Suspense-enabled queries
- Lazy loading
- Network status handling
- React transitions integration

## Features

- **Multiple GraphQL Endpoints**: Demonstrates connecting to two different GraphQL APIs:
  - Locations API (Flyby Router Demo)
  - Dogs API

- **Query Patterns**:
  - Standard queries with [`useQuery`](src/components/DisplayLocations.tsx)
  - Suspense integration with [`useSuspenseQuery`](src/components/SuspenseDogPhoto.tsx)
  - Lazy loading with [`useLazyQuery`](src/components/DelayedDogQuery.tsx)

- **UI Components**:
  - Location listing with photos and descriptions
  - Interactive dog photo viewer with breed selection
  - Loading states and error handling
  - Refetch capabilities

## Tech Stack

- React 19
- TypeScript
- Apollo Client 3.13
- Vite 6
- ESLint

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
``` 
4. Open http://localhost:5173 in your browser

## Project Structure
```
src/
├── components/           # React components
│   ├── DisplayDogs.tsx      # Main dogs display component
│   ├── DisplayLocations.tsx # Locations listing component
│   ├── DogPhoto.tsx        # Standard query implementation
│   └── SuspenseDogPhoto.tsx # Suspense query implementation
├── services/            # Apollo Client setup
│   ├── clients.ts      # Apollo Client instances
│   └── queries.ts      # GraphQL queries
└── types/              # TypeScript type definitions
```
## Learning Points
This project demonstrates several key Apollo Client concepts:

1. Multiple Clients: How to set up and use multiple Apollo Client instances for different GraphQL endpoints
2. Query Patterns:
- Standard queries with error and loading states
- Suspense-enabled queries for better loading handling
- Lazy queries for on-demand data fetching
- Performance Optimization:

3. React transitions for smoother updates
- Suspense boundaries for better loading states
- Network status handling for refetching states
- TypeScript Integration:

4. Type-safe queries and responses
- Interface definitions for GraphQL types

## Contributing
- Feel free to submit issues and enhancement requests.

## License
This project is intended for study purposes.