export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 100);
  });
}
