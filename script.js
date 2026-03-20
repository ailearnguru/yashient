/* ═══ DATA ═══ */
const SERVICES = [
  {
    num: "01", title: "AI / ML Consulting & Strategy",
    tagline: "From first use case to enterprise-wide AI transformation",
    grad: "linear-gradient(135deg, #3B82F6, #60A5FA)",
    metrics: "$8.5M cost avoidance • 78% adoption in 6 months • Zero AI-induced incidents",
    desc: "We help organizations navigate the AI landscape — from identifying high-impact use cases to deploying production-grade AI systems with governance, compliance, and measurable ROI.",
    offerings: [
      { name: "AI Readiness Assessment", detail: "Evaluate your data maturity, infrastructure, talent, and use-case landscape. Receive a scored readiness report with a prioritized 90-day roadmap." },
      { name: "Generative AI Enablement", detail: "Deploy production-grade solutions using OpenAI GPT-4o, Anthropic Claude, Google Gemini, Meta Llama 3, Mistral, and open-source models. Includes RAG pipelines, prompt engineering, fine-tuning, and multi-provider routing." },
      { name: "MLOps & Model Lifecycle", detail: "Automated pipelines for training, validation, A/B testing, deployment, monitoring, and governance using PyTorch, TensorFlow, ONNX Runtime, Hugging Face, and MLflow." },
      { name: "Multi-Agent AI Systems", detail: "Architect agentic AI platforms using Semantic Kernel, LangChain, LangGraph, CrewAI, AutoGen, and MCP (Model Context Protocol) for complex enterprise workflows." },
      { name: "Responsible AI & Governance", detail: "Embed bias detection, hallucination monitoring, content safety filters, prompt injection defense, audit trails, and explainability into your AI systems from day one." },
    ],
    platforms: ["Azure OpenAI", "AWS Bedrock", "Google Vertex AI", "Anthropic Claude API", "Hugging Face", "Replicate", "Together AI", "Ollama"],
  },
  {
    num: "02", title: "Solution Architecture & Engineering",
    tagline: "Enterprise-grade system design from blueprint to production",
    grad: "linear-gradient(135deg, #14B8A6, #2DD4BF)",
    metrics: "10M+ resources via IaC • $60B+ transactions supported • 2-3x developer productivity",
    desc: "We design systems that scale, perform, and endure — drawing on patterns proven across Microsoft's largest platforms serving hundreds of thousands of engineers globally.",
    offerings: [
      { name: "Cloud-Native Architecture", detail: "Microservices, event-driven, and serverless architectures on Azure, AWS, GCP, and OCI. API gateway design, service mesh (Istio/Linkerd), distributed tracing, and multi-region resilience." },
      { name: "AI Platform Architecture", detail: "End-to-end AI platforms integrating GPU clusters, model serving (Triton, TensorRT, vLLM), vector databases (Pinecone, Weaviate, Azure AI Search), RAG pipelines, and agent orchestration." },
      { name: "Data & Analytics Architecture", detail: "Modern data platforms using Databricks, Snowflake, Azure Synapse, BigQuery, Apache Kafka, and real-time streaming. Data mesh, lakehouse, and AI-ready data pipelines." },
      { name: "Application Modernization", detail: "Migrate monoliths to cloud-native. Containerize with AKS/EKS/GKE, implement CI/CD, and establish platform-as-a-product patterns." },
      { name: "Well-Architected Reviews", detail: "Comprehensive reviews across reliability, security, cost, operations, and performance. Deliver prioritized remediation roadmaps with IaC-ready artifacts (Terraform, Bicep, Pulumi, CDK)." },
    ],
    platforms: ["Azure", "AWS", "GCP", "Oracle Cloud", "Terraform", "Kubernetes", "Docker", "GitHub Actions"],
  },
  {
    num: "03", title: "Security Services", sub: "YASHIELD",
    tagline: "Intelligent protection for the AI-powered enterprise",
    grad: "linear-gradient(135deg, #2563EB, #14B8A6)",
    metrics: "45% incident reduction • 73% autonomous remediation • 99.94% prediction accuracy",
    desc: "AI introduces new attack surfaces — prompt injection, data poisoning, model theft, adversarial inputs. YASHIELD secures your AI systems and cloud infrastructure with defense-in-depth.",
    offerings: [
      { name: "Zero Trust Architecture", detail: "Design and implement Zero Trust for AI/ML workloads. Conditional access, managed identity, RBAC, network micro-segmentation, and private endpoints across multi-cloud." },
      { name: "AI Security & Red Teaming", detail: "Secure AI systems against OWASP Top 10 for LLMs — prompt injection, insecure output handling, training data poisoning, model denial of service, and supply chain vulnerabilities." },
      { name: "DevSecOps Automation", detail: "Security embedded in CI/CD. Container scanning (Trivy, Snyk), IaC validation (Checkov, tfsec), SAST/DAST, secrets management, and automated compliance gates." },
      { name: "Compliance & Governance", detail: "Architect for SOC 2, HIPAA, PCI-DSS, FedRAMP, GDPR, CCPA, ISO 27001, and NIST 800-53. Automated evidence collection, continuous compliance monitoring, and audit-ready documentation." },
      { name: "AI Guardrails & Content Safety", detail: "Deploy content filtering, PII detection/redaction, toxicity detection, copyright protection, and output validation. Multi-layer guardrail architecture with human-in-the-loop escalation." },
    ],
    platforms: ["Azure Sentinel", "AWS Security Hub", "Google Security Command Center", "CrowdStrike", "Wiz", "Snyk", "HashiCorp Vault", "OPA"],
  },
  {
    num: "04", title: "Cloud Infrastructure & Platform",
    tagline: "Scalable, reliable, cost-optimized cloud at any scale",
    grad: "linear-gradient(135deg, #10B981, #22C55E)",
    metrics: "$20M+ annual savings • 99.99% uptime • 1,400+ hours saved monthly",
    desc: "We build cloud platforms that engineering teams love — self-service, observable, secure, and cost-efficient. Our patterns have been validated at 90,000+ engineer scale.",
    offerings: [
      { name: "Multi-Cloud Strategy & Migration", detail: "Plan and execute migrations across Azure, AWS, GCP, and OCI. Hub-spoke topologies, ExpressRoute/Direct Connect, federated identity, and unified governance with landing zones." },
      { name: "GPU / HPC Infrastructure", detail: "Deploy NVIDIA A100/H100/B200 GPU clusters for LLM training and inference. CUDA, TensorRT, Triton Inference Server, DeepSpeed, and distributed training on AKS and VMSS." },
      { name: "Kubernetes & Container Platforms", detail: "Enterprise Kubernetes (AKS, EKS, GKE) with multi-tenant isolation, Karpenter/KEDA auto-scaling, GitOps (ArgoCD/Flux), service mesh, and comprehensive observability." },
      { name: "Infrastructure as Code", detail: "Terraform, Bicep, Pulumi, CDK, and Crossplane automation. Policy-as-code (OPA/Kyverno), drift detection, self-service provisioning, and golden path templates." },
      { name: "FinOps & Cost Optimization", detail: "Cloud financial management: GPU workload segmentation, spot/preemptible strategies, right-sizing, reserved capacity, savings plans, and chargeback/showback models." },
    ],
    platforms: ["Azure", "AWS", "GCP", "Oracle Cloud", "NVIDIA", "Terraform", "Pulumi", "Crossplane"],
  },
  {
    num: "05", title: "Developer Experience & Productivity",
    tagline: "Making engineers faster, happier, and more effective",
    grad: "linear-gradient(135deg, #0D9488, #3B82F6)",
    metrics: "80%+ voluntary adoption • Onboarding: weeks → days • $12.4M annual productivity gains",
    desc: "The best platforms are the ones engineers choose to use. We build internal developer platforms that feel like products — not mandates.",
    offerings: [
      { name: "AI-Powered Developer Tools", detail: "Build and integrate Copilot-style assistants for code generation, documentation search, incident triage, code review, and knowledge discovery using GPT-4, Claude, and custom fine-tuned models." },
      { name: "Internal Developer Portals", detail: "Self-service platforms with golden paths, service catalogs, environment provisioning, and developer experience metrics using Backstage, Port, or custom solutions." },
      { name: "CI/CD Modernization", detail: "Optimize pipelines supporting millions of builds/week. Azure DevOps, GitHub Actions, GitLab CI, container-based runners, and automated testing frameworks." },
      { name: "Intelligent Documentation", detail: "AI-powered knowledge platforms with personalized learning paths, contextual code discovery, and workflow recommendations using vector databases and AI agents." },
      { name: "Developer Metrics & Insights", detail: "Measure and improve developer productivity using DORA metrics, SPACE framework, and custom engineering effectiveness dashboards." },
    ],
    platforms: ["GitHub Copilot", "Azure DevOps", "GitHub Actions", "GitLab", "Backstage", "ArgoCD", "Grafana", "Datadog"],
  },
  {
    num: "06", title: "Technology Leadership & Advisory",
    tagline: "Strategic counsel for leaders navigating AI transformation",
    grad: "linear-gradient(135deg, #22C55E, #14B8A6)",
    metrics: "30+ engineers led across 3 continents • POC-to-production: 18mo → 3-6mo",
    desc: "For CTOs, CISOs, and VPs of Engineering who need a trusted advisor with real operational depth — not slide decks and frameworks, but someone who has built and shipped at scale.",
    offerings: [
      { name: "Fractional CTO / VP Engineering", detail: "Part-time senior technology leadership for startups and growth companies. Strategic depth and operational discipline of a $400K+ executive without the full-time cost." },
      { name: "AI Transformation Strategy", detail: "Executive workshops on AI strategy, use-case prioritization, ROI modeling, organizational change management, and build-vs-buy-vs-partner decisions." },
      { name: "Engineering Org Design", detail: "Design and scale engineering teams from 5 to 100+. Team topologies, career ladders, OKR frameworks, hiring strategies, and inclusive leadership practices." },
      { name: "Technology Due Diligence", detail: "For M&A, investment, and partnership decisions. Assess platform maturity, technical debt, AI readiness, team capability, and security posture." },
      { name: "Board & Investor Advisory", detail: "Help boards and investors understand AI capabilities, risks, and opportunities. Translate technical complexity into business-level strategic insights." },
    ],
    platforms: ["Strategic Advisory", "Executive Coaching", "Board Presentations", "Due Diligence", "OKR Frameworks"],
  },
  {
    num: "07", title: "AI Application Development",
    tagline: "Production-grade AI apps, bots, and integrations — end to end",
    grad: "linear-gradient(135deg, #6366F1, #3B82F6)",
    metrics: "Rapid prototyping • Full-stack delivery • 24/7 production systems",
    desc: "Build and ship intelligent, AI-powered applications fast. From conversational bots and LLM-integrated backends to full-stack products with database design, API development, and cloud deployment baked in.",
    offerings: [
      { name: "Conversational AI & Bot Development", detail: "Design and deploy production chatbots, Telegram bots, and messaging-platform integrations powered by LLMs with context management, multi-turn conversation, and tool use." },
      { name: "LLM API Integration", detail: "Integrate Google Gemini, OpenAI GPT, Anthropic Claude, and other LLM APIs into existing applications with streaming, function calling, RAG, and response caching." },
      { name: "Full-Stack Node.js Applications", detail: "End-to-end application development with Node.js backends, RESTful APIs, authentication, session management, and frontend integration." },
      { name: "Database Design & Management", detail: "Relational database design with MySQL/PostgreSQL, schema optimization, query tuning, migrations, and reliable data pipelines for AI workloads." },
      { name: "Deployment & Process Management", detail: "Production deployments on Linux servers with PM2, Nginx, systemd, automated restarts, log management, and zero-downtime release strategies." },
    ],
    platforms: ["Node.js", "Google Gemini", "OpenAI API", "Telegram Bot API", "MySQL", "PostgreSQL", "PM2", "Linux"],
  },
  {
    num: "08", title: "Automation & Smart Systems",
    tagline: "Eliminate manual processes. Keep your systems running 24/7.",
    grad: "linear-gradient(135deg, #10B981, #0D9488)",
    metrics: "24/7 system uptime • Zero-touch workflows • Hours saved daily",
    desc: "Design and deploy intelligent automation workflows, scheduled task systems, and server-side orchestration. From cron-based pipelines to AI-driven notification systems — if it can be automated, we automate it.",
    offerings: [
      { name: "Workflow & Task Automation", detail: "Build end-to-end automation pipelines for business processes — data collection, transformation, reporting, and alerting — with error handling and retry logic." },
      { name: "Scheduled Jobs & Cron Systems", detail: "Design reliable cron-based and event-driven scheduling systems with monitoring, failure alerts, and execution logging for critical business workflows." },
      { name: "AI-Driven Notification Systems", detail: "Intelligent alerts and digest systems that summarize, prioritize, and route information using AI — delivered via Telegram, email, Slack, or webhooks." },
      { name: "Server Administration & DevOps", detail: "Linux server setup, hardening, monitoring, process management with PM2, log rotation, automated backups, and performance optimization." },
      { name: "Integration & API Orchestration", detail: "Connect third-party services, internal APIs, and data sources into unified automation workflows with rate limiting, retries, and observability." },
    ],
    platforms: ["Node.js", "Linux", "PM2", "Cron", "Bash", "Telegram API", "REST APIs", "Hetzner Cloud"],
  },
];

