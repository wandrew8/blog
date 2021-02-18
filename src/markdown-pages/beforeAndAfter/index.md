---
path: "/blog/before-and-after-pseudo-elements"
date: 2021-02-17
title: "Before and After Pseudo Elements"
author: "Andrew Weiss"
authorBio: "Software engineering manager NY Times, dad, husband, former startup founder, TaeKwonDo black belt, cook, news & tech junkie. Here are some of my mind ramblings."
subtitle: "A review of useful CSS pseudo elements"
authorImage: ../../images/authors/jake.jpg
featuredImage: ../../images/featured/closure.jpg
tags: ["CSS", "Pseudo-Elements"]
---

There are many useful pseudo elements available in CSS including ::first-line, ::first-letter, ::selection, ::marker, and the two I'd like to talk about today, ::before and ::after. Notice that the pseudo elements are preceeded with two colons as opposed to the single-colons in pseudo classes e.g. :active, :hover, :last-of-type, etc. Despite the difference in the number of colons, typing a single colon to use the psuedo elements :before and :after will work as well.

The pseudo elements ::before and ::after are used to add inline span-like elements before and after an element. Notice I said span-like, the reason for this is that the content added to a ::before or ::after pseudo class cannot be

```
element::before {
    content: "";
}

element::after {
    content: "";
}
```
