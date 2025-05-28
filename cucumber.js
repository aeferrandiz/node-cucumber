module.exports = {
    default: {
      paths: ['features/**/*.feature'],
      require: [
        'features/step_definitions/**/*.js',
        'features/support/**/*.js'
      ],
      publishQuiet: true,
      format: ['progress', 'html:cucumber-report.html']
    }
  };