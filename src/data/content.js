export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'system', label: 'System' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'project', label: 'Project' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export const contact = {
  name: 'SK Arbaj Ali',
  title: 'Java Developer · Spring Boot Developer · Backend Developer · Full-Stack Developer',
  email: 'arbajmessiali@outlook.com',
  phone: '+91 7278781198',
  location: 'Kolkata, India',
  linkedin: 'https://linkedin.com/in/arbajali',
};

export const metrics = [
  { value: '~4 yrs', label: 'experience stated in resume' },
  { value: '35%', label: 'validation-time reduction' },
  { value: '50+', label: 'indie game projects supported' },
  { value: '8.72', label: 'B.Tech DGPA' },
];

export const stackJson = {
  core: ['Java', 'Spring Boot', 'Spring MVC'],
  api: ['REST', 'Apigee', 'webMethods'],
  data: ['SQL', 'JDBC', 'Hibernate', 'Redis'],
  messaging: ['Apache Kafka'],
  cloud: ['AWS', 'GCP'],
  delivery: ['Docker', 'Jenkins', 'GitHub Actions'],
};

export const aboutParagraphs = [
  'SK Arbaj Ali is a backend-focused software professional currently working as a freelance developer, with an enterprise foundation built over roughly two and a half years at Cognizant Technology Solutions. That combination shows up throughout this site: structured, API-governed backend engineering on one side, and hands-on freelance work — Unity scripting for indie games and responsive Bootstrap front-ends — on the other.',
  "The shared thread is systems thinking: understanding how a request moves from a client through an API gateway, into a service, out to a message queue or a database, and back — then finding the places where that path can be made faster, safer or easier to maintain. That's the lens this whole portfolio is built around.",
];

export const aboutFacts = [
  { label: 'Location', value: 'Kolkata, India' },
  { label: 'Focus', value: 'Java · Spring Boot · REST APIs' },
  { label: 'Currently', value: 'Freelance · Unity & Bootstrap work' },
];

export const archNodes = [
  { id: 'Client', x: 25, y: 112, w: 105, h: 46, tx: 77, ty: 140, lines: ['CLIENT'] },
  { id: 'Apigee', x: 190, y: 47, w: 105, h: 46, tx: 242, ty: 75, lines: ['APIGEE'] },
  { id: 'Spring Boot', x: 315, y: 112, w: 115, h: 46, tx: 372, ty: 140, lines: ['SPRING BOOT'] },
  { id: 'Kafka', x: 185, y: 181, w: 105, h: 46, tx: 237, ty: 209, lines: ['KAFKA'] },
  { id: 'SQL / JDBC', x: 465, y: 112, w: 105, h: 46, tx: 517, ty: 140, lines: ['SQL / JDBC'] },
  { id: 'Jenkins + GCP', x: 465, y: 181, w: 105, h: 46, tx: 517, ty: 201, lines: ['JENKINS', '+ GCP'] },
];

export const archCopy = {
  Client: 'Request origin shown here as the entry point into the API flow.',
  Apigee: 'API management and traffic-policy layer called out in the featured project.',
  'Spring Boot': 'Application/service layer used to modernize the legacy Spring system.',
  Kafka: 'Asynchronous messaging layer implemented for communication across microservices.',
  'SQL / JDBC':
    'Persistence and query layer; query optimization produced the 35% validation-time reduction.',
  'Jenkins + GCP': 'Delivery layer reflecting the Jenkins CI/CD pipeline executed on GCP.',
};

export const capabilityTags = [
  'Performance Optimization',
  'API Development',
  'Microservices Architecture',
  'Application Integration',
  'Cloud Integration with GCP',
  'Database Management',
  'Software Testing',
  'Problem Solving',
];

export const jobs = [
  {
    title: 'Freelancer',
    meta: "Apr '24 – Present · Remote",
    bullets: [
      'Developing Unity scripts for indie games across diverse projects.',
      'Delivered Unity scripting solutions for over 50 indie game projects, according to the resume.',
      'Creating responsive Bootstrap web components with cross-browser compatibility.',
      'Collaborating with independent developers to customize application features and deliver scalable solutions.',
      'Optimizing gameplay scripts, front-end responsiveness and application stability.',
    ],
  },
  {
    title: 'Programmer Analyst · Cognizant Technology Solutions',
    meta: "Oct '21 – Apr '24 · Kolkata, India",
    bullets: [
      'Built enterprise applications with Java, Spring Boot, Spring MVC, JDBC and JUnit.',
      'Implemented RESTful APIs for secure communication and integrated business systems.',
      'Used SoftwareAG webMethods to automate workflows and streamline integration.',
      'Configured Apigee API management solutions for API security and enterprise integration.',
      'Optimized SQL operations, maintained data integrity and supported consistent performance.',
    ],
  },
];

