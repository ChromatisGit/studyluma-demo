# Challenges

## Auftrag: "Die Scheitelpunktform entdecken"

Neben der allgemeinen Form gibt es eine zweite Schreibweise für quadratische Funktionen, die **Scheitelpunktform**:

$$
f(x) = a (x - d)^2 + k
$$

Die Grafik zeigt sie mit Schiebereglern für $a$, $d$ und $k$. Die Normalparabel $g(x) = x^2$ bleibt zum Vergleich im Bild.

::grafik [Scheitelpunktform mit den Parametern a, d und k](grafiken/parabel-scheitelpunktform.toml)

Untersuche im Heft:

a) Stelle $a = 1$ und $k = 0$ ein und verändere $d$. Was passiert mit der Parabel? In welche Richtung verschiebt sie sich für positives $d$?

b) Stelle $d = 0$ ein und verändere $k$. Welcher Parameter aus der allgemeinen Form verhält sich genauso?

c) Wie lauten die Koordinaten des Scheitelpunkts, ausgedrückt durch $d$ und $k$?

d) Welche Aufgabe hat $a$?

::braucht
- parabeln-eigenschaften
- quadratische-funktionen-untersuchen

::tipp
Beobachte, wo der Scheitelpunkt liegt, wenn du $d$ auf $2$ und dann auf $-2$ stellst. Achte auf das Minuszeichen in $(x - d)$.

::loesung
a) Die Parabel wird in x-Richtung verschoben, ohne ihre Form zu verändern. Für positives $d$ verschiebt sie sich nach rechts, für negatives $d$ nach links.

b) $k$ verschiebt die Parabel nach oben oder unten, genau wie $c$ bei $f(x) = a x^2 + c$.

c) Der Scheitelpunkt ist $S(d | k)$. Für $d = 2$ und $k = 1$ liegt er bei $S(2 | 1)$.

d) Der Faktor $a$ wirkt wie bisher: Er bestimmt die Öffnung und ob die Parabel enger oder weiter als die Normalparabel ist.

## Gruppe: "Scheitelpunktform anwenden"

Mit der Scheitelpunktform können wir den Scheitelpunkt direkt ablesen und Parabeln mit gegebenem Scheitelpunkt aufstellen.

::braucht
- parabeln-eigenschaften
- quadratische-funktionen-untersuchen

### Einsetzen

Lies den Scheitelpunkt von $f(x) = 2 (x - 3)^2 + 1$ ab.

Der Scheitelpunkt hat die x-Koordinate (($3$)) und die y-Koordinate (($1$)). Die Parabel ist nach ((oben | unten)) geöffnet.

::loesung
Mit $d = 3$ und $k = 1$ ist $S(3 | 1)$. Wegen $a = 2 > 0$ ist die Parabel nach oben geöffnet.

### Einsetzen

Lies den Scheitelpunkt von $g(x) = -(x + 2)^2 + 4$ ab.

Der Scheitelpunkt hat die x-Koordinate (($-2$)) und die y-Koordinate (($4$)). Der größte Funktionswert ist (($4$)).

::tipp
Schreibe $x + 2$ als $x - (-2)$.

::loesung
Es ist $x + 2 = x - (-2)$, also $d = -2$ und $k = 4$. Der Scheitelpunkt ist $S(-2 | 4)$. Wegen $a = -1 < 0$ ist er ein Hochpunkt, der größte Funktionswert ist $4$.

### Auswahl

Welcher Term gehört zu einer Parabel mit dem Tiefpunkt $S(-1 | -3)$, die enger als die Normalparabel ist?

- (x) $f(x) = 2 (x + 1)^2 - 3$
- ( ) $f(x) = 2 (x - 1)^2 - 3$
- ( ) $f(x) = 2 (x + 1)^2 + 3$
- ( ) $f(x) = -2 (x + 1)^2 - 3$

::loesung
Aus $S(-1 | -3)$ folgt $d = -1$ und $k = -3$, also steht $(x + 1)^2$ im Term und am Ende $-3$. Ein Tiefpunkt verlangt $a > 0$, und enger als die Normalparabel heißt $abs(a) > 1$. Das passt zu $a = 2$.

