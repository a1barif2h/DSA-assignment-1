# Algorithm Complexity Analysis

## 1. Insert at the Beginning of a Dynamic Array

**Input:**

- Array: `[1, 2, 3]`
- Element to insert: `0`

**Output:**

- New array: `[0, 1, 2, 3]`

**Steps:**

1. Resize array if needed → `O(n)`
2. Shift all elements to the right → `O(n)`
3. Insert new element at index 0 → `O(1)`

**Time Complexity:** `O(n)`  
**Space Complexity:** `O(1)` or `O(n)` if resized

**Optimization:**  
We can use a **linked list** for `O(1)` insert at the beginning.

---

## 2. Insert at the End of a Linked List

**Input:**

- Linked list: `1 → 2 → 3`
- Element to insert: `4`

**Output:**

- Updated list: `1 → 2 → 3 → 4`

**Steps:**

1. Traverse to the end → `O(n)`
2. Insert new node → `O(1)`

**Time Complexity:** `O(n)`  
**Space Complexity:** `O(1)`

**Optimization:**  
We can maintain a **tail pointer** for `O(1)` insertions.

---

## 3. Search for an Element in a Hash Set

**Input:**

- Hash set: `{1, 2, 3}`
- Element: `2`

**Output:**

- Result: `True`

**Steps:**

1. Compute hash → `O(1)`
2. Lookup bucket → `O(1)` avg, `O(n)` worst

**Time Complexity:** `O(1)` avg, `O(n)` worst  
**Space Complexity:** `O(n)`

**Optimization:**  
We can use a **strong hash function** and maintain a **low load factor**.

---

## 4. Rehash a Hash Table

**Input:**

- Hash table with `n` elements exceeding load factor

**Output:**

- Rehashed table with new size (e.g., doubled)

**Steps:**

1. Allocate new array → `O(n)`
2. Reinsert each element → `O(n)`

**Time Complexity:** `O(n)`  
**Space Complexity:** `O(n)`

**Optimization:**  
No Idea

---

## 5. Delete Node from Singly Linked List by Value

**Input:**

- List: `1 → 2 → 3`
- Delete value: `2`

**Output:**

- List: `1 → 3`

**Steps:**

1. Traverse to node → `O(n)`
2. Relink next pointer → `O(1)`

**Time Complexity:** `O(n)`  
**Space Complexity:** `O(1)`

**Optimization:**  
No Idea

---

## 6. Check if Array Has All Unique Values

**Input:**

- Array: `[1, 2, 3, 2]`

**Output:**

- Result: `False`

**Steps:**

1. Iterate with hash set
2. Check for presence, insert if not seen → `O(1)` each

**Time Complexity:** `O(n)`  
**Space Complexity:** `O(n)`

**Optimization:**  
No Idea

---

## 7. Count Common Elements in Two Hash Sets

**Input:**

- Set A: `{1, 2, 3}`
- Set B: `{2, 3, 4}`

**Output:**

- Count: `2`

**Steps:**

1. Iterate smaller set
2. Check membership in other set → `O(1)` each

**Time Complexity:** `O(min(n, m))`  
**Space Complexity:** `O(1)`

**Optimization:**  
Always iterate over the **smaller** set.

---

## 8. Convert Array into Linked List

**Input:**

- Array: `[1, 2, 3]`

**Output:**

- Linked list: `1 → 2 → 3`

**Steps:**

1. For each element, create a node
2. Link nodes sequentially

**Time Complexity:** `O(n)`  
**Space Complexity:** `O(n)`

**Optimization:**  
No Idea

---

## 9. Clone a Hash Table with Chaining

**Input:**

- Hash table with linked-list chains

**Output:**

- Deep clone of the hash table

**Steps:**

1. For each bucket, clone the linked list → `O(n)`
2. Put the new list in the same index in the new table → `O(n)`

**Time Complexity:** `O(n)`  
**Space Complexity:** `O(n)`

**Optimization:**  
No Idea

---

## 10. Compare Array vs. Hash Set Lookup

**Input:**

- Array: `[1, 2, ..., n]`
- Hash Set: `{1, 2, ..., n}`
- Element to search: `x`

**Output:**

- Array: `O(n)`
- Hash Set: `O(1)` avg

**Comparison Table:**

| Data Structure | Lookup Time | Space  |
| -------------- | ----------- | ------ |
| Array          | `O(n)`      | `O(1)` |
| Hash Set       | `O(1)` avg  | `O(n)` |

**Optimization:**  
No Idea
