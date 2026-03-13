---
title: "The Oldest Interface Is Having Its Biggest Moment"
subtitle: "An overview of what a CLI is and why the blinking cursor never actually went away"
description: "AI agents are running wild in 2026, and they all share one surprising trait: no mouse. No buttons. Just text. Here's what a CLI actually is, where it came from, and why the oldest way of talking to a computer keeps showing up in the newest technology on the planet."
date: 2026-03-13
image: /images/articles/cli-hero.png
tags: [basics, CLI, AI]
author: Josh
---

AI agents are running wild in 2026. They're writing code, deploying servers, managing cloud infrastructure, and merging pull requests — all on their own. And when you watch one of these agents work, something surprising happens: there's no mouse. No buttons. No drag-and-drop. Just text.

Every major AI coding tool — the ones writing your software, debugging your infrastructure, and shipping your features — operates through a text-based interface where you type commands and read responses. That interface? It's called a **CLI**.

- It predates the mouse, the desktop icon, and the touchscreen by decades
- It's how every server, every cloud platform, and every AI agent communicates under the hood

Which raises a question most people never stop to ask: what actually *is* a CLI? And why does the oldest way of talking to a computer keep showing up in the newest technology on the planet?

---

## Where It Came From

It's 1961. Computers fill entire rooms, cost millions of dollars, and talk to humans through stacks of punched cards. You write your instructions on paper cards with holes in them, hand the stack to an operator, and wait — sometimes hours, sometimes days — to see if your program worked. There is no screen. There is no keyboard. There is no conversation.

Then something changes. At MIT, researchers build a system called CTSS — the Compatible Time-Sharing System — that lets multiple users interact with the same computer at the same time. Instead of punched cards, they connect the computer to teletypewriters: machines originally designed for sending telegrams, with a history going back to 1902. You type a command. The computer types back. For the first time, using a computer feels like a conversation.

That's the CLI — the command-line interface. A direct line between a human and a machine, one typed sentence at a time.

The concept of wrapping the machine in a text-based layer got its name from Louis Pouzin, a French computer scientist who called his 1964 program a "shell" — a protective layer around the operating system's core. His program, RUNCOM, was so influential that the "rc" suffix you still see in configuration files today (`.bashrc`, `.vimrc`) is a direct descendant. Glenda Schroeder built the first Multics shell in 1965 based on Pouzin's ideas. Ken Thompson wrote one for Unix in 1971 at Bell Labs. Steve Bourne replaced it with the Bourne shell in 1977, and in 1989, Brian Fox created Bash — the Bourne Again Shell — as a free, open-source alternative. Bash is still the default shell on most Linux systems and was macOS's default until 2019.

The word "shell" stuck. So did the idea. More than sixty years later, every operating system still ships with one.

---

## How It Actually Works

Here's the whole thing: **A CLI is a text-based interface where you type commands and the computer responds with text.**

No icons. No menus. Just a prompt — usually a blinking cursor after a `$` or `>` sign — waiting for you to say something.

