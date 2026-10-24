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

const result2 = gradingStudents([73, 67, 38, 33]);
// console.log(result2);
