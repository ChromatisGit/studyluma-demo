+++
titel = "Lineare Funktionen"
+++

# "Funktionsschreibweise"

Geraden kennen wir aus früheren Jahren als Gleichung der Form $y = m x + b$. Wir schreiben sie jetzt als Funktion. Die Steigung nennen wir dabei $a$ statt $m$.

## "Von der Gleichung zur Funktion"

Eine Funktion ordnet jedem Wert $x$ genau einen Wert zu. Bei der Gleichung $y = 2x + 1$ gehört zu $x = 3$ der Wert $y = 7$.

In der Funktionsschreibweise geben wir der Funktion einen Namen, meistens $f$, und schreiben

$f(x) = 2x + 1$.

Wir lesen: "f von x gleich zwei x plus eins". Der Name $f$ ersetzt also das $y$.

## Merkkarte: "Lineare Funktion"

Eine lineare Funktion hat die Form

$f(x) = a x + b$

mit festen Zahlen $a$ und $b$. Ihr Graph ist eine Gerade.

::beispiel
$f(x) = 3x - 2$ hat $a = 3$ und $b = -2$.

$f(x) = 4 - x$ hat $a = -1$ und $b = 4$.

$f(x) = x/2$ hat $a = 1/2$ und $b = 0$.

## Merkkarte: "Funktionswert berechnen"

Mit $f(4)$ meinen wir den Funktionswert an der Stelle $x = 4$. Wir setzen $4$ für $x$ in den Term ein und rechnen aus.

Bei negativen Zahlen setzen wir Klammern.

::beispiel
Für $f(x) = 2x + 1$ gilt:

$f(4) = 2 * 4 + 1 = 9$

$f(-3) = 2 * (-3) + 1 = -5$

---

Der Funktionswert ist die y-Koordinate eines Punktes auf dem Graphen. Aus $f(4) = 9$ folgt, dass der Punkt $P(4 | 9)$ auf dem Graphen liegt.

Mit mehreren Funktionswerten legen wir eine Wertetabelle an. Für $f(x) = 2x + 1$ sieht sie so aus:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| --- | --- | --- | --- | --- | --- |
| $f(x)$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

Jede Spalte ist ein Punkt des Graphen. Wir sehen: Pro Schritt nach rechts wächst $f(x)$ um $2$. Bei $x = 0$ steht der Wert $1$.

## "Die Zahlen a und b erkunden"

Was bewirken $a$ und $b$ im Graphen? Wir verändern in der Grafik beide Regler und beobachten den Graphen.

::grafik [Graph von f(x) = a x + b](grafiken/parameter-a-b.toml)

Wir achten auf diese Fragen:

- Wann steigt der Graph, wann fällt er, wann ist er waagerecht?
- Was ändert sich, wenn wir $a$ größer machen?
- Wo schneidet der Graph die y-Achse, wenn wir nur $b$ verändern?

Das halten wir im Heft fest.

## Merkkarte: "Steigung und y-Achsenabschnitt"

Bei $f(x) = a x + b$ gilt:

- $a$ ist die **Steigung**. Gehen wir eine Einheit nach rechts, ändert sich der Funktionswert um $a$. Für $a > 0$ steigt der Graph, für $a < 0$ fällt er, für $a = 0$ ist er waagerecht. Je größer $abs(a)$, desto steiler ist der Graph.
- $b$ ist der **y-Achsenabschnitt**. Der Graph schneidet die y-Achse im Punkt $(0 | b)$, denn $f(0) = a * 0 + b = b$.

::beispiel
$f(x) = -2x + 3$ fällt und schneidet die y-Achse im Punkt $(0 | 3)$.

$f(x) = x/2 - 1$ steigt langsam und schneidet die y-Achse im Punkt $(0 | -1)$.

$f(x) = 5$ ist waagerecht, denn $a = 0$.

---

## "Punkte bestimmen"

Bei einem Punkt auf dem Graphen können wir den x-Wert oder den y-Wert kennen und den anderen suchen.

**Beispiele:**

Gegeben ist $f(x) = 2x + 1$.

Der Punkt hat den x-Wert $4$: Wir berechnen den Funktionswert und erhalten $f(4) = 9$, also $P(4 | 9)$.

Der Punkt hat den y-Wert $11$: Wir lösen die Gleichung $f(x) = 11$.

$2x + 1 = 11 | -1$

$2x = 10 | :2$

$x = 5$

Der Punkt ist $Q(5 | 11)$.

## Merkkarte: "Punktprobe"

Ein Punkt $P(u | v)$ liegt auf dem Graphen von $f$, wenn $f(u) = v$ gilt. Wir setzen also die x-Koordinate in die Funktion ein und vergleichen mit der y-Koordinate.

