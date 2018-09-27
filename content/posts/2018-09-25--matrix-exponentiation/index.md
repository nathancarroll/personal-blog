---
title: Use Matrix Exponentiation to Solve Recursive Programming Challenges
subTitle: Hope you remember how to do linear algebra
category: "sayings"
cover: photo-1463852247062-1bbca38f7805-cover.jpg
---

#### The Fibonacci Sequence

Calculating the nth number of the Fibonacci sequence is a problem that's often used for introducing budding developers to the concept of recursion. The Fibonacci sequence, if you don't remember, is the numerical sequence derived by starting with 0 and 1 and then continually summing the last two numbers in the sequence to derive the next one, i.e. 1,1,2,3,5,8,13,21,34,...

> Side note: once in college, a friend of mine who was about to repaint her apartment threw a party where people were encouraged to draw all over the soon-to-be-covered walls in marker. Predictably, several people drew large hairy dicks, but somehow I formed a partnership with a girl I'd just met where we took turns writing out the next number of the Fibonacci sequence. We were both quite drunk, struggling to calculate 832,040 in our heads and whatnot. I made zero attempt to get her phone number, which goes to show you I'm not that smart after all.

The Fibonacci is **recursive** because you can derive the nth value by means of a function that returns hard-coded values for n=1 or n=2, and simply calls itself for any value of n higher than 2. 
```
let fibonacci = (n) => {
    if (n === 1){
        return 1;
    } else if (n === 2){
        return 1;
    } else if (n > 2){
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
```

#### Linear Recurrence

The Fibonacci sequence is part of a broader collection of mathematical sequences called linear recurrences, meaning that each term is a linear combination of previous terms. The most straightforward way to calculate terms in a linear reccurence is basically the code sample you see above. 

This method is easy to grok, but it generally has exponential time complexity. The algorithm above has runs in O(2ⁿ) time, and is prone to overflow when called with a large enough value of n.

#### Enter the Matrix

The trick here is to put the initial values of the sequence into a vector, and then find a transformation matrix that can be applied to that vector to obtain the next term. So for our Fibonacci example, the initial vector would be the 2x1 matrix [[1], [1]]. We can then work backwards to discover the transformation matrix [[0, 1], [1, 1]].

```
[[0, 1], [1, 1]] X [[1], [1]] = [[1], [2]]
[[0, 1], [1, 1]] X [[1], [2]] = [[2], [3]]
[[0, 1], [1, 1]] X [[2], [3]] = [[3], [5]]
[[0, 1], [1, 1]] X [[3], [5]] = [[5], [8]]
```

At this point, it should be clear that we can just multiply the transformation matrix by itself n times and apply that result to our initial vector to obtain where the first row is the term of the sequence at n + 1. 

![https://www.imdb.com/title/tt0133093/](https://www.indiewire.com/wp-content/uploads/2017/10/matrix-code.jpg?w=780)

Exponentiating a square matrix, as it turns out, can be done in O(log N) time. That's very fast! 
