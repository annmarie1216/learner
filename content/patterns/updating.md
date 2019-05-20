+++
title = "Updating Learner"
weight = 5
+++

The core of **Learner's** functionality is in its Hugo theme, also called **Learner**. This is found in the theme folder.

{{% fileTree %}}
* content
* docs
* lib
* snippets
* static
* themes
    * Learner
{{% /fileTree %}}

Do not "hack the core". If you have any issues with **Learner**, please report them to [the **Learner** Github repository](https://github.com/ThePacielloGroup/Learner/issues) and they will be dealt with ASAP.

Learner is undergoing constant development, so keep an eye out for new releases. To update to a new version of **Learner**, simply run the `update` command from inside your local project folder.

{{<cmd>}}
npm run update
{{</cmd>}}

This will save a timestamped backup of the current version, and download the latest version. Your theme folder will now look something like the following.

{{% fileTree %}}
* themes
    * Learner
    * Learner-old-1503389765972
{{% /fileTree %}}

If you experience breaking changes and are having trouble fixing them, you can rename the old folder and revert to using it. In the meantime, you can [submit an issue](https://github.com/ThePacielloGroup/Learner/issues) with the "help" tag describing your problem.

{{% warning %}}
The described update process relies on SVN because Github does not support downloading individual repository folders. If you have a Mac, SVN should be installed already. If not, or if you are on Windows, you can either install SVN or download the latest [**Learner** theme folder](https://github.com/ThePacielloGroup/Learner/tree/master/themes/Learner) manually, using the Github web interface.
{{% /warning %}}
