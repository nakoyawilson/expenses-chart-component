const fetchData = async () => {
  try {
    const res = await fetch("./js/data.json");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
