# quiz


Evidencia de que la segunda parte del ejercicio p2p se ha realizado en la rama creditos y luego se ha integrado a la rama master.


Windows PowerShell
Copyright (C) 2009 Microsoft Corporation. Reservados todos los derechos.

C:\Users\internet\Documents\GitHub\quiz [creditos]> git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
C:\Users\internet\Documents\GitHub\quiz [master]> git merge creditos
Updating 359c576..0ef5514
Fast-forward
 public/images/anonimo.jpg | Bin 0 -> 8333 bytes
 public/media/skyrim.mp4   | Bin 0 -> 5580079 bytes
 routes/index.js           |   5 +++++
 views/author.ejs          |  12 ++++++++++++
 views/layout.ejs          |   1 +
 5 files changed, 18 insertions(+)
 create mode 100644 public/images/anonimo.jpg
 create mode 100644 public/media/skyrim.mp4
 create mode 100644 views/author.ejs
C:\Users\internet\Documents\GitHub\quiz [master]>

