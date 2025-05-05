---
title: 'GTR Website'
pubDate: 2025-05-02
description: 'Blog post about granite tomb records website'
author: 'NS'
image:
  url: 'https://docs.astro.build/assets/rose.webp'
  alt: 'The Astro logo on a dark background with a pink glow.'
tags: ['gtr', 'webdev', 'learning in public', 'retrospective', 'vibe coding']
---

# GTR Website (Vibe coding a website)

## TLDR

I built (Vibe coded) a website for my friend's record company using 11ty, Decap CMS, and TailwindCSS.

### Why?

I am still recovering from RSI symptoms. I wanted to see what problem spaces I could successfully navigate while vibecoding.

### Main Takeaways

- LLMs in their current state cannot do the thinking for you.
- Commit/Branch often
- Only ask for one or two things at a time
- If you don't know how something works ask about it before telling the llm to implement it.
- Read the documentation

## Post

### Intro

On April 17th 2025 I created the repo for the granite tomb Records website. 104 commits and two weeks later, I'm finally finished.

This was the first website I've built in many years.

My stack was

AI

- [Deep Site](https://huggingface.co/spaces/enzostvs/deepsite)
- [Windsurf](https://windsurf.com/)

Web

- [11ty](https://www.11ty.dev/)
- [Decap CMS](https://decapcms.org/)
- [Decap Bridge](https://decapbridge.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [FormEasy](https://devapt.com/formeasy)

Let's walk through briefly what my process was like.

### Initial Setup (Get the clay)

My friend had a logo for his record company but didn't have a website. I took a look at his branding, downloaded some images, and went to [deep site](https://huggingface.co/spaces/enzostvs/deepsite) to create a new website.

I don't have the original prompt, but I basically said something along the lines of:

> Create a design for a death metal record company keep it basic modern and clean. Main colors are black and white.

I went back and forth with the tool until I was happy (enough) and then copied it over into an 11ty project.

### 11ty (Shaping the clay)

#### Layout and componentization

From here I started breaking down the layout of the site into components I could reuse and put into separate pages. Mainly, a navigation and a footer so I didn't have to constantly change them in multiple file locations.

I did this through a combination of copy and pasting and talking to Cascade inside Windsurf.

### Decap CMS with Decap Bridge (Formerly Netlify CMS)

#### Problems with using Decap CMS:

[Netlify Identity](https://github.com/decaporg/decap-cms/discussions/7419) had been depreciated.

and

I did not want to roll my own solution for the Git-Gateway and Oauth configuration.

I saw some discussion in links on how to roll your own Git-Gateway, but I didn't want to go down that rabbit hole. I ended up using a turnkey solution called [Decap Bridge](https://decapbridge.com/).

There's not a whole lot of documentation on the Decap Bridge websiteso I had to reference decap cms's own documentation and kind of fill in the blanks.

I also ask a question on the discord and was promptly answered by the developer. (Sorry it was on a weekend 😅)

### FormEasy

Form easy is a nice little tool that will use the Google apps script platform in combination with a Google sheet pageand allow you to use a captcha protected form with your own elements.

You can get an email alert when someone posts a message to the form but you're limited to 100 a day per the Google App script policy. This is fine for a small website that maybe will get a 100 comments a year.

### Vibe coding process

I would run the developer preview for my site, take a look at what I wanted to change,and then start communicating it with Cascade. Most of the time I asked it how to do the thing that I'm trying to accomplish. If it sounded believable enough I would implement the diff and then run the preview again.

As long as I did not ask too much and was very specific, The LLM would get me 90% of the way there. Most of the time the 10% Was because multiple code was like interacting between different files. Specifically referencing those files would cut this down a lot.

I would say over two weeks the most hallucinations I got were from functions that were not defined.

### Things I noticed while vibe coding

LLMs in their current state cannot do the thinking for you.

Every time I wanted to make a change to the website I would make sure everything was committed and up to date. That way any changes from this point on could be easily rolled back. What's really good practice coding on your own I feel is strictly necessary when you're vibe coding with an LLM.

Big thing I notice is whenever I'm asking something ambiguous or don't really know what I want, The LLM is much more likely to do something that is out of context for what I'm trying to accomplish.

Windsurf and Cascade is so much better than just copying and pasting between a chat bot and your code editor. But it still can't think for you. And if you don't point it at the right things it's not going to generate code that fits in your context.

I thought the name vibe coding was kind of stupid but it pretty much describes my process. When I knew exactly what I wanted I would communicate it to the chat bot. Most of the time I ask it to come up with a plan and tell mewhat it's going to do why it's going to do it. I figure if I can read through that and go to sense that I'm on the same page that is more likely to generate something usable.
