## Task 1.
Two friends play a game, they both guess a number.
The first must convert one number to another by multiplying that number by 2 (10 * 2 = 20) or by adding one to the right (10 + 1 = 101).

You need to write a program that will find whether it is possible to convert one number to another using only the operations listed above.



## Task 2.
The array "arr" of length n+1 contains natural numbers from 1 to n. Find any repeating element in an array in optimal time (O(n)) without changing the original array and without using additional memory.


## Task 3.
#### 3.1
Disc loaders weighing 0.5, 1, 2.5, 5, 10, 15, 20 and 25 kg are used in powerlifting competitions.
We also have American wheel loaders whose weight is defined in lbs. Such disc loaders are only available in 10, 25, 35, 45 pounds.
The bar on the bar is always one and equal to 20 kg.

It is necessary to find such a combination of disc loaders that the weight on the bar is minimal, but exceeds the maximum record. For example, Athlete number 1 lifted 101 kg using a 20 kg bar, 4 20 kg disc loaders and two 0.5.
In order to surpass the weight of the previous athlete, Athlete number 2 will optimally lift 101.44, which can be obtained from the barbell of 20 kg and two disc loaders of the following names: 1, 2.5, 10, kg and 25, 35 lbs.

It is necessary to write a program that will find the minimum next for a given weight.

! It is important that disc loaders of any weight are hung on the bar in pairs. Likewise, there can be no more than 24 disc loaders on a bar, i.e. a maximum of 12 on each side.




#### 3.2
For this competition, the manager ordered a certain number of T-shirts in different sizes. A total of six T-shirts were printed: S, M, L, XL, XXL, XXXL. For each size, the number of T-shirts is known.

During registration, the organizers asked each of the n participants to indicate the size of the T-shirt. The participant could choose 2 sizes, for example, M and L - this means that any of these t-shirts can fit him. If the participant chooses 2 sizes, they must be adjacent. It cannot be S and XXL.

Write a program that will determine whether it is possible to make a gift to all athletes from the T-shirts we have. Each participant should receive a T-shirt of his size:
 - of the required size, if one size is specified;
 - of any two sizes if two adjacent sizes are specified.
 
If possible, the program should output any of the possible solutions.

## Task 4.
The theater has a rectangular stage of size n* m.
To place the actors on the stage, the theater director has provided you with a plan that indicates where the actors should stand and where they should not stand.
A spotlight is installed on the stage, which can shine in one of four directions: left, up, right, or down when looking at the stage from above. Thus, the position of the searchlight is determined by the cell in which it is installed and the direction in which it shines.


You need to choose a "good position" to install the spotlight on the stage, under which two conditions will be fulfilled: there should be no actor in the selected cage, and there should be at least one actor in the direction where the spotlight will shine.
You need to determine the number of possible "good positions" where you can place the spotlight on the stage. Two positions are considered different if they differ by the cell where the spotlight is placed or the direction in which it shines.



**Implementation of tasks 1-4: all input data must be transmitted through one json file. And the answer should be written in another json file.**
