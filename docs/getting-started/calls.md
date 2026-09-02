# Calls

You can make **calls** beyond the standard draw-and-discard flow.

For example, you can **call** a tile discarded by another player to complete a meld.
The meld is displayed to everyone and the discarded tile is rotated and positioned accordingly:
- Positioned on the left = called from your left
- Positioned in the center = called from across
- Positioned on the right = called from your right

## Chii

You can call **chii** to complete a sequence with a discarded tile. **Chii** can only be called on tiles discarded by the player to your **left**.

```mj
3-12m _ 8-79p _ 2-34s
```

## Pon

You can call **pon** to complete a triplet with a discarded tile. Unlike **chii**, **pon** can be called on tiles discarded by **any** player.

```mj
555-m _ 8-88p _ 77-7z
```

## Kan

You can call **kan** to complete a quad. There are 3 types of **kan**.

#### Closed kan

You can call **kan** to declare a **closed kan** if you have all four copies of a tile.

```mj
0z22s0z
```

#### Open kan

You can call **kan** to complete a quad with a discarded tile. Like **pon**, **kan** can be called on tiles discarded by **any** player.

```mj
88-88m _ 3333-z
```

#### Added kan

You can call **kan** to upgrade a **pon'd** triplet into an **added kan** if you have the fourth tile.

```mj
555=m _ 8=88p _ 77=7z
```
