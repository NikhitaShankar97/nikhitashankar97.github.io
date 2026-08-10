export interface Experience {
  id: string; company: string; logo?: string; role: string; period: string
  type: 'full-time'|'intern'|'volunteer'|'capstone'; description: string; technologies?: string[]
}
export interface Project {
  id: string; featured?: boolean; featuredStyle?: 'default'|'hackathon'|'flagship'|'silver'
  title: string; wordmark?: string; wordmarkAccent?: string; description: string
  badges?: {text:string;variant:'default'|'hackathon'|'winner'|'silver'|'flagship'}[]
  tags: string[]; links: {label:string;url:string;primary?:boolean}[]; isExternalLink?: boolean
}
export interface Honor {
  id: string; icon: string; tag: string; tagVariant?: 'default'|'winner'|'silver'
  cardVariant?: 'default'|'winner'|'silver'; title: string; description: string
  links: {label:string;url:string}[]
}
export interface SkillCategory { label: string; skills: {name:string;icon:string}[] }
export interface Education { id:string;logo:string;years:string;school:string;degree:string;note?:string }
export interface Stat { value:string;label:string }
export interface SocialLink { platform:string;url:string;icon:string }
export interface PortfolioData {
  name:string;firstName:string;lastName:string;initials:string;email:string;location:string
  status:string;headline:string;taglineMessages:string[];bio:{lead:string;paragraphs:string[]}
  hobbies:string[];resumeUrl:string;stats:Stat[]
  sidebar:{location:string;degree:string;degreeSub:string;focus:string;focusSub:string;status:string}
  skills:SkillCategory[];education:Education[];honors:Honor[];experience:Experience[]
  featuredProjects:Project[];otherProjects:Project[];socialLinks:SocialLink[];formspreeEndpoint:string
}

