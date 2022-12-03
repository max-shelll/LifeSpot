// создадим объект Map для хранения сессии
let session = new Map();

// Сохраним UserAgent
session.set("userAgent", window.navigator.userAgent)

// Запросим возраст пользователя и тоже сохраним
session.set("age", prompt("Пожалуйста, введите ваш возраст"))

// Проверка на возраст и сохранение сессии
if (session.get("age") >= 18) {
    let startDate = new Date().toLocaleString();

    alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
    session.set("startDate", startDate)
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
}

// Вывод в консоль
for (let result of session) {
    console.log(result)
}



function searchName() {
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++)
    {
        let videoText = elements[i].querySelector(".video-title").innerText;

        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            elements[i].style.display = 'none';
        }
        else
        {
            elements[i].style.display = 'inline-block';
        }
    }
}