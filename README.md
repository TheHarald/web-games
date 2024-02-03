<p align="center">
  <h3 align="center">WebGeames</h3>

  <p align="center">
    Сайт с играми для весёлой компании
    <br/>
    <br/>
    <a href="https://web-games-six.vercel.app/alias">Попробовать</a>
  </p>
</p>

<h2>О проекте</h2>
<div>
  <p>WebGames это сборник различных игр для компаний, как в онлайн формате так и в офлайн</p>
  <p>Список игр на данном этапе:</p>

- [x] Alias
- [ ] CodaNames в разработке
</div>

<div>
  <img width="200" src="https://github.com/TheHarald/web-games/blob/preview-images/images/photo_1.jpg"/>
  <img width="200" src="https://github.com/TheHarald/web-games/blob/preview-images/images/photo_2.jpg"/>
  <img width="200" src="https://github.com/TheHarald/web-games/blob/preview-images/images/photo_3.jpg"/>
  <img width="200" src="https://github.com/TheHarald/web-games/blob/preview-images/images/photo_4.jpg"/>
</div>


<h2>Технологии</h2>
<ul>
  <li>Next.js</li>
  <li>TypeScript</li>
  <li>Redux</li>
  <li>Tailwind CSS</li>
  <li>Next UI</li>
  <li>Bootstrap Icons</li>
</ul>
  
<h2>Установка и запуск</h2>
<p>Для запуска необходим node.js</p>

<p>Установка зависимотсетей</p>

```bash
npm install
```
<p>Запуск в режиме разработки</p>

```bash
npm run dev
```

<p>Сборка продакшен версии</p>

```bash
npm run build
```

<p>Запуск продакшен версии</p>

```bash
npm run start
```


<h2>Запуск в докер контейнере</h2>

```bash
docker build -t web-games .
```

```bash
docker run -d -p 3000:3000 --name web-games web-games
```
