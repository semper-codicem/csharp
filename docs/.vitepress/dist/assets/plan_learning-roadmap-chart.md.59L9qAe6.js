import{_ as a,c as n,o as i,ae as t}from"./chunks/framework.ZmT4Iwzr.js";const c=JSON.parse('{"title":"C# / .NET Learning Roadmap Chart","description":"","frontmatter":{},"headers":[],"relativePath":"plan/learning-roadmap-chart.md","filePath":"plan/learning-roadmap-chart.md"}'),e={name:"plan/learning-roadmap-chart.md"};function l(p,s,r,h,E,o){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="c-net-learning-roadmap-chart" tabindex="-1">C# / .NET Learning Roadmap Chart <a class="header-anchor" href="#c-net-learning-roadmap-chart" aria-label="Permalink to &quot;C# / .NET Learning Roadmap Chart&quot;">​</a></h1><p>This Mermaid chart visualizes the comprehensive learning path to become an advanced C# / .NET developer based on your learning plans.</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Start([🚀 Start Your C# Journey]) --&gt; Foundation{Have Basic C#?}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Foundation --&gt;|No| BasicCs[📚 Learn C# Basics]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Foundation --&gt;|Yes| Phase1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BasicCs --&gt; Phase1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Phase 1: Language Mastery</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase1[🧭 Phase 1: Language Mastery&lt;br/&gt;2-3 weeks] --&gt; P1Topics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P1Topics[🔹 Advanced Language Features&lt;br/&gt;• Span&amp;lt;T&amp;gt;, Memory&amp;lt;T&amp;gt;&lt;br/&gt;• ref, in, ref struct&lt;br/&gt;• Nullable reference types&lt;br/&gt;• Source generators&lt;br/&gt;• Expression trees&lt;br/&gt;• Unsafe code &amp; pointers]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P1Topics --&gt; P1Project[📦 SafeBuffer Project&lt;br/&gt;Memory-efficient buffer wrapper]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P1Project --&gt; Phase2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Phase 2: CLR &amp; Runtime</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase2[🚀 Phase 2: CLR &amp; Runtime&lt;br/&gt;2-3 weeks] --&gt; P2Topics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P2Topics[🔹 Runtime Internals&lt;br/&gt;• JIT, IL, GC internals&lt;br/&gt;• Assembly loading &amp; metadata&lt;br/&gt;• Reflection, custom attributes&lt;br/&gt;• Performance profiling]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P2Topics --&gt; P2Project[📦 DynamicCommandExecutor&lt;br/&gt;Runtime assembly loading CLI]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P2Project --&gt; Phase3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Phase 3: ASP.NET Core</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase3[🧱 Phase 3: Advanced ASP.NET&lt;br/&gt;3-4 weeks] --&gt; P3Topics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P3Topics[🔹 Web Development&lt;br/&gt;• Middleware, filters, DI&lt;br/&gt;• Minimal APIs vs MVC&lt;br/&gt;• SignalR &amp; gRPC&lt;br/&gt;• Advanced model binding]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P3Topics --&gt; P3Project[📦 MicroAPI Hub&lt;br/&gt;Modular web API with plugins]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P3Project --&gt; Phase4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Phase 4: Architecture</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase4[🧠 Phase 4: Design &amp; Architecture&lt;br/&gt;3-4 weeks] --&gt; P4Topics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P4Topics[🔹 Enterprise Patterns&lt;br/&gt;• DDD, Onion Architecture&lt;br/&gt;• MediatR patterns, CQRS&lt;br/&gt;• Repository/Unit of Work&lt;br/&gt;• Clean Architecture]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P4Topics --&gt; P4Project[📦 DomainShop&lt;br/&gt;E-commerce with DDD &amp; CQRS]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P4Project --&gt; Phase5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Phase 5: Concurrency</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase5[🔄 Phase 5: Concurrency &amp; Performance&lt;br/&gt;2-3 weeks] --&gt; P5Topics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P5Topics[🔹 Async Programming&lt;br/&gt;• async/await, ValueTask&lt;br/&gt;• System.IO.Pipelines&lt;br/&gt;• Channels&lt;br/&gt;• Benchmarking]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P5Topics --&gt; P5Project[📦 PipeCrawler&lt;br/&gt;High-performance web scraper]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P5Project --&gt; Phase6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Phase 6: Diagnostics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase6[📊 Phase 6: Diagnostics &amp; Tooling&lt;br/&gt;2-3 weeks] --&gt; P6Topics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P6Topics[🔹 Developer Tools&lt;br/&gt;• BenchmarkDotNet&lt;br/&gt;• Logging frameworks&lt;br/&gt;• dotTrace, PerfView&lt;br/&gt;• Roslyn analyzers]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P6Topics --&gt; P6Project[📦 AnalyzerPack&lt;br/&gt;Custom Roslyn analyzers]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P6Project --&gt; Phase7</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Phase 7: DevOps (Optional)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase7[🌐 Phase 7: DevOps &amp; Distributed&lt;br/&gt;Optional/Advanced] --&gt; P7Topics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P7Topics[🔹 Production Systems&lt;br/&gt;• Dockerizing .NET apps&lt;br/&gt;• Azure/AWS deployment&lt;br/&gt;• Orleans or Akka.NET&lt;br/&gt;• OpenTelemetry tracing]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P7Topics --&gt; P7Project[📦 OrleansMonitor&lt;br/&gt;Distributed job runner]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Parallel Advanced Topics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase1 -.-&gt; AdvancedTopics[🎯 Advanced Topics&lt;br/&gt;Parallel Learning]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase2 -.-&gt; AdvancedTopics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Phase3 -.-&gt; AdvancedTopics</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AdvancedTopics --&gt; AT1[🧠 Memory &amp; Performance&lt;br/&gt;• ArrayPool, MemoryPool&lt;br/&gt;• Allocation-free patterns&lt;br/&gt;• Struct optimizations]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AdvancedTopics --&gt; AT2[🔗 Data &amp; LINQ&lt;br/&gt;• IQueryable vs IEnumerable&lt;br/&gt;• Custom LINQ providers&lt;br/&gt;• Expression manipulation]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AdvancedTopics --&gt; AT3[🛠️ Systems Programming&lt;br/&gt;• P/Invoke, native interop&lt;br/&gt;• Networking, sockets&lt;br/&gt;• Reflection.Emit]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Capstone Project</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    P7Project --&gt; Capstone</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AT1 --&gt; Capstone</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AT2 --&gt; Capstone</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AT3 --&gt; Capstone</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Capstone[🧩 Capstone Project&lt;br/&gt;1-2 months&lt;br/&gt;Enterprise SaaS Application]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Capstone --&gt; CapstoneFeatures</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CapstoneFeatures[📋 Capstone Features&lt;br/&gt;• ASP.NET Core backend&lt;br/&gt;• Admin dashboard (Blazor)&lt;br/&gt;• SignalR notifications&lt;br/&gt;• Microservice architecture&lt;br/&gt;• Containerized deployment]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Expert Level</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CapstoneFeatures --&gt; ExpertLevel[🌟 Expert Level&lt;br/&gt;Continuous Learning]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ExpertLevel --&gt; Expert1[📚 Contribute to OSS&lt;br/&gt;dotnet/runtime, roslyn]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ExpertLevel --&gt; Expert2[📖 Study CLR via C#&lt;br/&gt;Jeffrey Richter]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ExpertLevel --&gt; Expert3[👥 Mentor &amp; Review&lt;br/&gt;Code reviews, teaching]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ExpertLevel --&gt; Expert4[🔬 Build Libraries&lt;br/&gt;Real-world OSS libraries]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Continuous Learning Loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Expert1 --&gt; ContinuousLearning[🔄 Continuous Improvement]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Expert2 --&gt; ContinuousLearning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Expert3 --&gt; ContinuousLearning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Expert4 --&gt; ContinuousLearning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ContinuousLearning -.-&gt; Phase1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Study Methodology</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Start --&gt; StudyMethod[📋 Study Methodology]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    StudyMethod --&gt; Daily[📅 Daily: 1-2 hrs focused study]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    StudyMethod --&gt; Weekly[📆 Weekly: Deep-dive blog posts]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    StudyMethod --&gt; Monthly[📊 Monthly: Build projects]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    StudyMethod --&gt; LongTerm[🎯 Long-term: OSS contributions]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    %% Styling</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef phaseBox fill:#e1f5fe,stroke:#01579b,stroke-width:2px,color:#000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef projectBox fill:#f3e5f5,stroke:#4a148c,stroke-width:2px,color:#000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef topicBox fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px,color:#000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef expertBox fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    classDef methodBox fill:#fce4ec,stroke:#880e4f,stroke-width:2px,color:#000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class Phase1,Phase2,Phase3,Phase4,Phase5,Phase6,Phase7 phaseBox</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class P1Project,P2Project,P3Project,P4Project,P5Project,P6Project,P7Project,Capstone projectBox</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class P1Topics,P2Topics,P3Topics,P4Topics,P5Topics,P6Topics,P7Topics,AT1,AT2,AT3 topicBox</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class ExpertLevel,Expert1,Expert2,Expert3,Expert4 expertBox</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    class StudyMethod,Daily,Weekly,Monthly,LongTerm methodBox</span></span></code></pre></div><h2 id="timeline-overview" tabindex="-1">Timeline Overview <a class="header-anchor" href="#timeline-overview" aria-label="Permalink to &quot;Timeline Overview&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Phase</th><th>Duration</th><th>Focus Area</th><th>Key Output</th></tr></thead><tbody><tr><td>Phase 1</td><td>2-3 weeks</td><td>Language Mastery</td><td>SafeBuffer Project</td></tr><tr><td>Phase 2</td><td>2-3 weeks</td><td>CLR &amp; Runtime</td><td>DynamicCommandExecutor</td></tr><tr><td>Phase 3</td><td>3-4 weeks</td><td>ASP.NET Core</td><td>MicroAPI Hub</td></tr><tr><td>Phase 4</td><td>3-4 weeks</td><td>Architecture</td><td>DomainShop (DDD/CQRS)</td></tr><tr><td>Phase 5</td><td>2-3 weeks</td><td>Concurrency</td><td>PipeCrawler</td></tr><tr><td>Phase 6</td><td>2-3 weeks</td><td>Diagnostics</td><td>AnalyzerPack</td></tr><tr><td>Phase 7</td><td>Variable</td><td>DevOps (Optional)</td><td>OrleansMonitor</td></tr><tr><td>Capstone</td><td>1-2 months</td><td>Integration</td><td>Enterprise SaaS</td></tr></tbody></table><p><strong>Total Estimated Time:</strong> 4-6 months for core phases + 1-2 months for capstone</p><h2 id="key-learning-paths" tabindex="-1">Key Learning Paths <a class="header-anchor" href="#key-learning-paths" aria-label="Permalink to &quot;Key Learning Paths&quot;">​</a></h2><ol><li><strong>Sequential Path:</strong> Follow phases 1-7 in order for structured learning</li><li><strong>Parallel Path:</strong> Combine core phases with advanced topics for faster progression</li><li><strong>Project-Driven:</strong> Focus on building projects while learning concepts</li><li><strong>Expert Path:</strong> Continuous improvement through OSS contributions and mentoring</li></ol><h2 id="study-recommendations" tabindex="-1">Study Recommendations <a class="header-anchor" href="#study-recommendations" aria-label="Permalink to &quot;Study Recommendations&quot;">​</a></h2><ul><li><strong>Daily:</strong> 1-2 hours of focused study + coding</li><li><strong>Weekly:</strong> One deep-dive exploration of source code or advanced topics</li><li><strong>Monthly:</strong> Complete one project applying new knowledge</li><li><strong>Quarterly:</strong> Contribute to open source or write technical content</li></ul>`,10)])])}const d=a(e,[["render",l]]);export{c as __pageData,d as default};
