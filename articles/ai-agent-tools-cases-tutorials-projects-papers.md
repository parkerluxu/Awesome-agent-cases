# AI Agent Tools, Cases, Tutorials, Projects and Papers

Last updated: 2026-06-09

This is a curated index for AI agent builders. It collects high-signal tools, real-world cases, tutorials, open-source projects, and papers related to AI agents completing tasks across industries.

It is not meant to be exhaustive. The agent ecosystem changes quickly, so this file should be treated as a living map.

## How To Read This Index

- **Tools and frameworks**: Start here if you want to build agents.
- **Industry cases**: Look here for concrete applications and adoption patterns.
- **Tutorials**: Use these to learn workflows and implementation patterns.
- **Open-source projects**: Use these as references, baselines, or reusable components.
- **Papers and benchmarks**: Use these to understand core ideas, evaluation, and limitations.

## 1. Agent Tools and Frameworks

### General Agent Frameworks

| Tool | Link | Best For | Notes |
|---|---|---|---|
| OpenAI Agents SDK | https://openai.github.io/openai-agents-python/ | production-style agents, tools, handoffs, tracing | Lightweight Python SDK for agent loops, tool use, handoffs, guardrails, and tracing. |
| LangGraph | https://langchain-ai.github.io/langgraph/ | durable workflows, multi-step agents, human-in-the-loop | Good for graph-based agent state machines and production control flow. |
| CrewAI | https://docs.crewai.com/ | role-based multi-agent workflows | Useful for teams of specialized agents with tasks, crews, tools, and processes. |
| Microsoft AutoGen | https://microsoft.github.io/autogen/ | multi-agent conversations and collaborative workflows | Mature research-to-production framework for agent collaboration. |
| Semantic Kernel Agents | https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/ | enterprise Microsoft/.NET/Python agent apps | Useful when integrating agents with Microsoft ecosystem and planners. |
| LlamaIndex Agents | https://docs.llamaindex.ai/en/stable/module_guides/deploying/agents/ | retrieval-heavy agents and knowledge workflows | Strong when agents need to work over documents, indexes, and enterprise data. |
| Pydantic AI | https://ai.pydantic.dev/ | typed Python agent apps | Good for structured outputs, typed tools, and maintainable Python services. |
| Haystack Agents | https://docs.haystack.deepset.ai/docs/agents | search, RAG, and pipeline-based agents | Good for information retrieval, document QA, and search workflows. |
| Hugging Face smolagents | https://huggingface.co/docs/smolagents | lightweight code agents and tool calling | Minimal agent framework from Hugging Face, especially useful for code-oriented agents. |

### Tool Use, Browser Use and Integration

| Tool | Link | Best For | Notes |
|---|---|---|---|
| Composio | https://github.com/ComposioHQ/composio | connecting agents to external apps | Tool integration layer for SaaS apps, auth, and actions. |
| browser-use | https://github.com/browser-use/browser-use | browser automation with LLM agents | Lets agents operate browsers for web tasks. |
| Playwright | https://playwright.dev/ | reliable browser automation | Not an agent framework, but a strong tool substrate for browser agents. |
| Model Context Protocol | https://modelcontextprotocol.io/ | standardizing tool/data connections | Important emerging protocol for connecting agents to tools and context. |
| OpenAI Function Calling / Tools | https://platform.openai.com/docs/guides/function-calling | model tool invocation | Core pattern for tool-using agents. |

### Coding Agent Tools

| Tool | Link | Best For | Notes |
|---|---|---|---|
| OpenHands | https://github.com/All-Hands-AI/OpenHands | autonomous software engineering agents | Open-source agent for coding, debugging, and repo tasks. |
| SWE-agent | https://github.com/SWE-agent/SWE-agent | GitHub issue resolution research and automation | Strong reference implementation for software engineering agents. |
| Aider | https://github.com/Aider-AI/aider | pair programming in local repositories | Practical CLI coding assistant that edits files through git-aware workflows. |
| Continue | https://github.com/continuedev/continue | IDE coding assistant platform | Useful for custom coding assistants and developer workflows. |
| Cline | https://github.com/cline/cline | agentic coding inside VS Code | Popular open-source coding agent extension. |
| Roo Code | https://github.com/RooVetGit/Roo-Code | VS Code coding agent workflows | Fork/ecosystem around agentic code editing and tool use. |

## 2. Industry and Task Cases

### Software Engineering

