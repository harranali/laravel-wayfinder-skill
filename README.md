# Laravel Wayfinder AI Agent Skill For Laravel Projects

A lightweight CLI tool to install AI agent skills for Laravel projects that has Wayfinder.

It standardizes how coding agents (Claude Code, Windsurf, Cursor, Antigravity, etc.) understand and use Laravel Wayfinder instead of Ziggy.

## 🚀 Features
- Installs reusable AI coding skills into Laravel projects
- Works across multiple agent tools
- Prevents duplicate configuration in AGENTS.md
- Centralized skill storage under `.agents/skills`
- Safe idempotent installation (no overwrites)

## 📦 Installation & Usage

To install the right skill for your agent run the following command:
```bash
npx laravel-wayfinder-skill install <agent>
```
### ⚙️ Supported Agents:
- Claude Code: `claude`
- Windsurf: `windsurf`
- Cursor: `cursor`
- Antigravity `antigravity`
- Trae: `trae`
- Gemini `gemini`

### Or install globally:

```bash
npm install -g laravel-wayfinder-skill
```

### 🧠 Usage Examples
```bash
# for Claude Code
npx laravel-wayfinder-skill install claude

# for Windsurf
npx laravel-wayfinder-skill install windsurf

# for Cursor
npx laravel-wayfinder-skill install cursor

# for Google Antigravity
npx laravel-wayfinder-skill install antigravity

# for Trae
npx laravel-wayfinder-skill install trae

# for gemini
npx laravel-wayfinder-skill install gemini
```

📁 What gets created
- .agents/skills/laravel-wayfinder-skill.md
- AGENTS.md
### 🧩 AGENTS.md behavior

If AGENTS.md does not exist:
it will be created automatically

If it exists:
it will NOT be overwritten
only a single pointer will be added:
````markdown
## AI Skills
Load skills from .agents/skills/
````

## 🔒 Safety rules
- No file overwrites
- No duplicate skill entries
- Idempotent installs
- Safe to re-run anytime

🚀 Philosophy
Instead of teaching each agent separately, I have centralize Laravel Wayfinder rules into a portable skill system for all coding agents.

## 📄 License

MIT