---
layout: post
title:  Software Systems Curriculum Learning Objectives
date: 2022-11-10
description:
categories:
tags: cs-education
---

Over my 3 years of being a teaching assistant for software systems classes, I've naturally developed quite a few opinions on the software systems education sphere.\* The first of these opinions is what set of skills should be taught in a systems curriculum, where I define a systems curriculum within a university setting as the core intro systems class and a few upper division computer systems courses. I list these set of skills below.

### Reading and understanding a software system's components

Unless the student is implementing a software system from scratch, on their own, a student should learn how to read other people's code. In fact, a significant amount of my work in the DBMS industry has been reading the codebase to understand how the moving components of existing code worked. Then, with time, after reading the code, the student should be capable of understanding the gist of how the software system works, and how the moving components of the system interact with each other. They should also be capable of reading and understanding partially created software systems.

### Reading/writing documentation

One important part of understanding software systems is learning how to read documentation. It is common for a software system to contain external libraries or frameworks. These also need to be understood at least on a surface level by a student trying to understand a software system.

Conversely, students will also need to learn how to write their own documentation for the code they eventually write. This is important because it helps other developers understand their code.

### Systems design

Students should learn how to design their own software systems, and features within larger, existing software systems. The skills needed to design a software system from scratch include taking a bigger idea, which is how the system is supposed to operate/a specification, and then compartmentalizing this general concept into different moving parts. Similarly, the main skill needed to design a feature for a larger, existing software system is the ability to conceptualize how the student's feature would fit within the existing system.

### Systems implementation

Students need to know how to understand a software system specification and convert it into code that is reliable and performs well. Students will need to be capable of translating ideas into a lower-level programming language, writing comprehensive, extensive, and robust tests (both for correctness and performance), and debugging all sorts of failures in their code. 

### Translating ideas

Students should learn how to translate higher level ideas into code. This includes learning how to think in different paradigms, such as functional/imperative, object-oriented programming, event-driven programming, and procedural programming. Students should also be prepared to implement software systems in different languages, depending on the purpose of the system. 

### Writing tests

Students will need to be capable of testing both the correctness and performance of their code. They should be capable of writing fully comprehensive and robust tests, which include attacking edge cases and stress testing. Students should also be capable of evaluating the performance (both time and resource performance) of systems software, and fixing bugs as necessary to improve their code's performance.

### Debugging skills

Students will inevitably run into a lot of bugs when working on software systems related work. To be capable of solving these bugs, students will need to develop something I call "debugging resilience". Essentially, debugging resilience means that when a student encounters a bug, they have a plan of action until they figure out what they cannot understand. This would be opposed to a response such as immediately asking for help without attempting to gain information, or being frozen on action items. Given the current software systems ecosystem's shift toward parallel programming paradigms, students should also understand how to understand and debug concurrently executing code.

### Asking for help (the right way!)

Inevitably, in a difficult environment such as software systems development, a student will struggle. Whether it is to design, implement, or debug a feature, a student should know how to gain information about their predicament and figure out what exactly they do not know. 

### Conclusion

This naturally raises a couple questions:
- Experience is a guaranteed way to learn all of these skills. But is there a way to design curriculum such that learning these skills is necessary to completing the curriculum?
- Can a subset of these skills be self-taught (like, without the aid of classes)? Can all of them be self-taught?

And... that's all for my second blog post. I'm happy to discuss thoughts on it if you email me! (Or if you know me IRL, just reach out LOL)

\* I think it'd be fun to detail these in a few blog posts, but I'm bad at allocating free time for blogging :P