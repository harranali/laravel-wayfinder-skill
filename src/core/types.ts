export type AgentTarget =
  | 'claude'
  | 'windsurf'
  | 'cursor'
  | 'antigravity'
  | 'trae'
  | 'gemini';

export type Skill = {
  name: string;
  fileName: string;
  contentPath: string;
};