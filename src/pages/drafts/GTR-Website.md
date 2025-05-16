---
title: 'GTR Website'
pubDate: 2025-05-12
description: 'Blog post about granite tomb productions website'
author: 'NS'
image:
  url: 'https://docs.astro.build/assets/rose.webp'
  alt: 'The Astro logo on a dark background with a pink glow.'
tags: ['gtr', 'webdev', 'learning in public', 'retrospective', 'vibe coding']
---

# GTR Website (Vibe coding a website)

## TLDR

I built (Vibe coded) a website for my friend's production company using 11ty, Decap CMS, and TailwindCSS.

### How?

```
while (feature/thing is not implemented) {

  1. Identify what I want to implement
  2. Ask/Tell Cascade what to do
  3. Apply the diff
  4. Run the developer preview
  5. Check to see if it was what I wanted
    5.1 debug it or ask Cascade to fix it.
  6. Commit the changes

  GOTO: 1.
}
```

### Why?

I am still recovering from RSI symptoms. I wanted to see how much web development is possible with current LLMs and vibe coding assistance.

### Main Takeaways

- LLMs in their current state cannot 'do the thinking' for you.
- Commit/Branch often
- Only ask for one or two things at a time (it's better to ask for less)
- If you don't know how something works ask about it before telling the llm to implement it.
- Read the documentation
- Look for a ground truth (A stack overflow answer, an official example, Documentation, etc)

## Blog Post

### Intro

On April 17th 2025 I created the repo for the granite tomb productions website. ~~104~~ 119 commits and ~~two~~ 3.5 weeks later, I'm finally finished.

This was the first website I've built in many years. And it was the first website where I mainly just vibe coded.

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

Hosting

- [Netlify](https://www.netlify.com/)
- [Kinsta](https://kinsta.com/)

Let's walk through briefly what my process was like.

### Initial Setup (Get the clay)

My friend had a logo for his production company but didn't have a website. I took a look at his branding, downloaded some of his images, and went to [deep site](https://huggingface.co/spaces/enzostvs/deepsite) to create a new website.

I don't have the original prompt, but I basically said something along the lines of:

> Let's create a design for a death metal production company keep it basic modern and clean. Main colors are black and white.

I went back and forth with Deep Site until I was happy (enough) and then copied it over into an 11ty project.

### 11ty (Shaping the clay)

#### Layout and componentization

From here I started breaking down the layout of the site into components. Things I could reuse and put into separate pages. Mainly, a `<nav>` and a `<footer>` so I didn't have to constantly change them in multiple file locations.

I did this through a combination of copy and pasting and talking to Cascade inside Windsurf.

### Decap CMS with Decap Bridge (Formerly Netlify CMS)

https://decapbridge.com/

#### Problems with using Decap CMS with Netlify Identity:

[Netlify Identity](https://github.com/decaporg/decap-cms/discussions/7419) had been depreciated.

\- and -

I did not want to roll my own solution for the Git-Gateway and OAuth configuration.

I saw some discussion and links on how to roll your own Git-Gateway, but I didn't want to go down that rabbit hole. I ended up using a turnkey solution called [Decap Bridge](https://decapbridge.com/).

I got most of the way there by using [Decap CMS's original documentation](https://decapcms.org/docs/intro/).

But I made a stupid mistake; my configuration file's extension was `.yaml` instead of `.yml`. I learned this when I asked for help on the [Decap CMS Discord](https://discord.gg/Q97rYTGVk3) and was promptly answered by the very friendly developer. (Sorry it was on a weekend 😅)

### FormEasy

[Form easy](https://devapt.com/formeasy) is a nice tool that will use the Google apps script platform in combination with a Google sheet and allow you to use a Captcha protected form with your own elements.

You can get an email alert when someone posts a message to the form but you're limited to 100 a day per the Google App script policy. This is fine for a small website that maybe will get a 100 comments a year.

### Vibe coding process

I would run the developer preview for my site, take a look at what I wanted to change,and then start communicating it with Cascade. Most of the time I asked it _how_ to do the thing that I'm trying to before I asked for an implementation. If it sounded believable enough, I would apply the diff, and run the preview again.

As long as I did not ask too much and was very specific, The LLM would get me 90% of the way there. The last 10% was usually a result of The LLM missing a nuance or implementation detail.

Specifically referencing files and mentioning project specifics helped the LLM generate code that fit _in my context_.

When I wanted to make a change to the website, I would make sure everything was committed and up to date. That way, any changes from this point on could easily be rolled back.
What's really good practice alone feels necessary when vibe coding with an LLM.

### Things I noticed while vibe coding

Over 3.5 weeks the most hallucinations I got were from

- Not being clear and objective with my requests.
- functions that were not defined
- stuff that almost looked right

Observations:

- On instances where I didn't know exactly what I wanted to do, I got code that I didn't know if it was what I wanted it to do.
- LLMs in their current state cannot do the thinking for you.
- Sometimes it's better to roll back your code and try a new approach.

Big thing I notice is whenever I'm asking something ambiguous or don't really know what I want, The LLM is much more likely to do something that is out of context for what I'm trying to accomplish.

Windsurf and Cascade is so much better than just copying and pasting between a chat bot and your code editor. But it still can't think for you. And if you don't point it at the right things it's not going to generate code that fits in your context.

I thought the name vibe coding was kind of stupid but it pretty much describes my process. When I knew exactly what I wanted I would communicate it to the chat bot. Most of the time I ask it to come up with a plan and tell mewhat it's going to do why it's going to do it. I figure if I can read through that and go to sense that I'm on the same page that is more likely to generate something usable.
