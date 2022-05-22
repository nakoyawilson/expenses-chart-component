const expenseAmounts = document.querySelectorAll(".expense-amt");
const bars = document.querySelectorAll(".bar");
const tooltips = document.querySelectorAll(".tooltip");
const maxBarHeight = 150;

const fetchData = async () => {
  try {
    const res = await fetch("./js/data.json");
    const data = await res.json();
    const maxAmount = Math.max(...data.map((ele) => ele.amount));
    data.forEach((ele, idx) => {
      const amount = ele.amount;
      expenseAmounts[idx].textContent = amount;
      tooltips[idx].textContent = `$${amount}`;
      bars[idx].style.height = `${Math.round(
        (amount / maxAmount) * maxBarHeight
      )}px`;
    });
  } catch (err) {
    console.log(err);
  }
};

fetchData();
