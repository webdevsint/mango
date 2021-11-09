<p align="center"><img src="https://cdn.discordapp.com/attachments/744190212321574925/906945916395737109/video_image_2.jpeg"></img></p>

## MangoDB (Alpha) Usage Guide

**MangoDB**, database technologies can't get simpler.

Welcome to your shiny new **MangoDB** instance! Till we get the CLI up and running feel free to stop by here to learn how to operate your database.

**Video Crash Course:** Currently Unavailable.

### Installation Guide [If you haven't already]:

Just clone the GitHub repo or dowload it from the [MangoDB Starter Repository](https://github.com/webdevsint/mango-starter).

    git clone https://github.com/webdevsint/mango-starter.git

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

### Starting the API server:

Navigate to your your installation folder. Open up a terminal and and type the following command:

    npm run start

Your database's API should serve on http://localhost:3000.

### Setting the schema properties:

To create a new document head over to the **_"./routes"_** folder in the root of your your installation folder and open the **_"./set.js"_** file. Locate an array constant called **params**. eg.

    const  params = [];

Populate this with the properties you want each of your document entries to have. eg.

    const  params = ["name", "hobby"];

**Example Entry:**

     {
    	 "name": "Tahmid Jaglul",
    	 "hobby": "Photography"
    }

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

**Note:** This product is constantly under development and a CLI is incoming. Enjoy your stay with us.

> **_Thank you for trying out our product!_** \
> For contributions or queries, contact: [nehan.khan779@gmail.com](mailto:nehan.khan779@gmail.com)

&copy; The Basic Team 2021
