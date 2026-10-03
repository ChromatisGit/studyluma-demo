# StudyLuma Demo

Demo and marketing app for `studyluma.org`. It owns the public pages (landing page, roadmap, impressum) and mounts the application routes of the [Website](https://github.com/ChromatisGit/studyluma) package without changing them.

## Local setup

```sh
bun install
bun run dev
```

There is no database yet: courses, worksheets and lesson frames come from the Website package's JSON fixtures, and answers stay in the browser's local storage.

## Routes

| Route                 | Owner   | Purpose                                                        |
| --------------------- | ------- | -------------------------------------------------------------- |
| `/`                   | Demo    | Landing page with a live task from a worksheet                 |
| `/roadmap`            | Demo    | Progress and outlook                                           |
| `/impressum`          | Demo    | Legal notice                                                   |
| `/demo`               | Demo    | Opens the demo course as a student, without login (stub)       |
| `/courses/...`        | Website | Course list, Lernweg, chapter page, worksheets, challenges     |
| `/courses/.../lesson` | Website | Lesson frames and projector (teacher view only)                |
| `/viewer`             | Website | Switches between student and teacher view (stored in a cookie) |

The files in `app/routes/app/` only re-export the Website route modules. `app/routes/app/course.tsx` additionally shows the welcome dialog when the demo is opened via `/demo`.

## Text

Visible text lives in `*.de.json` files next to the component that uses it.

## Checks

`bun run check` runs typegen, TypeScript and Prettier; `bun run build` builds the app.
