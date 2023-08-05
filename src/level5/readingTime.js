const readingTime = (content) => {
    if(content===null||content===undefined) return 0;
    const averageReadingSpeed=60;
    const wordsPerMinute = content.split(" ").length / averageReadingSpeed;
    return Math.ceil(wordsPerMinute);
  };

export default readingTime;