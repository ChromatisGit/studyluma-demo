+++
titel = "Quadratische Funktionen"
+++

# "Parabeln und ihre Eigenschaften"

Bei einer linearen Funktion ändert sich der Funktionswert gleichmäßig: Wird $x$ um $1$ größer, ändert sich $f(x)$ immer um dieselbe Zahl. Sobald $x^2$ im Term vorkommt, ist das anders.

**Beispiele:**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $f(x) = 2x$ | $0$ | $2$ | $4$ | $6$ | $8$ |
| $g(x) = x^2$ | $0$ | $1$ | $4$ | $9$ | $16$ |

Bei $f$ kommen immer $2$ dazu. Bei $g$ kommen nacheinander $1$, $3$, $5$ und $7$ dazu: Die Funktionswerte wachsen immer schneller. Der Graph ist deshalb keine Gerade, sondern eine Kurve.

Eine Funktion, in der $x^2$ die höchste Potenz von $x$ ist, heißt **quadratische Funktion**. Ihr Graph heißt **Parabel**.

## "Die Normalparabel"

Die einfachste quadratische Funktion ist $f(x) = x^2$. Ihren Graphen nennen wir **Normalparabel**. Wir erstellen im Heft eine Wertetabelle und zeichnen den Graphen.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $f(x) = x^2$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ |

## Merkkarte: "Normalparabel"

Der Graph von $f(x) = x^2$ ist die Normalparabel. Sie hat diese Eigenschaften:

- Sie ist nach oben geöffnet. Alle Funktionswerte sind größer oder gleich $0$.
- Sie ist symmetrisch zur y-Achse, denn $(-x)^2 = x^2$.
- Ihr tiefster Punkt ist der **Scheitelpunkt** $S(0 | 0)$.

::beispiel
Es gilt $f(2) = f(-2) = 4$ und $f(3) = f(-3) = 9$.

---

## "Die Parameter a und c erkunden"

Wir verändern die Normalparabel und betrachten Funktionen der Form

$$
f(x) = a x^2 + c
$$

Mit den Schiebereglern können wir $a$ und $c$ verändern. Die Normalparabel $g(x) = x^2$ bleibt zum Vergleich im Bild.

::grafik [Einfluss von a und c auf die Parabel](grafiken/parabel-a-c.toml)

Wir verändern erst nur $a$ und dann nur $c$. Dabei achten wir darauf, in welche Richtung die Parabel geöffnet ist, wie breit sie ist und wo ihr Scheitelpunkt liegt. Unsere Beobachtungen halten wir im Heft fest und vergleichen sie danach mit den Merkkarten.

## Merkkarte: "Einfluss von a"

Der Faktor $a$ bestimmt die Öffnung und die Form der Parabel.

- Für $a > 0$ ist die Parabel nach oben geöffnet, für $a < 0$ nach unten.
- Gilt $abs(a) > 1$, ist die Parabel **enger** als die Normalparabel (gestreckt). Gilt $abs(a) < 1$, ist sie **weiter** (gestaucht).
- Für $c = 0$ sind die Parabeln zu $a$ und $-a$ Spiegelbilder an der x-Achse.
- Für $a = 0$ fällt der Teil mit $x^2$ weg. Dann ist es keine Parabel mehr.

::beispiel
$f(x) = 3x^2$ ist nach oben geöffnet und enger als die Normalparabel.

$f(x) = -1/2 x^2$ ist nach unten geöffnet und weiter als die Normalparabel.

## Merkkarte: "Einfluss von c"

Der Summand $c$ verschiebt die Parabel entlang der y-Achse: für $c > 0$ nach oben, für $c < 0$ nach unten. Form und Öffnung bleiben gleich.

Der Scheitelpunkt liegt bei $S(0 | c)$. Wegen $f(0) = c$ schneidet die Parabel die y-Achse im Punkt $(0 | c)$.

::beispiel
$f(x) = x^2 + 2$ ist die um $2$ nach oben verschobene Normalparabel mit $S(0 | 2)$.

$f(x) = -x^2 - 3$ ist nach unten geöffnet und hat den Scheitelpunkt $S(0 | -3)$.

---

## "Parabeln beschreiben"

Mit $a$ und $c$ können wir eine Parabel beschreiben, ohne sie zu zeichnen.

**Beispiel:** Der Graph von $f(x) = -2x^2 + 3$ ist nach unten geöffnet ($a = -2 < 0$), enger als die Normalparabel ($abs(a) = 2 > 1$) und um $3$ nach oben verschoben. Der Scheitelpunkt ist $S(0 | 3)$.

# "Quadratische Funktionen untersuchen"

Bisher hatten unsere Terme die Form $a x^2 + c$. Es kann noch ein Teil mit $x$ dazukommen, zum Beispiel bei $f(x) = x^2 + 4x + 1$.

## Merkkarte: "Allgemeine Form"

Jede quadratische Funktion können wir so schreiben:

$$
f(x) = a x^2 + b x + c
$$

Dabei ist $a != 0$. Die Zahlen $a$, $b$ und $c$ heißen **Koeffizienten**. Fehlt ein Teil im Term, ist sein Koeffizient $0$. Beim Ablesen achten wir auf die Vorzeichen und darauf, dass die Reihenfolge im Term anders sein kann.

