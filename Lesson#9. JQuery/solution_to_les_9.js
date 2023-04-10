// 9-1.
// Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

$(document).ready(function () {
  const $heads = $("h2.head");
  $heads.addClass("green-background");
  $heads.find(".inner").addClass("font-size-35px");
});

// 9-2.
// На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".

$(document).ready(function () {
  $('a[href^="https://"]').attr("target", "_blank");
});

// 9-3.
// Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

$(document).ready(function () {
  $("h3 + div").each(function () {
    $(this).insertBefore($(this).prev("h3"));
  });
});

// 9-4.
// На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.

$(document).ready(function () {
  const $checkboxes = $('input[type="checkbox"]');

  $checkboxes.change(function () {
    if ($checkboxes.filter(":checked").length >= 3) {
      $checkboxes.attr("disabled", true);
    }
  });
});
