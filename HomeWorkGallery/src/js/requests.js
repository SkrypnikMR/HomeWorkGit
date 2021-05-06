export const getRequest = async (url) => {
    const answer = await fetch(url);
    return answer.json();
  };