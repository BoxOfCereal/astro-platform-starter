---
title: "'How to fix `[ Server!] TypeError: Cannot read properties of undefined (reading 'findFirst')`'"
pubDate: 2025-05-10
lastMod: 2025-05-10
description: "'How to fix `[ Server!] TypeError: Cannot read properties of undefined (reading 'findFirst')`'"
image:
  url: ''
  alt: ''
author: 'NS'
tags:
  - 'wasp'
  - 'blogging'
  - 'learning in public'
layout: '../../layouts/PostLayout.astro'
status: 'answered'
---

# How to fix `[ Server!] TypeError: Cannot read properties of undefined (reading 'findFirst')`

## Summary TLDR answer

<b>Make sure your query configuration in `main.wasp` has the user entity included.</b>

In my code I was trying to access the user entity through the context but it was undefined. Passing the user entity to the query configuration fixed the issue.

📄🐝 `main.wasp`

```typescript
query getUserPages {
  fn: import { getUserPages } from "@src/queries",
  entities: [Page, User]
}
```

## my code

I have a query defined in `queries.ts`

```typescript
export const getUserPages = async ({ username }: { username: string }, context) => {
  console.log(`1 username: ${username}`);

  // First, find the user with the given username
  const user = await context.entities.User.findFirst({
    where: { username: username }
  });

  if (!user) {
    return [];
  }

  // Then find pages authored by this user
  return context.entities.Page.findMany({
    where: { userId: user.id },
    orderBy: { id: 'asc' }
  });
};
```

That throws this error:

```bash
[ Server!] TypeError: Cannot read properties of undefined (reading 'findFirst')
[ Server!]     at getUserPages (/wasp/TodoApp/src/queries.ts:15:44)
```

## My Answer

My solution was to make sure that in my `main.wasp` file I was passing the user entity into the <b>query</b> configuration.

📄🐝 `main.wasp`

```typescript
query getUserPages {
  fn: import { getUserPages } from "@src/queries",
  entities: [Page, User]
}
```
