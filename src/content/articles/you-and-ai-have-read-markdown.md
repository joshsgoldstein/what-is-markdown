---
title: "You and AI Have Read Markdown Together, You Just Don't Realize It"
subtitle: "An overview of why .docx is dead, what Markdown is, and why the .md file is the new .docx"
description: "Generative AI has been exposing technical tools to non-technical humans. One of the most quietly powerful is Markdown — a twenty-year-old idea now running the internet and powering AI tools."
date: 2025-01-15
image: /images/articles/markdown-hero.png
tags: [basics, markdown, AI]
author: Josh
---


Generative AI has been exposing technical tools to non-technical humans as fast as I can finish writing this first post. OpenClaw opened the eyes of AI and non-AI users alike to what a trending GitHub repo is — and the need for AI governance and ethics is extremely important.

Another key eye-opener which has skyrocketed over the past few months is **Skills**.

Go on social media and you will see heaps of content giving overviews of the latest Claude or Claude Code skill pack someone created, or that awesome next great SaaS product spec that has all the bells and whistles defined.

Anthropic introduced Skills to solve two problems at once:

- **Context Pollution:** Too many available tools confuses the model and eats up the available prompt space needed to actually complete the task
- **Knowledge Playbooks:** Instead of figuring it out from scratch every time, Skills give Claude a proven playbook or "thought pattern" combining best practices and reusable assets for completing a specific task reliably and consistently

Where am I going? Well — a question. What are the files you need to create to harness the awesome power of Skills?

Those files everyone's talking about? **Markdown files.**

In fact, you've read and written something in Markdown today without even knowing it. That newsletter you opened this morning? Markdown. The long-form text you read on your newly found love for GitHub? Markdown. That hosted text editor for your website copy? Markdown. The instructions someone gave an AI chatbot to make it sound like a customer service rep — or that new skill you want to create? Markdown.

> It's everywhere. And it takes about ten minutes to understand.

---

## Where It Came From

It's 2004. Blogging is exploding. Everyone wants to write for the web, but writing *for* the web means writing HTML — a language full of tags that looks nothing like normal writing:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

Most people don't want to learn HTML. But plain text emails and Word docs aren't built for the web either. There's a gap.

A dynamic duo — **John Gruber** with the help of **Aaron Swartz** — decide to close it. Their idea: what if you could write in plain text using simple symbols, and a program would automatically convert it into clean, web-ready formatting?

They called it Markdown. A play on "markup" — HTML is a markup language, this is the stripped-down, human-friendly version.

It was released in 2004 and spread quietly but relentlessly. GitHub adopted it. Reddit adopted it. Slack, Notion, Substack — all Markdown. In twenty years it went from a small blog post by two developers to the default writing format of the internet.

---

## How It Actually Works

Here's the whole thing: **Markdown is just a text file where certain symbols mean certain things.**

No special software. No complicated setup. Just symbols.

- Typing `#` at the start of a line becomes a big header
- Two `**` around a word make it **bold**
- Adding `-` at the start of a line becomes a bullet point

That's the gist of it.

![Markdown raw vs rendered side by side](/what-is-markdown/images/articles/markdown-raw-vs-rendered.png)

Same content. Totally different experience. The symbols disappear and you get clean, readable formatting.

That's all Markdown is doing. You write the symbols, the app renders the result, and the AI understands. You never see the symbols unless you go looking for them.

Right now, if you hit the "bold" button in this editor, it's wrapping your selected text in `**` behind the scenes. You're writing Markdown without knowing it.

---

## The Hidden Section at the Top: Front Matter

Here's something most people never notice. At the very top of many Markdown files, before any actual content, there's a small block wrapped in three dashes:

```yaml
---
title: What Is a Markdown File?
author: Josh
date: 2025-01-15
tags: [basics, markdown, AI]
---
```

That block is called **front matter**. It's not content you'd ever read — it's metadata. Information *about* the document rather than *in* it.

Think of it like the label on a file folder. The folder holds the document. The label tells you what's inside, who it belongs to, and where it goes.

Front matter is how apps and tools know how to handle a file without opening it and reading every word. A blogging platform reads the front matter to know the title, author, and publish date before it renders a single paragraph. A knowledge base reads the tags to know how to categorize it. An AI tool reads it to understand what the document is and what it's for.

You write the front matter once at the top. Everything else takes care of itself.

---

## Why It Matters for AI

This is where it gets interesting for anyone paying attention to AI tools.

**LLMs like structure. Markdown gives them that structure.** That's why it's so popular for AI tools today. Headers tell a model what's important. Bullets separate distinct ideas. Bold text flags key terms. The result isn't just better responses — it also creates *consistent* responses.

Structure removes ambiguity, and ambiguity is where AI goes wrong.

When an AI responds with headers and bullet points, it's writing Markdown. ChatGPT, Claude, Gemini — all default to Markdown in their responses. Your chat interface renders it so it looks clean. Turn off rendering and you'd see the raw symbols underneath.

**System prompts are written in Markdown.** The system prompt is the hidden set of instructions given to an AI before you type a single word. Markdown lets the developer organize those instructions into clear sections the model can parse:

```markdown
# Research Assistant

## Your Role
You are a senior research assistant helping business professionals
understand complex topics quickly and accurately.

## How to Respond
- Always lead with a one-sentence summary
- Use headers to separate major sections
- Keep responses under 500 words unless asked for more

## Tone
- Professional but conversational
- Never speculate — if you don't know, say so

## Output Format
**Summary:** One sentence answer
**Detail:** 2-3 paragraphs of explanation
**Sources:** Bulleted list of references

## What to Avoid
- Do not editorialize or share opinions
- Never fabricate citations
```

Those instructions are almost always written in plain Markdown files — not only for the LLM to understand but for your sanity at midnight reading a 100-line prompt (let's not forget about the human here).

If you ever give an AI a task in writing, you're thinking in Markdown already. Bullet points, bold text, headers — the moment you format your prompt or write copy for a website, you're speaking Markdown whether you realize it or not.

---

## How Can I Learn?

- [Markdown Cheatsheet](/markdown-cheatsheet) — start here
- [DataCamp's Markdown Cheat Sheet](https://www.datacamp.com/cheat-sheet/markdown-cheat-sheet-23) — solid reference
- [Anthropic Documentation: How to create custom Skills](https://docs.anthropic.com) — for when you're ready

---

## The Bottom Line

Markdown is a twenty-year-old idea that solves a simple problem: let humans write formatted text without learning to code.

It became the quiet foundation of how the internet writes. And now, almost by accident, it's become the language humans use to give instructions to machines.

**One format. Two developers. Twenty years. Everywhere.**

Next time you type a `**bold word**` or drop a `#` in front of a heading, you'll know exactly what you're doing.

Enjoy!

---

*Kudos to the creators of OpenClaw — you can see the time and detail they spent to make the barrier to entry as low as possible.*

*Breaking down the foundational concepts behind the tools everyone's using. No jargon, no assumed knowledge. Just clear explanations.*
