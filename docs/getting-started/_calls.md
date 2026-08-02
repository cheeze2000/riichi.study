## Calls

Players have the option to make **calls** on top of the standard draw-and-discard flow.

There are 2 kinds of calls:
- Calls on tiles discarded by other players
- Calls on your own tiles

### Chii

You can call **chii** to complete a sequence with a discarded tile. **Chii** can only be called on tiles discarded by the player to your **left**.

```mj
6-45m _ 7-89p _ 3-24s
```

> [!WARNING]
> The tile that you discard may not be a tile that can also complete the sequence!

### Pon

You can call **pon** to complete a triplet with a discarded tile. Unlike **chii**, **pon** can be called on tiles discarded by **any** player.

```mj
555-m _ 8-88p _ 77-7z
```

> [!WARNING]
> The tile that you discard may not be a tile that can also complete the triplet!

### Kan

You can call **kan** to complete a quad. A quad generally functions as a triplet.

There are 3 types of **kan**.

##### Closed kan

You can call **kan** to declare a closed **kan** if you have all four copies of a tile.

```mj
0z22s0z
```

##### Open kan

You can call **kan** to complete a quad with a discarded tile. Like **pon**, **kan** can be called on tiles discarded by **any** player.

```mj
88-88m _ 3333-z
```

##### Added kan

You can call **kan** to upgrade a **pon**'d triplet into an added **kan** if you have the fourth tile.

```mj
555=m _ 8=88p _ 77=7z
```

### Tsumo

You can call **tsumo** to declare a win after drawing your winning tile.

```mj
1299m234p999s _ 3m _ 11-1z
```

The hand above wins after drawing `mj 3m` to complete the last sequence.

### Ron

You can call **ron** to declare a win on a player's discarded tile.

> [!WARNING]
> You may not call **ron** if you are in furiten.
