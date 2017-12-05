module.exports = (grunt) ->

  grunt.initConfig

    # ::: BASE TASKS :::
    # Compiles SASS to CSS
    sass:
      compile:
        options:
          style: 'expanded'
        files:
          'pub/css/styles.css': 'src/sass/manifest.sass'

    autoprefixer:
      options:
        browsers: ['last 2 versions']
      dist:
        files:
          'pub/css/styles.css':'pub/css/styles.css'

    # Compiles Coffee to JS
    coffee:
      compile:
        expand: true,
        flatten: true,
        cwd: 'src/js',
        src: ['**/*.coffee'],
        dest: 'src/js/compiled',
        ext: '.js'

    concat:
      main:
        src: ['src/js/compiled/*.js']
        dest: 'pub/js/script.js'

      vendor_js:
        src: [
          'bower_components/jquery/dist/jquery.js'
          'bower_components/bootstrap/dist/js/bootstrap.js'
          'bower_components/tether/dist/js/tether.min.js'
          'bower_components/slick-carousel/slick/slick.min.js'
          
        ]
        dest: 'pub/js/vendor.js'

      vendor_css:
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.css'
          'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
          'bower_components/slick-carousel/slick/slick.css'
          'bower_components/slick-carousel/slick/slick-theme.css'
        ]
        dest: 'pub/css/vendor.css'


    # Clean out the pub folder
    clean:
      clean: ['pub']

    # Compiles .html files using Assemble.io
    assemble:
      options:
        assets: 'pub/img'
        partials: ['src/templates/partials/*.hbs']
        layout: ['src/templates/layouts/main.hbs']
        removeHbsWhitespace: true
      # All static pages
      static:
        expand: true
        cwd: 'src/templates/pages/'
        src: ['*.hbs']
        dest: 'pub/'

    # Prettifies html files
    prettify:
      all:
        expand: true
        cwd: 'pub'
        ext: '.html'
        src: ['**/*.html']
        dest: 'pub/'

    # Watch SASS, js, HBS, *.json, and images
    watch:
      styles:
        files: 'src/**/*.sass'
        tasks: ['sass']
      scripts:
        files: 'src/**/*.js'
        tasks: ['concat:main']
      html:
        files: ['src/**/*.hbs']
        tasks: ['assemble']
#      data:
#        files: ['src/data/*.json']
#        tasks: ['assemble']
#
#      fonts:
#        files: ['src/fonts/**/*.{ttf,eot,svg,woff,woff2}']
#        tasks: ['copy:fonts']
#      vendor_js:
#        files: ['bower_components/**/*.js']
#        tasks: ['concat:vendor_js']

    # Deploy specific tasks
    cssmin:
      options:
        shorthandCompacting: false,
        roundingPrecision: -1
      target:
        files:
          'pub/css/styles.css': ['pub/css/styles.css']
    uglify:
      public:
        files:
          'pub/js/script.js': ['pub/js/script.js']
    imagemin:
      files:
        expand: true
        cwd: 'pub/img'
        src: ['**/*.{png,jpg,gif,svg}']
        dest: 'pub/img'
  
  # Load Tasks
  grunt.loadNpmTasks 'grunt-assemble'
  grunt.loadNpmTasks 'grunt-bower-concat'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-imagemin'
  grunt.loadNpmTasks 'grunt-contrib-sass'  
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-autoprefixer'

  # Default task(s).
  grunt.registerTask 'basic',   ['sass', 'concat', 'assemble']
  grunt.registerTask 'default', ['basic', 'watch' ]

  # Delpoy task(s).
  grunt.registerTask 'deploy',  ['basic', 'autoprefixer', 'uglify']