const TRUST_PILLARS = [
  { title: "AI Guardrails", desc: "Multi-layer content safety, prompt injection defense, PII redaction, toxicity filtering, and output validation — ensuring AI systems behave responsibly at every interaction.", icon: "🛡️" },
  { title: "Compliance by Design", desc: "SOC 2, HIPAA, PCI-DSS, FedRAMP, GDPR, CCPA, ISO 27001, and NIST 800-53 built into architecture from day one — not bolted on as an afterthought.", icon: "📋" },
  { title: "Zero Trust Security", desc: "Every request verified. Every identity authenticated. Network micro-segmentation, managed identities, conditional access, and private endpoints across all clouds.", icon: "🔐" },
  { title: "Responsible AI", desc: "Bias detection, fairness testing, explainability, human-in-the-loop oversight, model governance, and comprehensive audit trails for every AI decision.", icon: "⚖️" },
  { title: "Multi-Provider Resilience", desc: "No single-vendor lock-in. Route across OpenAI, Claude, Gemini, Llama, and Mistral with automatic failover, cost optimization, and consistent governance.", icon: "🔄" },
  { title: "Production-Proven", desc: "Every pattern we recommend has been validated at Microsoft scale: 90,000+ engineers, 10M+ resources, $60B+ transactions. Not theories — battle-tested blueprints.", icon: "✅" },
];

