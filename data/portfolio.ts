export interface Experience {
  id: string; company: string; logo?: string; role: string; period: string
  type: 'full-time'|'intern'|'volunteer'|'capstone'; description: string; metrics?: string; technologies?: string[]
}
export interface Project {
  id: string; featured?: boolean; featuredStyle?: 'default'|'hackathon'|'flagship'|'silver'
  title: string; wordmark?: string; wordmarkAccent?: string; description: string; metrics?: string
  badges?: {text:string;variant:'default'|'hackathon'|'winner'|'silver'|'flagship'}[]
  tags: string[]; links: {label:string;url:string;primary?:boolean}[]; isExternalLink?: boolean
}
export interface Honor {
  id: string; icon: string; tag: string; tagVariant?: 'default'|'winner'|'silver'
  cardVariant?: 'default'|'winner'|'silver'; title: string; description: string
  links: {label:string;url:string}[]
}
export interface SkillCategory { label: string; skills: {name:string;icon:string}[] }
export interface Education { id:string;logo:string;years:string;school:string;degree:string;note?:string;gpa?:string }
export interface Stat { value:string;label:string }
export interface SocialLink { platform:string;url:string;icon:string }
export interface Testimonial { quote:string;name:string;role:string;company:string;image?:string }
export interface PortfolioData {
  name:string;firstName:string;lastName:string;initials:string;email:string;location:string
  status:string;lookingFor:string;headline:string;heroValueProp:string;taglineMessages:string[]
  bio:{lead:string;paragraphs:string[]};hobbies:string[];resumeUrl:string;stats:Stat[]
  sidebar:{location:string;degree:string;degreeSub:string;focus:string;focusSub:string;status:string}
  skills:SkillCategory[];education:Education[];honors:Honor[];experience:Experience[]
  featuredProjects:Project[];otherProjects:Project[];testimonials:Testimonial[]
  socialLinks:SocialLink[];formspreeEndpoint:string
}

