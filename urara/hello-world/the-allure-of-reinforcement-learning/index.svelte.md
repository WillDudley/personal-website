---
title: The Allure of Reinforcement Learning (unf)
date: 2022-06-03
priority: 501
tags: ['Reinforcement Learning']
---

## The Optimisation Mindset

It is seemingly typical for budding undergraduate mathematicians to have ambitions of understanding pure mathematics. After all, in popular culture we are told that mathematics is "the language of the universe". It is understandable, then, for many people to have an innate desire to understand the logical, rigorous progression from axioms to lemmas to theorems.

Whilst there is a hidden beauty to pure mathematics, it is easy to become overwhelmed with its abstractions and, in certain areas, relatively restrictive assumptions that don't always apply to real-world scenarios. Generalisability whilst maintaining the elegance of simple, closed-form solutions is a difficult pursuit progressed by the world's most intelligent minds.

If one can happily sacrifice elegance, numerical methods may provide answers to a wide range of problems without the need to understand, if not improve, advanced analytical methods. Examples of such numerical methods include:
- Runge-Kutta methods for approximating solutions for simultaneous non-linear equations;
- The Simplex method for finding the optimal solution to a problem with linear constraints;
- Ficticious play for finding an optimal strategy in a zero-sum game vs a stationary opponent;
- Dynamic programming for finding the optimal solution to a problem that can be broken down into subproblems that preserves the solution structure.

## Introducing Reinforcement Learning

Both ficticious play and dynamic programming are particularly interesting methods to many students in that they are able to learn behaviours, or policies, rather than a single set of optimal parameters. In other words, they learn an optimal function of environment dynamics, including a hypothetical opponent's action. This solution structure means that, with a large amount of computing power and the correct problem formulation, the optimal way to play a video game could be found. There's a certain novelty to the idea of not having the dexterity to beat Super Mario Bros, but having the skill to build the thing that beats Super Mario Bros [^1].

Dynamic programming is a powerful collection of algorithms introduced in introductory optimisation classes in mathematics degrees, in regard to the travelling salesman problem. Dynamic programming is also used in an area of artificial intelligence called reinforcement learning (RL). Essentially, in both the travelling salesman problem and most RL problems, optimal substructure is assumed (known as Bellman's principle of optimality). 

Dynamic programming in RL scenarios is a recursive dance between figuring out how good one's policy is, and figuring out how to improve one's policy. Over time, there will reach a point where it seems like one cannot find a way to improve a policy, so we settle on the best policy found. 

One issue with dynamic programming is that it requires complete knowledge of how one gets from one state to another, so that the algorithm can sweep through all possibilities. This is a severe limitation - in the real-world we almost never know for sure what may happen without much experience. One way to overcome this limitation is to, quite obviously, learn from samples of experience! Figuring out how good one's policy is simply becomes a case of averaging out how well one performs when the policy is followed repeatedly. Because this method of estimating one's "true" performance has a large random element to it, it is known as a Monte Carlo method (named after the Monte Carlo casino after physicists realised how useful games of chance could be for modelling complicated stuff, such as nuclear bombs).

This Monte Carlo method is very powerful, as it removes the need for one to have a correct model of the environment they are navigating. However, it can be improved by doing something dynamic programming does: bootstrapping. Bootstrapping is a recursive term where one updates their belief based on only a previous belief. It's used in various domains, but they allude to the same concept:

- In business, a company bootstraps if it uses internal money to generate more money;
- In computer science, a compiler bootstraps if it uses a compiler to generate a fuller compiler;
- In statistics, an estimator bootstraps if it uses sampling from an approximate distribution to generate an estimate for the distribution; 
- In RL, an algorithm bootstraps if it uses an estimate of performance to generate an updated estimate of performance.

Monte Carlo and dynamic programming can be combined to form a type of learning that utilises the difference between the performance one's currently at versus the performance one was at just a second ago [^2]. It constantly uses this current performance to update its belief of its performance just-gone - it's very iterative. As they use the differences in performance over timesteps, these methods are known as temporal difference (TD) methods. Like Monte Carlo methods, TD methods use samples of past experiences to update their performance beliefs, rather than sweeping through all possible futures. Like dynamic programming methods, TD methods update their performance beliefs often, without needing to wait for a final outcome.

TD learning is the foundation for many, if not all, RL algorithms used in practice today. It essentially says "Let's learn from experience, as often as we can. If in the next step we've improved, let's prioritise what we've just done, and vice-versa."

## Mathematics isn't the only field to notice TD learning

If the coolness of TD learning from the above perspective isn't enough, this learning paradigm has been derived from a neuroscience perspective.

## RL is cool, but there's more to discover

Whether it be watching a favourite video game be beaten by an AI, seeing a robot learn to walk or just appreciating how RL naturally arises from thinking what it actually means to learn - many people agree that RL is cool. Obviously, as with many new technologies, investment banks are reaching their hands out for it [^3]. 

There's still so much more to discover. However, when RL does become a prominent technology, it will be important to ensure it collaborates with humans in a safe, interpretable and explainable manner. Personally, this is the area I think is quite important to address - and as such, is the topic of my studies.






[^1] There's a theme to unpick here that has been present all my life, relating to living with brain damage - but that's for a different blogpost.

[^2] "just a second ago" is a hyperbole for lay understanding - technically speaking I mean "one timestep ago".

[^3] A topic for a future blogpost.



