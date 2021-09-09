Bubble Sort
===============

.. Intro video 
.. ------------

.. Bubble sort vs merge sort -- skip the big-O notation part

.. .. youtube:: kgBjXUE_Nwc
..     :height: 315
..     :width: 560
..     :align: left
..     :http: https

.. `YouTube Link to Video <https://www.youtube.com/watch?v=kgBjXUE_Nwc>`_


Visualization
---------------

The following animation shows ``bubble_sort`` in action.

.. animation:: bubble_anim
   :modelfile: sortmodels.js
   :viewerfile: sortviewers.js
   :model: BubbleSortModel
   :viewer: BarViewer



Or you can check out bubble (and other sorting algorithms) `using this sorting visualizer <https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html>`_ 

Algorithm
-----------

The **bubble sort** makes multiple passes through a list. It compares adjacent items and exchanges those that are out of order. Each pass through the list places the next largest value in its proper place. In essence, each item “bubbles” up to the location where it belongs. The following image shows the first pass over a list:


.. figure:: images/bubblepass.png
   :align: center

   Bubble Sort: The First Pass


Pencil and Paper Practice
--------------------------

On a piece of paper, show the iterations done by bubble sort for the list {5,15,3,8,9,1,20,7} 


Code the Algorithm
-------------------

Now, see if you can write an algorithm for bubble sort that will correctly sort the list given above. Your code should look something like this:

.. code-block:: javascript

    let someList = [5,15,3,8,9,1,20,7];

    function bubbleSort(aList) {
        //create your algorithm here!
    
    }

    function setup() {
        bubbleSort(someList);
        console.log(someList);
    }

    function draw() {
    }