Every CLI command follows the same basic grammar: the **CLI itself** (which tool you're talking to), a **verb** (what to do), sometimes a **target** (what to do it to), and optional **flags** (how to do it). You type the command, hit Enter, and the computer does it. No confirmation dialog. No progress bar. Just done.

The most familiar CLIs are the basic ones built into your operating system — `ls` to list files, `cd` to change folders, `mkdir` to create a new one. But those are just the starting point.

### The Real Story: Every Product Is Becoming a CLI

Here's what's really happening in 2026: CLIs aren't just for navigating files anymore. They've become the standard way companies give you access to their entire products.

AWS has a CLI. Stripe has a CLI. Vercel, GitHub, Docker, Terraform — every major platform now ships a command-line tool that lets you control their entire product by typing commands instead of clicking through a web dashboard. Want to deploy a website? `vercel deploy`. Want to open a pull request? `gh pr create`. Want to spin up a cloud server? `aws ec2 run-instances`.

The pattern is always the same: take a product that lives on the web, and wrap it in a CLI so you can operate it from your terminal.

Google made this pattern explicit in March 2026 when they released `gws` — a CLI for all of Google Workspace. One command-line tool that lets you operate Gmail, Google Drive, Calendar, Sheets, Docs, Chat, and Admin. Here's what it looks like:

```
$ gws drive files list --params '{"pageSize": 5}'
```

That lists your five most recent Google Drive files. No browser. No Google Drive tab. Just a command and a structured JSON response.

```
$ gws sheets spreadsheets create --json '{"properties": {"title": "Q1 Budget"}}'
```

That creates a new Google Sheet called "Q1 Budget." One line.

```
$ gws gmail users messages list --params '{"maxResults": 3}'
```

That pulls your three latest emails. From a terminal.

The tool is built in Rust, it's open-source, and it doesn't even ship with a fixed list of commands. It reads Google's own API descriptions at runtime and builds its command structure on the fly — when Google adds a new Workspace feature, `gws` picks it up automatically without needing an update.

But here's the part that matters: **Google didn't build this just for developers.** Justin Poehnelt, the Google engineer behind it, wrote a post that went viral on Hacker News titled "You Need to Rewrite Your CLI for AI Agents." His argument: the primary consumer of your CLI is no longer a human. It's an AI agent. And agents need structured JSON output, self-describing schemas, and safety rails against hallucinations — not pretty colored tables.

The tool has over 14,000 GitHub stars. It ships with over 100 built-in agent skills. And it supports the Model Context Protocol (MCP), so AI systems can plug directly into Google Workspace through the terminal.

Why does this matter for understanding what a CLI is? Because it shows that the CLI has evolved from "a way to navigate folders" to "the universal interface for controlling any product, for both humans and machines." The grammar is the same — verb, target, flags — whether you're listing files on your laptop or creating a spreadsheet in the cloud.

---

## The Hidden Layer: Pipes and Composition

Here's something most people never think about. The CLI isn't just individual commands — it's a system designed to chain them together.

The magic character is `|`, called a pipe. It takes the output of one command and feeds it directly into the next:

```
$ gws drive files list --params '{"pageSize": 100}' --page-all | jq -r '.files[].name'
```

That lists every file in your Google Drive and pipes the JSON output to `jq`, a tool that extracts just the file names. Two tools, chained together, each doing one small job.

Think of it like an assembly line. Each station does one thing extremely well — cutting, welding, painting — and passes the piece to the next. No station needs to know what the others do. It just receives input, does its job, and passes output forward.

This idea — small tools, loosely connected, each doing one thing — is called the Unix philosophy. Doug McIlroy, the inventor of Unix pipes, summarized it: *"Write programs that do one thing and do it well. Write programs to work together."*

This composability is why the CLI never died. You can combine simple commands into powerful workflows that would take dozens of clicks in a graphical interface. And you can save those combinations as scripts — reusable recipes that run the same way every time.

---

## Why It Matters for AI

This is where it gets interesting — and you don't need to know a single command to understand it.

Think about how a project manager delegates tasks. They don't do the work themselves — they break a big goal into smaller assignments, hand each one to the right person, check the results, and decide what happens next. The manager's job is orchestration: giving clear instructions, routing information between people, and making decisions based on what comes back.

**A CLI does the exact same thing, but for software.** And now AI agents are the ones sitting at the prompt, typing the commands.

Here's what that looks like in practice. An AI coding agent gets a task: "fix the failing test in the checkout module." The agent doesn't open a browser or click around an IDE. It opens a terminal and starts typing commands — navigating to the right directory, reading the test file, running the test suite, reading the error output, editing the code, and running the tests again. Every step is a CLI command. Every result is text it can read and reason about.

Why text? Because **text is the native language of language models.** A GUI communicates through pixels — colors, positions, icons, hover states. An AI would need computer vision just to understand what's on screen. But a CLI communicates in plain text — the exact format AI models are built to process. The input is text. The output is text. The whole interaction is a conversation, and conversations are exactly what language models are designed for.

This is why the CLI is having a renaissance in 2026. Developers are calling it "the terminal renaissance" — a wave of new tools built in Rust, designed for modern workflows, treating the terminal less like a rigid machine and more like an intelligent assistant. And every major AI agent framework is CLI-first: not because it's retro, but because text-in, text-out is the simplest, most composable, most automatable way for any intelligence — human or artificial — to operate a computer.

The entire Unix philosophy — small composable commands, piped between tools, outputting structured text — was accidentally designed for AI agents decades before they existed.

**If you've ever delegated a task by writing out clear step-by-step instructions — you already understand what a CLI does. The vocabulary is just different.**

---

## How to Learn

- [CLI Cheatsheet](/what-is-markdown/cli-cheatsheet) — quick-reference guide covering OS basics, product CLIs, pipes, and best practices
- [Codecademy — Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line) — interactive, beginner-friendly course that walks you through navigation, file manipulation, and redirection
- [freeCodeCamp — Command Line for Beginners](https://www.freecodecamp.org/news/command-line-for-beginners/) — comprehensive free handbook covering terminals, shells, and essential commands
- [DataCamp — Bash & zsh Shell Terminal Basics Cheat Sheet](https://www.datacamp.com/cheat-sheet/bash-and-zsh-shell-terminal-basics-cheat-sheet) — downloadable quick-reference for the most common shell commands and shortcuts

---

## The Bottom Line

The CLI is an idea that's over sixty years old, born from the simple insight that the fastest way to talk to a computer is to just type what you want. It survived the mouse, the touchscreen, and the app store. It outlasted every graphical interface trend that was supposed to replace it.

And now it's having its biggest moment yet — not because developers are nostalgic, but because AI agents need it. Companies are racing to wrap their products in CLIs. Google launched one for all of Workspace. The entire Unix philosophy — small composable commands, piped between tools, outputting structured text — was accidentally designed for AI agents decades before they existed.

One interface. One blinking cursor. Sixty-plus years. Still the fastest way to get things done.

Enjoy!

---

*Breaking down the foundational concepts behind the tools everyone's using. No jargon, no assumed knowledge. Just clear explanations.*
