const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");

const PATH = {
  css: "./src/tailwind-custom.css",
  config: "./tailwind.config.js",
  dist: "./src/"
};

gulp.task("tailwind", () => {
  return gulp
    .src(PATH.css)
    .pipe(postcss([tailwindcss(PATH.config), require("autoprefixer")]))
    .pipe(gulp.dest(PATH.dist));
});