::beispiel
$f(x) = 3x^2 - 5$ hat $a = 3$, $b = 0$ und $c = -5$.

$f(x) = x^2 + 4x$ hat $a = 1$, $b = 4$ und $c = 0$.

$f(x) = 5 - 2x^2 + x$ hat $a = -2$, $b = 1$ und $c = 5$.

---

## "Den Parameter b erkunden"

Wir kennen die Wirkung von $a$ und $c$. Jetzt untersuchen wir, was $b$ bewirkt. Dafür setzen wir zuerst $a = 1$ und $c = 0$ und verändern nur $b$.

::grafik [Einfluss von a, b und c auf die Parabel](grafiken/parabel-a-b-c.toml)

Wir achten darauf, wie sich der Scheitelpunkt bewegt und welcher Punkt der Parabel sich nicht verändert. Danach probieren wir andere Werte für $a$ und $c$ aus.

## Merkkarte: "Einfluss von b"

Der Koeffizient $b$ verschiebt den Scheitelpunkt schräg: nach links oder rechts und zugleich nach oben oder unten.

- Form und Öffnung der Parabel bleiben gleich, sie hängen nur von $a$ ab.
- Alle Parabeln mit demselben $a$ und $c$ gehen durch den Punkt $(0 | c)$. Der y-Achsenabschnitt bleibt also gleich.
- Für $b = 0$ liegt der Scheitelpunkt auf der y-Achse.
- Für $a > 0$ liegt der Scheitelpunkt bei $b > 0$ links der y-Achse und bei $b < 0$ rechts davon. Für $a < 0$ ist es umgekehrt.
- Bei $b != 0$ liegt der Scheitelpunkt für $a > 0$ tiefer als $(0 | c)$ und für $a < 0$ höher.

::beispiel
$f(x) = x^2 + 2x$ hat den Scheitelpunkt $S(-1 | -1)$, also links der y-Achse.

$f(x) = x^2 - 4x$ hat den Scheitelpunkt $S(2 | -4)$, also rechts der y-Achse.

$f(x) = -x^2 + 2x$ hat den Scheitelpunkt $S(1 | 1)$, also rechts der y-Achse und über dem Punkt $(0 | 0)$.

---

## "Hoch- und Tiefpunkte"

Am Scheitelpunkt wechselt die Parabel ihre Richtung: Sie fällt bis dorthin und steigt danach, oder umgekehrt. Deshalb ist der Scheitelpunkt für Aufgaben wichtig, in denen es um einen kleinsten oder größten Wert geht.

## Merkkarte: "Scheitelpunkt und Extremwert"

Der Scheitelpunkt $S$ liegt auf der **Symmetrieachse** der Parabel, einer senkrechten Geraden. Seine Koordinaten lesen wir am Graphen ab.

- Für $a > 0$ ist $S$ der tiefste Punkt (**Tiefpunkt**). Seine y-Koordinate ist der **kleinste Funktionswert**.
- Für $a < 0$ ist $S$ der höchste Punkt (**Hochpunkt**). Seine y-Koordinate ist der **größte Funktionswert**.
- Der Extremwert ist die **y-Koordinate** von $S$. Die x-Koordinate sagt uns, bei welchem $x$ er angenommen wird.

::beispiel
Hat eine nach oben geöffnete Parabel den Scheitelpunkt $S(2 | -1)$, ist der kleinste Funktionswert $-1$. Er wird bei $x = 2$ angenommen.

Hat eine nach unten geöffnete Parabel den Scheitelpunkt $S(-1 | 4)$, ist der größte Funktionswert $4$.

---

## "Term, Wertetabelle und Graph"

Eine quadratische Funktion können wir als Term, als Wertetabelle oder als Graph darstellen. Je nach Aufgabe ist eine andere Darstellung am bequemsten.

## Merkkarte: "Darstellungsformen wechseln"

- **Term zur Wertetabelle:** Wir setzen die $x$-Werte in den Term ein.
- **Wertetabelle zum Scheitelpunkt:** Gleiche Funktionswerte gehören zu $x$-Werten, die symmetrisch zum Scheitelpunkt liegen. Der Scheitelpunkt liegt in der Mitte zwischen ihnen.
- **Wertetabelle oder Graph zum Term:** Der Funktionswert bei $x = 0$ ist $c$. Die Öffnung zeigt das Vorzeichen von $a$. Mit weiteren Punkten prüfen wir, welcher Term passt.

::beispiel
| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- | --- |
| $f(x)$ | $6$ | $3$ | $2$ | $3$ | $6$ |

Aus $f(0) = 3$ folgt $c = 3$. Die gleichen Werte bei $x = 0$ und $x = 2$ zeigen, dass der Scheitelpunkt bei $x = 1$ liegt: $S(1 | 2)$. Die Werte werden nach außen größer, also ist es ein Tiefpunkt. Der Term $f(x) = x^2 - 2x + 3$ passt zu allen Werten.

---

Wie wir den Scheitelpunkt auch aus einem Term bestimmen können, untersuchen wir in den Challenges.
