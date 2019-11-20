# Configuring tailwind css

#### Install the required dependencies
```shellscript
npm i -D tailwindcss gulp gulp-postcss
```

#### Generate the default tailwind configuration
```
./node_modules/.bin/tailwind init --full
```

#### Prepare the gulp build script
```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

const PATH = {
    css: './src/tailwind-custom.css',
    config: './tailwind.config.js',
    dist: './src/'
};

gulp.task('tailwind', () => {
    return gulp
        .src(PATH.css)
        .pipe(postcss([tailwindcss(PATH.config), require('autoprefixer')]))
        .pipe(gulp.dest(PATH.dist));
});

``` 

#### create `tailwind-custom.css` file with the tailwind modules required
```css
@tailwind base;
@tailwind utilities;
```


#### Run the gulp task `css` to generate the custom tailwind css file
```shellscript
./node_modules/.bin/gulp css
```