const BUSINESS_SIZES = [
  { title: "Startups & SMBs", desc: "Get enterprise-grade AI foundations without enterprise budgets. Fractional CTO services, AI-first architecture design, and rapid proof-of-concept delivery.", budget: "Starting at $5K/engagement", icon: "🚀", grad: "linear-gradient(135deg, #22C55E, #14B8A6)" },
  { title: "Mid-Market", desc: "Scale your AI initiatives from pilot to production. Multi-cloud strategy, MLOps pipeline automation, security hardening, and team enablement.", budget: "Project-based or retainer", icon: "📈", grad: "linear-gradient(135deg, #14B8A6, #3B82F6)" },
  { title: "Enterprise", desc: "Transform at scale with governance and compliance built-in. Multi-agent systems, GPU infrastructure, sovereign cloud, and global delivery across timezones.", budget: "Strategic partnership", icon: "🏢", grad: "linear-gradient(135deg, #3B82F6, #2563EB)" },
];

const AI_MODELS = [
  { name: "OpenAI GPT-4o", provider: "OpenAI / Azure", best: "General reasoning, code, analysis" },
  { name: "Claude 3.5 / Opus", provider: "Anthropic / AWS", best: "Long-context, safety, enterprise" },
  { name: "Gemini 2.0", provider: "Google / GCP", best: "Multimodal, search, grounding" },
  { name: "Llama 3.1 405B", provider: "Meta / Open Source", best: "On-prem, fine-tuning, cost control" },
  { name: "Mistral Large", provider: "Mistral / Azure", best: "European compliance, multilingual" },
  { name: "Cohere Command R+", provider: "Cohere / AWS", best: "RAG, enterprise search, citations" },
];

