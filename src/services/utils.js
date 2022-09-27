export const catcher =
  (fn) =>
  async (...args) => {
    try {
      const result = await fn(...args);
      return result.data;
    } catch (error) {
      console.info("> catcher: ", error.message);
      return false;
    }
  };
