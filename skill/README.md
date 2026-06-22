# The Switch to Mac skill for Claude and Codex

Install the free Switch skill inside Claude or Codex, and ask for any Mac shortcut, task, or gesture, right in your chat.

It is the same data that runs [switchtomac.app](https://switchtomac.app), packaged so your own AI answers from it instead of guessing.

## What it does

Install it, then ask your AI in plain English:

- "What's Ctrl+C on a Mac?" → `Cmd C`
- "How do I take a screenshot on a Mac?" → `Cmd Shift 4` for part of the screen, `Cmd Shift 3` for all of it
- "How do I force quit on a Mac?" → `Cmd Option Esc`
- "How do I right-click on the trackpad?" → tap with two fingers
- "Show me all the keyboard mappings" → the full Windows to Mac table

## What's inside

```
skill/
  SKILL.md                 the skill itself: triggers and answer rules
  reference/
    shortcuts.md           71 shortcuts by category, plus the 3 modifier swaps
    tasks.md               14 everyday how-tos
    gestures.md            10 trackpad gestures
  codex/
    prompt.md, AGENTS.md   Codex slash command and always-on instructions
  scripts/generate.mts     regenerates reference/ from the site data
```

## Install

The same skill folder works in all three tools. Start by getting the files:

```bash
git clone https://github.com/vinodsharma10x/switchtomac-app
```

### Claude Code

```bash
cp -r switchtomac-app/skill ~/.claude/skills/switch-to-mac
```

Restart Claude Code. It picks up the skill automatically. Then ask: what's Ctrl C on a Mac?

### Claude.ai

Turn on Code execution under Settings, Capabilities. Then go to Customize, Skills, and upload the `skill` folder as a ZIP. Toggle it on, then ask any shortcut, task, or gesture question in a new chat.

### Codex

```bash
cp -r switchtomac-app/skill ~/.codex/skills/switch-to-mac
```

For the slash command and always-on instructions, use the files in `skill/codex/`.

## How to use it

Ask in plain English. The skill recognizes shortcut, task, and gesture questions and answers from the reference files, so you get the Mac answer, not a guess. Try "the Mac equivalent of Alt Tab" or "how do I take a screenshot of one window."

## Regenerate the reference (for contributors)

The files in `reference/` are generated from the switchtomac.app site data, so the skill and the site never drift apart. After updating the site data, rebuild them with `scripts/generate.mts`.

## License

MIT. Use it, fork it, ship your own version. If you add a shortcut or fix one, a pull request is welcome.