### Graph

Gib eine quadratische Funktion an, deren Graph den Scheitelpunkt $S$ hat und durch den Punkt $P$ geht.

::grafik [Scheitelpunkt und ein weiterer Punkt](grafiken/eingabe-scheitelpunkt.toml)

::antwort
y = 2 (x - 2)^2 + 1

::tipp
Schreibe den Term als $f(x) = a (x - 2)^2 + 1$ und setze die Koordinaten von $P$ ein, um $a$ zu bestimmen.

::loesung
Aus $S(2 | 1)$ folgt $f(x) = a (x - 2)^2 + 1$. Mit $P(3 | 3)$ gilt $a * 1^2 + 1 = 3$, also $a = 2$. Damit ist $f(x) = 2 (x - 2)^2 + 1$. Ausmultipliziert ist das $f(x) = 2x^2 - 8x + 9$.

## Gruppe: "Von der Scheitelpunktform zur allgemeinen Form"

Beide Schreibweisen beschreiben dieselbe Parabel. Mit den binomischen Formeln können wir von einer Form in die andere wechseln.

::braucht
- quadratische-funktionen-untersuchen

### Antwort

Multipliziere $f(x) = (x - 3)^2 + 2$ aus und schreibe das Ergebnis als $f(x) = x^2 + b x + c$. Wie lautet $b$?

::antwort
-6

::tipp
Wende die zweite binomische Formel auf $(x - 3)^2$ an.

[Die drei binomischen Formeln](../../rechengesetze-gleichungen/03-potenzen-binomische-formeln/inhalt.md#die-drei-binomischen-formeln)

::loesung
$(x - 3)^2 + 2 = x^2 - 6x + 9 + 2 = x^2 - 6x + 11$. Also ist $b = -6$.

### Antwort

Wie lautet $c$ für dieselbe Funktion?

::antwort
11

::loesung
Aus $x^2 - 6x + 9 + 2$ ergibt sich $c = 9 + 2 = 11$.

### Einsetzen

Wir schreiben $f(x) = x^2 + 4x + 1$ in Scheitelpunktform um: $f(x) = (x - d)^2 + k$.

Es gilt $d$ = (($-2$)) und $k$ = (($-3$)).

::tipp
Ergänze $x^2 + 4x$ zu einer binomischen Formel: $(x + 2)^2 = x^2 + 4x + 4$. Du hast dann $3$ zu viel addiert.

::loesung
$x^2 + 4x + 1 = (x^2 + 4x + 4) - 4 + 1 = (x + 2)^2 - 3$. Wegen $x + 2 = x - (-2)$ ist $d = -2$ und $k = -3$. Der Scheitelpunkt ist $S(-2 | -3)$.

### Antwort

Bestimme den kleinsten Funktionswert von $f(x) = x^2 + 6x + 5$.

::antwort
-4

::tipp
Ergänze $x^2 + 6x$ mit der ersten binomischen Formel zu einem Quadrat.

::loesung
$x^2 + 6x + 5 = (x^2 + 6x + 9) - 9 + 5 = (x + 3)^2 - 4$. Der Scheitelpunkt ist $S(-3 | -4)$, ein Tiefpunkt. Der kleinste Funktionswert ist $-4$.

### Auftrag

Vergleiche bei mehreren Funktionen der Form $f(x) = x^2 + b x + c$ den Wert $b$ mit der x-Koordinate des Scheitelpunkts. Prüfe zum Beispiel $b = 4$, $b = 6$ und $b = -2$. Welcher Zusammenhang fällt dir auf? Begründe ihn mithilfe von $(x - d)^2 = x^2 - 2 d x + d^2$.

::textfeld

::loesung
Für $b = 4$ liegt der Scheitelpunkt bei $x = -2$, für $b = 6$ bei $x = -3$ und für $b = -2$ bei $x = 1$. Die x-Koordinate ist immer $-b/2$. Begründung: Aus $(x - d)^2 + k = x^2 - 2 d x + d^2 + k$ folgt $b = -2d$, also $d = -b/2$. Die x-Koordinate des Scheitelpunkts ist $d$.
