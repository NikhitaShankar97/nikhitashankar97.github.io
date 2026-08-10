export interface Experience {
  id: string; company: string; logo?: string; role: string; period: string
  type: 'full-time'|'intern'|'volunteer'|'capstone'; description: string; technologies?: string[]
}
export interface Project {
  id: string; featured?: boolean; featuredStyle?: 'default'|'hackathon'|'flagship'|'silver'
  title: string; wordmark?: string; wordmarkAccent?: string; description: string
  badges?: {text:string;variant:'default'|'hackathon'|'winner'|'silver'|'flagship'}[]
  tags: string[]; links: {label:string;url:string;primary?:boolean}[]
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
      'At <strong>Obvience</strong>, I design analytics platforms where AI and human judgment meet, integrating Microsoft Fabric, Power BI, and agentic pipelines to help organizations stop guessing and start knowing. Before that, three years at <strong>ExxonMobil</strong> and a year at <strong>Hyperplane</strong> (a B2B fintech startup acquired by Nubank) building financial intelligence infrastructure at scale.',
      'With an MS in Business Analytics from <strong>UIUC</strong>, I work at the intersection of data engineering and applied AI. The best data work disappears into the product. Nobody notices the pipeline. Everyone notices the insight.',
    ]
  },
  hobbies:['\u{1F373} Cooking','\u2708\uFE0F Traveling','\u{1F3F8} Badminton','\u26BD Football','\u{1F3CF} Cricket','\u{1F3CE}\uFE0F Formula 1'],
  resumeUrl:'/Nikhita_Shankar_Resume.pdf',
  stats:[
    {value:'5+',label:'Years Experience'},{value:'4',label:'Companies'},
    {value:'15+',label:'Projects'},{value:'2',label:'Publications'},
  ],
  sidebar:{location:'United States',degree:'MS Business Analytics',degreeSub:'BE Computer Science',focus:'Data Engineering \u00B7 BI',focusSub:'Analytics \u00B7 Data Science',status:'Open to work'},
  skills:[
    {label:'Languages',skills:[
      {name:'Python',icon:'devicon-python-plain'},{name:'R',icon:'devicon-r-plain'},{name:'SQL',icon:'devicon-azuresqldatabase-plain'},{name:'DAX',icon:'fas fa-table'},{name:'M Language',icon:'fas fa-code'},
    ]},
    {label:'Data Engineering',skills:[
      {name:'Snowflake',icon:'devicon-snowflake-plain'},{name:'dbt',icon:'fas fa-diagram-project'},{name:'Databricks',icon:'devicon-databricks-plain'},{name:'Microsoft Fabric',icon:'fas fa-layer-group'},{name:'Azure Data Factory',icon:'devicon-azure-plain'},{name:'KNIME',icon:'fas fa-project-diagram'},
    ]},
    {label:'BI & Visualization',skills:[
      {name:'Power BI',icon:'fas fa-chart-bar'},{name:'Tableau',icon:'fas fa-chart-pie'},{name:'Sigma',icon:'fas fa-chart-line'},{name:'IBM Cognos',icon:'fas fa-th'},{name:'Excel',icon:'fas fa-file-excel'},
    ]},
    {label:'Cloud & Infrastructure',skills:[
      {name:'AWS',icon:'devicon-amazonwebservices-original'},{name:'Azure',icon:'devicon-azure-plain'},{name:'S3',icon:'devicon-amazonwebservices-plain'},{name:'Glue',icon:'fas fa-puzzle-piece'},{name:'Athena',icon:'fas fa-database'},
    ]},
    {label:'AI & Machine Learning',skills:[
      {name:'Scikit-learn',icon:'devicon-scikitlearn-plain'},{name:'XGBoost',icon:'fas fa-chart-area'},{name:'LightGBM',icon:'fas fa-bolt'},{name:'GPT-4o',icon:'fas fa-brain'},{name:'Gemini',icon:'fas fa-robot'},{name:'Prompt Engineering',icon:'fas fa-wand-magic-sparkles'},
    ]},
    {label:'Analytics & Experimentation',skills:[
      {name:'A/B Testing',icon:'fas fa-flask'},{name:'Statistical Modeling',icon:'fas fa-chart-scatter'},{name:'Causal Inference',icon:'fas fa-arrow-right-arrow-left'},{name:'Regression Analysis',icon:'fas fa-chart-line'},{name:'Hypothesis Testing',icon:'fas fa-check-double'},{name:'Product Analytics',icon:'fas fa-magnifying-glass-chart'},
    ]},
  ],
  education:[
    {id:'uiuc',logo:'/uiuc_logo.png',years:'2024 \u2013 2025',school:'University of Illinois Urbana-Champaign',degree:'Master of Science in Business Analytics',note:'Beta Gamma Sigma Honor Society inductee'},
    {id:'rvce',logo:'/rvce_logo.png',years:'2016 \u2013 2020',school:'R.V. College of Engineering',degree:'Bachelor of Engineering in Computer Science',note:'Published undergraduate research in IRJET'},
  ],
  honors:[
    {id:'bgs',icon:'\u{1F3DB}',tag:'Honor Society',title:'Beta Gamma Sigma',description:'Inducted into the international business honor society, recognizing the top 20% of business graduates globally.',links:[{label:'Society \u2197',url:'https://www.betagammasigma.org/home'},{label:'Certificate \u2197',url:'/BGS_Membership_Certificate.pdf'}]},
    {id:'aws',icon:'\u2601\uFE0F',tag:'Certification',title:'AWS Certified Cloud Practitioner',description:'Validated foundational knowledge of AWS cloud architecture, core services, security, and best practices.',links:[{label:'View Credential \u2197',url:'https://www.credly.com/badges/a43a4d9f-bed3-4567-a006-6a6921d92c60'}]},
    {id:'exxon-awards',icon:'\u{1F3C6}',tag:'Award',title:'ExxonMobil Recognition Awards',description:'Annual Bright Beginner Award and Quarterly Recognition Award for innovation and excellence in analytics delivery.',links:[{label:'Annual Award \u2197',url:'/ExxonMobil_Annual_Recognition_Certificate.pdf'},{label:'Quarterly \u2197',url:'/ExxonMobil_Quarterly_Recognition_Certificate.pdf'}]},
    {id:'irjet',icon:'\u{1F4C4}',tag:'Publication',title:'Review of Recommendation Systems, IRJET',description:'Published review of collaborative, content-based, and hybrid filtering techniques with matrix factorization implementation.',links:[{label:'Read Paper \u2197',url:'https://irjet.net/archives/V7/i5/IRJET-V7I5303.pdf'}]},
    {id:'first48',icon:'\u{1F947}',tag:'1st Place \u00B7 Hackathon',tagVariant:'winner',cardVariant:'winner',title:'Zerve x HackerEarth Hackathon \u2014 First Place',description:'Won first place for First48, predicting long-term user success from 48 hours of behavioral data. Random Forest AUC ~0.98.',links:[{label:'View Notebook \u2197',url:'https://www.zerve.ai/gallery/6c20e273-9afb-4fc5-8dfa-9b8a44829b24'},{label:'Announcement \u2197',url:'https://www.linkedin.com/posts/zerve-ai_we-just-wrapped-the-zerve-x-hackerearth-hackathon-activity-7454448842118426625-tAdy'}]},
    {id:'odsc',icon:'\u{1F948}',tag:'2nd Place \u00B7 Datathon',tagVariant:'silver',cardVariant:'silver',title:'ODSC AI Datathon \u2014 2nd Place',description:'Built UpNext, a product-led growth intelligence tool combining ML upgrade prediction, user segmentation, and funnel analysis.',links:[{label:'View Notebook \u2197',url:'https://app.zerve.ai/notebook/f74703d8-d9e0-4a18-937d-5041e653acc2'},{label:'Announcement \u2197',url:'https://www.linkedin.com/posts/odsc-ai_odscai-datathon-datascience-activity-7456008697786458112-uN90'}]},
    {id:'emosense',icon:'\u{1F9E0}',tag:'Publication',title:'EmoSense, Zenodo 2025',description:'Privacy-preserving framework for early burnout detection using behavioral metadata.',links:[{label:'Read Paper \u2197',url:'https://zenodo.org/records/18058997'}]},
  ],
  experience:[
    {id:'obvience',company:'Obvience',logo:'/obvience_logo.png',role:'Data Engineer',period:'2025 \u2013 Present',type:'full-time',description:'Designing and implementing end-to-end analytics solutions using Microsoft Fabric, Power BI, and SQL Server.',technologies:['Microsoft Fabric','Power BI','SQL Server']},
    {id:'workgaze',company:'WorkGaze',logo:'/workgaze_logo.png',role:'Data Engineer',period:'Aug \u2013 Sep 2025',type:'volunteer',description:'Built automated data workflows for AI-driven workplace analytics at Global Launch Inc.'},
    {id:'wolters',company:'Wolters Kluwer',logo:'/wolterskluwer_logo.png',role:'Data Science and AI Consultant',period:'Jan \u2013 May 2025',type:'capstone',description:'Developed LLM-based differential diagnosis system using GPT-4o and Gemini for clinical decision support.',technologies:['GPT-4o','Gemini','LLM','Healthcare AI']},
    {id:'colorado',company:'Colorado West Healthcare',logo:'/coloradowest_logo.png',role:'Data Engineering and Analytics Lead',period:'Aug \u2013 Dec 2024',type:'capstone',description:'Designed Cognos-based Workforce Insights Dashboard with SQL and Python pipelines for HR KPI reporting.',technologies:['IBM Cognos','SQL','Python','HR Analytics']},
    {id:'hyperplane',company:'Hyperplane',logo:'/hyperplane_logo.png',role:'Data Engineer',period:'May 2023 \u2013 May 2024',type:'full-time',description:'Built data platforms and financial intelligence systems at a fintech startup, supporting through acquisition by Nubank.'},
    {id:'exxonmobil',company:'ExxonMobil',logo:'/exxonmobil_logo.png',role:'Data Science / Analytics / Data Engineering',period:'Jan 2020 \u2013 Apr 2023',type:'full-time',description:'Three-year tenure across data science, analytics, and engineering. Won Annual Bright Beginner Award and Quarterly Recognition Award.'},
    {id:'softtek',company:'Softtek',logo:'/softtek_logo.png',role:'Engineering Intern',period:'Jun \u2013 Jul 2019',type:'intern',description:'Contributed to software engineering projects at a global IT services firm.'},
  ],
  featuredProjects:[
    {id:'first48',featured:true,featuredStyle:'hackathon',title:'What Drives Successful Usage in the First 48 Hours?',wordmark:'First',wordmarkAccent:'48',description:'Full product analytics pipeline predicting long-term user success from 48 hours of behavioral data. Random Forest classifier AUC ~0.98, user segmentation, interactive Streamlit app.',badges:[{text:'\u26A1 Zerve x HackerEarth',variant:'hackathon'},{text:'\u{1F947} 1st Place',variant:'winner'}],tags:['Python','Random Forest','Behavioral ML','Product Analytics','Segmentation'],links:[{label:'\u25B6 Watch Demo',url:'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view'}]},
    {id:'upnext',featured:true,featuredStyle:'silver',title:'Product-Led Growth Intelligence for Zerve',wordmark:'Up',wordmarkAccent:'Next',description:'24-hour datathon build predicting subscription upgrades. LightGBM + XGBoost, funnel analysis, user segmentation, Streamlit app with revenue estimates.',badges:[{text:'\u26A1 ODSC AI Datathon',variant:'default'},{text:'\u{1F948} 2nd Place',variant:'silver'}],tags:['Python','LightGBM','XGBoost','Streamlit','Product Analytics'],links:[{label:'\u25B6 Watch Demo',url:'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view'}]},
    {id:'clay',featured:true,featuredStyle:'flagship',title:'Turning GTM Signals Into Revenue-Ready Decisions',wordmark:'Clay',wordmarkAccent:'Revenue Intelligence',description:'End-to-end revenue intelligence platform on Snowflake, dbt, Streamlit, and Sigma. Governed dbt models feed an interactive decision-support app for GTM leaders.',badges:[{text:'\u2B50 Flagship Project',variant:'flagship'}],tags:['Snowflake','dbt','Streamlit','Sigma','Python','SQL'],links:[{label:'\u25B6 Live App',url:'https://clay-revenue-intelligence.streamlit.app/',primary:true},{label:'\u25B6 Watch Demo',url:'https://drive.google.com/file/d/1myC2VvyljWLBQ4f85bczDpQe_W-xmZa9/view'},{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/clay-revenue-intelligence'}]},
    {id:'llm',featured:true,title:'LLM Differential Diagnosis',description:'GPT-4o and Gemini-powered clinical decision support system built with Wolters Kluwer Health.',badges:[{text:'Industry Capstone',variant:'default'}],tags:['GPT-4o','Gemini','LLM','Healthcare AI'],links:[],isExternalLink:true},
    {id:'spotify',featured:true,title:'Spotify Playlist Prediction Pipeline',description:'Production-grade AWS pipeline: S3 \u2192 Glue \u2192 Athena \u2192 QuickSight.',badges:[{text:'Cloud Pipeline',variant:'default'}],tags:['AWS','S3/Glue','Athena','QuickSight'],links:[],isExternalLink:true},
    {id:'workforce',featured:true,title:'Workforce Insights Dashboard',description:'Cognos-based HR analytics platform for Colorado West Healthcare.',badges:[{text:'Industry Capstone',variant:'default'}],tags:['IBM Cognos','SQL','Python','HR Analytics'],links:[],isExternalLink:true},
  ],
  otherProjects:[
    {id:'nlp',title:'NLP Disaster Tweet Classification',description:'BERT and DistilBERT for crisis detection.',tags:['NLP','BERT','PyTorch'],links:[]},
    {id:'yelp',title:'Yelp Business Intelligence Platform',description:'End-to-end BI pipeline with Azure and Python.',tags:['Azure','Python','BI'],links:[]},
    {id:'stock',title:'Stock Market Forecasting',description:'ML models and dashboards for equity analysis.',tags:['Python','ML','Time Series'],links:[]},
    {id:'mlda',title:'MLDA Mortality Analysis',description:'Regression Discontinuity on drinking age policy effects.',tags:['R','Causal Inference'],links:[]},
    {id:'property',title:'Property Value Prediction',description:'Predictive real estate modeling for urban planning.',tags:['R','Regression','GIS'],links:[]},
    {id:'blockchain',title:'Blockchain Analytics',description:'On-chain dashboards with Dune Analytics and SQL.',tags:['SQL','Dune','Web3'],links:[]},
    {id:'coffee',title:'Coffee Shop Sales Dashboard',description:'Interactive Excel dashboard for operational insights.',tags:['Excel','Analytics'],links:[]},
    {id:'movie',title:'Cinematic Insights Dashboard',description:'Movie trends analysis with Python and Tableau.',tags:['Python','Tableau'],links:[]},
    {id:'retail',title:'Retail Analytics and Strategy',description:'Multi-dimensional analysis with Wolfram Mathematica.',tags:['Mathematica','Strategy'],links:[]},
  ],
  socialLinks:[
    {platform:'LinkedIn',url:'https://www.linkedin.com/in/nikhita-shankar-analytics/',icon:'fab fa-linkedin'},
    {platform:'GitHub',url:'https://github.com/NikhitaShankar97',icon:'fab fa-github'},
    {platform:'Email',url:'mailto:nikhitashankar97@gmail.com',icon:'fas fa-envelope'},
  ],
  formspreeEndpoint:'https://formspree.io/f/xovvozlz',
}