| Case | Link | What It Shows |
|---|---|---|
| SWE-agent resolving real GitHub issues | https://github.com/SWE-agent/SWE-agent | How an agent can inspect a repo, edit files, run tests, and submit patches. |
| OpenHands autonomous coding environment | https://github.com/All-Hands-AI/OpenHands | End-to-end software engineering agent environment with terminal, browser, and file editing. |
| Aider pair programming workflow | https://github.com/Aider-AI/aider | Practical human-in-the-loop coding agent workflow using local git repositories. |
| Cursor-style repo editing pattern | https://www.cursor.com/ | AI coding as an IDE-native workflow rather than standalone chat. |

### Research and Science

| Case | Link | What It Shows |
|---|---|---|
| AI Scientist | https://github.com/SakanaAI/AI-Scientist | Agentic loop for idea generation, experiments, paper writing, and review. |
| ChemCrow | https://arxiv.org/abs/2304.05376 | Tool-augmented LLM agents for chemistry tasks. |
| Voyager | https://arxiv.org/abs/2305.16291 | Open-ended skill acquisition through code-writing agents in Minecraft. |
| PaperQA | https://github.com/Future-House/paper-qa | Literature-grounded QA and research workflows over scientific papers. |

### Customer Support, Sales and Operations

| Case | Link | What It Shows |
|---|---|---|
| Salesforce Agentforce | https://www.salesforce.com/agentforce/ | Enterprise agents for sales, service, commerce, and operations. |
| ServiceNow AI Agents | https://www.servicenow.com/products/ai-agents.html | Workflow agents embedded in enterprise service operations. |
| Microsoft Copilot Studio agents | https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio | Building business process agents connected to enterprise systems. |
| Intercom Fin AI Agent | https://www.intercom.com/fin | Customer support agent for handling support conversations and escalation. |
| Sierra AI agents | https://sierra.ai/ | Customer-facing conversational agents for service workflows. |

### Knowledge Work and Office Automation

| Case | Link | What It Shows |
|---|---|---|
| Google Agentspace | https://cloud.google.com/products/agentspace | Enterprise search, knowledge, and action agents across company systems. |
| Microsoft 365 Copilot agents | https://support.microsoft.com/en-us/topic/get-started-with-agents-in-microsoft-365-copilot-69e2a737-bd64-4534-8294-9c7e84a625f7 | Agents embedded in Microsoft 365 work context. |
| Notion AI | https://www.notion.com/product/ai | Knowledge workspace assistant pattern for documents, notes, and team information. |

### Browser, Web and RPA-like Tasks

| Case | Link | What It Shows |
|---|---|---|
| browser-use demos | https://github.com/browser-use/browser-use | LLM agents operating websites through browser automation. |
| WebArena benchmark tasks | https://webarena.dev/ | Realistic web tasks for autonomous agents. |
| OSWorld | https://os-world.github.io/ | Computer-use agents operating full desktop environments. |

### Security and Risk

| Case | Link | What It Shows |
|---|---|---|
| Prompt injection and tool-use risk | https://arxiv.org/abs/2312.17673 | Why tool-using agents need security boundaries. |
| AgentBench | https://arxiv.org/abs/2308.03688 | Evaluating agents across environments, including safety-relevant task settings. |
| OWASP Top 10 for LLM Applications | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | Security categories relevant to agentic systems. |

## 3. Tutorials and Learning Paths

### Build Agents

| Tutorial | Link | What You Learn |
|---|---|---|
| OpenAI Agents SDK Quickstart | https://openai.github.io/openai-agents-python/quickstart/ | Agents, tools, handoffs, and tracing. |
| LangGraph tutorials | https://langchain-ai.github.io/langgraph/tutorials/ | Graph-based agents, memory, persistence, human-in-the-loop workflows. |
| CrewAI quickstart | https://docs.crewai.com/quickstart | Role-based multi-agent workflows. |
| AutoGen documentation | https://microsoft.github.io/autogen/stable/ | Conversational multi-agent systems and workflows. |
| LlamaIndex agent guide | https://docs.llamaindex.ai/en/stable/module_guides/deploying/agents/ | Data-connected agents and tool use over indexes. |
| Pydantic AI examples | https://ai.pydantic.dev/examples/ | Typed Python agent implementation patterns. |
| smolagents guided tour | https://huggingface.co/docs/smolagents/guided_tour | Minimal agent framework and code-agent patterns. |

### Evaluate Agents

