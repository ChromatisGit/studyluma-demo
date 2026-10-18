# Challenges

## Gruppe: "Auf einer Geraden?"

Gegeben sind die Punkte $A(1 | 2)$, $B(3 | 8)$ und $C(6 | 17)$.

::braucht
- steigungsdreieck-darstellungsformen

### Auftrag

Zeige rechnerisch, dass alle drei Punkte auf einer Geraden liegen. Überlege dir dafür zwei verschiedene Wege.

::tipp
Ein Weg: Vergleiche die Steigungen zwischen $A$ und $B$ sowie zwischen $B$ und $C$. Ein anderer Weg: Stelle die Gerade durch $A$ und $B$ auf und prüfe $C$.

::loesung
Erster Weg: Die Steigung zwischen $A$ und $B$ ist $(8 - 2)/(3 - 1) = 3$, die Steigung zwischen $B$ und $C$ ist $(17 - 8)/(6 - 3) = 3$. Beide Steigungen sind gleich, also liegen die Punkte auf einer Geraden.

Zweiter Weg: Die Gerade durch $A$ und $B$ hat $a = 3$ und wegen $2 = 3 * 1 + b$ den Achsenabschnitt $b = -1$, also $f(x) = 3x - 1$. Eine Punktprobe mit $C$ ergibt $f(6) = 18 - 1 = 17$.

### Antwort

Der Punkt $D(10 | t)$ liegt auf derselben Geraden. Bestimme $t$.

::antwort
t = 29

::loesung
Die Gerade ist $f(x) = 3x - 1$. Also gilt $t = f(10) = 30 - 1 = 29$.

## Antwort: "Dreieck aus drei Geraden"

Die Geraden $f(x) = x + 1$ und $g(x) = -x + 5$ begrenzen gemeinsam mit der x-Achse ein Dreieck. Die x-Achse ist die Gerade mit der Gleichung $y = 0$. Berechne den Flächeninhalt des Dreiecks in Flächeneinheiten.

::braucht
- lagebeziehungen-schnittpunkte

::antwort
9

::tipp
Skizziere die beiden Geraden im Heft. Die Grundseite liegt auf der x-Achse, die Höhe ist die y-Koordinate des Schnittpunkts von $f$ und $g$.

::loesung
Schnittpunkt von $f$ mit der x-Achse: $x + 1 = 0$, also $x = -1$ und $P(-1 | 0)$. Schnittpunkt von $g$ mit der x-Achse: $-x + 5 = 0$, also $x = 5$ und $Q(5 | 0)$. Schnittpunkt von $f$ und $g$: $x + 1 = -x + 5$, also $x = 2$ und $y = 3$, also $S(2 | 3)$.

Die Grundseite auf der x-Achse ist $5 - (-1) = 6$ lang, die Höhe ist $3$. Der Flächeninhalt beträgt $1/2 * 6 * 3 = 9$.
