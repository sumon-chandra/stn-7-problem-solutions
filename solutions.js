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

const result1 = staircase(4);
// console.log(result1);