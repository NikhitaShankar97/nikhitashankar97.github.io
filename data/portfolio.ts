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
  hobbies:['\u{1F373} Cooking','\u2708\uFE0F Traveling','\u{1F3F8} Badminton','\u26BD Football','\u{1F3CF} Cricket','\u{1F3CE}\uFE0F Formula 1'],
  resumeUrl:'/Nikhita_Shankar_Resume.pdf',
  stats:[{value:'5+',label:'Years Experience'},{value:'4',label:'Companies'},{value:'15+',label:'Projects'},{value:'2',label:'Publications'}],
  sidebar:{location:'United States',degree:'MS Business Analytics',degreeSub:'BE Computer Science',focus:'Data Engineering \u00B7 BI',focusSub:'Analytics \u00B7 Data Science',status:'Open to work'},
  skills:[
    {label:'Languages & Core',skills:[
      {name:'Python',icon:'devicon-python-plain'},{name:'R',icon:'devicon-r-plain'},{name:'SQL',icon:'devicon-azuresqldatabase-plain'},{name:'DAX',icon:'fas fa-table'},{name:'Power Query M',icon:'fas fa-code'},
    ]},
    {label:'Data Engineering',skills:[
      {name:'Snowflake',icon:'devicon-snowflake-plain'},{name:'dbt',icon:'fas fa-diagram-project'},{name:'Databricks',icon:'devicon-databricks-plain'},{name:'Microsoft Fabric',icon:'fas fa-layer-group'},{name:'Azure Data Factory',icon:'devicon-azure-plain'},{name:'KNIME',icon:'fas fa-project-diagram'},
    ]},
    {label:'BI & Visualization',skills:[
      {name:'Power BI',icon:'fas fa-chart-bar'},{name:'Tableau',icon:'fas fa-chart-pie'},{name:'Sigma',icon:'fas fa-chart-line'},{name:'IBM Cognos',icon:'fas fa-th'},{name:'Excel',icon:'fas fa-file-excel'},{name:'Power Apps',icon:'fas fa-mobile-screen'},
    ]},
    {label:'Cloud & Infrastructure',skills:[
      {name:'AWS',icon:'devicon-amazonwebservices-original'},{name:'Azure',icon:'devicon-azure-plain'},{name:'S3 / Glue / Athena',icon:'fas fa-cloud'},{name:'CI/CD Pipelines',icon:'fas fa-code-branch'},
    ]},
    {label:'AI, ML & Analytics',skills:[
      {name:'LLMs & Prompt Engineering',icon:'fas fa-brain'},{name:'Scikit-learn',icon:'devicon-scikitlearn-plain'},{name:'XGBoost / LightGBM',icon:'fas fa-chart-area'},{name:'A/B Testing',icon:'fas fa-flask'},{name:'Statistical Modeling',icon:'fas fa-chart-scatter'},{name:'Causal Inference',icon:'fas fa-arrow-right-arrow-left'},
    ]},
  ],
  education:[
    {id:'uiuc',logo:'/uiuc_logo.png',years:'2024 \u2013 2025',school:'University of Illinois Urbana-Champaign',degree:'MS Business Analytics',note:'Beta Gamma Sigma Honor Society'},
    {id:'rvce',logo:'/rvce_logo.png',years:'2016 \u2013 2020',school:'R.V. College of Engineering',degree:'BE Computer Science',note:'Published research in IRJET'},
  ],
  honors:[
    {id:'bgs',icon:'\u{1F3DB}',tag:'Honor Society',title:'Beta Gamma Sigma',description:'Top 20% of business graduates globally.',links:[{label:'Society',url:'https://www.betagammasigma.org/home'}]},
    {id:'aws',icon:'\u2601\uFE0F',tag:'Certification',title:'AWS Cloud Practitioner',description:'Foundational AWS architecture, security, and services.',links:[{label:'Credential',url:'https://www.credly.com/badges/a43a4d9f-bed3-4567-a006-6a6921d92c60'}]},
    {id:'exxon',icon:'\u{1F3C6}',tag:'Award',title:'ExxonMobil Bright Beginner',description:'Annual award for innovation in analytics delivery.',links:[]},
    {id:'irjet',icon:'\u{1F4C4}',tag:'Publication',title:'Recommendation Systems, IRJET',description:'Collaborative, content-based, and hybrid filtering techniques.',links:[{label:'Paper',url:'https://irjet.net/archives/V7/i5/IRJET-V7I5303.pdf'}]},
    {id:'first48',icon:'\u{1F947}',tag:'1st Place',tagVariant:'winner',cardVariant:'winner',title:'Zerve x HackerEarth Hackathon',description:'First48: Predicted user success from 48h behavioral data. AUC ~0.98.',links:[{label:'Notebook',url:'https://www.zerve.ai/gallery/6c20e273-9afb-4fc5-8dfa-9b8a44829b24'}]},
    {id:'odsc',icon:'\u{1F948}',tag:'2nd Place',tagVariant:'silver',cardVariant:'silver',title:'ODSC AI Datathon',description:'UpNext: Product-led growth intelligence tool with ML and segmentation.',links:[{label:'Notebook',url:'https://app.zerve.ai/notebook/f74703d8-d9e0-4a18-937d-5041e653acc2'}]},
    {id:'emosense',icon:'\u{1F9E0}',tag:'Publication',title:'EmoSense, Zenodo 2025',description:'Privacy-preserving burnout detection using behavioral metadata.',links:[{label:'Paper',url:'https://zenodo.org/records/18058997'}]},
  ],
  experience:[
    {id:'obvience',company:'Obvience',logo:'/obvience_logo.png',role:'Data Engineer',period:'2025 \u2013 Present',type:'full-time',description:'Designing end-to-end analytics solutions with Microsoft Fabric, Power BI, and SQL Server. Building agentic AI pipelines for enterprise decision support.'},
    {id:'workgaze',company:'WorkGaze',logo:'/workgaze_logo.png',role:'Data Engineer (Volunteer)',period:'Aug \u2013 Sep 2025',type:'volunteer',description:'Built automated data workflows for AI-driven workplace analytics platform.'},
    {id:'wolters',company:'Wolters Kluwer',logo:'/wolterskluwer_logo.png',role:'AI Consultant (Capstone)',period:'Jan \u2013 May 2025',type:'capstone',description:'LLM-based differential diagnosis system. Benchmarked prompt engineering frameworks for clinical decision support.'},
    {id:'colorado',company:'Colorado West Healthcare',logo:'/coloradowest_logo.png',role:'Analytics Lead (Capstone)',period:'Aug \u2013 Dec 2024',type:'capstone',description:'Workforce Insights Dashboard with SQL, Python, and Cognos. Automated labor-cost forecasting for hospital administrators.'},
    {id:'hyperplane',company:'Hyperplane (acq. Nubank)',logo:'/hyperplane_logo.png',role:'Data Engineer',period:'May 2023 \u2013 May 2024',type:'full-time',description:'Built data platforms and financial intelligence systems from scratch at a B2B fintech startup.'},
    {id:'exxonmobil',company:'ExxonMobil',logo:'/exxonmobil_logo.png',role:'Data Science & Analytics',period:'Jan 2020 \u2013 Apr 2023',type:'full-time',description:'Three years across data science, analytics, and engineering. Won Bright Beginner Award and Quarterly Recognition Award.'},
    {id:'softtek',company:'Softtek',logo:'/softtek_logo.png',role:'Engineering Intern',period:'Jun \u2013 Jul 2019',type:'intern',description:'Software engineering at global IT services firm.'},
  ],
  featuredProjects:[
    {id:'first48',featured:true,featuredStyle:'hackathon',title:'First48: Predicting User Success from Early Behavior',wordmark:'First',wordmarkAccent:'48',description:'Product analytics pipeline predicting long-term user success from 48 hours of behavioral data. Random Forest AUC ~0.98, user segmentation, Streamlit app.',badges:[{text:'1st Place Hackathon',variant:'winner'}],tags:['Python','Random Forest','Product Analytics','Segmentation'],links:[{label:'Watch Demo',url:'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view'}]},
    {id:'upnext',featured:true,featuredStyle:'silver',title:'UpNext: Product-Led Growth Intelligence',wordmark:'Up',wordmarkAccent:'Next',description:'ML-based upgrade prediction, funnel analysis, and user segmentation. Revenue opportunity estimates for product and growth teams.',badges:[{text:'2nd Place Datathon',variant:'silver'}],tags:['Python','LightGBM','XGBoost','Product Analytics'],links:[{label:'Watch Demo',url:'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view'}]},
    {id:'clay',featured:true,featuredStyle:'flagship',title:'Clay Revenue Intelligence',wordmark:'Clay',wordmarkAccent:'Revenue Intelligence',description:'End-to-end GTM intelligence on Snowflake, dbt, Streamlit, and Sigma. Governed models feed decision-support app for activation, expansion, and churn scoring.',badges:[{text:'Flagship',variant:'flagship'}],tags:['Snowflake','dbt','Streamlit','Sigma','SQL'],links:[{label:'Live App',url:'https://clay-revenue-intelligence.streamlit.app/',primary:true},{label:'GitHub',url:'https://github.com/NikhitaShankar97/clay-revenue-intelligence'}]},
    {id:'llm',featured:true,title:'LLM Differential Diagnosis',description:'Clinical decision support with LLMs and prompt engineering benchmarks for healthcare AI.',badges:[{text:'Capstone',variant:'default'}],tags:['LLMs','Prompt Engineering','Healthcare AI'],links:[],isExternalLink:true},
    {id:'spotify',featured:true,title:'AWS Analytics Pipeline',description:'Production pipeline: S3, Glue, Athena, QuickSight. Scalable from ingestion to visualization.',badges:[{text:'Cloud',variant:'default'}],tags:['AWS','S3','Glue','Athena','QuickSight'],links:[],isExternalLink:true},
    {id:'workforce',featured:true,title:'Workforce Insights Dashboard',description:'Cognos HR analytics with SQL and Python pipelines. Automated KPI reporting and labor forecasting.',badges:[{text:'Capstone',variant:'default'}],tags:['IBM Cognos','SQL','Python','HR Analytics'],links:[],isExternalLink:true},
  ],
  otherProjects:[
    {id:'nlp',title:'NLP Disaster Classification',description:'BERT and DistilBERT for real-time crisis detection.',tags:['NLP','BERT','PyTorch'],links:[]},
    {id:'yelp',title:'Yelp BI Platform',description:'End-to-end pipeline with Azure and Python.',tags:['Azure','Python','BI'],links:[]},
    {id:'stock',title:'Stock Market Forecasting',description:'ML models and dashboards for equity analysis.',tags:['Python','ML','Time Series'],links:[]},
    {id:'mlda',title:'Mortality Analysis',description:'Regression Discontinuity on policy effects.',tags:['R','Causal Inference'],links:[]},
    {id:'property',title:'Property Value Prediction',description:'Predictive modeling for urban planning.',tags:['R','Regression','GIS'],links:[]},
    {id:'blockchain',title:'Blockchain Analytics',description:'On-chain dashboards with Dune and SQL.',tags:['SQL','Dune','Web3'],links:[]},
    {id:'coffee',title:'Coffee Shop Dashboard',description:'Excel dashboard for operational insights.',tags:['Excel','Analytics'],links:[]},
    {id:'movie',title:'Cinematic Insights',description:'Movie trends with Python and Tableau.',tags:['Python','Tableau'],links:[]},
    {id:'retail',title:'Retail Analytics',description:'Multi-dimensional analysis with Mathematica.',tags:['Mathematica','Strategy'],links:[]},
  ],
  socialLinks:[
    {platform:'LinkedIn',url:'https://www.linkedin.com/in/nikhita-shankar-analytics/',icon:'fab fa-linkedin'},
    {platform:'GitHub',url:'https://github.com/NikhitaShankar97',icon:'fab fa-github'},
    {platform:'Email',url:'mailto:nikhitashankar97@gmail.com',icon:'fas fa-envelope'},
  ],
  formspreeEndpoint:'https://formspree.io/f/xovvozlz',
}
