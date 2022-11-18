function updateHeading(newHeading) {
  let heading = document.querySelector("h1");
  heading.innerHTML = newHeading;
}

function surpriseMe() {
  let name = prompt("What is your name? ⌨️ ");
  let fiction = prompt("Do you like fiction?");

  if (
    fiction === "Yes" ||
    fiction === "yes" ||
    fiction === "YES" ||
    fiction === "YEs"
  ) {
    prompt("🎉 Yay! Enter your e-mail for a book recommendation.");
    updateHeading(
      `🎉🎉🎉🎉🎉 <br /> Thanks, ${name}! <br /><small> We will send your book recommendation soon! 📚 </small>`
    );
  } else {
    if (fiction === "No" || fiction === "no" || fiction === "NO") {
      updateHeading(
        `😨<br /><em>That's ok, ${name}! </em><br /> <small>Bookbub and Goodreads list other non-fictional options<br /> click their logos </small><br /> 👇👇👇`
      );
    } else {
      updateHeading(
        `<large>🤔<br/> Need more time, ${name}?</larger><br/><small>Check out our book-lover resources below! <br/> <em> Stay Bookish!</em></small>`
      );
    }
  }
}
let surpriseButton = document.querySelector("button");
surpriseButton.addEventListener("click", surpriseMe);
