let age = prompt("Введите ваш возраст");
age = Number(age);
let message
if (age >= 21){
    message = "Разрешить вход в заведение и покупку алкоголя";
} else if (age >= 19){
    message = "Разрешить вход в заведение и запретить покупку алкоголя";
} else {
    message = "Запретить вход";
}
console.log(message);
