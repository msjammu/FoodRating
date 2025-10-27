/**
 * 👉 Add your resources here. Minimal fields keep it easy to edit in GitHub.
 * type: 'article' | 'video'
 * tags: array of strings (used by search)
 * For videos, use a YouTube ID (privacy-friendly embed is used).
 */
const RESOURCES = [
  {
    type: 'article',
    title: 'Introducing Open SWE: An Open-Source Asynchronous Coding Agent',
    url: 'https://blog.langchain.com/introducing-open-swe-an-open-source-asynchronous-coding-agent/',
    author: 'langchain',
    date: '2025-08-06',
    image: 'https://blog.langchain.com/content/images/size/w760/format/webp/2025/08/open-swe-diagram-1.png',
    tags: ['ai', 'swe-agent', 'github', 'langchain']
  },
  {
    type: 'article',
    title: 'The 2025 Guide to AI Agents',
    url: 'https://www.ibm.com/think/topics/ai-agents',
    source: 'IBM Think',
    date: '2024-05-10',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    tags: ['ai-agents', 'ibm', 'guide']
  },
  {
    type: 'article',
    title: 'A Visual Guide to LLM Agents',
    url: 'https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-llm-agents',
    source: 'Exploring Language Models (Maarten Grootendorst)',
    date: '2025-03-17', // Based on the published date in the newsletter :contentReference[oaicite:0]{index=0}
    image: 'https://substackcdn.com/image/fetch/$s_!A_Oy!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc3177e12-432e-4e41-814f-6febf7a35f68_1360x972.png',
    tags: ['llm-agents', 'visual-guide', 'single-agent', 'multi-agent']
  },      
  {
    type: 'article',
    title: 'GitHub Spark',
    url: 'https://githubnext.com/projects/github-spark/',
    source: 'GitHub Next',
    date: '2024-06-15', // approximate announcement date; update if you want exact
    image: 'https://githubnext.com/assets/images/next-octocat.svg',
    tags: ['github', 'ai-apps', 'micro-apps', 'no-code']
  },
  {
    type: 'video',
    title: 'Introducing Open SWE: An Open-Source Asynchronous Coding Agent',
    youtubeId: 'TaYVvXbOs8c',
    channel: 'LangChain',
    date: '2025-06-10',
    image: 'https://i.ytimg.com/vi/TaYVvXbOs8c/hqdefault.jpg',
    tags: ['swe-agent', 'backend', 'orchestration', 'langchain']
  },
  {
    "type": "video",
    "title": "How to Use Microsoft Copilot Studio (Step-by-Step Tutorial)",
    "youtubeId": "dX9MJM5EokE",
    "channel": "Kevin Stratvert",
    "date": "2024-11-15",
    "image": "https://i.ytimg.com/vi/dX9MJM5EokE/hqdefault.jpg",
    "tags": ["copilot", "power-platform", "microsoft-365", "ai-agents", "low-code", "tutorial"]
  },
  {
    type: 'video',
    title: 'Introduction to ChatGPT agent',
    youtubeId: '1jn_RpbPbEc',
    channel: 'OpenAI',
    date: '2025-07-17',
    image: 'https://i.ytimg.com/vi/1jn_RpbPbEc/hqdefault.jpg',
    tags: ['chatgpt', 'agent', 'unified-model', 'openai']
  },      
  {
    type: 'video',
    title: 'Andrew Ng: Building Faster with AI',
    youtubeId: 'RNJCfif1dPY',
    channel: 'Y Combinator',
    date: '2025-06-17',
    image: 'https://i.ytimg.com/vi/RNJCfif1dPY/hqdefault.jpg',
    tags: ['andrew-ng', 'ai', 'software-engineering', 'startup-school']
  },
  {
    type: 'video',
    title: 'AI Agents, Clearly Explained',
    youtubeId: 'FwOTs4UxQS4',
    channel: 'Jeff Su',
    date: '2023-11-20',
    image: 'https://i.ytimg.com/vi/FwOTs4UxQS4/hqdefault.jpg',
    tags: ['ai-agents', 'tutorial']
  },
  {
    type: 'video',
    title: "What's next for AI agentic workflows ft. Andrew Ng of AI Fund",
    youtubeId: 'sal78ACtGTc',
    channel: 'Sequoia Capital',
    date: '2023-06-22',
    image: 'https://i.ytimg.com/vi/sal78ACtGTc/hqdefault.jpg',
    tags: ['andrew-ng', 'agentic-workflows', 'ai-fund', 'ai-agents']
  },
  {
    type: 'video',
    title: 'Andrew Ng: Opportunities in AI – 2023',
    youtubeId: '5p248yoa3oE',
    channel: 'Stanford Online',
    date: '2023-09-12',
    image: 'https://i.ytimg.com/vi/5p248yoa3oE/hqdefault.jpg',
    tags: ['andrew-ng', 'ai-opportunities', 'stanford']
  },
  {
    type: 'video',
    title: 'GitHub Universe 2024 opening keynote: delivering phase two of AI code generation',
    youtubeId: 'dSf8QOjazrQ',
    channel: 'GitHub',
    date: '2024-10-30',
    image: 'https://i.ytimg.com/vi/dSf8QOjazrQ/hqdefault.jpg',
    tags: ['github', 'github-universe', 'ai-code-generation', 'keynote']
  },
  {
    type: 'video',
    title: 'GitHub Universe 2024 Day 2 Keynote: Building 1 billion developers',
    youtubeId: 'uh9A4LvuGHM',
    channel: 'GitHub',
    date: '2024-10-31',
    image: 'https://i.ytimg.com/vi/uh9A4LvuGHM/hqdefault.jpg',
    tags: ['github', 'github-universe', 'developers', 'keynote']
  }      
];