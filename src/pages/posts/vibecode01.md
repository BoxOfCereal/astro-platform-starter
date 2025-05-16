---
title: 'VibeCode01'
pubDate: 2025-05-10
lastMod: 2025-05-10
description: 'VibeCode01'
image:
  url: ''
  alt: ''
author: 'NS'
tags:
  - 'wasp'
  - 'blogging'
  - 'learning in public'
  - 'vibe coding'
  - 'youtube api'

layout: '../../layouts/PostLayout.astro'
---

# Vibe coding more than 50 videos from YouTube API

## TLDR

This is a summary of the steps that I took to solve a problem vibe coding. The whole feature implementation probably took me about an hour, maybe more.

The feeling I got doing this:

> I'm managing stuff at a really high abstraction level.
>
> I make executive decisions on how to proceed in solving a problem and I provide the context and 'wisdom' to implement _working_ changes. (I'm not a great programmer so I'll probably not notice if I'm doing something wrong until it bites me in the ass)

## The Steps at a very high level

1.  The first thing I did is I identified what I wanted to change. In this case , I wanted to get more than 50 videos from the YouTube API.
2.  I searched for Google to see if anybody else had done that. I found a [stack overflow post](https://stackoverflow.com/questions/52803732/youtube-api-v3-maximum-number-of-videos-only-50) that had a [solution](https://stackoverflow.com/a/52814210).

3.  > The best resource to look is actually the documentation about implementation of pagination.
    > by https://stackoverflow.com/users/8342742/m%ce%b1%cf%80%ce%bcq%ce%bc%ce%b1%cf%80k%ce%b3v%cf%80-0

4.  I then went to the [Implementation of Pagination](https://developers.google.com/youtube/v3/guides/implementation/pagination) page and read about pagination.

5.  I read and got a feel for how the pagination of the API works. I then took a summary and plugged it into windsurf to see if it could help me paginate the script.

6.  I made a prompt to ask windsurf to paginate the script.<details>
    <summary>
    Click to see full prompt
    </summary>
    @videos.js Right now the script only gives me 50 videos.

        ```
            The YouTube Data API (v3) uses the `maxResults` parameter to determine the number of items returned in a query response.
            API `list` methods, such as `videos.list` and `playlists.list`, support the `maxResults` parameter for pagination.
            If more results are available, the API response includes `nextPageToken` and/or `prevPageToken` properties.
            These token values can be used to set the `pageToken` parameter to retrieve additional result pages.
            The initial request fetches the first page of results, and subsequent requests use the `pageToken` from the previous response to get the next page of results.
        ```

        This is a summary of how the data api works from youtube can you please paginate the video.js script so that I can get more than fifty videos

        ```

    </details>

7.  I applied the changes and launched the server to test and see if it worked. (I skimmed the code changes because I was pretty familiar with the original file.)

<br>

8. I ran `npx @11ty/eleventy --serve` and checked the console to see if it worked. Then checked the website and saw that the videos were there.

9. I added all of the changes to git, committed them, and pushed to the remote repository.

```bash
git add .
git commit -m "feat: added pagination to videos.js"
git push
```
