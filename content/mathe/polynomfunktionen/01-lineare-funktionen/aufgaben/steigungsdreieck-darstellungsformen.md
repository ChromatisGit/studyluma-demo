+++
titel = "Steigungsdreieck und Darstellungsformen"
einleitung = "Rechne im Heft und trage deine Ergebnisse ein. Zeichne bei Bedarf Steigungsdreiecke in den Graphen."
folgeblatt = "lagebeziehungen-schnittpunkte"
+++

# "Steigung bestimmen"

## Einsetzen

Ergänze die fehlenden Werte der Steigungsdreiecke.

| $Delta x$ | $Delta y$ | $a$ |
| --- | --- | --- |
| $2$ | $6$ | ((3)) |
| $4$ | $2$ | ((1/2)) |
| $3$ | $-6$ | ((-2)) |
| ((5)) | $10$ | $2$ |
| $6$ | ((-3)) | $-1/2$ |

::tipp
Es gilt $a = (Delta y)/(Delta x)$. Bei den letzten beiden Zeilen ist $a$ bekannt und eine Größe fehlt.

[Steigungsdreieck](../inhalt.md#steigungsdreieck)

::loesung
$a = 6/2 = 3$, $a = 2/4 = 1/2$ und $a = (-6)/3 = -2$. In der vierten Zeile gilt $10 / Delta x = 2$, also $Delta x = 5$. In der letzten Zeile gilt $Delta y / 6 = -1/2$, also $Delta y = -3$.

## Antwort

Lies die Steigung der Geraden aus der Grafik ab. Nutze dafür die Punkte $A$ und $B$.

::grafik [Gerade mit zwei Punkten](../grafiken/steigung-ablesen.toml)

::antwort
-3/2

::tipp
Gehe von $A$ nach rechts bis zur x-Koordinate von $B$. Wie weit musst du dann nach oben oder unten gehen?

::loesung
Von $A$ nach $B$ gehen wir $2$ Einheiten nach rechts und $3$ Einheiten nach unten. Also ist $Delta x = 2$ und $Delta y = -3$ und damit $a = (-3)/2 = -3/2$.

## Gruppe: "Steigung aus zwei Punkten"

Berechne die Steigung der Geraden durch die beiden Punkte.

### Antwort

$A(1 | 3)$ und $B(4 | 9)$

::antwort
2

::loesung
$a = (9 - 3)/(4 - 1) = 6/3 = 2$

### Antwort

$A(-2 | 1)$ und $B(2 | -3)$

::antwort
-1

::tipp
Achte beim Subtrahieren auf die Vorzeichen.

[Steigung aus zwei Punkten](../inhalt.md#steigung-aus-zwei-punkten)

::loesung
$a = (-3 - 1)/(2 - (-2)) = (-4)/4 = -1$

### Antwort

$A(0 | 4)$ und $B(6 | 1)$

::antwort
-1/2

::loesung
$a = (1 - 4)/(6 - 0) = (-3)/6 = -1/2$

### Antwort

$A(-3 | -2)$ und $B(1 | 4)$

::antwort
3/2

::loesung
$a = (4 - (-2))/(1 - (-3)) = 6/4 = 3/2$

## Auswahl

Lena berechnet die Steigung der Geraden durch $A(1 | 2)$ und $B(5 | 10)$ so:

$a = (10 - 2)/(1 - 5) = -2$

Was ist falsch?

- (x) Zähler und Nenner müssen in derselben Reihenfolge gebildet werden. Richtig ist $a = 2$.
- ( ) Die Punkte dürfen nicht in dieser Reihenfolge verwendet werden.
- ( ) Die Steigung ist immer positiv.
- ( ) Es ist nichts falsch.

::loesung
Im Zähler rechnet Lena $y_2 - y_1$, im Nenner aber $x_1 - x_2$. Richtig ist $a = (10 - 2)/(5 - 1) = 8/4 = 2$.

# "Geradengleichungen aufstellen"

## Graph: "Gerade durch zwei Punkte"

Gib die Funktion der Geraden an, die durch $A(-1 | 4)$ und $B(3 | -4)$ verläuft.

::grafik [Funktion eingeben](../grafiken/eingabe-zwei-punkte.toml)

::antwort
y = -2x + 2

::tipp
Bestimme zuerst die Steigung. Setze dann einen der Punkte ein, um $b$ zu finden.

[Geradengleichung aus zwei Punkten](../inhalt.md#geradengleichung-aus-zwei-punkten)

::loesung
Steigung: $a = (-4 - 4)/(3 - (-1)) = -8/4 = -2$. Mit $A$ gilt $4 = -2 * (-1) + b$, also $b = 2$. Probe mit $B$: $-2 * 3 + 2 = -4$. Die Funktion lautet $f(x) = -2x + 2$.

## Gruppe: "Geradengleichungen bestimmen"

Bestimme die Funktion $f(x) = a x + b$, deren Graph durch die beiden Punkte verläuft.

### Antwort

$A(0 | -2)$ und $B(3 | 4)$

::antwort
f(x) = 2x - 2

::tipp
Ein Punkt liegt auf der y-Achse. Was verrät dir das über $b$?

::loesung
Der Punkt $A(0 | -2)$ zeigt $b = -2$. Die Steigung ist $a = (4 - (-2))/(3 - 0) = 6/3 = 2$.

### Antwort

$A(1 | 5)$ und $B(3 | 1)$

::antwort
f(x) = -2x + 7

::schritte 2
- Steigung berechnen: $a$ = ((-2))
- $A$ in $f(x) = a x + b$ einsetzen: $5 = -2 * 1 + b$, also $b$ = ((7))
- Mit $B$ eine Probe machen und die Funktion aufschreiben

::loesung
$a = (1 - 5)/(3 - 1) = -2$. Mit $A$ gilt $5 = -2 + b$, also $b = 7$. Probe: $f(3) = -6 + 7 = 1$.

### Antwort

$A(-2 | -1)$ und $B(4 | 2)$

::antwort
f(x) = x/2

::loesung
$a = (2 - (-1))/(4 - (-2)) = 3/6 = 1/2$. Mit $B$ gilt $2 = 1/2 * 4 + b$, also $b = 0$. Probe mit $A$: $f(-2) = -1$.

### Antwort

$A(2 | 3)$ und $B(6 | 3)$

::antwort
f(x) = 3

::tipp
Zeichne die beiden Punkte im Heft ein. Wie verläuft die Gerade?

::loesung
$a = (3 - 3)/(6 - 2) = 0$. Die Gerade ist waagerecht. Mit $b = 3$ lautet die Funktion $f(x) = 3$.

# "Darstellungsformen wechseln"

## Antwort

Die Wertetabelle gehört zu einer linearen Funktion. Gib den Funktionsterm an.

| $x$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- |
| $f(x)$ | $4$ | $7$ | $10$ | $13$ |

::antwort
f(x) = 3x + 4

::tipp
Wie groß ist die Änderung von $f(x)$ pro Schritt? Was steht bei $x = 0$?

[Darstellungsformen wechseln](../inhalt.md#darstellungsformen-wechseln)

::loesung
Bei $x = 0$ steht $f(0) = 4$, also $b = 4$. Pro Schritt wächst $f(x)$ um $3$, also $a = 3$.

## Gruppe: "Brennende Kerze"

Eine Kerze ist zu Beginn $24$ cm hoch und brennt pro Stunde $3$ cm ab. Die Funktion $h$ gibt die Höhe der Kerze in cm nach $x$ Stunden an.

### Antwort

Gib den Funktionsterm von $h$ an.

::antwort
h(x) = -3x + 24

::tipp
Was ist der Startwert, was ist die Änderung pro Stunde?

::loesung
Startwert $b = 24$, Änderung pro Stunde $a = -3$. Also gilt $h(x) = -3x + 24$.

### Antwort

Wie hoch ist die Kerze nach $5$ Stunden (in cm)?

::antwort
9

::loesung
$h(5) = -3 * 5 + 24 = -15 + 24 = 9$

### Antwort

Nach wie vielen Stunden ist die Kerze abgebrannt?

::antwort
8

::tipp
Abgebrannt bedeutet, dass die Höhe $0$ beträgt. Löse $h(x) = 0$.

::loesung
$-3x + 24 = 0 | -24$, also $-3x = -24 | :(-3)$, also $x = 8$.

## Auswahl

Welche Beschreibung passt zu $f(x) = 2x - 3$?

- (x) Der Startwert ist $-3$ und mit jedem Schritt nach rechts wächst der Wert um $2$.
- ( ) Der Startwert ist $2$ und mit jedem Schritt nach rechts wächst der Wert um $3$.
- ( ) Der Startwert ist $-3$ und mit jedem Schritt nach rechts sinkt der Wert um $2$.
- ( ) Der Startwert ist $3$ und mit jedem Schritt nach rechts wächst der Wert um $2$.

::loesung
Der Startwert ist $b = -3$, die Änderung pro Schritt ist $a = 2$. Weil $a$ positiv ist, wächst der Wert.

## Antwort

Bestimme den Funktionsterm der Geraden im Graphen.

::grafik [Gerade durch A und B](../grafiken/graph-zu-term.toml)

::antwort
f(x) = x/2 - 2

::tipp
Lies $b$ an der y-Achse ab. Die Steigung findest du mit einem Steigungsdreieck zwischen $A$ und $B$.

::loesung
Der Punkt $A(0 | -2)$ zeigt $b = -2$. Von $A$ nach $B$ gehen wir $4$ Einheiten nach rechts und $2$ nach oben, also ist $a = 2/4 = 1/2$.

## Auftrag

Eine Gerade verläuft durch die Punkte $A(0 | 1)$ und $B(4 | 3)$. Stelle sie in allen vier Darstellungsformen dar:

- als Funktionsterm,
- als Wertetabelle für $x = 0$, $2$, $4$ und $6$,
- als Graph im Heft,
- als Beschreibung in Worten.

::tipp
Beginne mit der Steigung und dem y-Achsenabschnitt. Danach folgen die anderen Darstellungen fast von selbst.

::loesung
Steigung: $a = (3 - 1)/(4 - 0) = 1/2$. Der Punkt $A$ liefert $b = 1$. Funktionsterm: $f(x) = x/2 + 1$.

Wertetabelle:

| $x$ | $0$ | $2$ | $4$ | $6$ |
| --- | --- | --- | --- | --- |
| $f(x)$ | $1$ | $2$ | $3$ | $4$ |

Beschreibung: Der Startwert ist $1$ und mit jedem Schritt von $2$ nach rechts wächst der Wert um $1$. Für den Graphen zeichnen wir die Punkte der Tabelle ein und verbinden sie zu einer Geraden.

# Checkpoint

## Antwort

Bestimme die Steigung der Geraden durch $A(-1 | 5)$ und $B(3 | -3)$.

::antwort
-2

::fehler
2: Achte auf die Reihenfolge der Differenzen. Die Steigung ist negativ.

::loesung
$a = (-3 - 5)/(3 - (-1)) = (-8)/4 = -2$

## Auswahl

Eine Gerade verläuft von einem Punkt $3$ Einheiten nach rechts und $2$ Einheiten nach unten zu einem zweiten Punkt. Welche Steigung hat sie?

- (x) $-2/3$
- ( ) $2/3$
- ( ) $-3/2$
- ( ) $3/2$

::loesung
$Delta x = 3$ und $Delta y = -2$, also $a = (-2)/3 = -2/3$.

## Antwort

Bestimme die Funktion $f(x) = a x + b$, deren Graph durch $A(1 | 1)$ und $B(3 | 7)$ verläuft.

::antwort
f(x) = 3x - 2

::loesung
$a = (7 - 1)/(3 - 1) = 3$. Mit $A$ gilt $1 = 3 * 1 + b$, also $b = -2$. Probe mit $B$: $f(3) = 9 - 2 = 7$.

## Auswahl

Eine lineare Funktion hat die Wertepaare $(0 | 5)$, $(1 | 3)$ und $(2 | 1)$. Welcher Term gehört zu ihr?

- (x) $f(x) = -2x + 5$
- ( ) $f(x) = 2x + 5$
- ( ) $f(x) = -2x + 3$
- ( ) $f(x) = 5x - 2$

::loesung
Bei $x = 0$ steht $5$, also $b = 5$. Pro Schritt sinkt der Wert um $2$, also $a = -2$.