::beispiel
Für $f(x) = 2x - 1$ prüfen wir zwei Punkte.

$A(3 | 5)$: $f(3) = 2 * 3 - 1 = 5$. Der Punkt liegt auf dem Graphen.

$B(2 | 4)$: $f(2) = 2 * 2 - 1 = 3$. Das ist nicht $4$, der Punkt liegt nicht auf dem Graphen.

---

# "Steigungsdreieck und Darstellungsformen"

## "Steigung ablesen"

Die Steigung $a$ sagt uns, wie viel der Graph pro Einheit nach rechts steigt oder fällt. Wir können sie an jeder Stelle des Graphen ablesen, wenn wir zwei Punkte kennen.

Dafür gehen wir von einem Punkt $A$ ein Stück nach rechts bis unter oder über den zweiten Punkt $B$ und dann senkrecht bis $B$. So entsteht ein **Steigungsdreieck**.

::grafik [Steigungsdreieck an einer Geraden](grafiken/steigungsdreieck.toml)

Hier gehen wir von $A$ vier Einheiten nach rechts und zwei Einheiten nach oben. Die Steigung ist deshalb $2/4 = 1/2$.

## Merkkarte: "Steigungsdreieck"

Für zwei Punkte auf einer Geraden bezeichnen wir

- $Delta x$ als die Änderung nach rechts,
- $Delta y$ als die Änderung nach oben (nach unten ist $Delta y$ negativ).

Die Steigung ist das Verhältnis beider Änderungen:

$a = (Delta y)/(Delta x)$

::beispiel
4 nach rechts und 2 nach oben: $a = 2/4 = 1/2$

2 nach rechts und 6 nach unten: $a = (-6)/2 = -3$

## Merkkarte: "Steigung aus zwei Punkten"

Sind zwei Punkte $A(x_1 | y_1)$ und $B(x_2 | y_2)$ gegeben, rechnen wir ohne Zeichnung:

$a = (y_2 - y_1)/(x_2 - x_1)$

Wir bilden beide Differenzen in **derselben Reihenfolge**. Vertauschen wir die Punkte, bleibt die Steigung gleich.

::beispiel
$A(1 | 2)$ und $B(4 | 8)$: $a = (8 - 2)/(4 - 1) = 6/3 = 2$

$A(-1 | 3)$ und $B(3 | -1)$: $a = (-1 - 3)/(3 - (-1)) = (-4)/4 = -1$

---

## "Geradengleichung aufstellen"

Mit der Steigung kennen wir schon $a$ in $f(x) = a x + b$. Den y-Achsenabschnitt $b$ bekommen wir, indem wir einen der beiden Punkte einsetzen. Er muss die Gleichung erfüllen, denn er liegt auf dem Graphen.

## Merkkarte: "Geradengleichung aus zwei Punkten"

Gegeben sind zwei Punkte auf der Geraden.

1. Steigung $a$ mit $a = (y_2 - y_1)/(x_2 - x_1)$ berechnen
2. Einen Punkt in $f(x) = a x + b$ einsetzen und nach $b$ auflösen
3. Mit dem anderen Punkt eine Punktprobe machen
4. Die Funktion $f(x) = a x + b$ aufschreiben

::beispiel
$A(1 | 2)$ und $B(4 | 8)$

Steigung: $a = 6/3 = 2$

$A$ einsetzen: $2 = 2 * 1 + b$, also $b = 0$

Probe mit $B$: $f(4) = 2 * 4 = 8$

Ergebnis: $f(x) = 2x$

::beispiel
$A(-1 | 3)$ und $B(3 | -1)$

Steigung: $a = -1$

$A$ einsetzen: $3 = -1 * (-1) + b$, also $3 = 1 + b$ und $b = 2$

Probe mit $B$: $f(3) = -3 + 2 = -1$

Ergebnis: $f(x) = -x + 2$

---

## "Darstellungsformen"

Eine lineare Funktion können wir auf vier Arten darstellen:

- als **Term**, zum Beispiel $f(x) = 2x - 1$
- als **Tabelle** mit Wertepaaren
- als **Graph** im Koordinatensystem
- als **Beschreibung** in Worten, zum Beispiel "Der Startwert ist $-1$ und mit jedem Schritt nach rechts wächst der Wert um $2$."

Alle vier beschreiben dieselbe Funktion. Wir müssen nur $a$ und $b$ finden und können dann zwischen den Darstellungen wechseln.

## Merkkarte: "Darstellungsformen wechseln"

Wir suchen immer die Zahlen $a$ und $b$ von $f(x) = a x + b$.

