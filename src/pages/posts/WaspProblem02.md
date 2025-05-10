---
title: 'How to use a parameter in the url as an argument in a query in the wasp framework?'
pubDate: 2025-05-10
lastMod: 2025-05-10
description: 'How to use a parameter in the url as an argument in a query in the wasp framework?'
image:
  url: ''
  alt: ''
author: 'NS'
tags:
  - 'wasp'
  - 'blogging'
  - 'learning in public'
  - 'react'
  - 'backend'
  - 'routing'
  - 'javascript'
  - 'typescript'
layout: '../../layouts/PostLayout.astro'
---

# How to use a parameter in the url as an argument in a query in the wasp framework?

Say you want to get all the pages associated with a user name.

📄🐝 `main.wasp`

```javascript
// Wasp: `version: "^0.16.3"`
route UserPagesRoute { path: "/pages/:username", to: UserPages }
page UserPages {
  component: import { UserPages } from "@src/UserPages"
}

```

Let's define a <b>query</b> that will take in the `username` as an argument, and return all the <b>pages</b> associated with that <b>user</b>.

📄 `queries.ts`

```typescript
// The first parameter is the arguments
export const getUserPages = async ({ username }: { username: string }, context) => {
  console.log(`username: ${username}`);

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

Finally, let's define a <b>page</b> that will use this <b>query</b>.

📄 `UserPages.tsx`

```typescript
import { getUserPages, useQuery } from 'wasp/client/operations';
import { useParams } from 'react-router-dom';

export const UserPages = () => {
  const { username } = useParams();
  const { data, isLoading, error } = useQuery(getUserPages, { username });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Pages by {data[0].user.username}</h1>
      <ul>
        {data.map((page) => (
          <li key={page.id}>{page.title}</li>
        ))}
      </ul>
    </div>
  );
};
```