| Tutorial / Resource | Link | What You Learn |
|---|---|---|
| SWE-bench | https://www.swebench.com/ | Evaluating agents on real software engineering issues. |
| WebArena | https://webarena.dev/ | Evaluating agents on realistic web tasks. |
| GAIA benchmark | https://huggingface.co/gaia-benchmark | Evaluating general AI assistants on tool-heavy tasks. |
| AgentBench | https://github.com/THUDM/AgentBench | Multi-environment agent evaluation. |

### Connect Tools and Context

| Tutorial / Resource | Link | What You Learn |
|---|---|---|
| Model Context Protocol docs | https://modelcontextprotocol.io/docs | Connecting agents to tools, resources, and prompts. |
| Composio docs | https://docs.composio.dev/ | Tool integrations, auth, and external actions for agents. |
| Playwright docs | https://playwright.dev/docs/intro | Browser automation foundation for web agents. |

## 4. Open-Source Projects

### Agent Frameworks and Platforms

| Project | Link | Category | Why It Matters |
|---|---|---|---|
| openai-agents-python | https://github.com/openai/openai-agents-python | framework | Official OpenAI SDK for agent workflows. |
| LangGraph | https://github.com/langchain-ai/langgraph | framework | Durable graph workflows for agents. |
| CrewAI | https://github.com/crewAIInc/crewAI | framework | Popular role-based multi-agent framework. |
| AutoGen | https://github.com/microsoft/autogen | framework | Multi-agent conversation and collaboration framework. |
| Semantic Kernel | https://github.com/microsoft/semantic-kernel | framework | Enterprise-friendly agent and orchestration toolkit. |
| LlamaIndex | https://github.com/run-llama/llama_index | data agents | Strong retrieval and knowledge-agent ecosystem. |
| Haystack | https://github.com/deepset-ai/haystack | RAG agents | Pipeline and agent framework for search and QA. |
| smolagents | https://github.com/huggingface/smolagents | lightweight agents | Minimal framework for code agents and tool use. |

### Coding Agents

| Project | Link | Category | Why It Matters |
|---|---|---|---|
| OpenHands | https://github.com/All-Hands-AI/OpenHands | coding agent | One of the most active open-source autonomous coding agents. |
| SWE-agent | https://github.com/SWE-agent/SWE-agent | coding agent | Research-grade agent for resolving GitHub issues. |
| Aider | https://github.com/Aider-AI/aider | coding assistant | Practical CLI coding workflow with git. |
| Continue | https://github.com/continuedev/continue | IDE assistant | Customizable open-source coding assistant. |
| Cline | https://github.com/cline/cline | VS Code agent | Agentic coding extension with tool use. |
| Open Interpreter | https://github.com/OpenInterpreter/open-interpreter | computer/code execution | Lets LLMs execute code and control local tasks. |

### Browser and Computer-Use Agents

| Project | Link | Category | Why It Matters |
|---|---|---|---|
| browser-use | https://github.com/browser-use/browser-use | browser agent | Popular browser automation agent project. |
| OSWorld | https://github.com/xlang-ai/OSWorld | benchmark/environment | Desktop computer-use benchmark and environment. |
| WebArena | https://github.com/web-arena-x/webarena | web benchmark | Realistic benchmark for web agents. |
| Playwright | https://github.com/microsoft/playwright | automation substrate | Reliable browser automation foundation. |

### Research and Knowledge Agents

| Project | Link | Category | Why It Matters |
|---|---|---|---|
| AI Scientist | https://github.com/SakanaAI/AI-Scientist | research agent | Agentic scientific discovery workflow. |
| PaperQA | https://github.com/Future-House/paper-qa | research assistant | Literature-grounded scientific QA. |
| GPT Researcher | https://github.com/assafelovic/gpt-researcher | research agent | Autonomous research report generation. |
| STORM | https://github.com/stanford-oval/storm | long-form research writing | Research and article generation pipeline. |

### Tooling and Protocols

| Project | Link | Category | Why It Matters |
|---|---|---|---|
| MCP servers | https://github.com/modelcontextprotocol/servers | protocol ecosystem | Reference servers for Model Context Protocol. |
| Composio | https://github.com/ComposioHQ/composio | tool integration | Connects agents to external applications. |
| E2B | https://github.com/e2b-dev/E2B | sandbox | Secure cloud sandbox for AI code execution. |

## 5. Papers and Benchmarks

### Foundational Agent Papers

