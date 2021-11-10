
<p align="center"><img src="https://cdn.discordapp.com/attachments/773953073272848386/907001591159218247/video_image__2_-removebg-preview.png"></img></p>

## MangoDB (Alpha) Usage Guide

**MangoDB**, database technologies can't get simpler.

Welcome to your shiny new **MangoDB** instance! Till we get the CLI up and running feel free to stop by here to learn how to operate your database.

**Video Crash Course:** Currently Unavailable.

### Installation Guide:

Just clone the branch (with and without backup) you want from our GitHub repo or dowload it from the [MangoDB repository](https://github.com/webdevsint/mango-starter). **We recommend the the [starter with backup](https://github.com/webdevsint/mango/tree/starter-with-backup) template if you intend to deploy your database instance.**

    git clone -b <branch name> https://github.com/webdevsint/mango-starter.git

Extract the zip if you downloaded it. Navigate to the directory. **Open up a terminal and type the following command:**

    npm install --save

We're not done just yet. Lastly you need to set some <a name="env">environment variables</a> or secrets in the **_"./.env"_** file we provided. You can find it in the root of your installation folder. Open it in any text editor an populate the empty fields. The URI field is your repository link with a Personal Access Token which is used to make <a href="#backup">instance backups</a>.

    API_KEY="12345"
    KEY="lorem ipsum"
    NAME="Tahmid Jaglul"
    MAIL="tahmid@amogus.org"
    URI="https://this-is-my-token@github.com/projectbasic/backup.git"

And done!

**Note:** Make sure your secret values are secure. Do not share them to anyone. Please **don't change the "KEY" secret** if you have any documents. Doing so will make those documents inaccessible without the original key.

### Setting the document properties:

To <a name="properties">define  the properties</a> of your document objects head over to the **"./documents/"** folder in the root of your installation. Open up the **"./params.js"** file in any text editor and you will fined an empty array called params.

    const  params = [];

Populate this array with the properties you want each of your document entries to have and save the file. eg.

    const  params = ["name", "hobby"];

Now after adding your properties, open up a terminal in the **"./documents/"** folder and type the following command:

    node set

Your database is now configured to be used.

### Creating New Documents:

To create a new document head over to the **_"./documents"_** folder in the root of your your installation folder. Open up a terminal and and type the following command:

    node new <name>

Here, **\<name> is just a placeholder**. Replace it with what name your document should be. If the server is running, restart it.

### Similary, Deleting Documents:

To Delete any document head over to the **_"./documents"_** folder in the root of your your installation folder. Open up a terminal and and type the following command:

    node delete <name>

### State Backups Through Git:

MangoDB instances can be safely <a name="backup">backed up</a> to GitHub via Personal Access Tokens. Such state backups are made automatically after each entry is added. **You need to add your Personal Access Token as an <a href="#env"> environment variable </a>** as illustrated above. Documentation on how to generate a token:

[**Creating a personal access token - GitHub Docs**](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

After generating your token, go to GitHub and create a **private repository**. Let's say you named it **"backups"**. Now we need to form your access URI, which will be like:

    https://<token>@github.com/<username>/<repository>.git

For example:

    https://this-is-my-token@github.com/projectbasic/backup.git

Now add this link as an environment variable. Now you're good to go!

### Starting the API server:

Navigate to your your installation folder. Open up a terminal and and type the following command:

    npm run start

Your database's API should serve on http://localhost:3000.

**URL structure of the database (example): http://localhost:3000/?api_key=12345&document=Test**

### Adding and deleting document entries:

To add a new entry document entry just send a **POST** request to the **"/"** endpoint (**ensuring the proper URL structure**) with an object in the body containing your entry. eg.

<img src="https://cdn.discordapp.com/attachments/744186963787251712/907867012636753920/unknown.png"></img>

Endpoint used here: 
`http://localhost:3000/?api_key=12345&document=Test&index=0` **POST**

The object must have the same properties as the ones you set for your documents <a href="#properties">here</a>.

Similarly, to delete document entries just send a **DELETE** request request to the **"/"** endpoint (**ensuring the proper URL structure**)  with an additional query parameter **"index"** with the index of the entry you want to delete from the document. eg.

<img src="https://cdn.discordapp.com/attachments/744186963787251712/907870280670642236/unknown.png"></img>

Endpoint used here: 
`http://localhost:3000/?api_key=12345&document=Test&index=0` **DELETE**

We used [reqbin](https://reqbin.com) in our examples to send requests to the API.

### Deployment:

**Note:** This product is constantly under development and a CLI is incoming. Enjoy your stay with us.

> **_Thank you for trying out our product!_** \
> For contributions or queries, contact: [nehan.khan779@gmail.com](mailto:nehan.khan779@gmail.com)

&copy; The Basic Team 2021