const TEAM = [
  { name: "Swetha Yadiki", role: "Founder & Owner", desc: "Sole Member and Manager of YASHIENT LLC. Leads the company's vision, operations, and growth strategy.", grad: "linear-gradient(135deg, #14B8A6, #22C55E)" },
  { name: "Jagan Mohan Reddy Yadiki", role: "Advisory Board — Technology Strategy", desc: "21+ years at Microsoft Azure Cloud + AI. Led teams of 30+ engineers supporting 90,000+ developers. Architected WARIS ($8.5M savings), EngHub (67% cost reduction), and GPU/AI infrastructure at enterprise scale.", grad: "linear-gradient(135deg, #3B82F6, #14B8A6)" },
];

const INDUSTRIES = [
  { name: "Technology", icon: "💻", c: "#3B82F6", cases: "Copilot integrations, AI developer tools, platform modernization, AIOps" },
  { name: "Financial Services", icon: "🏦", c: "#2563EB", cases: "Fraud detection, risk modeling, KYC automation, algorithmic trading" },
  { name: "Healthcare", icon: "🏥", c: "#14B8A6", cases: "Clinical decision support, drug discovery AI, patient safety systems" },
  { name: "Manufacturing", icon: "🏭", c: "#0D9488", cases: "Predictive maintenance, quality inspection, supply chain optimization" },
  { name: "Retail & E-Commerce", icon: "🛒", c: "#10B981", cases: "Demand forecasting, personalization engines, inventory AI" },
  { name: "Energy & Utilities", icon: "⚡", c: "#22C55E", cases: "Grid optimization, predictive analytics, asset management" },
  { name: "Government", icon: "🏛️", c: "#60A5FA", cases: "Document processing, citizen services AI, compliance automation" },
];