export const portfolioData: PortfolioData = {
  name:'Nikhita Shankar',firstName:'Nikhita',lastName:'Shankar',initials:'NS',
  email:'nikhitashankar97@gmail.com',location:'United States',status:'Open to opportunities',
  headline:'Data Engineer & Analytics Professional',
  taglineMessages:['Data Engineer','Analytics Professional','BI & Pipeline Builder','MS Business Analytics, UIUC'],
  bio:{
    lead:"I don't just move data. I build the systems that <strong>turn it into decisions.</strong>",
    paragraphs:[
      'At <strong>Obvience</strong>, I design analytics platforms where AI and human judgment meet, integrating Microsoft Fabric, Power BI, and agentic pipelines. Before that, three years at <strong>ExxonMobil</strong> and a year at <strong>Hyperplane</strong> (acquired by Nubank) building financial intelligence infrastructure at scale.',
      'With an MS in Business Analytics from <strong>UIUC</strong>, I work at the intersection of data engineering and applied AI. The best data work disappears into the product. Nobody notices the pipeline. Everyone notices the insight.',
    ]
  },
  hobbies:['🍳 Cooking','✈️ Traveling','🏸 Badminton','⚽ Football','🏏 Cricket','🏎️ Formula 1'],
  resumeUrl:'/Nikhita_Shankar_Resume.pdf',
  stats:[{value:'5+',label:'Years Experience'},{value:'4',label:'Companies'},{value:'15+',label:'Projects'},{value:'2',label:'Publications'}],
  sidebar:{location:'United States',degree:'MS Business Analytics',degreeSub:'BE Computer Science',focus:'Data Engineering · BI',focusSub:'Analytics · Data Science',status:'Open to work'},

  skills:[
    {label:'Data Engineering',skills:[
      {name:'Snowflake',icon:'devicon-snowflake-plain'},{name:'dbt',icon:'fas fa-diagram-project'},{name:'Databricks',icon:'devicon-databricks-plain'},{name:'Microsoft Fabric',icon:'fas fa-layer-group'},{name:'Azure Data Factory',icon:'devicon-azure-plain'},{name:'KNIME',icon:'fas fa-project-diagram'},
    ]},
    {label:'BI & Analytics',skills:[
      {name:'Power BI',icon:'fas fa-chart-bar'},{name:'Tableau',icon:'fas fa-chart-pie'},{name:'Sigma',icon:'fas fa-chart-line'},{name:'IBM Cognos',icon:'fas fa-th'},{name:'Hex',icon:'fas fa-cube'},{name:'Excel',icon:'fas fa-file-excel'},{name:'Power Apps',icon:'fas fa-mobile-screen'},
    ]},
    {label:'Languages & Core',skills:[
      {name:'Python',icon:'devicon-python-plain'},{name:'R',icon:'devicon-r-plain'},{name:'SQL',icon:'devicon-azuresqldatabase-plain'},{name:'DAX',icon:'fas fa-table'},{name:'Power Query M',icon:'fas fa-code'},
    ]},
    {label:'Cloud & Infra',skills:[
      {name:'AWS',icon:'devicon-amazonwebservices-original'},{name:'Azure',icon:'devicon-azure-plain'},{name:'S3 / Glue / Athena',icon:'fas fa-cloud'},{name:'CI/CD Pipelines',icon:'fas fa-code-branch'},
    ]},
    {label:'AI, ML & Stats',skills:[
      {name:'LLMs & Prompt Engineering',icon:'fas fa-brain'},{name:'Scikit-learn',icon:'devicon-scikitlearn-plain'},{name:'XGBoost / LightGBM',icon:'fas fa-chart-area'},{name:'A/B Testing',icon:'fas fa-flask'},{name:'Statistical Modeling',icon:'fas fa-chart-scatter'},{name:'Causal Inference',icon:'fas fa-arrow-right-arrow-left'},
    ]},
  ],

  education:[
    {id:'uiuc',logo:'/uiuc_logo.png',years:'2024 – 2025',school:'University of Illinois Urbana-Champaign',degree:'MS Business Analytics',note:'Beta Gamma Sigma Honor Society inductee'},
    {id:'rvce',logo:'/rvce_logo.png',years:'2016 – 2020',school:'R.V. College of Engineering',degree:'BE Computer Science',note:'Published undergraduate research in IRJET'},
  ],

  honors:[
    {id:'bgs',icon:'🏛',tag:'Honor Society',title:'Beta Gamma Sigma',description:'Inducted into the international business honor society, recognizing the top 20% of business graduates globally for academic excellence and leadership.',links:[
      {label:'Society ↗',url:'https://www.betagammasigma.org/home'},
      {label:'Certificate ↗',url:'/BGS_Membership_Certificate.pdf'},
    ]},
    {id:'aws',icon:'☁️',tag:'Certification',title:'AWS Certified Cloud Practitioner',description:'Validated foundational knowledge of AWS cloud architecture, core services, security, and best practices. Issued and verified by Amazon Web Services.',links:[
      {label:'View Credential ↗',url:'https://www.credly.com/badges/a43a4d9f-bed3-4567-a006-6a6921d92c60'},
      {label:'Certificate ↗',url:'/AWS Certified Cloud Practitioner certificate.pdf'},
    ]},
    {id:'exxon',icon:'🏆',tag:'Award',title:'ExxonMobil Recognition Awards',description:'Annual "Bright Beginner" Award and Quarterly Recognition Award for innovation and consistent excellence in analytics delivery across global projects.',links:[
      {label:'Annual Award ↗',url:'/ExxonMobil Annual Recognition Certificate.pdf'},
      {label:'Quarterly ↗',url:'/ExxonMobil Quarterly Recognition Certificate.pdf'},
    ]},
    {id:'irjet',icon:'📄',tag:'Publication',title:'Review of Recommendation Systems using Filtering-based Concepts, IRJET',description:'Published in the International Research Journal of Engineering and Technology. Reviews collaborative, content-based, and hybrid filtering techniques, with an applied implementation using matrix factorization and SVD for product recommendation.',links:[
      {label:'Read Paper ↗',url:'https://irjet.net/archives/V7/i5/IRJET-V7I5303.pdf'},
    ]},
    {id:'first48',icon:'🥇',tag:'1st Place · Hackathon',tagVariant:'winner',cardVariant:'winner',title:'Zerve x HackerEarth Hackathon — First Place',description:'Won first place for First48, a product analytics system predicting long-term user success from 48 hours of behavioral data. Built end-to-end: feature engineering, Random Forest classifier (AUC ~0.98), user segmentation, and a business-facing Streamlit app.',links:[
      {label:'View Notebook ↗',url:'https://www.zerve.ai/gallery/6c20e273-9afb-4fc5-8dfa-9b8a44829b24'},
      {label:'View Announcement ↗',url:'https://www.linkedin.com/posts/zerve-ai_we-just-wrapped-the-zerve-x-hackerearth-hackathon-activity-7454448842118426625-tAdy'},
    ]},
    {id:'odsc',icon:'🥈',tag:'2nd Place · Datathon',tagVariant:'silver',cardVariant:'silver',title:'ODSC AI Datathon — 2nd Place',description:'Placed 2nd in the ODSC AI 24-hour Datathon using real Zerve product event data. Built UpNext, a product-led growth intelligence tool combining ML-based upgrade prediction, user segmentation, funnel analysis, and a Streamlit app that converts raw behavioral data into a prioritized growth action queue for product and revenue teams.',links:[
      {label:'View Notebook ↗',url:'https://app.zerve.ai/notebook/f74703d8-d9e0-4a18-937d-5041e653acc2'},
      {label:'View Announcement ↗',url:'https://www.linkedin.com/posts/odsc-ai_odscai-datathon-datascience-activity-7456008697786458112-uN90?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVQeTcBFRcLio8JmflEHIqfIrRY4aorEsI'},
    ]},
    {id:'emosense',icon:'🧠',tag:'Publication',title:'EmoSense, Zenodo 2025',description:'A privacy-preserving framework for early burnout detection using behavioral metadata only. Introduces the Emotional Stability Drift Index (ESDI) for ethical, human-centered workplace analytics.',links:[
      {label:'Read Paper ↗',url:'https://zenodo.org/records/18058997'},
    ]},
  ],

  experience:[
    {id:'obvience',company:'Obvience',logo:'/obvience_logo.png',role:'Data Engineer',period:'2025 – Present',type:'full-time',description:'Designing and implementing end-to-end analytics solutions using Microsoft Fabric, Power BI, and SQL Server, helping organizations make their data more accessible and decision-ready.'},
    {id:'workgaze',company:'WorkGaze',logo:'/workgaze_logo.png',role:'Data Engineer',period:'Aug – Sep 2025',type:'volunteer',description:'Built reliable, automated data workflows to support AI-driven workplace analytics, contributing to the foundation of a behavioral intelligence platform.'},
    {id:'wolters',company:'Wolters Kluwer',logo:'/wolterskluwer_logo.png',role:'Data Science and AI Consultant',period:'Jan – May 2025',type:'capstone',description:'Developed an LLM-based differential diagnosis system using GPT-4o and Gemini. Benchmarked prompt engineering frameworks and evaluated model reasoning quality for clinical decision support in healthcare.'},
    {id:'colorado',company:'Colorado West Healthcare',logo:'/coloradowest_logo.png',role:'Data Engineering and Analytics Lead',period:'Aug – Dec 2024',type:'capstone',description:'Designed a Cognos-based Workforce Insights Dashboard integrating SQL and Python pipelines to standardize HR KPI reporting and automate labor-cost forecasting for a community hospital.'},
    {id:'hyperplane',company:'Hyperplane',logo:'/hyperplane_logo.png',role:'Data Engineer',period:'May 2023 – May 2024',type:'full-time',description:'Built data platforms and financial intelligence systems from the ground up at a fintech startup. Contributed to core infrastructure that supported the company through its acquisition by Nubank.'},
    {id:'exxonmobil',company:'ExxonMobil',logo:'/exxonmobil_logo.png',role:'Data Science / Analytics / Data Engineering',period:'Jan 2020 – Apr 2023',type:'full-time',description:'Three-year tenure across data science, analytics, and engineering roles. Won the Annual "Bright Beginner" Award and Quarterly Recognition Award for innovation and consistent excellence in analytics delivery across global projects.'},
    {id:'softtek',company:'Softtek',logo:'/softtek_logo.png',role:'Engineering Intern',period:'Jun – Jul 2019',type:'intern',description:'Contributed to software engineering projects at a global IT services firm, gaining foundational hands-on experience in enterprise software environments.'},
  ],

  featuredProjects:[
    {id:'first48',featured:true,featuredStyle:'hackathon',title:'What Drives Successful Usage in the First 48 Hours?',wordmark:'First',wordmarkAccent:'48',description:'A full product analytics pipeline predicting long-term user success from just 48 hours of behavioral data. Engineered early-window features, built a Random Forest classifier achieving AUC ~0.98, segmented users by workflow pattern, and shipped an interactive Streamlit app that turns raw event logs into onboarding and growth plays.',badges:[{text:'⚡ Zerve x HackerEarth',variant:'hackathon'},{text:'🥇 1st Place',variant:'winner'}],tags:['Python','Random Forest','Behavioral ML','Product Analytics','Segmentation'],links:[{label:'▶ Watch Demo',url:'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view'}]},
    {id:'upnext',featured:true,featuredStyle:'silver',title:'Product-Led Growth Intelligence for Zerve',wordmark:'Up',wordmarkAccent:'Next',description:'A 24-hour datathon build using real Zerve product event data to predict subscription upgrades and surface actionable growth signals. Combined feature engineering, LightGBM modeling, funnel analysis, and user segmentation into a Streamlit app that gives product and growth teams a prioritized action queue, complete with revenue opportunity estimates and cost-risk views.',badges:[{text:'⚡ ODSC AI Datathon',variant:'default'},{text:'🥈 2nd Place',variant:'silver'}],tags:['Python','LightGBM','XGBoost','Streamlit','Product Analytics','Segmentation'],links:[{label:'▶ Watch Demo',url:'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view'}]},
    {id:'clay',featured:true,featuredStyle:'flagship',title:'Turning GTM Signals Into Revenue-Ready Decisions',wordmark:'Clay',wordmarkAccent:'Revenue Intelligence',description:'An end-to-end, Clay-inspired revenue intelligence platform built on Snowflake, dbt, Streamlit, and Sigma. Product usage, pipeline, and support data flow through governed dbt models into an interactive decision-support app that scores activation, expansion-readiness, and churn risk, and lets GTM leaders run revenue what-if scenarios — the full stack from raw signal to executive-ready action.',badges:[{text:'⭐ Flagship Project',variant:'flagship'}],tags:['Snowflake','dbt','Streamlit','Sigma','Python','SQL'],links:[{label:'▶ Live App',url:'https://clay-revenue-intelligence.streamlit.app/',primary:true},{label:'▶ Watch Demo',url:'https://drive.google.com/file/d/1myC2VvyljWLBQ4f85bczDpQe_W-xmZa9/view'},{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/clay-revenue-intelligence'}]},
    {id:'llm',featured:true,title:'LLM Differential Diagnosis',description:'GPT-4o and Gemini-powered clinical decision support system built with Wolters Kluwer Health. Benchmarked prompt engineering frameworks and evaluated reasoning quality for real-world healthcare applications.',badges:[{text:'Industry Capstone',variant:'default'}],tags:['GPT-4o','Gemini','LLM','Healthcare AI'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/ai-differential-diagnosis'}],isExternalLink:true},
    {id:'spotify',featured:true,title:'Spotify Playlist Prediction Pipeline',description:'Production-grade AWS data pipeline using S3 for storage, Glue for ETL, Athena for querying, and QuickSight for visualization. A complete, scalable analytics solution from ingestion to insight.',badges:[{text:'Cloud Pipeline',variant:'default'}],tags:['AWS','S3 / Glue','Athena','QuickSight'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/spotify-playlist-prediction-aws'}],isExternalLink:true},
    {id:'workforce',featured:true,title:'Workforce Insights Dashboard',description:'Cognos-based HR analytics platform for Colorado West Healthcare. Integrated SQL and Python pipelines to standardize KPI reporting and automate labor-cost forecasting for hospital administrators.',badges:[{text:'Industry Capstone',variant:'default'}],tags:['IBM Cognos','SQL','Python','HR Analytics'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/workforce-insights-dashboard'}],isExternalLink:true},
  ],
  otherProjects:[
    {id:'nlp',title:'NLP Disaster Tweet Classification',description:'BERT and DistilBERT classification of disaster-related content for real-time crisis detection.',tags:['NLP','BERT','PyTorch'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/NLP-Disaster-Tweets'}]},
    {id:'yelp',title:'Yelp Business Intelligence Platform',description:'End-to-end transformation pipeline for actionable business insights using Azure and Python.',tags:['Azure','Python','BI'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/Yelp-Business-Intelligence-Platform'}]},
    {id:'stock',title:'Stock Market Forecasting',description:'Predictive ML models and interactive dashboards for equity analysis and investment strategy.',tags:['Python','ML','Time Series'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/Stock-Market-Forecasting'}]},
    {id:'mlda',title:'MLDA Mortality Analysis',description:'Regression Discontinuity analysis on drinking age policy effects on mortality rates.',tags:['R','Causal Inference'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/MLDA-Mortality-Analysis'}]},
    {id:'property',title:'Property Value Prediction',description:'Predictive real estate modeling in R for urban planning and taxation policy support.',tags:['R','Regression','GIS'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/property-value-prediction'}]},
    {id:'blockchain',title:'Blockchain Analytics',description:'On-chain trend dashboards built with Dune Analytics and SQL for DeFi intelligence.',tags:['SQL','Dune','Web3'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/Blockchain-Dashboards'}]},
    {id:'coffee',title:'Coffee Shop Sales Dashboard',description:'Interactive Excel dashboard analyzing transaction patterns for operational insights.',tags:['Excel','Analytics'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/Coffee-Shop-Sales-Dashboard'}]},
    {id:'movie',title:'Cinematic Insights Dashboard',description:'Movie trends and ratings analysis using Python and Tableau.',tags:['Python','Tableau'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/movie-analytics-dashboard'}]},
    {id:'retail',title:'Retail Analytics and Strategy',description:'Multi-dimensional retail performance analysis using Wolfram Mathematica.',tags:['Mathematica','Strategy'],links:[{label:'↗ GitHub',url:'https://github.com/NikhitaShankar97/Retail-Analytics-and-Strategy'}]},
  ],

  socialLinks:[
    {platform:'LinkedIn',url:'https://www.linkedin.com/in/nikhita-shankar-analytics/',icon:'fab fa-linkedin'},
    {platform:'GitHub',url:'https://github.com/NikhitaShankar97',icon:'fab fa-github'},
    {platform:'Email',url:'mailto:nikhitashankar97@gmail.com',icon:'fas fa-envelope'},
  ],
  formspreeEndpoint:'https://formspree.io/f/xovvozlz',
}