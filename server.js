const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/index', (req, res) => {
    res.render('index', { title: 'Homepage' });
});

// Route for web1 page
app.get('/web1', (req, res) => {
    res.render('web1', { title: 'Web 1.0 Page' });
});

// Route for web2 page
app.get('/web2', (req, res) => {
    res.render('web2', { title: 'Web 2.0 Page' });
});

// Route for contact page
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Route for futureofinternet page
app.get('/futureofinternet', (req, res) => {
    res.render('futureofinternet', { title: 'Future of the Internet' });
});

// Route for git page
app.get('/git', (req, res) => {
    res.render('git', { title: 'Git Guide' });
});

// Route for internet page
app.get('/internet', (req, res) => {
    // Example data for the template
    const data = {
        title: 'Internet', // Title for the page
        intro: 'The internet has evolved from a basic network to a vast global system...', // Example intro text
        arpanet: {
            who: 'Researchers and scientists.',
            what: 'The first major ARPANET project.',
            why: 'To connect computers for sharing resources.',
            when: '1960s.',
            how: 'Through packet-switching technology.',
            example: 'Sending email over ARPANET was one of the first major uses.'
        },
        cerfKahn: {
            who: 'Vint Cerf and Bob Kahn.',
            what: 'Creators of the TCP/IP protocol.',
            why: 'To standardize communication across diverse networks.',
            when: '1970s.',
            how: 'By developing a protocol that ensured reliable data transmission.',
            example: 'Their work formed the backbone of the modern internet.'
        },
        earlyPrograms: {
            who: 'Early ARPANET developers.',
            what: 'Programs like Telnet and FTP.',
            why: 'To allow remote communication and file transfer.',
            when: '1970s.',
            how: 'By using command-line based interfaces.',
            example: 'Telnet allowed remote logins to other computers.'
        },
        progress: ['Read Introduction', 'Understand ARPANET', 'Learn about Vint Cerf & Bob Kahn'],
        resources: {
            link: 'http://example.com/downloadable-resource.pdf', // Example link
            text: 'Download ARPANET Overview PDF'
        },
        testimonials: {
            quote: 'This guide helped me understand the internet’s history better!',
            author: 'Student A'
        }
    };

    // Pass the data to the view
    res.render('internet', data);
});


// Route for linux page
app.get('/linux', (req, res) => {
    res.render('linux', { title: 'Linux Commands' });
});

// Route for preinternet page
// Route for the Pre-Internet page
app.get('/preinternet', (req, res) => {
    res.render('preinternet', {
        pageTitle: "Pre-Internet",
        mainHeading: "Pre-Internet",
        introText: "Explore the origins of the internet, focusing on key figures and pivotal moments that led to the development of a globally connected network.",
        lickliderWho: "Joseph Carl Robnett Licklider, commonly known as JC Licklider, was an American psychologist and computer scientist.",
        lickliderWhat: "Licklider was a pioneer in computer science and conceptualized the 'Intergalactic Computer Network,' which laid the foundation for modern internet ideas.",
        lickliderWhy: "He envisioned computers enhancing human communication and collaboration. His ideas eventually shaped the creation of ARPANET, the precursor to the internet.",
        lickliderWhen: "In the early 1960s, while at ARPA, Licklider’s work significantly influenced networked computing and time-sharing systems.",
        lickliderHow: "Through his role at ARPA, he supported and funded projects focused on networking, enabling the eventual development of ARPANET.",
        lickliderLink: 'https://worrydream.com/refs/Licklider_1960_-_Man-Computer_Symbiosis.pdf',
        nuclearWho: "During the Cold War, the U.S. and Soviet Union developed nuclear arsenals, influencing the need for secure communication.",
        nuclearWhat: "The presence and threat of nuclear weapons led to a push for a resilient, decentralized communication system to withstand nuclear attacks.",
        nuclearWhy: "Maintaining communication and command control during nuclear strikes was essential, spurring innovation in network resilience.",
        nuclearWhen: "In the 1960s, the U.S. Department of Defense prioritized creating systems capable of surviving catastrophic events.",
        nuclearHow: "This led to the development of ARPANET, which used packet-switching to reroute data through multiple pathways, ensuring communication continuity.",
        nuclearLink: 'https://www.internetsociety.org/internet/history-internet/brief-history-internet',
        arpaWho: "ARPA, later known as DARPA, is a U.S. government agency focused on defense-related technological advancements.",
        arpaWhat: "ARPA was instrumental in creating ARPANET, the first packet-switching network and a precursor to the modern internet.",
        arpaWhy: "In response to the Soviet Union’s launch of Sputnik, ARPA was established to drive American innovation in technology and defense.",
        arpaWhen: "Founded in 1958, ARPA’s involvement in networking technology became prominent in the 1960s with ARPANET's development starting in 1969.",
        arpaHow: "Through extensive funding in networking research, ARPA connected research institutions, facilitating data sharing and ultimately evolving into the global internet.",
        arpaLink: 'https://www.darpa.mil/about-us/timeline/arpanet',
        downloadLink: 'https://www.internetsociety.org/resources/doc/2017/brief-history-of-the-internet',
    });
});


// Route for webaccessibility page
app.get('/webaccessibility', (req, res) => {
    res.render('webaccessibility', { title: 'Web Accessibility' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
