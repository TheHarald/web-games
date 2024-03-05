<h2>Работа с Prisma ORM</h2>

Сгенерировать БД согласно `schema.prisma`

```bash
npx prisma generate
```

Запустить PrismaStudio

```
npx prisma studio
```

Cбросить БД

```
npx prisma migrate reset --force
```

Снихронизировать `schema.prisma` с БД

```
npx prisma db push
```