export const portfolioData: PortfolioData = {
  name:'Nikhita Shankar',firstName:'Nikhita',lastName:'Shankar',initials:'NS',
  email:'nikhitashankar97@gmail.com',location:'Bay Area, CA',
  status:'Open to opportunities',
  lookingFor:'Seeking Data Engineer or Analytics Engineer roles at product-driven companies. Based in the Bay Area, open to relocation across the US. Excited about modern data stacks (dbt, Snowflake, Fabric) and teams that treat data as a product.',
  headline:'Data Engineer & Analytics Professional',
  heroValueProp:'5+ years turning raw data into revenue decisions. +/month in savings at ExxonMobil. Built fintech infrastructure that survived a Nubank acquisition. Now shipping Fabric, dbt, and AI-powered analytics at Obvience.',
  taglineMessages:['Data Engineer','Analytics Engineer','BI & Pipeline Architect','MS Business Analytics, UIUC'],
  bio:{
    lead:"I build the data infrastructure that <strong>turns complexity into revenue</strong> \u2014 pipelines, semantic models, and AI-ready systems that make decisions faster and more accurate.",
    paragraphs:[
      'At <strong>Obvience</strong>, I design end-to-end analytics platforms across Microsoft Fabric, Power BI, and SQL Server, improving downstream reporting accuracy by 30% and saving 10\u201312 hours of weekly QA effort. At <strong>ExxonMobil</strong>, I automated financial reporting that reduced errors to under 0.01% and drove over <strong>\ in monthly savings</strong>. At <strong>Hyperplane</strong> (acquired by Nubank), I built data infrastructure processing 200K+ monthly transactions across 10M+ records.',
      'With an MS from <strong>UIUC</strong> (3.96 GPA, Beta Gamma Sigma) and two global hackathon wins, I bridge data engineering with applied AI. I do not just move data \u2014 I build the governed layers that make analytics, ML, and business decisions actually work.',
    ]
  },
  hobbies:['\u{1F373} Cooking','\u2708\uFE0F Traveling','\u{1F3F8} Badminton','\u26BD Football','\u{1F3CF} Cricket','\u{1F3CE}\uFE0F Formula 1'],
  resumeUrl:'/Nikhita_Shankar_Resume.pdf',
  stats:[{value:'5+',label:'Years Experience'},{value:'\+',label:'Monthly Savings'},{value:'15+',label:'Projects'},{value:'2',label:'Hackathon Wins'}],
  sidebar:{location:'Bay Area, CA',degree:'MS Business Analytics, 3.96 GPA',degreeSub:'BE Computer Science',focus:'Data Engineering \u00B7 BI',focusSub:'Analytics \u00B7 AI',status:'Open to work'},

  skills:[
    {label:'Data Engineering',skills:[{name:'Snowflake',icon:'devicon-snowflake-plain'},{name:'dbt',icon:'fas fa-diagram-project'},{name:'Databricks',icon:'devicon-databricks-plain'},{name:'Microsoft Fabric',icon:'fas fa-layer-group'},{name:'Airflow',icon:'fas fa-wind'},{name:'Azure Data Factory',icon:'devicon-azure-plain'}]},
    {label:'BI & Analytics',skills:[{name:'Power BI',icon:'fas fa-chart-bar'},{name:'Tableau',icon:'fas fa-chart-pie'},{name:'Sigma',icon:'fas fa-chart-line'},{name:'Hex',icon:'fas fa-cube'},{name:'IBM Cognos',icon:'fas fa-th'},{name:'Excel',icon:'fas fa-file-excel'}]},
    {label:'Languages & Core',skills:[{name:'Python',icon:'devicon-python-plain'},{name:'R',icon:'devicon-r-plain'},{name:'SQL',icon:'devicon-azuresqldatabase-plain'},{name:'DAX',icon:'fas fa-table'},{name:'SparkSQL',icon:'fas fa-bolt'}]},
    {label:'Cloud & Infra',skills:[{name:'AWS',icon:'devicon-amazonwebservices-original'},{name:'Azure',icon:'devicon-azure-plain'},{name:'BigQuery',icon:'fas fa-database'},{name:'CI/CD',icon:'fas fa-code-branch'}]},
    {label:'AI, ML & Analytics',skills:[{name:'LLMs & Prompt Engineering',icon:'fas fa-brain'},{name:'A/B Testing',icon:'fas fa-flask'},{name:'Statistical Modeling',icon:'fas fa-chart-scatter'},{name:'Causal Inference',icon:'fas fa-arrow-right-arrow-left'},{name:'ML Evaluation',icon:'fas fa-clipboard-check'}]},
  ],

  education:[
    {id:'uiuc',logo:'/uiuc_logo.png',years:'2024 \u2013 2025',school:'University of Illinois Urbana-Champaign',degree:'MS Business Analytics, Data Science Track',note:'3.96 GPA \u00B7 Beta Gamma Sigma Honor Society',gpa:'3.96'},
    {id:'rvce',logo:'/rvce_logo.png',years:'2016 \u2013 2020',school:'R.V. College of Engineering',degree:'BE Computer Science',note:'Published research in IRJET'},
  ],

  honors:[
    {id:'bgs',icon:'\u{1F3DB}',tag:'Honor Society',title:'Beta Gamma Sigma',description:'Top 20% of business graduates globally.',links:[{label:'Society',url:'https://www.betagammasigma.org/home'},{label:'Certificate',url:'/BGS_Membership_Certificate.pdf'}]},
    {id:'aws',icon:'\u2601\uFE0F',tag:'Certification',title:'AWS Cloud Practitioner',description:'Validated AWS architecture, security, and services knowledge.',links:[{label:'Credly',url:'https://www.credly.com/badges/a43a4d9f-bed3-4567-a006-6a6921d92c60'},{label:'Certificate',url:'/AWS Certified Cloud Practitioner certificate.pdf'}]},
    {id:'exxon',icon:'\u{1F3C6}',tag:'Awards',title:'ExxonMobil Recognition',description:'Bright Beginner, Top Performer, and Quarterly Recognition awards.',links:[{label:'Annual Award',url:'/ExxonMobil Annual Recognition Certificate.pdf'},{label:'Quarterly',url:'/ExxonMobil Quarterly Recognition Certificate.pdf'}]},
    {id:'irjet',icon:'\u{1F4C4}',tag:'Publication',title:'Recommendation Systems, IRJET',description:'Collaborative, content-based, and hybrid filtering with SVD implementation.',links:[{label:'Read Paper',url:'https://irjet.net/archives/V7/i5/IRJET-V7I5303.pdf'}]},
    {id:'first48',icon:'\u{1F947}',tag:'1st Place',tagVariant:'winner',cardVariant:'winner',title:'Zerve x HackerEarth AI Hackathon',description:'First48: Predicted user success from 48h data. AUC 0.98. Won 1st place globally.',links:[{label:'Notebook',url:'https://www.zerve.ai/gallery/6c20e273-9afb-4fc5-8dfa-9b8a44829b24'},{label:'Announcement',url:'https://www.linkedin.com/posts/zerve-ai_we-just-wrapped-the-zerve-x-hackerearth-hackathon-activity-7454448842118426625-tAdy'}]},
    {id:'odsc',icon:'\u{1F948}',tag:'2nd Place',tagVariant:'silver',cardVariant:'silver',title:'ODSC AI Datathon, Boston',description:'UpNext: Growth intelligence with ML, segmentation, and revenue estimates.',links:[{label:'Notebook',url:'https://app.zerve.ai/notebook/f74703d8-d9e0-4a18-937d-5041e653acc2'},{label:'Announcement',url:'https://www.linkedin.com/posts/odsc-ai_odscai-datathon-datascience-activity-7456008697786458112-uN90'}]},
    {id:'emosense',icon:'\u{1F9E0}',tag:'Publication',title:'EmoSense, Zenodo 2025',description:'Privacy-preserving burnout detection with Emotional Stability Drift Index.',links:[{label:'Read Paper',url:'https://zenodo.org/records/18058997'}]},
  ],

  experience:[
    {id:'obvience',company:'Obvience',logo:'/obvience_logo.png',role:'Data Engineer',period:'2025 \u2013 Present',type:'full-time',description:'Design end-to-end analytics solutions across Microsoft Fabric, Power BI, and SQL Server for pharmaceutical, manufacturing, and procurement clients. Built 20+ tables, semantic models, and dashboards. Benchmarked 250+ Copilot-generated DAX measures for enterprise AI evaluation.',metrics:'30% reporting accuracy improvement \u00B7 10\u201312 hrs/week QA saved \u00B7 40% fewer repeat data questions \u00B7 5+ source systems'},
    {id:'hyperplane',company:'Hyperplane (acq. Nubank)',logo:'/hyperplane_logo.png',role:'Data Engineer & Analyst',period:'May 2023 \u2013 May 2024',type:'full-time',description:'Built data infrastructure for 3 fintech products during growth and acquisition. Replaced ad-hoc scripts with scheduled Airflow pipelines. Built reusable customer, transaction, and cohort datasets. Implemented data quality controls and experiment validation.',metrics:'10M+ records \u00B7 200K+ monthly transactions \u00B7 35% faster processing \u00B7 20\u201325% faster experiment review'},
    {id:'exxonmobil',company:'ExxonMobil',logo:'/exxonmobil_logo.png',role:'Business Analyst & Engineer',period:'2020 \u2013 2023',type:'full-time',description:'Automated SAP COPA financial reporting with Snowflake SQL, reducing errors to under 0.01%. Built Salesforce dashboards capturing \/month in missed conversions. Developed Power Apps pricing tools and Tableau dashboards supporting \ in annual benefits.',metrics:'\+/month savings \u00B7 0.01% error rate \u00B7 150 users \u00B7 \ annual benefits \u00B7 \.18M monthly profit'},
    {id:'wolters',company:'Wolters Kluwer',logo:'/wolterskluwer_logo.png',role:'AI Consultant (Capstone)',period:'Jan \u2013 May 2025',type:'capstone',description:'LLM-based differential diagnosis with GPT-4o and Gemini. Structured clinical PDFs, built Streamlit prototype, evaluated 20\u201325 NEJM cases with top-k accuracy, MRR, and DCG.',metrics:'Top-3 accuracy: 18/20 \u00B7 MRR: 0.675 \u00B7 DCG: 0.754'},
    {id:'colorado',company:'Colorado West Healthcare',logo:'/coloradowest_logo.png',role:'Analytics Lead (Capstone)',period:'Aug \u2013 Dec 2024',type:'capstone',description:'Led 6-person team converting UKG workforce data into 5 Cognos dashboards. Standardized KPIs for staffing, turnover, overtime, and productivity. Replaced manual reporting with automated pipelines.',metrics:'10 hrs/week saved \u00B7 15% overtime reduction \u00B7 5 dashboards'},
    {id:'workgaze',company:'WorkGaze / Global Launch',logo:'/workgaze_logo.png',role:'Data Engineer (Volunteer)',period:'Aug \u2013 Sep 2025',type:'volunteer',description:'Built ETL workflows for AI-driven workplace analytics. Organized ZipRecruiter data and documented schemas for an early-stage behavioral intelligence platform.'},
    {id:'softtek',company:'Softtek',logo:'/softtek_logo.png',role:'Engineering Intern',period:'Jun \u2013 Jul 2019',type:'intern',description:'Contributed to enterprise software engineering projects at a global IT services firm.'},
  ],

  featuredProjects:[
    {id:'clay',featured:true,featuredStyle:'flagship',title:'Clay Revenue Intelligence Platform',wordmark:'Clay',wordmarkAccent:'Revenue Intelligence',description:'End-to-end GTM intelligence on Snowflake, dbt, Streamlit, and Sigma. Governed dbt models with tests and documentation feed a decision-support app for activation, expansion, and churn scoring. Designed to catch broken joins and stale data before release.',metrics:'3 data marts \u00B7 dbt tests + freshness checks \u00B7 Git version control',badges:[{text:'\u2B50 Flagship',variant:'flagship'}],tags:['Snowflake','dbt','Streamlit','Sigma','SQL','Python'],links:[{label:'\u25B6 Live App',url:'https://clay-revenue-intelligence.streamlit.app/',primary:true},{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/clay-revenue-intelligence'}]},
    {id:'first48',featured:true,featuredStyle:'hackathon',title:'First48: Predicting User Success from Early Behavior',wordmark:'First',wordmarkAccent:'48',description:'Product analytics pipeline predicting long-term user success from 48 hours of behavioral data. Engineered activation features, trained Random Forest (AUC 0.98), segmented users, and shipped a Streamlit app for growth teams.',metrics:'AUC 0.98 \u00B7 1st Place Globally',badges:[{text:'\u{1F947} 1st Place',variant:'winner'}],tags:['Python','Random Forest','Product Analytics','Streamlit'],links:[{label:'\u25B6 Watch Demo',url:'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view'}]},
    {id:'upnext',featured:true,featuredStyle:'silver',title:'UpNext: Product-Led Growth Intelligence',wordmark:'Up',wordmarkAccent:'Next',description:'24-hour datathon build predicting subscription upgrades. LightGBM + XGBoost, funnel analysis, user segmentation, and a Streamlit app with revenue opportunity estimates and cost-risk views.',metrics:'2nd Place at ODSC Boston',badges:[{text:'\u{1F948} 2nd Place',variant:'silver'}],tags:['Python','LightGBM','XGBoost','Streamlit'],links:[{label:'\u25B6 Watch Demo',url:'https://drive.google.com/file/d/1_uiWjPBpgw42HnK5ZcQOmhm1hcu7P4wq/view'}]},
    {id:'llm',featured:true,title:'LLM Differential Diagnosis',description:'Clinical decision support with GPT-4o and Gemini. Structured clinical PDFs, built RAG pipeline, evaluated 20\u201325 NEJM cases. Top-3 accuracy in 18/20 cases.',metrics:'MRR 0.675 \u00B7 DCG 0.754',badges:[{text:'Capstone',variant:'default'}],tags:['LLMs','RAG','Prompt Engineering','Healthcare AI'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/ai-differential-diagnosis'}],isExternalLink:true},
    {id:'spotify',featured:true,title:'AWS Analytics Pipeline',description:'Production-grade pipeline: S3 \u2192 Glue \u2192 Athena \u2192 QuickSight. Scalable from ingestion to visualization.',badges:[{text:'Cloud',variant:'default'}],tags:['AWS','S3','Glue','Athena','QuickSight'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/spotify-playlist-prediction-aws'}],isExternalLink:true},
    {id:'workforce',featured:true,title:'Workforce Insights Dashboard',description:'Cognos HR analytics with SQL and Python pipelines. Automated KPI reporting and labor-cost forecasting for a community hospital.',metrics:'5 dashboards \u00B7 15% overtime reduction',badges:[{text:'Capstone',variant:'default'}],tags:['IBM Cognos','SQL','Python','HR Analytics'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/workforce-insights-dashboard'}],isExternalLink:true},
  ],
  otherProjects:[
    {id:'nlp',title:'NLP Disaster Classification',description:'BERT and DistilBERT for real-time crisis detection.',tags:['NLP','BERT','PyTorch'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/NLP-Disaster-Tweets'}]},
    {id:'yelp',title:'Yelp BI Platform',description:'End-to-end Azure and Python pipeline for business insights.',tags:['Azure','Python','BI'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/Yelp-Business-Intelligence-Platform'}]},
    {id:'stock',title:'Stock Market Forecasting',description:'ML models and dashboards for equity analysis.',tags:['Python','ML','Time Series'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/Stock-Market-Forecasting'}]},
    {id:'mlda',title:'Mortality Analysis',description:'Regression Discontinuity on drinking age policy effects.',tags:['R','Causal Inference'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/MLDA-Mortality-Analysis'}]},
    {id:'property',title:'Property Value Prediction',description:'Predictive real estate modeling for urban planning.',tags:['R','Regression','GIS'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/property-value-prediction'}]},
    {id:'blockchain',title:'Blockchain Analytics',description:'On-chain dashboards with Dune Analytics and SQL.',tags:['SQL','Dune','Web3'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/Blockchain-Dashboards'}]},
    {id:'coffee',title:'Coffee Shop Dashboard',description:'Excel dashboard for operational transaction insights.',tags:['Excel','Analytics'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/Coffee-Shop-Sales-Dashboard'}]},
    {id:'movie',title:'Cinematic Insights',description:'Movie trends with Python and Tableau.',tags:['Python','Tableau'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/movie-analytics-dashboard'}]},
    {id:'retail',title:'Retail Analytics',description:'Multi-dimensional analysis with Mathematica.',tags:['Mathematica','Strategy'],links:[{label:'\u2197 GitHub',url:'https://github.com/NikhitaShankar97/Retail-Analytics-and-Strategy'}]},
  ],

  testimonials:[
    {quote:'Coming soon \u2014 upload your LinkedIn recommendation screenshots to /public/testimonial-1.jpg through testimonial-4.jpg',name:'Your Recommender',role:'Their Role',company:'Their Company',image:'/testimonial-1.jpg'},
    {quote:'Second recommendation will appear here once you add the screenshot.',name:'Recommender Two',role:'Their Role',company:'Their Company',image:'/testimonial-2.jpg'},
  ],

  socialLinks:[
    {platform:'LinkedIn',url:'https://www.linkedin.com/in/nikhita-shankar-analytics/',icon:'fab fa-linkedin'},
    {platform:'GitHub',url:'https://github.com/NikhitaShankar97',icon:'fab fa-github'},
    {platform:'Email',url:'mailto:nikhitashankar97@gmail.com',icon:'fas fa-envelope'},
  ],
  formspreeEndpoint:'https://formspree.io/f/xovvozlz',
}
