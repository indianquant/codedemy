# codedemy
Codedemy is an online learning platform where any person will be able to build their own dream e-learning web courses and sell their own course online. Particularly this application is aiming to make academia more interesting. Money is always a hurdle in everyone's life and to cope up with this, idea of codedemy originated.

For thousands of years, people have known that the best way to understand a concept is to explain it to someone else - “While we teach, we learn,”.

Students enlisted to tutor others, researchers have found, work harder to understand the material, recall it more accurately and apply it more effectively. In what scientists have dubbed “the protégé effect,” student teachers score higher on tests than pupils who are learning only for their own sake. But how can children, still learning themselves, teach others? One answer: by making online video content by just sitting in their room.
By teaching what you already know about your profession or hobby, you'll learn more, potentially gain some notoriety as an up-and-coming expert, make new connections with people, and find new opportunities. And you'll have some FUN. You don;'t need to be an expert in that thing ;).
#Odamy
> With Codedemy you can create and sell your own courses. It's like Udemy but open source. 

<a href="https://imgur.com/MgHAw40"><img src="https://i.imgur.com/MgHAw40.png" title="source: imgur.com" /></a>

##Features

**Stripe:**

You can set your own price for every courses that's created. 

**Wistia:** 

We are using the Wistia API to manage our content. All you have to do is pull out the last digits on the URL from your video. 

Example: https://priyanshuvarshney6.wistia.com/medias/wpfwulycvd


Add **wpfwulycvd** when creating a course intro or lesson. 


![](https://i.imgur.com/U7U40P5.png)

**Markdown:** 

We also love markdown. So to create those lessons notes we are using github-markdown. And that also means that you can add emojis. 


**Materialize Design:** 

You can customize the design. We are using [Materialize css](http://materializecss.com/) and Jumbotron Template. Its pretty nice.   


**Authentication:** 

We currently support authentication with Facebook. And for email support and sending receipts we are using Mailchimp. 

**Note:** We will soon make an upgrade to sendgrid. 

![](https://i.imgur.com/wfuwHEh.png)

**Admin Interface:**

For our admin interface we are using ActiveAdmin. You can easily manage every course and every lesson using sortable tree. 

![](https://i.imgur.com/a7WwgAQ.png)


## Installing 


Fork or download the repo. 


**We are using:** 


- React
- NodeJS
- MongoDb 

**Note:** We will soon shift to  Rails 4.2.0, Ruby 2.3.0, Sqlite3 3.15.0 

## Variables


You need to set these variables, using your keys: 


- STRIPE_SECRET_KEY: ''
- STRIPE_PUBLIC_KEY: ''
- MAILCHIMP_API_KEY: ''
- FACEBOOK DEVELOPER TOKEN KEY, ID : ''

## Deployment

Pending todo. Create a tutorial to upload to AWS or Heroku. 
