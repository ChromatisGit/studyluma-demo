+++
titel = "Funktionsschreibweise"
einleitung = "Rechne im Heft und trage deine Ergebnisse ein."
folgeblatt = "steigungsdreieck-darstellungsformen"
+++

# "Funktionen lesen und auswerten"

## Einsetzen

Lies bei jeder Funktion die Steigung $a$ und den y-Achsenabschnitt $b$ ab.

| Funktion | $a$ | $b$ |
| --- | --- | --- |
| $f(x) = 3x - 5$ | ((3)) | ((-5)) |
| $g(x) = -x + 2$ | ((-1)) | ((2)) |
| $h(x) = x/2$ | ((1/2)) | ((0)) |
| $k(x) = 4 - 2x$ | ((-2)) | ((4)) |

::tipp
Ordne den Term zuerst in der Form $a x + b$. Steht vor dem $x$ nur ein Minuszeichen, ist $a = -1$.

[Lineare Funktion](../inhalt.md#lineare-funktion)

::loesung
Bei $k(x) = 4 - 2x$ ordnen wir um zu $-2x + 4$. Dann ist $a = -2$ und $b = 4$. Bei $h(x) = x/2$ fehlt der Summand ohne $x$, also ist $b = 0$.

## Antwort

Gegeben ist $f(x) = 2x + 3$. Berechne $f(4)$.

::antwort
11

::tipp
Setze $4$ für $x$ ein.

[Funktionswert berechnen](../inhalt.md#funktionswert-berechnen)

::loesung
$f(4) = 2 * 4 + 3 = 8 + 3 = 11$

## Gruppe: "Funktionswerte berechnen"

Gegeben ist $f(x) = -3x + 5$.

### Antwort

Berechne $f(2)$.

::antwort
-1

::loesung
$f(2) = -3 * 2 + 5 = -6 + 5 = -1$

### Antwort

Berechne $f(-1)$.

::antwort
8

::fehler
2: Minus mal Minus ergibt Plus. Rechne $-3 * (-1)$ noch einmal nach.

::loesung
$f(-1) = -3 * (-1) + 5 = 3 + 5 = 8$

### Antwort

Berechne $f(0)$.

::antwort
5

::loesung
$f(0) = -3 * 0 + 5 = 5$. Der Funktionswert an der Stelle $0$ ist immer der y-Achsenabschnitt $b$.

### Antwort

Berechne $f(1/3)$.

::antwort
4

::tipp
Was ergibt $-3 * 1/3$?

::loesung
$f(1/3) = -3 * 1/3 + 5 = -1 + 5 = 4$

## Einsetzen

Ergänze die Wertetabelle der Funktion $f(x) = 2x - 1$.

| $x$ | $f(x)$ |
| --- | --- |
| $-2$ | ((-5)) |
| $0$ | $-1$ |
| ((1)) | $1$ |
| $3$ | ((5)) |
| ((4)) | $7$ |

::tipp
Bei den Zeilen mit fehlendem $x$ ist der Funktionswert vorgegeben. Löse die Gleichung $2x - 1 = 7$.

::loesung
Fehlendes $f(x)$ berechnen wir durch Einsetzen: $f(-2) = -4 - 1 = -5$ und $f(3) = 6 - 1 = 5$. Fehlendes $x$ finden wir durch Lösen der Gleichung: aus $2x - 1 = 1$ folgt $x = 1$ und aus $2x - 1 = 7$ folgt $x = 4$.

## Auswahl

Welche Aussage über $f(x) = -2x + 6$ stimmt?

- (x) Der Graph fällt und schneidet die y-Achse bei $6$.
- ( ) Der Graph steigt und schneidet die y-Achse bei $6$.
- ( ) Der Graph fällt und schneidet die y-Achse bei $-2$.
- ( ) Der Graph steigt und schneidet die y-Achse bei $-2$.

::loesung
Die Steigung $a = -2$ ist negativ, also fällt der Graph. Der y-Achsenabschnitt ist $b = 6$.

## Auswahl

::mehrfach

Welche Funktionen haben einen fallenden Graphen?

- (x) $f(x) = -x/2 + 4$
- ( ) $f(x) = 3x - 1$
- (x) $f(x) = 5 - 2x$
- ( ) $f(x) = x/4$

::tipp
Entscheidend ist das Vorzeichen der Steigung $a$, nicht die Reihenfolge der Summanden.

[Steigung und y-Achsenabschnitt](../inhalt.md#steigung-und-y-achsenabschnitt)

::loesung
Bei $f(x) = 5 - 2x$ ist $a = -2$, auch wenn die Zahl hinten steht. Bei $f(x) = -x/2 + 4$ ist $a = -1/2$. Die beiden anderen Funktionen haben positive Steigungen.

## Auftrag

Im Graphen kannst du $a$ und $b$ verändern.

::grafik [Graph von f(x) = a x + b](../grafiken/parameter-a-b.toml)

Stelle $a$ und $b$ so ein, dass

- der Graph steigt und durch den Punkt $(0 | 2)$ verläuft,
- der Graph waagerecht verläuft und durch den Punkt $(0 | -3)$ geht,
- der Graph fällt und die y-Achse im Punkt $(0 | 4)$ schneidet.

Notiere im Heft jeweils die Funktion, die du eingestellt hast.

::loesung
Eine mögliche Einstellung ist $f(x) = x + 2$ mit $a = 1$ und $b = 2$. Für den zweiten Fall brauchen wir $a = 0$ und $b = -3$, also $f(x) = -3$. Für den dritten Fall muss $b = 4$ sein und $a$ negativ, zum Beispiel $f(x) = -2x + 4$. Bei allen Funktionen gibt $b$ die y-Koordinate des Schnittpunkts mit der y-Achse an. Von $a$ ist nur das Vorzeichen vorgegeben, die genaue Zahl ist frei wählbar.

## Auftrag

Erkläre in einem Satz, warum $f(0) = b$ gilt.

::textfeld

::tipp
Was passiert mit dem Summanden $a x$, wenn wir $x = 0$ einsetzen?

::loesung
Setzen wir $x = 0$ in $f(x) = a x + b$ ein, wird $a * 0 = 0$ und es bleibt nur $b$ übrig. Der Punkt $(0 | b)$ ist deshalb der Schnittpunkt mit der y-Achse.

# "Punkte und Punktproben"

## Auswahl

::mehrfach

Welche Punkte liegen auf dem Graphen von $f(x) = 3x - 2$?

- (x) $A(1 | 1)$
- ( ) $B(0 | 2)$
- (x) $C(-2 | -8)$
- ( ) $D(2 | 5)$

::tipp
Setze die x-Koordinate in die Funktion ein und vergleiche mit der y-Koordinate.

[Punktprobe](../inhalt.md#punktprobe)

::loesung
$f(1) = 3 - 2 = 1$ (stimmt), $f(0) = -2$ (nicht $2$), $f(-2) = -6 - 2 = -8$ (stimmt), $f(2) = 6 - 2 = 4$ (nicht $5$).

## Gruppe: "Punkte bestimmen"

Gegeben ist $g(x) = 2x + 1$. Bestimme die fehlende Koordinate.

### Antwort

Der Punkt $P(4 | y)$ liegt auf dem Graphen. Wie lautet $y$?

::antwort
y = 9

::loesung
$g(4) = 2 * 4 + 1 = 9$

### Antwort

Der Punkt $Q(x | 11)$ liegt auf dem Graphen. Wie lautet $x$?

::antwort
x = 5

::tipp
Hier ist der Funktionswert bekannt. Löse die Gleichung $2x + 1 = 11$.

::loesung
$2x + 1 = 11 | -1$, also $2x = 10 | :2$, also $x = 5$.

### Antwort

Der Punkt $R(x | -3)$ liegt auf dem Graphen. Wie lautet $x$?

::antwort
x = -2

::loesung
$2x + 1 = -3 | -1$, also $2x = -4 | :2$, also $x = -2$.

### Antwort

Ein Punkt auf dem Graphen hat dieselbe x- und y-Koordinate. Wie lautet die x-Koordinate?

::antwort
x = -1

::tipp
Die Bedingung lautet $g(x) = x$. Stelle die Gleichung auf und löse sie.

::loesung
$2x + 1 = x | -x$, also $x + 1 = 0$ und damit $x = -1$. Probe: $g(-1) = -2 + 1 = -1$.

## Graph: "Funktion aus Steigung und Achsenabschnitt"

Eine Gerade hat die Steigung $2$ und schneidet die y-Achse im Punkt $P(0 | -1)$. Gib die zugehörige Funktion an.

::grafik [Funktion eingeben](../grafiken/eingabe-steigung-achsenabschnitt.toml)

::antwort
y = 2x - 1

::tipp
Welche Zahl ist $a$ und welche ist $b$?

[Lineare Funktion](../inhalt.md#lineare-funktion)

::loesung
Mit $a = 2$ und $b = -1$ erhalten wir $f(x) = 2x - 1$.

# Checkpoint

## Einsetzen

Lies bei $f(x) = 5x - 8$ die Werte ab.

Die Steigung ist $a$ = ((5)) und der y-Achsenabschnitt ist $b$ = ((-8)).

::loesung
In $f(x) = a x + b$ steht $a$ vor dem $x$ und $b$ als Summand ohne $x$. Hier ist $a = 5$ und $b = -8$.

## Antwort

Gegeben ist $f(x) = -4x + 7$. Berechne $f(3)$.

::antwort
-5

::fehler
19: Hast du das Vorzeichen von $-4 * 3$ beachtet?

::loesung
$f(3) = -4 * 3 + 7 = -12 + 7 = -5$

## Auswahl

Welcher Punkt liegt auf dem Graphen von $f(x) = 2x + 5$?

- (x) $A(3 | 11)$
- ( ) $B(3 | 10)$
- ( ) $C(-1 | 7)$
- ( ) $D(0 | 2)$

::loesung
$f(3) = 2 * 3 + 5 = 11$, also liegt $A$ auf dem Graphen. Für $C$ ist $f(-1) = 3$ und für $D$ ist $f(0) = 5$.

## Antwort

Für welchen Wert von $x$ gilt bei $f(x) = 2x + 5$ der Funktionswert $f(x) = 9$?

::antwort
x = 2

::fehler
7: Du musst zuerst $5$ subtrahieren, nicht addieren.

::loesung
$2x + 5 = 9 | -5$, also $2x = 4 | :2$, also $x = 2$.
