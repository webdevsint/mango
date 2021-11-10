
<p align="center"><img src="https://cdn.discordapp.com/attachments/773953073272848386/907001591159218247/video_image__2_-removebg-preview.png"></img></p>

## MangoDB (Alpha) Usage Guide

**MangoDB**, database technologies can't get simpler.

Welcome to your shiny new **MangoDB** instance! Till we get the CLI up and running feel free to stop by here to learn how to operate your database.

**Video Crash Course:** Currently Unavailable.

### Installation Guide: <a name="install"></a>

Just clone the branch (with and without backup) you want from our GitHub repo or dowload it from the [MangoDB repository](https://github.com/webdevsint/mango-starter). **We recommend the the [starter with backup](https://github.com/webdevsint/mango/tree/starter-with-backup) template if you intend to deploy your database instance.**

    git clone -b <branch name> https://github.com/webdevsint/mango-starter.git

Extract the zip if you downloaded it. Navigate to the directory. **Open up a terminal and type the following command:**

    npm install --save

We're not done just yet. Lastly you need to set some <a name="env">environment variables</a> or secrets in the **_"./.env"_** file we provided. You can find it in the root of your installation folder. Open it in any text editor an populate the empty fields. The URI field is your repository link with a Personal Access Token which is used to make <a href="#backup">instance backups</a>. eg.

    API_KEY="12345"
    KEY="lorem ipsum"
    NAME="Tahmid Jaglul"
    MAIL="tahmid@amogus.org"
    URI="https://this-is-my-token@github.com/projectbasic/backup.git"

And done!

**Note:** Make sure your secret values are secure. Do not share them to anyone. Please **don't change the "KEY" secret** if you have any documents. Doing so will make those documents inaccessible without the original key.

### Setting the document properties:

To <a name="properties"></a> define  the properties of your document objects head over to the **"./documents/"** folder in the root of your installation. Open up the **"./params.js"** file in any text editor and you will fined an empty array called params.

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

MangoDB instances can be safely <a name="backup"></a>backed up to GitHub via Personal Access Tokens. Such state backups are made automatically after each entry is added. **You need to add your Personal Access Token as an <a href="#env"> environment variable </a>** as illustrated above. Documentation on how to generate a token:

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
We tested and recommend using [**Replit.com**](https://replit.com) to host your database instances. Here is a step by step guide on how you can do so:

**Note:** We recommend using the state backup for deployment as Replit may restart your repl since it isn't paid and you may lose some data.

Firstly login to Replit or signup if you don't have an account already, it's free. After logging in you will be redirected to the [dashboard](https://replit.com/~). You will find a **"Create Repl"** on the top left corner of the page.

<img src="https://cdn.discordapp.com/attachments/744186963787251712/907875510355378176/unknown.png"></img>

#### Deploying new template instance:

You can deploy a starter template on the cloud by following the <a href="#install">installation</a> steps on the Repl's terminal instead of your own hardware. Additionally you will need to create the **".replit"** file too following <a href="#step3">Step 3</a>.

#### Deploying existing database instance:

**Step 1:** 
Click on the **New Repl** and you'll and the "Create a repl" interface should pop up. Select **Node.js** as your template and name it whatever you want. We'll be naming it "Test" here.

<img src="https://cdn.discordapp.com/attachments/744186963787251712/907876797750845481/unknown.png"></img>

We are redirected to our repl (https://replit.com/@username/Test) and we are get this screen:

<img src="https://cdn.discordapp.com/attachments/744186963787251712/907877463164612608/unknown.png"></img>

**Step 2:** 
Go ahead and delete that **"./index.js"** file.

<img src="https://cdn.discordapp.com/attachments/744186963787251712/907880480739844096/unknown.png"></img>

**Step 3:**  <a name="step3></a>"
Create a new file called **".replit"** and just paste these contents in it and it will automatically save in a few moments:

    language = "nodejs"
    run = "npm run start"

<img src="https://cdn.discordapp.com/attachments/744186963787251712/907880709841109032/unknown.png"></img>
<img src="https://cdn.discordapp.com/attachments/744186963787251712/907881131737772072/unknown.png"></img>

**Step 4:** 
Now just upload all the instance files from your local machine and click on the **Run** button and your database should be up and running on the cloud. **You can now not only serve your data but also add and delete entries on the cloud.** For best performance add an [UptimeRobot monitor](https://uptimerobot.com/) to make your Repl always run.

**Note:** This product is constantly under development and a CLI is incoming. Enjoy your stay with us.

> **_Thank you for trying out our product!_** \
> For contributions or queries, contact: [nehan.khan779@gmail.com](mailto:nehan.khan779@gmail.com)

&copy; The Basic Team 2021