| Paper | Link | Why It Matters |
|---|---|---|
| ReAct: Synergizing Reasoning and Acting in Language Models | https://arxiv.org/abs/2210.03629 | Classic pattern for interleaving reasoning and tool/action steps. |
| Toolformer | https://arxiv.org/abs/2302.04761 | Early work on language models learning to use tools. |
| Generative Agents | https://arxiv.org/abs/2304.03442 | Simulated human-like agents with memory, reflection, and planning. |
| Voyager | https://arxiv.org/abs/2305.16291 | Open-ended embodied agent that writes and reuses skills. |
| Reflexion | https://arxiv.org/abs/2303.11366 | Agents improving through verbal self-reflection. |

### Software Engineering Agents

| Paper / Benchmark | Link | Why It Matters |
|---|---|---|
| SWE-bench | https://arxiv.org/abs/2310.06770 | Benchmark for resolving real GitHub issues. |
| SWE-agent | https://arxiv.org/abs/2405.15793 | Shows how agent-computer interfaces improve software engineering agents. |
| Agentless | https://arxiv.org/abs/2407.01489 | Alternative approach showing strong SWE-bench results without heavy autonomous loops. |

### Web, Computer Use and General Assistant Benchmarks

| Paper / Benchmark | Link | Why It Matters |
|---|---|---|
| WebArena | https://arxiv.org/abs/2307.13854 | Realistic web tasks for autonomous agents. |
| MiniWoB++ | https://miniwob.farama.org/ | Web interaction benchmark used in agent research. |
| GAIA | https://arxiv.org/abs/2311.12983 | General assistant benchmark requiring reasoning, tools, and multimodal capabilities. |
| OSWorld | https://arxiv.org/abs/2404.07972 | Benchmark for agents operating real computer environments. |

### Multi-Agent Systems

| Paper | Link | Why It Matters |
|---|---|---|
| MetaGPT | https://arxiv.org/abs/2308.00352 | Multi-agent software company simulation with roles and SOPs. |
| ChatDev | https://arxiv.org/abs/2307.07924 | Communicative agents for software development workflows. |
| AutoGen | https://arxiv.org/abs/2308.08155 | Multi-agent conversation framework for LLM applications. |
| CAMEL | https://arxiv.org/abs/2303.17760 | Role-playing communicative agents. |

### Evaluation, Safety and Reliability

| Paper / Resource | Link | Why It Matters |
|---|---|---|
| AgentBench | https://arxiv.org/abs/2308.03688 | Broad benchmark for LLM-as-agent evaluation. |
| ToolLLM | https://arxiv.org/abs/2307.16789 | Tool-use learning and evaluation for LLMs. |
| τ-bench | https://arxiv.org/abs/2406.12045 | Benchmark for tool-agent behavior in dynamic user interactions. |
| Prompt Injection Attacks Against LLM-Integrated Applications | https://arxiv.org/abs/2302.12173 | Foundational security risk for tool-using agents. |
| OWASP Top 10 for LLM Applications | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | Practical security taxonomy for LLM and agent systems. |

## 6. Suggested Reading Paths

### If You Want To Build a Production Agent

1. OpenAI Agents SDK or LangGraph
2. Model Context Protocol
3. Composio or custom tool integration
4. Evaluation with task-specific tests
5. Security review for tool permissions and prompt injection

### If You Want To Build a Coding Agent

1. SWE-bench
2. SWE-agent
3. OpenHands
4. Aider
5. Agentless paper

### If You Want To Build a Research Agent

1. PaperQA
2. GPT Researcher
3. AI Scientist
4. ChemCrow
5. GAIA and domain-specific evaluation

### If You Want To Study Multi-Agent Collaboration

1. AutoGen
2. CrewAI
3. MetaGPT
4. ChatDev
5. CAMEL

## 7. Gaps To Keep Tracking

- Reliable long-horizon task execution
- Better agent memory and context management
- Cross-agent communication standards
- Secure tool execution and permission boundaries
- Evaluation beyond demos
- Cost control for agent loops
- Human-in-the-loop review and rollback
- Domain-specific agents for engineering, finance, healthcare, law, and manufacturing

## Contribution Format

When adding a new resource, prefer this format:

```markdown
| Name | Link | Category | Why It Matters |
|---|---|---|---|
| Example Agent | https://example.com | coding agent | Solves a concrete repository maintenance task. |
```

Keep descriptions short, factual, and focused on why the resource matters for agent builders.
