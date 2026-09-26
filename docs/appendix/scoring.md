# Scoring

Scoring is quite complex in riichi mahjong.

Let's break down the scoring process into three:
1. Counting **han** of a winning hand
1. Counting **fu** of a winning hand
1. Converting **han** and **fu** into **points**

## Counting han

Counting **han** requires knowing the entire catalog of **yaku**.

Check all the yaku in the winning hand and sum up their **han** values.
Don't forget to include any dora, such as **aka dora** or **ura dora**.

Make sure every **yaku** is accounted for.
Sometimes, it is easy to overlook simple **yaku** like **tanyao** if you are not thorough.
Also, remember to track all your **dora**, including **ura dora** for hands won with **riichi**.

## Counting fu

Counting **fu** is complicated, but don't worry! This section has examples to help you master it.

### Step 1a: is it a 5+ han hand?

There is no need to count the **fu** of a winning hand if it is **5 han or more**.

### Step 1b: is it a seven pairs (chiitoitsu) hand?

**Chiitoitsu** hands are **25 fu**.

### Step 1c: is it a pinfu hand?

**Pinfu** hands won by **tsumo** are **20 fu**. **Pinfu** hands won by **ron** are **30 fu**.

### Step 2: determining fu from tsumo or ron

The base **fu** of a winning hand is **20**.

Then, there is additional **fu** based on how you won:
- If you won by **tsumo**, add **2 fu**.
- If you won by **ron** and your hand is **closed**, add **10 fu**.

A **closed** hand is a hand that has not made any calls (except **closed kan**).

### Step 3: additional fu from melds

Sequences are worth **0 fu**.

The base **fu** of a triplet is **2**. The base **fu** of a quad is **8**.

Then, there are additional multipliers based on the **triplet** or **quad**:
- If the tile is a **terminal** (1 or 9) or an **honor**, **double** the fu.
- If the meld is **concealed**, **double** the fu.

A **concealed** meld is a meld formed entirely by the tiles you drew yourself.

Here is an example of a winning hand.

```mj
123p1144z _ 1z _ 2-13s _ 111-m
```

Let's look at `mj 111z`. Is this meld **open** or **concealed**?

This meld is **concealed** if the hand is won by **tsumo**.

If the hand is won by **ron**, the meld is considered **open** because the third `mj 1z` came from another player.

### Step 4: additional fu from pair

If your pair is a **yakuhai** pair (**dragon**, **seat wind** or **round wind**), it is worth **2 fu**.

> [!NOTE]
> In some online clients, if your pair is both the **seat wind** and **round wind**, it is worth **4 fu**.

### Step 5: additional fu from wait

There are **five** basic **waits**.
You may get additional **fu** depending on your **wait**.

| | Wait(s) | Fu |
| --- | --- | --- |
| Ryanmen<br>`mj 56s` | `mj 47s` | 0 |
| Shanpon<br>`mj 22p66z` | `mj 2p6z` | 0 |
| Kanchan<br>`mj 79s` | `mj 8s` | 2 |
| Penchan<br>`mj 12p` | `mj 3p` | 2 |
| Tanki<br>`mj 8m` | `mj 8m` | 2 |

### Step 6: Finalize fu

Your **fu** count is rounded **up** to the nearest ten.
- 32 -> **40**
- 30 -> **30**
- 46 -> **50**

Then, if your **fu** count is below **30**, it becomes **30** (as 30 is the lower bound).

> [!WARNING]
> Sometimes a hand can be interpreted in multiple ways.
> You must always choose the interpretation that yields the most points.

## Examples: counting fu

<details>
<summary>Example 1</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Ron |

```mj
2306799p234789s _ 1p
```

<details>
<summary>Answer</summary>

30 fu

A **pinfu** hand won by **ron** is always **30 fu**.
</details>
</details>

<details>
<summary>Example 2</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Ron |

```mj
22456p34678s _ 2s _ 6-78s
```

<details>
<summary>Answer</summary>

30 fu

Starting with **20 fu**, it earns no other **fu**.
However, the lower bound is **30 fu**.
</details>
</details>

<details>
<summary>Example 3</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Tsumo |

```mj
1134566pp234567s _ 6p
```

<details>
<summary>Answer</summary>

30 fu

Starting with **20 fu**,
- Tsumo: **+2 fu**
- Concealed `mj 666p`: **+4 fu**

Total: 26 fu, rounded up to **30 fu**
</details>
</details>

<details>
<summary>Example 4</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Ron |

```mj
11345p234567s22z _ 1p
```

<details>
<summary>Answer</summary>

40 fu

Starting with **20 fu**,
- Closed ron: **+10 fu**
- Open `mj 111p`: **+4 fu**
- Pair `mj 22z`: **+2 fu**

Total: 36 fu, rounded up to **40 fu**
</details>
</details>

<details>
<summary>Example 5</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Tsumo |

```mj
122334678p45s44z _ 6s
```

<details>
<summary>Answer</summary>

20 fu

A **pinfu** hand won by **tsumo** is always **20 fu**.
</details>
</details>

<details>
<summary>Example 6</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Tsumo |

```mj
34556p23488s333z _ 7p
```

<details>
<summary>Answer</summary>

30 fu

Starting with **20 fu**,
- Tsumo: **+2 fu**
- Concealed `mj 333z`: **+8 fu**

Total: **30 fu**
</details>
</details>

<details>
<summary>Example 7</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Tsumo |

```mj
34556p23488s333z _ 4p
```

<details>
<summary>Answer</summary>

40 fu

Starting with **20 fu**,
- Tsumo: **+2 fu**
- Concealed `mj 333z`: **+8 fu**
- Kanchan wait `mj 35p`: **+2 fu**

Total: 32 fu, rounded up to **40 fu**
</details>
</details>

<details>
<summary>Example 8</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Ron |

```mj
222m6688p678s _ 8p _ 2=22s
```

<details>
<summary>Answer</summary>

40 fu

Starting with **20 fu**,
- Concealed `mj 222m`: **+4 fu**
- Open `mj 888p`: **+2 fu**
- Open `mj 2222s`: **+8 fu**

Total: 34 fu, rounded up to **40 fu**
</details>
</details>

<details>
<summary>Example 9</summary>

| Round wind | Seat wind | Win by |
| --- | --- | --- |
| South | West | Tsumo |

```mj
1112223s _ 2s _ 6-54s _ 77-7z
```

<details>
<summary>Answer</summary>

40 fu

Starting with **20 fu**,
- Tsumo: **+2 fu**
- Concealed `mj 222s`: **+4 fu**
- Open `mj 777z`: **+4 fu**
- Kanchan wait `mj 13s`: **+2 fu**

Total: 32 fu, rounded up to **40 fu**
</details>
</details>

## Converting into points

To convert **han** and **fu** into points, the easiest way is to use a scoring table.
