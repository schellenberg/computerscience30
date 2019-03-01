# Notes to Self

## Initial Setup On Windows

- install Python 3 (used Chocolately, as per [https://docs.python-guide.org/starting/install3/win/](https://docs.python-guide.org/starting/install3/win/))
- install pipenv ``pip install pipenv``
- ``cd`` to cs30 repo folder, something like ``cd E:\Users\schellenbergd\Documents\GitHub\cs30``
- ``pipenv install git+https://github.com/schellenberg/RunestoneComponents.git#egg=RunestoneComponents``
  - note that this is a slightly customized version of the Runestone Components main repo. If you aren't going to use the p5 directive (that embeds p5 sketches into the text), you can just use ``pipenv install runestone``

## Build Instructions
- ``cd`` to cs30 repo folder, something like ``cd E:\Users\schellenbergd\Documents\GitHub\cs30``
- ``pipenv shell``
- ``runestone build``
- ``runestone serve`` (if you want to test with a local development server)