- **Tabelle:** Der Wert bei $x = 0$ ist $b$. Die Steigung $a$ ist die Änderung von $f(x)$ pro Schritt von $1$ in $x$. Wächst $x$ um mehr als $1$, rechnen wir $a = (Delta y)/(Delta x)$.
- **Graph:** $b$ lesen wir an der y-Achse ab, $a$ mit einem Steigungsdreieck.
- **Beschreibung:** Der Startwert ist $b$, die Änderung pro Einheit ist $a$.
- **Term in Tabelle oder Graph:** Wir berechnen Funktionswerte und tragen die Punkte ein.

::beispiel
Eine Kerze ist $20$ cm hoch und brennt pro Stunde $2$ cm ab.

Startwert $b = 20$, Änderung pro Stunde $a = -2$.

Die Höhe nach $x$ Stunden ist $f(x) = -2x + 20$.

---

# "Lagebeziehungen und Schnittpunkte"

## "Zwei Geraden vergleichen"

Wir betrachten zwei lineare Funktionen $f(x) = a x + b$ und $g(x) = c x + d$. In der Grafik können wir alle vier Zahlen verändern.

::grafik [Zwei Geraden f und g](grafiken/zwei-geraden.toml)

Wir probieren aus:

- Wie stellen wir die Regler ein, damit sich die Geraden nicht schneiden?
- Wie stellen wir sie ein, damit beide Geraden genau aufeinander liegen?
- Was gilt für die Steigungen, wenn sich die Geraden in einem Punkt schneiden?

## Merkkarte: "Lagebeziehungen von Geraden"

Wir vergleichen die Steigungen $a$ und $c$. Sind sie gleich, vergleichen wir zusätzlich die y-Achsenabschnitte $b$ und $d$.

- $a != c$: Die Geraden **schneiden sich** in genau einem Punkt.
- $a = c$ und $b != d$: Die Geraden sind **parallel** und haben keinen gemeinsamen Punkt.
- $a = c$ und $b = d$: Die Geraden sind **identisch**. Alle Punkte sind gemeinsam.

::beispiel
$f(x) = 2x + 1$ und $g(x) = -x + 4$ schneiden sich, denn die Steigungen $2$ und $-1$ sind verschieden.

$f(x) = 2x + 1$ und $g(x) = 2x - 3$ sind parallel.

$f(x) = 2x + 2$ und $g(x) = 2(x + 1)$ sind identisch, denn $g(x) = 2x + 2$.

---

Manchmal müssen wir einen Term erst umformen, bevor wir $a$ und $b$ ablesen können.

## "Schnittpunkte berechnen"

Im Schnittpunkt haben beide Geraden denselben Funktionswert. Für die x-Koordinate des Schnittpunkts gilt also

$f(x) = g(x)$.

Diese Gleichung lösen wir wie jede lineare Gleichung. Das Verfahren heißt **Gleichsetzen**.

## Merkkarte: "Schnittpunkt durch Gleichsetzen"

1. Die Terme gleichsetzen: $f(x) = g(x)$
2. Die Gleichung nach $x$ auflösen. Das ist die x-Koordinate $x_S$ des Schnittpunkts.
3. $x_S$ in $f$ einsetzen. Das ist die y-Koordinate $y_S$.
4. Mit $g(x_S)$ eine Probe machen und den Schnittpunkt $S(x_S | y_S)$ angeben.

::beispiel
$f(x) = 2x + 1$ und $g(x) = -x + 7$

$2x + 1 = -x + 7 | +x$

$3x + 1 = 7 | -1$

$3x = 6 | :3$

$x = 2$

$f(2) = 2 * 2 + 1 = 5$

Probe: $g(2) = -2 + 7 = 5$

Schnittpunkt: $S(2 | 5)$

::beispiel
$f(x) = 3x - 2$ und $g(x) = x + 4$

$3x - 2 = x + 4 | -x$

$2x - 2 = 4 | +2$

$2x = 6 | :2$

$x = 3$

$f(3) = 3 * 3 - 2 = 7$

Probe: $g(3) = 3 + 4 = 7$

Schnittpunkt: $S(3 | 7)$

---

## "Parallele und identische Geraden"

Bei parallelen und identischen Geraden führt das Gleichsetzen nicht auf einen Wert für $x$. Daran erkennen wir die Lage auch ohne Vergleich der Steigungen.

**Beispiele:**

Parallele Geraden $f(x) = 2x + 1$ und $g(x) = 2x - 3$:

$2x + 1 = 2x - 3 | -2x$

$1 = -3$

Das ist eine falsche Aussage. Es gibt keinen Schnittpunkt.

Identische Geraden $f(x) = 2x + 2$ und $g(x) = 2(x + 1)$:

$2x + 2 = 2x + 2 | -2x$

$2 = 2$

Das ist eine wahre Aussage für jedes $x$. Es gibt unendlich viele gemeinsame Punkte.
