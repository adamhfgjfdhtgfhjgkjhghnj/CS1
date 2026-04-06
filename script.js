function checkQuiz() {
  let score = 0;
  let feedback = [];

  const answers = {
    q1: "b",
    q2: "b",
    q3: "a",
    q4: "c",
    q5: "a"
  };

  const explanations = {
    q1: "Primary memory is directly accessed by the CPU.",
    q2: "RAM is volatile memory, so it loses its contents when power is off.",
    q3: "When RAM is full, the computer uses virtual memory.",
    q4: "Optical storage devices use lasers to read and write data.",
    q5: "SSDs are usually faster than DVDs and magnetic tape."
  };

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected && selected.value === answers[key]) {
      score++;
      feedback.push(`<p>✅ ${key.toUpperCase()}: Correct</p>`);
    } else {
      feedback.push(`<p>❌ ${key.toUpperCase()}: ${explanations[key]}</p>`);
    }
  }

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <p>Your score is ${score} out of 5</p>
    ${feedback.join("")}
  `;
}
