function minutesToRead(mins) {
  const sym = mins < 30 ? "☕️" : "🍱";
  const readTIme = mins < 30 ? 5 : 10;
  let arr = [];
  for (let i = 0; i < mins; i += readTIme) {
    arr.push(sym);
  }
  return arr.join("");
}

const Article = ({ title, date, minutes, preview }) => {
  const emojis = minutesToRead(minutes);
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date || "January 1, 1970"} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
