export default function Footer() {
  const format = (date, locale, options) =>
    new Intl.DateTimeFormat(locale, options).format(date);
  const now = new Date();

  return (
    <footer className="bg-dark  text-white  text-center text-lg-start fixed-bottom py-5 mt-5">
      <div className="text-center p-3">
        © {format(now, "es", { dateStyle: "long" })}{" "}
        <a
          className="text-decoration-none text-white"
          href="https://freeluckperson.github.io/my-web-gh-pages/"
          target="_blank"
        >
          Click here{" "}
        </a>
        to go to my portfolio
      </div>
    </footer>
  );
}
