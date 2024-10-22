<p align="center">
  <img src="https://github.com/user-attachments/assets/662ed318-b25c-4067-a293-8b2bee0825ab" alt="images" />
</p>
<h1 align="center">Infinite Explanations</h1>
<h2>About</h2>
<p><a href="https://zno.osvita.ua/">Zno.osvita.ua</a> is a popular platform in Ukraine for studying for graduation exams. One of its premium features is the ability to view explanations for various questions. Even though the feature is available for unregistered users
as well, it is limited to 5 explanations per test. The extension allows to view all comments not only without a premium account but without any account at all.</p>
<i><a href="https://zno.osvita.ua/">Zno.osvita.ua</a> - популярна в Україні платформа для підготовки до випускних іспитів. Однією з його преміум-функцій є можливість перегляду пояснень для різних питань. Незважаючи на те, що функція доступна для незареєстрованих користувачів
також, вона обмежена 5 поясненнями на тест. Розширення дозволяє переглядати всі коментарі не тільки без преміум-аккаунта, але і взагалі без аккаунта.</i>

<h2>How it works</h2>
<p>Even though user status is validated on the backend, all comments are sent and mounted to the DOM regardless of whether the user has a premium account. The extension simply replaces the display-toggle functionality to work around the premium validation.<br><i>Незважаючи на те, що статус користувача підтверджено на сервері, всі коментарі надсилаються та монтуються до DOM незалежно від того, чи має користувач обліковий запис преміум-класу. Розширення просто замінює функцію перемикання відображення для обходу преміум-перевірки.</i>
</p>

<p>Also, you can't just change the style attribute of the comment div since some js magic is happening under the hood that keeps track of all explanation divs. So it is simpler to delete original elements and to create some new ones.<br>
<i>Крім того, ви не можете просто змінити атрибут стилю div коментаря, так як якась JS магія відбувається під капотом, яка відстежує всі зміни дивів. Так що простіше видалити оригінальні елементи і створити нові.</i></p>

<h2>How to Install</h2>
<div>
    <ol>
        <li>Go to the Extensions page by entering <code>chrome://extensions</code> in a new tab.</li>
        <li>Enable Developer Mode by clicking the toggle switch next to Developer Mode.</li>
        <li>Click the "Load unpacked" button and select the extension directory.</li>
    </ol>
    <i>*more details can be found in the <a href="https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world">official Google guide</a>.</i>
</div>

<p>‎ </p>

<div>
    <ol>
        <li>Перейдіть на сторінку Розширення, ввівши <code>chrome://extensions</code> в новій вкладці.</li>
        <li>Увімкніть режим розробника, натиснувши перемикач поряд із режимом розробника.</li>
        <li>Натисніть кнопку "Load unpacked" і виберіть каталог розширення.</li>
    </ol>
    <i>*детальніше на <a href="https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world">офіційному сайті Google</a>.</i>
</div>

<h2>How to Use</h2>
<div>  
    <ol>
        <li>Navigate to any test from <a href="https://zno.osvita.ua/">zno.osvita.ua</a>.</li>
        <li>Click the extension icon.</li>
        <li>Use the new button to show/hide comments for the answers.</li>
    </ol>
    <i>*it is required to click the extension icon for each test you want to enable comments on.</i><br>
    <i>**some tests do not have explanations, so I cannot do anything about that.</i><br>
</div>

<p>‎ </p>

<div>  
    <ol>
        <li>Перейдіть до будь-якого тесту з <a href="https://zno.osvita.ua/">zno.osvita.ua</a>.</li>
        <li>Натисніть значок розширення.</li>
        <li>Скористайтеся новою кнопкою, щоб показати/сховати коментарі для відповідей.</li>
    </ol>
    <i>*потрібно натискати значок розширення для кожного нового тесту, на якому ви хочете включити коментарі.</i><br>
    <i>**деякі тести не мають пояснень, тому я нічого не можу з цим вдіяти.</i><br>
</div>