export const credentials = [
  {
    type: 'Education',
    title: 'B.Tech · Mechanical Engineering',
    sub: 'Haldia Institute of Technology · MAKAUT · 2021',
    detail: 'DGPA 8.72',
  },
  {
    type: 'Certification',
    title: 'Redis Certified',
    sub: 'Associate Software Operator',
    detail: null,
  },
  {
    type: 'Achievement',
    title: 'Zonal Winner',
    sub: 'Neural Networks workshop · IIT Kharagpur',
    detail: null,
  },
  {
    type: 'Leadership',
    title: 'Team Vidyut',
    sub: 'Design Head & Captain · 2018–2021',
    detail: "Eastern India's only go-kart team",
  },
];

export const pipelineSteps = [
  { title: 'Client', sub: 'request' },
  { title: 'REST', sub: 'API call' },
  { title: 'Apigee', sub: 'policy' },
  { title: 'Spring Boot', sub: 'service' },
  { title: 'Kafka', sub: 'async' },
  { title: 'SQL / JDBC', sub: 'persist' },
];

export const projectStackTags = ['Java', 'Spring Boot', 'REST', 'Apigee', 'Kafka', 'Jenkins', 'GCP'];

export const projectBullets = [
  'Migrated legacy Spring applications to Spring Boot for scalability and maintainability.',
  'Designed object-oriented components for transaction processing and third-party integrations.',
  'Configured Apigee policies to regulate API traffic and prevent abnormal requests.',
  'Implemented Apache Kafka for reliable asynchronous communication across microservices.',
  'Executed CI/CD pipelines through Jenkins on GCP.',
];

export const skillCategories = [
  { label: 'Languages & Frameworks', items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Framework'] },
  { label: 'APIs & Integration', items: ['REST APIs', 'Microservices', 'Apigee', 'SoftwareAG webMethods'] },
  { label: 'Data & Messaging', items: ['SQL', 'JDBC', 'Hibernate', 'Redis', 'Apache Kafka'] },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD Pipeline', 'Git'],
  },
  { label: 'Testing & Quality', items: ['JUnit', 'Selenium'] },
  { label: 'Frontend & Game Dev', items: ['React.js', 'Bootstrap', 'Unity'] },
];

export const skills = [
  {
    detailTitle: 'Core backend',
    heading: 'Java + Spring',
    sub: 'Core backend',
    copy: 'Core Java, Spring Framework, Spring Boot and Spring MVC form the primary application layer.',
  },
  {
    detailTitle: 'API layer',
    heading: 'APIs + Microservices',
    sub: 'Integration',
    copy: 'RESTful APIs, Microservices, SoftwareAG webMethods and APIGEE cover service exposure and integration.',
  },
  {
    detailTitle: 'Data',
    heading: 'SQL + Data',
    sub: 'Persistence',
    copy: 'SQL, JDBC, Hibernate and Redis appear in the technical-skills section; SQL optimization is also highlighted in the project.',
  },
  {
    detailTitle: 'Messaging',
    heading: 'Apache Kafka',
    sub: 'Async messaging',
    copy: 'Apache Kafka was implemented for reliable asynchronous communication across microservices in the featured project.',
  },
  {
    detailTitle: 'Cloud',
    heading: 'AWS + GCP',
    sub: 'Cloud',
    copy: 'The resume lists AWS and GCP, with the featured project specifically using Jenkins on GCP for CI/CD.',
  },
  {
    detailTitle: 'DevOps',
    heading: 'Docker + CI/CD',
    sub: 'Delivery',
    copy: 'Git, Docker, GitHub Actions, Jenkins and CI/CD Pipeline are listed in the technical skills section.',
  },
  {
    detailTitle: 'Testing',
    heading: 'JUnit + Selenium',
    sub: 'Quality',
    copy: 'JUnit and Selenium are listed in the resume; JUnit was used in enterprise application development at Cognizant.',
  },
  {
    detailTitle: 'Frontend / game',
    heading: 'React + Bootstrap + Unity',
    sub: 'Supporting skills',
    copy: 'React.js, Bootstrap and Unity complement the backend profile through responsive web components and game scripting work.',
  },
];

export const services = ['Apigee', 'Spring Boot', 'Kafka', 'SQL'];
export const serviceLabels = {
  Apigee: 'Apigee',
  'Spring Boot': 'Spring Boot',
  Kafka: 'Kafka',
  SQL: 'SQL/JDBC',
};
