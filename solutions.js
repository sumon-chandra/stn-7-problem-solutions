
// ============================================================
// Problem 1: Staircase
// Approach: row i (1-based) is (n - i) spaces followed by i '#'.
//           Build every row, then join with "\n" so there is no
//           trailing newline and no trailing spaces on any row.

const staircase = function (n) {
  const rows = [];
  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
};

// ============================================================
// Problem 2: Grading Students
// Approach: grades < 38 are untouched. Otherwise find the next multiple
//           of 5 (ceil(g / 5) * 5); round up only if the gap is < 3.
//           If g is already a multiple of 5 the gap is 0, so it is unchanged.

const gradingStudents = function (grades) {
  return grades.map((g) => {
    if (g < 38) return g;
    const next = Math.ceil(g / 5) * 5;
    return next - g < 3 ? next : g;
  });
};

// ============================================================
// Problem 3: Time Conversion
// Approach: split into hh, mm, ss and the AM/PM suffix. `hh % 12` maps 12 -> 0,
//           which handles both special cases (12AM -> 00, 12PM -> 12 after +12).
//           Add 12 for PM, then re-pad the hour to two digits.

const timeConversion = function (s) {
  s = s.trim();
  const suffix = s.slice(-2).toUpperCase();
  const [hh, mm, ss] = s.slice(0, -2).trim().split(":");
  let h = parseInt(hh, 10) % 12; // 12 -> 0
  if (suffix === "PM") h += 12;
  return String(h).padStart(2, "0") + ":" + mm + ":" + ss;
};

// ============================================================
// Problem 4: String Repeat
// Approach: append s to the result n times in a loop (n = 0 gives "").

const repeatStr = function (n, s) {
  let result = "";
  for (let i = 0; i < n; i++) result += s;
  return result;
};

// ============================================================
// Problem 5: Reversed Strings
// Approach: Array.from splits by code point (so emoji / surrogate pairs are
//           not broken), reverse the array, join back. Original is untouched.

const solution = function (str) {
  return Array.from(str).reverse().join("");
};

// ============================================================
// Problem 6: Sum of Positive
// Approach: single pass, add only values strictly greater than 0.
//           Empty array or no positives naturally gives 0.

const positiveSum = function (arr) {
  let sum = 0;
  for (const x of arr) if (x > 0) sum += x;
  return sum;
};

// ============================================================
// Problem 7: Grasshopper — Summation
// Approach: closed-form Gauss formula n * (n + 1) / 2 instead of looping.

const summation = function (num) {
  return (num * (num + 1)) / 2;
};

// ============================================================
// Problem 8: Convert a Boolean to a String
// Approach: ternary returning the literal strings "true" / "false".

const booleanToString = function (b) {
  return b ? "true" : "false";
};

// ============================================================
// Problem 9: Fizz Buzz
// Approach: check divisibility by 15 (both 3 and 5) FIRST, then 3, then 5,
//           otherwise the number as a string.

const fizzBuzz = function (n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) out.push("FizzBuzz");
    else if (i % 3 === 0) out.push("Fizz");
    else if (i % 5 === 0) out.push("Buzz");
    else out.push(String(i));
  }
  return out;
};

// ============================================================
// Problem 10: Running Sum of 1D Array
// Approach: keep an accumulator; out[i] = sum of nums[0..i].

const runningSum = function (nums) {
  const out = new Array(nums.length);
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
    out[i] = acc;
  }
  return out;
};

// ============================================================
// Problem 11: Richest Customer Wealth
// Approach: sum each customer's row and track the maximum total seen.

const maximumWealth = function (accounts) {
  let max = 0;
  for (const row of accounts) {
    let total = 0;
    for (const v of row) total += v;
    if (total > max) max = total;
  }
  return max;
};

// ============================================================
// Problem 12: Remove Duplicates from Sorted Array
// Approach: two pointers. `k` is the write position for the next unique value.
//           Because the array is sorted, a value is new exactly when it differs
//           from the last unique value written (nums[k - 1]).
// Time: O(n), Space: O(1) — in-place

const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

// ============================================================
// Problem 13: Contains Duplicate
// Approach: walk the array with a Set; if a value is already in the Set,
//           a duplicate exists, so return early.

const containsDuplicate = function (nums) {
  const seen = new Set();
  for (const x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
};

// ============================================================
// Problem 14: Move Zeroes
// Approach: two pointers. `read` scans the array; `write` marks where the next
//           non-zero belongs. Swapping non-zeros forward keeps their relative
//           order and pushes zeros to the end.

const moveZeroes = function (nums) {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      if (read !== write) {
        const tmp = nums[write];
        nums[write] = nums[read];
        nums[read] = tmp;
      }
      write++;
    }
  }
};

// ============================================================
// Problem 15: Merge Sorted Array
// Approach: merge from the BACK so we never overwrite unread values of nums1.
//           Compare the last elements of both arrays and place the larger at
//           index k. Once nums2 is exhausted the rest of nums1 is already in place.

const merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

// ============================================================
// Problem 16: 3Sum
// Approach: sort a copy, fix the first value `i`, then use two pointers (l, r)
//           on the rest to find pairs that sum to -a[i].
//           Duplicates are skipped for the anchor and for both pointers after a
//           match, so each triplet appears once. If a[i] > 0 no zero sum is possible.

const threeSum = function (nums) {
  const a = [...nums].sort((x, y) => x - y);
  const res = [];
  const len = a.length;
  for (let i = 0; i < len - 2; i++) {
    if (a[i] > 0) break; // smallest is positive -> no more zero sums
    if (i > 0 && a[i] === a[i - 1]) continue; // skip duplicate anchors
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = a[i] + a[l] + a[r];
      if (sum === 0) {
        res.push([a[i], a[l], a[r]]);
        l++;
        r--;
        while (l < r && a[l] === a[l - 1]) l++;
        while (l < r && a[r] === a[r + 1]) r--;
      } else if (sum < 0) {
        l++; // need a bigger sum
      } else {
        r--; // need a smaller sum
      }
    }
  }
  return res;
};

// ============================================================
// Problem 17: Plus One
// Approach: scan from the least significant digit. A digit < 9 just increments
//           and we are done. A 9 becomes 0 and the carry moves left. If every
//           digit was 9 the loop ends, so prepend a leading 1.

const plusOne = function (digits) {
  const out = [...digits];
  for (let i = out.length - 1; i >= 0; i--) {
    if (out[i] < 9) {
      out[i]++;
      return out;
    }
    out[i] = 0;
  }
  out.unshift(1); // every digit was 9
  return out;
};

// ============================================================
// Problem 18: Reverse String
// Approach: two pointers from both ends, swapping until they meet.

const reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const tmp = s[l];
    s[l] = s[r];
    s[r] = tmp;
    l++;
    r--;
  }
};

// ============================================================
// Problem 19: Length of Last Word
// Approach: scan from the end. Skip trailing spaces first, then count
//           characters until the next space (or the start of the string).
//           No split() needed, so no extra array is created.

const lengthOfLastWord = function (s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--; // skip trailing spaces
  let len = 0;
  while (i >= 0 && s[i] !== " ") {
    len++;
    i--;
  }
  return len;
};

// ============================================================
// Problem 20: Longest Common Prefix
// Approach: vertical scan. For each index i of the first string, check that
//           every other string has the same character at i. Stop at the first
//           mismatch (or when a string is too short) and return the prefix so far.

const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== first[i]) {
        return first.slice(0, i);
      }
    }
  }
  return first;
};
