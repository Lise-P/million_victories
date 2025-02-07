export async function getData() {
  try {
    const res = await fetch("http://localhost:5000/");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
}
