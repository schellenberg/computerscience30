Setting Up a Work Environment
=============================

.. topic:: Quick Overview of Day

    Get your computer set up for the rest of the semester!


.. note:: You should be able to set up the following on both your computer at school, as well as at home. Everything listed is open source software, so you can use it for free (and take a look at how it was made, if you'd like to).



Text Editor
------------

Although you can use any text editor you'd like, I recommend you use `Atom <https://atom.io/>`_. Atom works on Windows, Mac and Linux, so you should be able to get everything working on whatever computer you have.

`Download Atom now. <https://atom.io/>`_

To make Atom into something better than just a plain text editor, we can install packages to extend the built in functionality. To do this, open Settings (Windows) or Preferences (Mac). The keyboard shortcut for this is ``Ctrl+,`` (Windows) or ``Cmd+,`` (Mac). Now click on the Install tab, then type in the names of the packages shown below.

The packages you must have include:

- ``p5js-snippets``
- ``p5js-toolbar``
- ``linter-eslint``
	- you will need to say yes when Atom asks if you want to install a bunch of dependencies (other packages that this one needs to do it's job)

Other packages that are nice (and that you will see while I'm demo-ing) include:

- ``minimap``
- ``highlight-selected``
- ``color-picker``
- ``atom-beautify``
	- once installed, open Settings -> Packages -> atom-beautify Settings
	- select JavaScript -> Brace style -> end-expand

On Windows, add context menu to Windows Explorer by:

- Settings (Ctrl+Comma) -> System -> check all boxes


GitHub
-------

Source control management is really important! This semester, you will learn to use `GitHub <https://github.com/>`_. Go create an account now. Please note that the user name you choose is really important! All of your projects this semester will live at ``yourusername.github.io``, so pick something nice.

Once you have an account, create a repository called ``whateverusernameyoupicked.github.io`` (replacing the ``whateverusernameyoupicked`` portion with your actual user name). If you'd like, you can `follow these instructions on how to create a repo <https://help.github.com/articles/creating-a-new-repository/>`_. *Be sure to initialize your project with a readme file when asked to do so.*

.. note:: Be sure to create the repository with **exactly** the name described above! GitHub will automatically look for a repo inside your account with your user name, followed by .github.io. If it finds it, it will begin serving it as a website without you having to do any more configuration.

Now download `GitHub Desktop <https://desktop.github.com/>`_. This will allow us to work on our local computer, commit/save our progress, and push/upload our changes to GitHub servers. Once you've installed GitHub Desktop, login and select ``File -> Clone repository...``  Assuming all went well, you should see the repository you made earlier appear. Choose a place to save your repository on your local computer, and then everything should be ready to go!



Basic GitHub Workflow
----------------------

Once you have GitHub set up on more than one machine (it is a really nice way to synchronize your code between school and home), be sure to follow the basic GitHub workflow each time you are working on your project:

#. **Pull** (from the Repository menu, or the ``Fetch Origin`` button). This gets the most up to date version of your code on the GitHub server, and downloads it onto your machine.
#. Do **work**
#. **Commit** your changes. Write a Summary message describing what you've added/changed, then click ``Commit to Master``.
#. **Push** (from Repository menu, or the ``Fetch Origin`` button). This sends your new changes up to the GitHub servers.