const HERO_TAGS = ["Azure OpenAI","AWS Bedrock","Google Vertex AI","Anthropic Claude","Meta Llama","Mistral","Cohere","Hugging Face","NVIDIA","Kubernetes","Terraform","Grafana"];

/* ═══ NAVBAR ═══ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

document.getElementById('hamburger').addEventListener('click', () => {
  const nl = document.getElementById('navLinks');
  nl.style.display = nl.style.display === 'flex' ? 'none' : 'flex';
  nl.style.flexDirection = 'column';
  nl.style.position = 'absolute';
  nl.style.top = '68px';
  nl.style.left = '0';
  nl.style.right = '0';
  nl.style.background = 'rgba(11,17,32,0.97)';
  nl.style.padding = '16px 32px 24px';
  nl.style.borderBottom = '1px solid rgba(59,130,246,0.08)';
  nl.style.backdropFilter = 'blur(24px)';
});

/* ═══ HERO TAGS ═══ */
const tagsRow = document.getElementById('heroTags');
HERO_TAGS.forEach((t, i) => {
  const span = document.createElement('span');
  span.className = 'tag-pill';
  span.textContent = t;
  span.style.animationDelay = (0.8 + i * 0.05) + 's';
  tagsRow.appendChild(span);
});

/* ═══ ACCORDION ═══ */
const acc = document.getElementById('accordion');
SERVICES.forEach((s, i) => {
  const item = document.createElement('div');
  item.className = 'acc-item fade-up';
  item.style.setProperty('--d', (i * 0.06) + 's');

  const metricFirst = s.metrics.split('•')[0].trim();
  const subTag = s.sub ? `<span class="acc-sub-tag grad-blue-teal">${s.sub}</span>` : '';

  const offeringsHTML = s.offerings.map(o => `
    <div class="offering-card">
      <div class="offering-name">${o.name}</div>
      <div class="offering-detail">${o.detail}</div>
    </div>
  `).join('');

  const platformsHTML = s.platforms.map(p => `<span class="platform-pill">${p}</span>`).join('');

  item.innerHTML = `
    <div class="acc-header">
      <div class="acc-left">
        <div class="acc-num" style="background:${s.grad}">${s.num}</div>
        <div class="acc-title-wrap">
          <div class="acc-title-row">
            <span class="acc-title">${s.title}</span>
            ${subTag}
          </div>
          <div class="acc-tagline">${s.tagline}</div>
        </div>
      </div>
      <div class="acc-right">
        <span class="acc-metric-pill">${metricFirst}</span>
        <div class="acc-chevron">▾</div>
      </div>
    </div>
    <div class="acc-body">
      <div class="acc-body-inner">
        <p class="acc-desc">${s.desc}</p>
        <div class="offerings-grid">${offeringsHTML}</div>
        <div class="platforms-row">
          <span class="platforms-label">Platforms:</span>
          ${platformsHTML}
        </div>
        <div class="acc-impact" style="background:${s.grad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
          Proven Impact: ${s.metrics}
        </div>
      </div>
    </div>
  `;

  item.querySelector('.acc-header').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });

  acc.appendChild(item);
});

