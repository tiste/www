activate :gzip
activate :i18n, langs: [:en, :fr]
activate :livereload
activate :syntax

activate :deploy do |deploy|
  deploy.method       = :git
  deploy.branch       = 'master'
  deploy.build_before = true
end

set :css_dir, 'stylesheets'
set :images_dir, 'images'
set :js_dir, 'javascripts'
set :markdown, fenced_code_blocks: true
set :markdown_engine, :redcarpet

after_configuration do
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end
