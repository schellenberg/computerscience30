Setting Up a Work Environment
=============================

.. topic:: Quick Overview of Day

    Level up from using the p5js web editor, and get your computer set up for the rest of the semester!


.. note:: You should be able to set up the following on both your computer at school, as well as at home. Everything listed is open source software, so you can use it for free (and take a look at how it was made, if you'd like to).


Text Editor
------------

Although you can use any text editor you'd like, I recommend you use `Visual Studio Code <https://code.visualstudio.com/>`_. VSCode works on Windows, Mac and Linux, so you should be able to get everything working on whatever computer you have.

`Download Visual Studio Code now. <https://code.visualstudio.com/>`_

.. important:: Be sure to select the "Open with Code" options when installing VSCode! This allows you to right click on a file/folder in File Explorer and easily open it in VSCode.

To make VSCode into something better than just a plain text editor, we can install packages to extend the built in functionality. To do this, click on the extensions tab (on the left hand sidebar).

.. image:: images/extensions-icon.png

You can explore many different extensions for VS Code, but the primary one we will use is:

- ``cs30-p5``, which helps create and manage p5.js projects in VS Code. This will also include two other extensions (Live Server and ESLint). Live Server lets you run your code on your local machine for testing, by adding a "Go Live" button to the bottom of your VS Code window. ESLint will provide warnings when you make coding/convention errors.


Optional Additional Feature
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There is a configuration file in our template folder called `project.json` that helps provide instant feedback about possible problems in your code using a tool called ESLint (for example, warning you that you didn't declare a variable before using it, or that your indentation is incorrect). Setting up your machine to use this may not be feasible in a computer lab scenario, as it requires admin rights to install `https://nodejs.org <https://nodejs.org>`_. *I have pre-installed Node.js on our machines at WMC.* If you cannot install Node.js, the VS Code setup  will still work just fine, but you will not get instant feedback from ESLint about possible problems in your code.

- if you haven't installed Node.js, and are
  - on Windows: in VS Code, open Terminal and type ``winget install Schniz.fnm``, then once that has completed, type ``fnm install 22``
  - on Mac: in VS Code, open Terminal and type ``curl -o- https://fnm.vercel.app/install | bash``, then once that has completed, type ``fnm install 22``
  - other installation options are available on the `Node.js website <https://nodejs.org/en/download>`_ 
- once Node.js is installed:
  - in VS Code, open Terminal and type ``npm install -g eslint``
  - if you have installation problems with eslint, you can try updating npm [in VS Code, open Terminal and type ``npm install npm@latest -g``]


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
#. **Commit** your changes. Write a Summary message describing what you've added/changed, then click ``Commit to Main``.
#. **Push** (from Repository menu, or the ``Fetch Origin`` button). This sends your new changes up to the GitHub servers.
