function calculate() {
  const income = parseFloat(document.getElementById("income").value) || 0;
  const expenses = parseFloat(document.getElementById("expenses").value) || 0;
  const hours = parseFloat(document.getElementById("hours").value) || 0;
  const weeks = parseFloat(document.getElementById("weeks").value) || 0;
  const billablePercent = parseFloat(document.getElementById("billable").value) || 60;
  const experienceMultiplier = parseFloat(document.getElementById("experience").value) || 1;

  if (income <= 0 || hours <= 0 || weeks <= 0) {
    alert("Please enter valid income, hours, and weeks.");
    return;
  }

  const yearlyExpenses = expenses * 12;
  const totalNeeded = income + yearlyExpenses;

  const totalWorkingHours = hours * weeks;
  const realisticBillableHours = totalWorkingHours * (billablePercent / 100);

  const baseHourly = totalNeeded / realisticBillableHours;
  const adjustedHourly = baseHourly * experienceMultiplier;

  const minimumRate = adjustedHourly * 0.85;
  const targetRate = adjustedHourly;
  const premiumRate = adjustedHourly * 1.25;
  const dailyRate = targetRate * 8;

  document.getElementById("hourly").innerText = targetRate.toFixed(2);
  document.getElementById("daily").innerText = dailyRate.toFixed(0);

  document.getElementById("tiered").innerHTML = `
    <p class="section-title">Rate Range</p>
    <p><strong>Minimum:</strong> <strong class="rate">$${minimumRate.toFixed(2)}/hr</strong> <span class="muted">— bare minimum to stay afloat</span></p>
    <p><strong>Target:</strong> <strong class="rate">$${targetRate.toFixed(2)}/hr</strong> <span class="muted">— most realistic recommended rate</span></p>
    <p><strong>Premium:</strong> <strong class="rate">$${premiumRate.toFixed(2)}/hr</strong> <span class="muted">— stronger positioning / specialist pricing</span></p>
  `;

  let insight = "";

  if (targetRate < 30) {
    insight = "⚠️ This is quite low. You may be underestimating non-billable time, revisions, admin, client communication, and taxes.";
  } else if (targetRate >= 30 && targetRate < 80) {
    insight = "👍 This looks like a solid working rate for many freelancers. Make sure your project minimums still protect your time.";
  } else if (targetRate >= 80 && targetRate < 150) {
    insight = "🔥 This is a strong rate. Your portfolio, process, and client experience should support premium pricing.";
  } else {
    insight = "🚀 This is high-ticket pricing. That can be great, but only if your niche, positioning, and value are clearly differentiated.";
  }

  document.getElementById("insight").innerText = insight;

  const oneDay = dailyRate;
  const threeDay = dailyRate * 3;
  const oneWeek = dailyRate * 5;

  document.getElementById("projects").innerHTML = `
    <p class="section-title">Project Pricing Guide</p>
    <p>1 day project: <strong class="rate">$${oneDay.toFixed(0)}</strong></p>
    <p>3 day project: <strong class="rate">$${threeDay.toFixed(0)}</strong></p>
    <p>1 week project: <strong class="rate">$${oneWeek.toFixed(0)}</strong></p>
    <p class="muted">These are baseline estimates before rush fees, multiple revision rounds, licensing, or strategy work.</p>
  `;

  const logoProject = dailyRate * 2;
  const simpleSite = dailyRate * 5;
  const brandingPackage = dailyRate * 7;

  document.getElementById("services").innerHTML = `
    <p class="section-title">Quick Service Examples</p>
    <p>Simple logo project: <strong class="rate">$${logoProject.toFixed(0)}</strong></p>
    <p>Basic website project: <strong class="rate">$${simpleSite.toFixed(0)}</strong></p>
    <p>Brand package: <strong class="rate">$${brandingPackage.toFixed(0)}</strong></p>
    <p class="muted">These are rough examples to help translate your rate into actual client-facing pricing.</p>
  `;

  const lostHours = totalWorkingHours - realisticBillableHours;

  document.getElementById("realityCheck").innerHTML = `
    <p class="section-title">Reality Check</p>
    <p>You entered <strong>${totalWorkingHours.toFixed(0)}</strong> total working hours per year.</p>
    <p>With <strong>${billablePercent}% billable time</strong>, only <strong>${realisticBillableHours.toFixed(0)}</strong> of those hours are realistically earning money.</p>
    <p class="muted">That means about <strong>${lostHours.toFixed(0)}</strong> hours go to admin, marketing, revisions, email, calls, and unpaid work.</p>
  `;

  const resultsBox = document.getElementById("results");
  resultsBox.style.display = "block";
  resultsBox.classList.add("show");

  saveInputs();
}

function copyResults() {
  const hourly = document.getElementById("hourly").innerText;
  const daily = document.getElementById("daily").innerText;
  const insight = document.getElementById("insight").innerText;

  const text = `Freelance Rate Calculator Results

Hourly Rate: $${hourly}
Daily Rate: $${daily}

${insight}`;

  navigator.clipboard.writeText(text).then(() => {
    const copyBtn = document.getElementById("copyBtn");
    copyBtn.innerText = "Copied";
    setTimeout(() => {
      copyBtn.innerText = "Copy Results";
    }, 1500);
  });
}

function saveInputs() {
  const fields = ["income", "expenses", "hours", "weeks", "billable", "experience"];
  fields.forEach((field) => {
    localStorage.setItem(field, document.getElementById(field).value);
  });
}

function loadInputs() {
  const fields = ["income", "expenses", "hours", "weeks", "billable", "experience"];
  fields.forEach((field) => {
    const saved = localStorage.getItem(field);
    if (saved !== null) {
      document.getElementById(field).value = saved;
    }
  });
}

window.onload = loadInputs;