Dans ce challenge, j'utilise the clean code architecture (Hexagonal) et TDD, j'ai decoupé les methodes
de façon à respecter le principe de SOLID et faciliter la maintenance du code,
vous aller remarquer que j'ai separé l'express JS (Framework) de façon que l'application ne soit pas dependant du framework, ainsi je pourrai changer le serveur vers un autre plus perfomant sans avoir un grand impact sur l'application et le même pour les autres methodes... ( vous pouvez se servir du livre clean architecture pour bien comprendre l'architecture au cas où necessaire.)

### Probleme de cette architeture !!!

Beaucoup de ligne... à cause du decoupage des methodes

### Les avantage de cette architeture !!!

Moins d'impact sur l'application au cas des modifications.
Code maintenable.

### Ce que j'ai pas fait

== J'ai pas defini la route ( router.get()) car il y a une seule route, donc je l'ai defini avec (app.get())
mais j'ai crée toute la structure sur le fichier presentation/repositoryRouter dans le cas de besoin.

###### PEUT ETRE J' AI MANQUÉ QUELQUE CHOSE, MAIS J'AI ESSAYÉ DE PENSER DANS TOUT LE CAS POSSIBLE..#####
