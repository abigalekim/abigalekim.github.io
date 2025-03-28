// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications, listed in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "a summary of my teaching experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cmu-courses",
          title: "cmu courses",
          description: "reviews of each of my nine semesters at carnegie mellon university.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "post-a-subset-of-database-systems-and-why-they-39-re-interesting-part-1",
        
          title: "A Subset of Database Systems (and Why They&#39;re Interesting), Part 1",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/interestingdbs1/";
          
        },
      },{id: "post-development-of-olap-systems-in-the-21st-century",
        
          title: "Development of OLAP Systems in the 21st Century",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/adbfinal/";
          
        },
      },{id: "post-software-systems-curriculum-learning-objectives",
        
          title: "Software Systems Curriculum Learning Objectives",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/systemsobjectives/";
          
        },
      },{id: "post-why-cmu-scs",
        
          title: "Why CMU SCS?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/whycmuscs/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-my-master-s-program-at-cmu-scs",
          title: 'Started my master’s program at CMU SCS!',
          description: "",
          section: "News",},{id: "news-moved-my-website-from-the-reverie-jekyll-template-to-the-al-folio-jekyll-template",
          title: 'Moved my website from the reverie Jekyll template to the al-folio Jekyll template....',
          description: "",
          section: "News",},{id: "news-developed-a-modern-c-bootcamp-for-cmu-s-database-systems-class-this-semester",
          title: 'Developed a modern C++ bootcamp for CMU’s database systems class this semester.',
          description: "",
          section: "News",},{id: "news-graduated-from-my-master-s-program-at-cmu-scs-here-is-my-thesis",
          title: 'Graduated from my master’s program at CMU SCS. Here is my thesis.',
          description: "",
          section: "News",},{id: "news-committed-to-uw-madison-for-a-phd-in-database-systems-with-professor-xiangyao-yu",
          title: 'Committed to UW–Madison for a PhD in database systems with Professor Xiangyao Yu....',
          description: "",
          section: "News",},{id: "news-presented-my-work-on-dbms-extensibility-at-the-postgresql-developer-conference-slides-video",
          title: 'Presented my work on DBMS extensibility at the PostgreSQL Developer Conference! (Slides, Video)...',
          description: "",
          section: "News",},{id: "news-started-my-phd-program-in-database-systems-at-uw-madison",
          title: 'Started my PhD program in database systems at UW–Madison!',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("bsky.app/profile/abigalekim.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%62%69%67%61%6C%65%6B%69%6D%30%34%31%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/abigalekim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/abigalekim", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://discuss.systems/@abigale_kim", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=IRZm2QYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/abigale_kim", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
