### CHALLENGE BACKEND 2021/09

In this challenge, I use the clean architecture (Hexagonal) and TDD, I cut out the methods
in order to respect the principle of SOLID and facilitate the maintenance of the code,
you will notice that I have separated the express JS (Framework) so that the application is not dependent on the framework, so I can change the server to a more efficient one without having a big impact on the application and the even for the other methods ... (you can use the clean architecture book to fully understand the architecture in case you need to.

### Problem of this architecture !!!

Lots of lines ... because of the cutting of the methods

### The advantages of this architecture !!!

-Less impact on the application in case of modifications.
-Maintainable code.
-Testable

### What I didn't do

- I haven't defined the route (router.get ()) because there is only one route, so I defined it with (app.get ())
  but I created the whole structure on the presentation / repositoryRouter file if needed.

- I wanted to make the routers as a component usable through composer designer, but we only have one route.

###### PEUT ETRE J' AI MANQUÉ QUELQUE CHOSE, MAIS J'AI ESSAYÉ DE PENSER DANS TOUT LE CAS POSSIBLE...