/* ═══ TRUST PILLARS ═══ */
const trustGrid = document.getElementById('trustGrid');
TRUST_PILLARS.forEach((p, i) => {
  const div = document.createElement('div');
  div.className = 'trust-card fade-up';
  div.style.setProperty('--d', (i * 0.06) + 's');
  div.innerHTML = `
    <div class="trust-icon">${p.icon}</div>
    <div class="trust-title">${p.title}</div>
    <div class="trust-desc">${p.desc}</div>
  `;
  trustGrid.appendChild(div);
});

/* ═══ SOLUTIONS — BUSINESS SIZES ═══ */
const sizeGrid = document.getElementById('sizeGrid');
BUSINESS_SIZES.forEach((b, i) => {
  const div = document.createElement('div');
  div.className = 'size-card fade-up';
  div.style.setProperty('--d', (i * 0.08) + 's');
  div.innerHTML = `
    <div class="size-inner">
      <div class="size-icon">${b.icon}</div>
      <div class="size-title">${b.title}</div>
      <div class="size-desc">${b.desc}</div>
      <div class="size-budget" style="background:${b.grad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${b.budget}</div>
    </div>
  `;
  sizeGrid.appendChild(div);
});

/* ═══ AI MODELS ═══ */
const modelsGrid = document.getElementById('modelsGrid');
AI_MODELS.forEach(m => {
  const div = document.createElement('div');
  div.className = 'model-card';
  div.innerHTML = `
    <div class="model-name">${m.name}</div>
    <div class="model-provider">${m.provider}</div>
    <div class="model-best">Best for: ${m.best}</div>
  `;
  modelsGrid.appendChild(div);
});

/* ═══ TEAM ═══ */
const teamCards = document.getElementById('teamCards');
TEAM.forEach(p => {
  const div = document.createElement('div');
  div.className = 'team-card';
  div.innerHTML = `
    <div class="team-avatar" style="background:${p.grad}">${p.name[0]}</div>
    <div>
      <div class="team-name">${p.name}</div>
      <div class="team-role" style="background:${p.grad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${p.role}</div>
      <div class="team-desc">${p.desc}</div>
    </div>
  `;
  teamCards.appendChild(div);
});

/* ═══ INDUSTRIES ═══ */
const industriesGrid = document.getElementById('industriesGrid');
INDUSTRIES.forEach((ind, i) => {
  const div = document.createElement('div');
  div.className = 'industry-card fade-up';
  div.style.setProperty('--d', (i * 0.05) + 's');
  div.addEventListener('mouseover', () => {
    div.style.borderColor = ind.c + '35';
    div.style.background = ind.c + '08';
  });
  div.addEventListener('mouseout', () => {
    div.style.borderColor = '';
    div.style.background = '';
  });
  div.innerHTML = `
    <div class="ind-icon">${ind.icon}</div>
    <div class="ind-name">${ind.name}</div>
    <div class="ind-cases">${ind.cases}</div>
  `;
  industriesGrid.appendChild(div);
});

/* ═══ INTERSECTION OBSERVER — fade-up ═══ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
