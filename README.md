## Часть I Дипломной работы по итогам прохождения курса 
## [QA.GURU | Автоматизация тестирования JS + Playwright](https://qa.guru/playwright_js)

## Репозиторий для проекта UI автотестов сервиса AcademyBugs.com
---
## Содержание
- [Описание](#Описание)
- [Стек](#Стек)
- [Тестовый набор Find bugs](#Тестовый-набор-Find-bugs)
- [Запуск тестов и генерация отчета](#Запуск-тестов-и-генерация-отчета)
- [Запуск workflow в GitHub Actions](#Запуск-workflow-в-Github-Actions)
- [Пример Allure отчета](#Пример-Allure-отчета)
- [Запуск в Jenkins](#Запуск-в-Jenkins)
- [Интеграция с AllureTestOps](#Интеграция-с-AllureTestOps)
- [Уведомление в Telegram](#Уведомление-в-Telegram)




---
## Описание
Репозиторий содержит набор UI тестов для поиска багов на сайте https://academybugs.com/find-bugs/.

Тестовый набор проверяет факт нахождения дефекта (получение сообщения о найденной ошибке).

---




## Стек
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" width="50" height="50"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" alt="PW" width="50" height="50" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GH" width="50" height="50"/><img src="https://github.com/allure-framework/allure2/blob/main/.idea/icon.png" alt="JS" width="50" height="50"/><img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" title="Git" alt="Git" width="50" height="50"/>
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVleDFxZzBoZThhd2dxZXI3MXFycm82MTBiczJnYmdqaDJ0eXRhbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ZcdZ7ldgeIhfesqA6E/giphy.gif" width="50" height="50"/>
  <img src="https://softfinder.ru/upload/styles/logo/public/logo/logo-2605.png?itok=vqVq1c7j" width="50" height="50"/><img src="https://github.com/devicons/devicon/blob/master/icons/jenkins/jenkins-original.svg" title="Jenkins" alt="Jenkins" width="50" height="50"/>
  <img src="https://fakerjs.dev/logo.svg" width="50" height="50"/>
  


Автотесты для проекта написаны с использованием JS + Playwright, для CI/CD используется Github Actions и Jenkins, генерация отчетов в Allure, реализована интеграция с тест-менеджмент системой AllureTestOps и отправка уведомлений о статусе выполнения тестов в Telegram.

---
## Тестовый набор Find bugs

- [x] Size productImage for product Dark Grey Jeans (Размер карточки товара Dark Grey Jeans не соответствует стандартному)
- [x] Manufacturer page can’t be found (Не найдена страница при переходе по ссылке Manufacturer)
- [x] Description should translate it to English language (Описание продукта должно быть на английском языке)
- [x] View quantity by 10 (Установить количество отображаемых товаров на странице: 10)
- [x] View quantity by 50 (Установить количество отображаемых товаров на странице: 50)
- [x] Select currency (Выбрать валюту для отображения цен)
- [x] Post comment (Оставить комментарий к товару)

---
## Запуск тестов и генерация отчета

Команда для локального запуска тестов

```
npm run test
```
Команда для локального запуска в режиме ui

```
npm run testui
```

Команда для локального формирования отчета

```
npm run report
npm run reportOpen
```
---
## Запуск [workflow в GitHub Actions](https://github.com/grisha-as/academybugs/actions/workflows/main.yml)

Workflow настроен на ручной запуск через Github Actions. Для этого нужно перейти в раздел Actions в репозитории, выбрать workflow <code>Playwright tests</code> и нажать <code>Run workflow</code>.

<img src="./images/git.png" alt="allure" width="1100" height="400"/>

---
## Пример [Allure отчета](https://grisha-as.github.io/academybugs/)

<img src="./images/allure.png" alt="allure" width="1100" height="400"/>

---
## Запуск в [Jenkins](https://jenkins.autotests.cloud/job/002-pw-js_Grish_academybugs/)

Для запуска выполнения тестов необходимо авторизоваться на сайте [Jenkins](https://jenkins.autotests.cloud/login?from=%2F), перейти в нужную [джобу](https://jenkins.autotests.cloud/job/002-pw-js_Grish_academybugs/) и нажать <code>Build Now</code>. 
После завершения паплайна будет сформирован Allure-отчет, результаты выполнения будут отправлены в AllureTestOps и в Telegram. 

<img src="./images/jenkins.png" alt="jenkins" width="1100" height="400"/>

---
## Интеграция с [AllureTestOps](https://allure.autotests.cloud/project/4730/dashboards)

<img src="./images/testops.png" alt="testops" width="1100" height="400"/>

---
## Уведомление в Telegram

После завершения выполнения тестов бот, созданный в Telegram, автоматически обрабатывает данные и отправляет сообщение с отчетом о результате тестирования в чат.

<img src="./images/telegram.png" alt="telegram" width="400" height="400"/>