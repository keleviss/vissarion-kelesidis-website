# My personal website/portfolio

I designed this website in order to showcase my web development projects and skills.

## Pages
This website is consisted of 4 pages:
1. [Home/Landing page](https://www.vissarion-kelesidis.me/): contains a quick summary of who I am and what I do, as well as my projects
2. [Resume](https://www.vissarion-kelesidis.me/html/resume.html): a page where you can see and download my resume
3. [Projects](https://www.vissarion-kelesidis.me/html/projects.html): a dedicated page where you can find my projects
4. [Contact](https://www.vissarion-kelesidis.me/html/contact.html): a page with a functional contact form and additional contact details

## Development

### Front-end
To develop the front-end of this website I used simple HTML, CSS and JavaScript. The website is responsive and works great on every size screen and device (if you find any issues, please let me know).

### Hosting
To host the website, I used GitHub pages and I also registered a custom domain.

### Contact Form
The contact form is custom made and works by sending a request to an [AWS Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) which then uses the [Notion API](https://developers.notion.com/) to create a record on a private Notion database. Then, with [Notion Database Automations](https://www.notion.com/help/database-automations), an email is sent to the person who submitted the form and notifies me as well.
