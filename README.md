<p align="center">
  <img src="/public/favicon.svg" width="200" alt="Logo" />
</p>
<h1 align="center">Personal portfolio</h1>

## Site Preview

<p align="center">
  <img src="/public/Preview.png"  alt="site-preview" />
</p>

## Install & run

Make sure you have nodejs `19.9.0` or higher and npm `9.6.3` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

## Deployment

```bash
npm run deploy
```

## Permissions

I'm cool with anyone using the code or parts of the code for their own site, it is open source so people can learn from it and adapt it. However, I would encourage you to modify the theme and components it to make it your own. If you are using the site's design largely unmodified, I'd appreciate being credited as the designer of the website.

I do not give permission to present any of my projects as your own (this is being actively used as my portfolio site and these are my real projects I've worked on).

## FAQs

<details>
  <summary>How do I get the contact form to work?</summary>
  
To get the contact form working, use Nodemailer for the contact form:
<ol>
<li>Install Nodemailer in your project.
<li>Configure Nodemailer with your Gmail credentials or app password.
<li>Modify the contact form submission code to use Nodemailer's sendMail function with the appropriate options.</ol>
</details>
