Selection Sort
===============

Use the visualization below to figure out how selection sort works.

Visualization
---------------

.. animation:: selection_anim
   :modelfile: sortmodels.js
   :viewerfile: sortviewers.js
   :model: SelectionSortModel
   :viewer: BarViewer



Or you can check out bubble (and other sorting algorithms) `using this sorting visualizer <https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html>`_ 


Algorithm
-----------

The **selection sort** improves on the bubble sort by making only one exchange for every pass through the list. In order to do this, a selection sort looks for the largest value as it makes a pass and, after completing the pass, places it in the proper location. As with a bubble sort, after the first pass, the largest item is in the correct place. After the second pass, the next largest is in place. This process continues and requires :math:`n-1` passes to sort :math:`n` items, since the final item must be in place after the :math:`(n-1)` st pass.

The following image shows the entire sorting process. On each pass, the largest remaining item is selected and then placed in its proper location. The first pass places 93, the second pass places 77, the third places 55, and so on.


.. figure:: images/selectionsort.png
   :align: center

   
   Selection Sort: Complete



Pencil and Paper Practice
--------------------------

On a piece of paper, show the iterations done by selection sort for the list {5,15,3,8,9,1,20,7} 


Code the Algorithm
-------------------

See if you can implement an algorithm for selection sort. You may want to begin by adapting the bubble sort code you created.