# Notes to Self - updated Sept 2025

## Initial Setup On Windows

- install Python 3 using the Python Install Manager (``py install 3.10-64``)
- install poetry (``(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -``)
- initiate a new poetry project ``poetry init --no-interaction``
- tell Poetry to use Python 3.10
  ``cd "C:\Users\schellenbergd\Github no sync\computerscience30"``
  ``poetry env use py -3.10`` (if this fails, get the full path with ``py -3.10 -c "import sys; print(sys.executable)"``, and then point poetry to that -- ask AI for help if needed)
- install Runestone ``poetry add runestone==6.2.2``

## Additional Machine Setup
- install Python 3 using the Python Install Manager (``py install 3.10-64``)
- clone the cs30 repo, then cd to the repo folder
- install poetry (``(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -``)
- tell Poetry to use Python 3.10
  ``cd "C:\Users\schellenbergd\Github no sync\computerscience30"``
  ``poetry env use py -3.10`` (if this fails, get the full path with ``py -3.10 -c "import sys; print(sys.executable)"``, and then point poetry to that -- ask AI for help if needed)
- run ``poetry install --no-root`` in the cs30 repo folder

## Build Instructions
- ``cd`` to cs30 repo folder, something like ``C:\Users\schellenbergd\Github no sync\computerscience30``
- ``poetry run runestone build`` to avoid the shell command
- ``poetry run runestone serve`` (if you want to test with a local development server)